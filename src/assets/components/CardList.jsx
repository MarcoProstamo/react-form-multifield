import Card from "./Card";

export default function CardList({ cardList }) {
  return (
    <>
      <div className="post-container text-light d-flex justify-content-between gap-3">
        {cardList
          .filter((card) => card.status === "published")
          .map((card) => (
            <Card key={card.id} card={card} />
          ))}
      </div>
    </>
  );
}
