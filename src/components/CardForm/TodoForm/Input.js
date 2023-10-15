import CardFormSubmitBtn from "./CardFormSubmitBtn";
import classes from "./Input.module.css";

function Input({ name, onChange, value }) {
  const typeClassName = name === "question" ? classes.question : classes.answer;
  return (
    <>
      <input
        name={name}
        value={value}
        className={`${typeClassName} ${classes.input}`}
        onChange={onChange}
      />
      {name === "answer" && <CardFormSubmitBtn />}
    </>
  );
}
export default Input;
