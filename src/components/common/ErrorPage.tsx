import { Link, useRouteError } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

import classes from "./ErrorPage.module.scss";

const ErrorPage = () => {
  //TODO:  check if RRD has type
  const error: any = useRouteError();

  return (
    <section className={classes.error}>
      <div className={classes["error-img"]}>
        <FontAwesomeIcon icon={faTriangleExclamation} size="4x" />
      </div>
      <h1 className={classes["error-title"]}>Oops!</h1>
      <p className={classes["error-sub"]}>
        Sorry, an unexpected error has occurred.
      </p>
      <span className={classes.border} />
      <i>- {error.statusText || error.message}</i>
      <span className={classes.border} />
      <Link to="/">
        <button className={classes.btnlink} type="button">
          Back to home
        </button>
      </Link>
    </section>
  );
};

export default ErrorPage;
