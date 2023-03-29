import React from "react";
import styled from "styled-components";
import {
  faHouse,
  faComment,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface StyledProps {
  bgColor: string;
}

const NavWrapper = styled.nav`
  border-bottom: 1px solid rgb(128 129 145 / 24%);
  padding: 36px 0;
  width: 145px;

  & h2 {
    font-size: 12px;
    letter-spacing: 0.07em;
    margin-bottom: 24px;
  }

  & ul {
    width: 100%;

    & a {
      display: flex;
      align-items: center;
      margin-top: 26px;

      &:hover {
        color: #fff;
        font-weight: 600;
      }
    }
  }
`;

const IconBgWrapper = styled.span`
  & svg {
    width: 15px;
    padding: 8px;
    border-radius: 10px;
    background-color: #353340;
    flex-shrink: 0;
    margin-right: 16px;
  }

  & a {
    &:hover svg {
      background-color: ${(props: StyledProps) => props.bgColor};
    }
  }
`;

const menuData = [
  { title: "Discover", icon: faHouse, color: "#ff7551" },
  { title: "Trending", icon: faComment, color: "#32a7e2" },
  { title: "Bookmark", icon: faBookmark, color: "#6c5ecf" },
];
const categoryData = [""];

const SideBar: React.FC = () => {
  return (
    <aside style={{ padding: "30px" }}>
      <h1>Peace</h1>
      <NavWrapper>
        <h2>MENU</h2>
        <ul>
          {menuData.map(({ title, icon, color }) => (
            <IconBgWrapper bgColor={color}>
              <Link to="#">
                <FontAwesomeIcon icon={icon} />
                {title}
              </Link>
            </IconBgWrapper>
          ))}
        </ul>
      </NavWrapper>
      <NavWrapper>
        <h2>Category</h2>
        <ul>
          {menuData.map(({ title, icon, color }) => (
            <IconBgWrapper bgColor={color}>
              <Link to="#">
                <FontAwesomeIcon icon={icon} />
                {title}
              </Link>
            </IconBgWrapper>
          ))}
        </ul>
      </NavWrapper>
    </aside>
  );
};

export default SideBar;
