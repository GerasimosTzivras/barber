import clsx from "clsx";

import styles from "./page.module.scss";
import PageHeaderTitle from "./PageHeaderTitle";
import PageHeaderBreadcrumb from "./PageHeaderBreadcrumb";
// import PageHeaderToolbar from './PageHeaderToolbar'

function isPageHeaderComponent(component) {
  let name = component.displayName || component.name;
  if (!name && component.type) {
    name = component.type.displayName || component.type.name;
  }
  return name && name.startsWith("PageHeader");
}

function PageHeader({ children }) {
  if (!children) return <div></div>;

  const childrenArray = Array.isArray(children) ? [...children] : [children];

  return (
    <div className={clsx("container-xl", styles["page-header-container"])}>
      <div className={clsx("p-0", styles["page-header"])}>
        {childrenArray.filter(isPageHeaderComponent)}
      </div>
      {childrenArray.filter((x) => !isPageHeaderComponent(x))}
    </div>
  );
}

PageHeader.Title = PageHeaderTitle;
PageHeader.Breadcrumb = PageHeaderBreadcrumb;
// PageHeader.Toolbar = PageHeaderToolbar

export default PageHeader;
