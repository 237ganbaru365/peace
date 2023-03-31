import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./NavList.module.scss";

type NavListProps = {
  title: string;
  data: {
    id?: number;
    name?: string;
    icon?: any;
    color?: string;
    link?: string;
  }[];
};

export const NavList = ({ title, data }: NavListProps) => {
  return (
    <nav className={classes.nav}>
      <h2 className={classes["nav-title"]}>{title}</h2>
      <ul className={classes["nav-list"]}>
        {data.map(({ name, icon, id, link }) => (
          <li key={name} className={classes["nav-item"]}>
            {title.toLowerCase() === "category" ? (
              <NavLink to={`/category/${id}`}>{name}</NavLink>
            ) : (
              <NavLink to={`/${link}`}>
                <FontAwesomeIcon
                  icon={icon}
                  className={classes["nav-item_icon"]}
                />
                {name}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
