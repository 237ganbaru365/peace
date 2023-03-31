import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./NavList.module.scss";

type NavListProps = {
  title: string;
  data: {
    icon?: any;
    color?: string;
    name?: string;
    id?: number;
  }[];
};

export const NavList = ({ title, data }: NavListProps) => {
  return (
    <nav className={classes.nav}>
      <h2 className={classes["nav-title"]}>{title}</h2>
      <ul className={classes["nav-list"]}>
        {data.map(({ name, icon, id }) => (
          <li key={name} className={classes["nav-item"]}>
            {title.toLowerCase() === "category" ? (
              <NavLink to={`/category/${id}`}>{name}</NavLink>
            ) : (
              <NavLink to={`/${name?.toLowerCase()}`}>
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
