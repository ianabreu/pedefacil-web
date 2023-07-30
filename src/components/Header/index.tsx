import styles from "./styles.module.scss";
import Link from "next/link";
import logoSVG from "../../../public/logo.png";
import Image from "next/image";

import { FiMenu } from "react-icons/fi";
import { User } from "../User";
const user = {
  name: "Ian Abreu",
  avatar: "https://i.pravatar.cc/150?img=18",
};

export function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div>
            <button className={styles.menuButton}>
              <FiMenu size={30} />
            </button>
            <Link href="/dashboard">
              <Image
                src={logoSVG}
                alt={"Pede Fácil - logo"}
                className={styles.logo}
              />
            </Link>
          </div>
          <User user={user} />
        </div>
      </header>
    </>
  );
}
