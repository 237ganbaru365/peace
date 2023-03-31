import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./Header.module.scss";

export default function Header() {
  return (
    <header className={classes.header}>
      <form className={classes.searchbar}>
        <input type="text" placeholder="Search" />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </form>
      {/*TODO: check if user login or not */}
      <div className={classes.userbar}>
        <img className={classes["userbar-icon"]} />
        <p className={classes["userbar-name"]}>Fumina</p>
      </div>
    </header>
  );
}
