import styles from "./styles.module.scss";
export const User = ({ user }) => {
  return (
    <div className={styles.userMenu}>
      <img src={user.avatar} alt="" />
      <div>
        <span>{user.name}</span>
        <a>Sair</a>
      </div>
    </div>
  );
};
