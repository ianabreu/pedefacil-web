import { useState, useContext, FormEvent } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import logoSVG from "../../public/logo.png";

import styles from "../styles/home.module.scss";

import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

import { AuthContext } from "../contexts/AuthContext";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { user, signIn } = useContext(AuthContext);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    let data = {
      email,
      password,
    };
    await signIn(data);
  }

  return (
    <>
      <Head>
        <title>Pede Fácil - Faça seu Login</title>
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

          <form onSubmit={handleLogin}>
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
              Acessar
            </Button>
          </form>

          <Link className={styles.text} href={"/signup"}>
            Registrar minha empresa
          </Link>
        </div>
      </div>
    </>
  );
}
