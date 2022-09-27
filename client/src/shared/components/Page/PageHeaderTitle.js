import { NavLink } from "react-router-dom";
import clsx from "clsx";

function PageHeaderFolder({ path, caption }) {
  return (
    <>
      <NavLink className="text-decoration-none" to={path}>
        {caption}
      </NavLink>
      <span className="mx-2">/</span>
    </>
  );
}

function PageHeaderTitle({ folder, path, title }) {
  const truncated = title.length > 50 ? `${title.substr(0, 49)}...` : title;
  const tooltip = title.length > 50 ? title : null;
  return (
    <div className={clsx("d-flex", "align-items-center", "fs-3", "text-white")}>
      {path ? <PageHeaderFolder caption={folder} path={path} /> : null}
      <div title={tooltip}>{truncated}</div>
    </div>
  );
}

PageHeaderTitle.displayName = "PageHeaderTitle";

export default PageHeaderTitle;
