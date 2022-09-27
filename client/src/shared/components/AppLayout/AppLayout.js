import clsx from "clsx";

import { useTheme } from "shared";
import styles from "./app-layout.module.scss";

function Left({ children }) {
  const theme = useTheme("shared.appLayout.left");
  return (
    <div
      data-tut="menu-left"
      className={clsx("overflow-hidden", styles.left, ...theme.classes)}
    >
      {children}
    </div>
  );
}

function Main({ children, overflow = "auto" }) {
  const theme = useTheme("shared.appLayout.main");
  return (
    <main className={clsx(`overflow-${overflow}`, ...theme.classes)}>
      {children}
    </main>
  );
}

function Right({ children }) {
  const theme = useTheme("shared.appLayout.right");
  return (
    <div className={clsx("overflow-hidden", styles.right, ...theme.classes)}>
      {children}
    </div>
  );
}

function Feature({ children }) {
  return <>{children}</>;
}

Feature.Left = Left;
Feature.Main = Main;
Feature.Right = Right;

function Header({ children }) {
  const theme = useTheme("shared.appLayout.header");
  return (
    <header className={clsx(styles.header, ...theme.classes)}>
      {children}
    </header>
  );
}

function Footer({ children }) {
  const theme = useTheme("shared.appLayout.footer");
  return (
    <footer className={clsx(styles.footer, ...theme.classes)}>
      {children}
    </footer>
  );
}

function AppLayout({ children }) {
  const theme = useTheme("shared.appLayout");
  return (
    <div className={clsx(styles.layout, ...theme.classes)}>
      <div className={styles.parent}>{children}</div>
    </div>
  );
}

AppLayout.Header = Header;
AppLayout.Feature = Feature;
AppLayout.Footer = Footer;

export default AppLayout;
