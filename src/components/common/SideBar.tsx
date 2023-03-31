import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getGenreList } from "../../api/movies";
import {
  faHouse,
  faComment,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavList } from "./NavList";
import classes from "./SideBar.module.scss";

const menu = [
  { name: "Discover", icon: faHouse, color: "#ff7551", link: "movie" },
  { name: "Timeline", icon: faComment, color: "#32a7e2", link: "timeline" },
  { name: "Bookmark", icon: faBookmark, color: "#6c5ecf", link: "bookmark" },
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

  return (
    <aside className={classes.sidebar}>
      <h1 className={classes.logo}>Peace</h1>
      <NavList title="Menu" data={menu} />
      <NavList title="Category" data={genre} />
    </aside>
  );
};

export default SideBar;
