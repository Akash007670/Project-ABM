import React from "react";
import Styles from "./navbar.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Logo2 } from "../../assets/logo2.svg";
import { ReactComponent as Bell } from "../../assets/icons/bell.svg";
import { ReactComponent as Help } from "../../assets/icons/help.svg";

const Navbar = () => {
  return (
    <nav className={Styles["navbar-wrapper"]}>
      <div className={Styles["nav-logo"]}>
        <Logo className={Styles["logo"]} />
        <Logo2 className={Styles["logo-text"]} />
      </div>
      <div className={Styles["nav-items"]}>
        <div className={Styles["current-user"]}>
          <div className={Styles["profile"]}></div>
          <p>Akash</p>
        </div>
        <div className={Styles["nav-icons"]}>
          <span className={Styles["nav-item-icon"]}>
            <Bell className={Styles["bell"]} />
          </span>
          <span className={Styles["nav-item-icon"]}>
            <Help className={Styles["help"]} />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
