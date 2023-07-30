import { createContext, ReactNode, useState, useEffect } from "react";
import { destroyCookie, setCookie, parseCookies } from "nookies";
import Router from "next/router";
import { api } from "../services/apiClient";
import { toast } from "react-toastify";

type AuthContextData = {
  user: UserProps;
  isAutenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => void;
  signUp: (credentials: SignUpProps) => Promise<void>;
};
type UserProps = {
  id: string;
  name: string;
  email: string;
};
type SignInProps = {
  email: string;
  password: string;
};
type SignUpProps = {
  name: string;
  email: string;
  password: string;
};
type AuthProviderProps = {
  children: ReactNode;
};
export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  try {
    destroyCookie(undefined, "@pedefacil.token");
    Router.push("/");
  } catch {
    console.log("erro ao deslogar");
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>();
  const isAutenticated = !!user;
  useEffect(() => {
    const { "@pedefacil.token": token } = parseCookies();
    if (token) {
      api
        .get("/me")
        .then((response) => {
          const { id, name, email } = response.data;
          setUser({
            id,
            name,
            email,
          });
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api.post("/session", { email, password });
      // console.log(response.data);
      const { id, name, token } = response.data;
      setCookie(undefined, "@pedefacil.token", token, {
        maxAge: 60 * 60 * 24 * 30, //expirar em um mes
        path: "/", // quais caminhos tem acesso ao cookie
      });

      setUser({
        id,
        name,
        email,
      });
      // passar para proximas requisicões o nosso token
      api.defaults.headers["Authorization"] = `Bearer ${token}`;
      toast.success("Logado com sucesso!");
      //redirecionar use para dashboard
      Router.push("/dashboard");
    } catch (error) {
      toast.error("Erro ao acessar!");
      console.log("Erro ao acessar", error);
    }
  }

  async function signUp({ name, email, password }: SignUpProps) {
    try {
      const resposne = api.post("/users", { name, email, password });
      toast.success("Conta criada com sucesso!");
      Router.push("/");
    } catch (error) {
      toast.error("Erro ao cadastrar!");
      console.log("erro ao cadastrar" + error);
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, isAutenticated, signIn, signOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
}
