import styles from "./styles.module.scss";

import { SidebarButton } from "../ui/SidebarButton";

export function Sidebar() {
  return (
    <>
      <aside className={styles.sidebarContainer}>
        <nav className={styles.sidebarContent}>
          <h3>PDV</h3>
          <SidebarButton title="Pedidos" active />
          <h3>Meu Menu</h3>
          <SidebarButton title="Produtos" />
          <SidebarButton title="Categorias" />
          <h3>Configurações</h3>
          <SidebarButton title="Mesas" />
          <SidebarButton title="Perfil" />
        </nav>
      </aside>
    </>
  );
}
