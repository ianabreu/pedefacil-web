import Head from "next/head";
import { canSSRAuth } from "../../utils/canSSRAuth";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import styles from "./styles.module.scss";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Painel - Pede Fácil</title>
      </Head>
      <div className={styles.container}>
        <Header />
        <Sidebar />
        <div className={styles.main}>
          <h1>Painel</h1>
        </div>
        <div className={styles.footer}>
          <h1>footer</h1>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (context) => {
  return {
    props: {},
  };
});
