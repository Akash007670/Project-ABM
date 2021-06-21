import React from "react";
import Styles from "./sidebar.module.css";
import { ReactComponent as Projects } from "../../assets/icons/projects.svg";
import { ReactComponent as Organisation } from "../../assets/icons/organisation.svg";
import { ReactComponent as Access } from "../../assets/icons/access.svg";
import { NavLink, useLocation } from "react-router-dom";

const routes = [
  {
    id: 1,
    label: "Projects",
    to: "/",
    icon: <Projects />,
  },
  {
    id: 2,
    label: "Organisation Profile",
    to: "/organisation-profile",
    icon: <Organisation />,
  },
  {
    id: 3,
    label: "Access Control",
    to: "/access-control",
    icon: <Access />,
    active: true,
  },
];

const Sidebar = () => {
  const location = useLocation();

  const checkForPath = (path) => path === location.pathname;

  return (
    <div className={Styles["sidebar-wrapper"]}>
      {routes.map((route) => (
        <NavLink
          key={route.id}
          className={`${Styles["route-link"]} ${
            checkForPath(route.to) && Styles["active-link"]
          }`}
          to={route.to}
        >
          {route.icon}
          <p>{route.label}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
