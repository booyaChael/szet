import Card from "./Card";
import classes from "./Cards.module.css";
import { db } from "../../Firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Cards() {
  const { subjectId } = useParams();
  const cardCollectionRef = collection(db, `subject_${subjectId}`);
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const unsubscribe = onSnapshot(cardCollectionRef, (snap) => {
        const loadedCards = snap.docs.map((doc) => doc.data());
        setCardsData(loadedCards);
      });
      //cardCollectionRef에 변화가 없으면 unsubscribe 한다.
      return unsubscribe; // Unsubscribe from the snapshot listener when the component unmounts
    };

    fetchCards().catch((error) => {
      console.log(cardsData);
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
