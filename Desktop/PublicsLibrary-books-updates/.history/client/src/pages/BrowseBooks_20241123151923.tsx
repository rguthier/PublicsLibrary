
import BookCard from "../components/Bookcard";

const books = [
  { title: "1984", author: "George Orwell", cover: "/path/to/1984-cover.jpg" },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    cover: "/path/to/mockingbird-cover.jpg",
  },
  // Add more books as needed
];

function BrowseBooks() {
  return (
    <div className="browse-books">
      <h1>Browse Available Books</h1>
      <div className="book-list">
        {books.map((book, index) => (
          <BookCard
            key={index}
            book={{ title: book.title, author: book.author }}
          />
        ))}
      </div>
    </div>
  );
}

export default BrowseBooks;