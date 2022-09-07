import { useCallback, useMemo, useState } from "react";

const defaultTheme = {
  base: {
    classes: [],
    dark: false,
  },
  shared: {
    appLayout: {
      header: { classes: ["shadow"] },
      left: { classes: ["shadow"] },
    },
    callout: { classes: ["shadow"] },
    filter: { classes: ["shadow-sm"] },
    page: {
      toolbar: { classes: ["shadow"] },
    },
    pagination: {
      sizesSelect: { classes: ["shadow"] },
      links: { classes: ["shadow"] },
    },
    table: { classes: ["shadow"] },
    tabs: { classes: ["border", "shadow", "p-3"] },
  },
};

export function useTheme(component = "base") {
  const [theme] = useState(defaultTheme);

  const getComponent = useCallback(() => {
    if (component === "base") return theme.base;
    const nested = component
      .split(".")
      .reduce((acc, path) => (acc[path] ? acc[path] : {}), theme);
    return nested || theme.base;
  }, [theme, component]);

  const classes = useMemo(
    () => getComponent().classes || theme.base.classes,
    [theme, getComponent]
  );

  return {
    classes,
  };
}
