import Card from "./Card";
import classes from "./Cards.module.css";
import { db } from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

const cardCollectionRef = collection(db, "card");

function Cards() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const snapshot = await getDocs(cardCollectionRef);
      const loadedCards = [];
      snapshot.forEach((doc) => {
        loadedCards.push(doc.data());
      });
      setCardsData(loadedCards);
    };
    fetchCards().catch((error) => {
      console.log(cardsData);
      console.log(error);
      return error;
    });
  }, []);

  const cards = cardsData.map((card) => (
    <div className={classes.cardSet}>
      <Card content={card.question} type="question" />
      <Card content={card.answer} type="answer" />
    </div>
  ));
  return <div className={classes.cards}>{cards}</div>;
}
export default Cards;
