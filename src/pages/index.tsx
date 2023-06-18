import Head from "next/head";
import Image from "next/image";
import logoSVG from "../../public/logo.svg";
import styles from "../styles/home.module.scss";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pede Fácil - Comanda Digital</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <div className={styles.containerCenter}>
        <div className={styles.login}>
          <Image className={styles.logo} src={logoSVG} alt="Logo Pede Fácil" />
          <form>
            <Input placeholder="Digite seu email" type="text" />
            <Input placeholder="Digite sua senha" type="password" />
            <Button type="submit" loading={false}>
              Acessar
            </Button>
          </form>
          <a className={styles.text}>Registrar minha empresa</a>
        </div>
      </div>
    </>
  );
}
