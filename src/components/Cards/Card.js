import classes from "./Card.module.css";
import { useState } from "react";

function Card({ content, type }) {
  const [clicked, setClicked] = useState(false);
  const coloredQuestion =
    clicked && type === "question" && classes.coloredQuestion;
  const coloredAnswer = clicked && type === "answer" && classes.coloredAnswer;

  const typeClassName =
    type === "question"
      ? `${classes.question} ${coloredQuestion}`
      : `${classes.answer} ${coloredAnswer}`;

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div onClick={handleClick} className={`${classes.card} ${typeClassName}`}>
      {content}
    </div>
  );
}
export default Card;
