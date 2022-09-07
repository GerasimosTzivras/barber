import { useState } from "react";
import clsx from "clsx";

import { Badge, useTheme } from "shared";

function Tab({ tab, isActive, hasError, onClick }) {
  return (
    <li className={clsx("nav-item")} role="presentation">
      <a
        className={clsx("nav-link", "border-0", "py-1", "position-relative", {
          "active fw-bold border rounded": isActive,
          "text-danger": hasError,
        })}
        id={`${tab.name}-tab`}
        href="# "
        data-toggle="tab"
        role="tab"
        aria-controls={tab.name}
        aria-selected={isActive ? "true" : "false"}
        onClick={onClick}
      >
        {/* {tab.icon ? <Icon className="me-2" icon={tab.icon} /> : null} */}
        {tab.caption}
        <Badge color="dark" pill={true} topRight={true}>
          {tab.count}
        </Badge>
      </a>
    </li>
  );
}

function Tabs({ tabs = [], centered = true, formKey }) {
  const theme = useTheme("shared.tabs");
  const [active, setActive] = useState(tabs[0] ? tabs[0].name : null);
  // const invalidFields = useFormInvalidFields(formKey)
  // const invalidTabs = formKey
  //   ? tabs
  //       .filter((t) => t.fields.some((f) => invalidFields.includes(f)))
  //       .map((t) => t.name)
  //   : []
  const invalidTabs = [];
  function handleClick(evt, tab) {
    evt.preventDefault();
    setActive(tab.name);
  }

  return (
    <div className={clsx("pt-3", ...theme.classes)}>
      <ul
        className={clsx("nav", "nav-tabs", "border-0", {
          "justify-content-center": centered,
        })}
        role="tablist"
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.name}
            tab={tab}
            isActive={tab.name === active}
            hasError={invalidTabs.includes(tab.name)}
            onClick={(evt) => handleClick(evt, tab)}
          />
        ))}
      </ul>
      <div className={clsx("tab-content", "bg-white", "mt-4")}>
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={clsx("tab-pane", { active: tab.name === active })}
            id={tab.name}
            role="tabpanel"
            aria-labelledby={`${tab.name}-tab`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
