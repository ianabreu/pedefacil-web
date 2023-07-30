import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import styles from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  title: string;
}

export function SidebarButton({ active, title, ...rest }: ButtonProps) {
  return (
    <button
      className={`${styles.menuButton} ${active ? styles.active : ""}`}
      {...rest}
    >
      <span>{title}</span>
    </button>
  );
}
