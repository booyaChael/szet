import Card from "./Card";

const cardLists = [
  { question: "운영체제의 종류", answer: "안드로이드, ios" },
  { question: "내 생일", answer: "0225" },
];

function Cards() {
  const cards = cardLists.map((card) => (
    <div>
      <Card content={card.question} />
      <Card content={card.answer} />
    </div>
  ));
  return <>{cards}</>;
}
export default Cards;
