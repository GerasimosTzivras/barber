import clsx from "clsx";

import { useTheme } from "shared/hooks";
import styles from "./app-layout.module.scss";

function Main({ children, overflow = "auto" }) {
  const theme = useTheme("shared.appLayout.main");
  return (
    <main className={clsx(`overflow-${overflow}`, ...theme.classes)}>
      {children}
    </main>
  );
}

function Feature({ children }) {
  return <>{children}</>;
}

Feature.Main = Main;

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

function AppLayout({ children, tourOpen, setTourOpen }) {
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
