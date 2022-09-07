import styles from "./page.module.scss";
import PageHeader from "./PageHeader";
import PageContent from "./PageContent";
import PageFooter from "./PageFooter";

function Page({ children }) {
  return <div className={styles.page}>{children}</div>;
}

Page.Header = PageHeader;
Page.Content = PageContent;
Page.Footer = PageFooter;

export default Page;
