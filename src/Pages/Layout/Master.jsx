import React from "react";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";

export default function Master({ children }) {
  const { pathname } = useLocation();

  // context
  const { authUser, setAuthUser } = useContext(AuthContext);

  const token = localStorage.getItem("token");

  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("authUser");
    setAuthUser({});
  };
  return (
    <>
      <nav
        className="uk-navbar-container uk-text-normal"
        uk-navbar=""
        uk-sticky=""
      >
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <Link to="/">Logo</Link>
            </li>
            <li className={pathname === "/" ? "uk-active" : ""}>
              <Link className="uk-button uk-button-text" to="/">
                Home
              </Link>
            </li>
            <li className={pathname === "/watches" ? "uk-active" : ""}>
              <Link className="uk-button uk-button-text" to="/watches">
                Watches
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <a href="#">
                <span uk-icon="icon: cart"></span>
                <span className="uk-badge">100</span>
              </a>
            </li>
            {token ? (
              <li>
                <a href="#">
                  <span uk-icon="icon:user"></span>
                </a>
                <div className="uk-navbar-dropdown">
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li>
                      <a href="#">{authUser.name}</a>
                    </li>
                    <li>
                      <a onClick={() => Logout()}>
                        Logout
                        <span uk-icon="icon:sign-out"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            ) : (
              <>
                <li className={pathname === "/login" ? "uk-active" : ""}>
                  <Link to="/login" className="uk-button uk-button-text">
                    Login
                  </Link>
                </li>
                <li>
                  <a href="#" className="uk-button uk-button-text">
                    SignUp
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      <div className="">{children}</div>
    </>
  );
}
