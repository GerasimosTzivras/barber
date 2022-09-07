import clsx from "clsx";

import { useTheme } from "shared";
import styles from "./page.module.scss";

function PageHeaderToolbarButton({
  icon,
  iconColor = "light",
  color = "primary",
  title,
  text,
  disabled,
  onClick,
  loading = false,
}) {
  return (
    <button
      type="button"
      className={clsx("btn", "btn-link", "text-decoration-none", [
        styles[`hover-${color}`],
      ])}
      title={title}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {/* {icon && !loading ? (
        <Icon icon={icon} className={clsx(`text-${iconColor}`)} />
      ) : null} */}
      {/* {loading && <Spinner className="spinner-grow-sm" />} */}
      {text ? (
        <span
          className={clsx(`text-${iconColor}`, {
            "ms-1": icon || loading,
          })}
        >
          {text}
        </span>
      ) : null}
    </button>
  );
}

function PageHeaderToolbarGroup({ bgColor = "primary", children }) {
  const theme = useTheme("shared.page.toolbar");
  return (
    <div
      data-tut="breadcrumb-buttons"
      className={clsx(
        "btn-group",
        "btn-group-sm",
        "ml-2",
        "border-0",
        "rounded",
        `bg-${bgColor}`,
        ...theme.classes
      )}
    >
      {children}
    </div>
  );
}

function PageHeaderToolbar({ children }) {
  return (
    <div className={clsx("btn-toolbar", "align-items-start")}>{children}</div>
  );
}

PageHeaderToolbar.displayName = "PageHeaderToolbar";

PageHeaderToolbar.Group = PageHeaderToolbarGroup;
PageHeaderToolbar.Button = PageHeaderToolbarButton;

export default PageHeaderToolbar;
