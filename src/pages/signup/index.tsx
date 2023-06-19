import Head from "next/head";
import Image from "next/image";
import logoSVG from "../../../public/logo.svg";
import styles from "../../styles/home.module.scss";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

import Link from "next/link";

export default function SignUp() {
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
          <Image className={styles.logo} src={logoSVG} alt="Logo Pede Fácil" />
          <h1>Criando sua conta</h1>
          <form>
            <Input placeholder="Digite seu nome" type="text" />
            <Input placeholder="Digite seu email" type="text" />
            <Input placeholder="Digite sua senha" type="password" />
            <Button type="submit" loading={false}>
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
