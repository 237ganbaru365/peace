import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import classes from "./LayoutRoot.module.scss";

const LayoutRoot = () => {
  return (
    <section className={classes.layout}>
      <SideBar />
      <Header />
      <main className={classes.content}>
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};

export default LayoutRoot;
