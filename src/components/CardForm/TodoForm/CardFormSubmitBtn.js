import classes from "./CardFormSubmitBtn.module.css";

function CardFormSubmitBtn(props) {
  return (
    <button className={classes.btn} type="submit">
      Submit
    </button>
  );
}

export default CardFormSubmitBtn;
