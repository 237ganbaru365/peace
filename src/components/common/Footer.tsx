import { useEffect, useState } from "react";

import classes from "./Footer.module.scss";

export default function Footer() {
  const [thisYear, setThisYear] = useState("");

  useEffect(() => {
    setThisYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className={classes.footer}>
      <small>
        &copy; Peace {thisYear} <br /> - War Films Archives -
      </small>
    </footer>
  );
}
