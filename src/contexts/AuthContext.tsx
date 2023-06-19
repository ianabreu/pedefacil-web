import { createContext, ReactNode, useState } from "react";

type AuthContextData = {
  user: UserProps;
  isAutenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
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
type AuthProviderProps = {
  children: ReactNode;
};
export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>();
  const isAutenticated = !!user;
  async function signIn({ email, password }: SignInProps) {
    console.log("Email", email);
    console.log("password", password);
  }

  return (
    <AuthContext.Provider value={{ user, isAutenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
