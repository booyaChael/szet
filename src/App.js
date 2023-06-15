import CardForm from "./components/CardForm/TodoForm/CardForm";
import Card from "./components/Cards/Cards";
import classes from "./App.module.css";
function App() {
  return (
    <div className={classes.app}>
      <CardForm />
      <Card />
    </div>
  );
}

export default App;
