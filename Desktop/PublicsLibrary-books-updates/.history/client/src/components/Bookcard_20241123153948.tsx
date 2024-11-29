
import "./Bookcard.css";

const BookCard = ({
  title,
  author,
  description,
}: {
  title: string;
  author: string;
  description: string;
}) => {
  return (
    <div className="book-card">
      {/* <img src={image} alt={`${title} cover`} className="book-image" /> */}
      <div className="book-details">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">by {author}</p>
        <p className="book-description">{description}</p>
        <button className="trade-button">Request Trade</button>
      </div>
    </div>
  );
};

export default BookCard;
