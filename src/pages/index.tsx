import Head from "next/head";
import Image from "next/image";
import logoSVG from "../../public/logo.svg";
import styles from "../styles/home.module.scss";
import { Input } from "../components/ui/Input";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pede Fácil - Comanda Digital</title>
      </Head>

      <div className={styles.containerCenter}>
        <Image src={logoSVG} alt="Logo Pede Fácil" />

        <div>
          <form>
            <Input />
          </form>
        </div>
      </div>
    </>
  );
}
