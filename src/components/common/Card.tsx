import { TChildrenProps } from "../../type";
import classes from "./Card.module.scss";

const Card = ({ children }: TChildrenProps) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
