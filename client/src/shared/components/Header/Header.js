import clsx from "clsx";

// import { UserAvatar } from 'modules/auth'
// import Brand from "./Brand";

function Header() {
  return (
    <div
      className={clsx(
        "navbar",
        "navbar-expand-lg",
        "navbar-dark",
        "bg-dark",
        "text-white",
        "p-0",
        "user-select-none"
      )}
    >
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Ραντεβού
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Υπηρεσίες
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Ομάδα
            </a>
          </li>
        </ul>
      </div>

      <div className="container-fluid">
        <div className="d-flex flex-row">{/* <Brand /> */}</div>
        <div className="d-flex">{/* <UserAvatar /> */}</div>
      </div>
    </div>
  );
}

export default Header;
