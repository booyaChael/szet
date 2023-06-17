import Input from "./Input";
import classes from "./CardForm.module.css";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Firebase";
import { useParams } from "react-router-dom";

function CardForm() {
  const { subjectId } = useParams();
  const cardRef = collection(db, `subject_${subjectId}`);
  const createCard = async (inputs) => {
    try {
      await addDoc(cardRef, inputs);
    } catch (error) {
      return error;
    }
  };
  const [inputs, setInputs] = useState({
    question: "",
    answer: "",
  });

  const handleInput = ({ target }) => {
    const { name, value } = target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createCard(inputs);
    setInputs(() => ({
      question: "",
      answer: "",
    }));
  };
  console.log(inputs.question);
  return (
    <form className={classes.cardForm} onSubmit={handleSubmit}>
      <Input name="question" onChange={handleInput} value={inputs.question} />
      <Input name="answer" onChange={handleInput} value={inputs.answer} />
    </form>
  );
}
export default CardForm;
