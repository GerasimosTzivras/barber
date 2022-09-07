import clsx from "clsx";

// import { useWindowSize } from "shared";

const VERSION = process.env.REACT_APP_VERSION;

function Footer() {
  // const { width } = useWindowSize();
  const thisYear = new Date().getFullYear();
  // const text =
  //   width > 699 ? `Barber-ικο © 2022-${thisYear}` : `Barber © 2022-${thisYear}`;
  const text = `Barber © 2022-${thisYear}`;

  return (
    <nav
      className={clsx(
        "navbar",
        "navbar-expand",
        "navbar-dark",
        "bg-primary",
        "py-1",
        "user-select-none"
      )}
    >
      <div className="container-fluid">
        <div className="navbar-text p-0">{VERSION}</div>
        <div className="navbar-text text-black p-0">{text}</div>
      </div>
    </nav>
  );
}

export default Footer;
