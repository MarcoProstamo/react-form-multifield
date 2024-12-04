export default function Card({ card }) {
  return (
    <>
      <div className="card">
        <img
          src="https://placehold.co/600x400"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.content}</p>
        </div>
      </div>
    </>
  );
}
