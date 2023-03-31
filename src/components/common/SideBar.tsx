import { NavLink } from "react-router-dom";
import {
  faHouse,
  faComment,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./SideBar.module.scss";
import { useEffect, useState } from "react";
import { getGenreList } from "../../api/movies";
import { NavList } from "./NavList";

interface StyledProps {
  bgColor: string;
}

const menuData = [
  { name: "Discover", icon: faHouse, color: "#ff7551" },
  { name: "Feed", icon: faComment, color: "#32a7e2" },
  { name: "Bookmark", icon: faBookmark, color: "#6c5ecf" },
];

const SideBar = () => {
  const [genre, setGenre] = useState([]);

  const fetchGenreList = async () => {
    const response = await getGenreList();
    setGenre(response.genres);
  };

  useEffect(() => {
    fetchGenreList();
  }, []);

  console.log(genre);
  return (
    <aside className={classes.sidebar}>
      <h1 className={classes.logo}>Peace</h1>
      <NavList title="Menu" data={menuData} />
      <NavList title="Category" data={genre} />
    </aside>
  );
};

export default SideBar;
