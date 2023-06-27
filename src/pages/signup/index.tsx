import { FormEvent, useState, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import logoSVG from "../../../public/logo.png";
import styles from "../../styles/home.module.scss";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { toast } from "react-toastify";

import { AuthContext } from "../../contexts/AuthContext";
import Link from "next/link";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { signUp } = useContext(AuthContext);

  async function handleSignUp(event: FormEvent) {
    event.preventDefault();

    if (name === "" || email === "" || password === "")
      return toast.error("Preencha todos os dados!");
    setLoading(true);
    let data = {
      name,
      email,
      password,
    };
    await signUp(data);

    setLoading(false);
  }
  return (
    <>
      <Head>
        <title>Pede Fácil - Faça seu cadastro</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <div className={styles.containerCenter}>
        <div className={styles.login}>
          <Image
            className={styles.logo}
            src={logoSVG}
            alt="Logo Pede Fácil"
            priority
          />
          <h1>Criando sua conta</h1>
          <form onSubmit={handleSignUp}>
            <Input
              placeholder="Digite seu nome"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Digite seu email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Digite sua senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" loading={loading}>
              Cadastrar
            </Button>
          </form>
          <Link className={styles.text} href={"/"}>
            Já possui uma conta? Faça login!
          </Link>
        </div>
      </div>
    </>
  );
}
