import CardForm from "../components/CardForm/TodoForm/CardForm";
import Cards from "../components/Cards/Cards";
import classes from "./SzetPage.module.css";

function SzetPage() {
  return (
    <>
      <div className={classes.layout}>
        <CardForm />
        <Cards />
      </div>
    </>
  );
}
export default SzetPage;
