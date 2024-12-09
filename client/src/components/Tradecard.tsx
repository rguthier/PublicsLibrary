export default function Tradecard({
  book,
  owner,
  status,
}: {
  book: string;
  owner: string;
  status: string;
}) {
  return (
    <div className="book-card">
      <div className="book-details">
        <h3 className="book-title">{book}</h3>
        <p className="book-author">Owned by: {owner}</p>
        <p className="book-description">Status: {status}</p>
      </div>
    </div>
  );
}
