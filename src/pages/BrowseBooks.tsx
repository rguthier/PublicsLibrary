
import BookCard from "../components/Bookcard"; // Ensure this path is correct
import "./BrowseBooks.css"; // Import the CSS file

// const books = [
//   {
//     title: "1984",
//     author: "George Orwell",
//     description: "A dystopian novel about a totalitarian regime.",
//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     description: "A powerful story about racial injustice in the Deep South.",
//   },
//   {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     description: "A classic novel of wealth, love, and the American Dream.",
//   },
//   {
//     title: "Pride and Prejudice",
//     author: "Jane Austen",
//     description: "A timeless romance and social commentary.",
//   },
// ];

const books = [
    {
      title: "1984",
      author: "George Orwell",
      description: "A dystopian novel about a totalitarian regime.",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "A powerful story about racial injustice in the Deep South.",
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A classic novel of wealth, love, and the American Dream.",
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      description: "A timeless romance and social commentary.",
    },
    {
      title: "Moby Dick",
      author: "Herman Melville",
      description: "A tale of obsession and revenge on the high seas.",
    },
    {
      title: "War and Peace",
      author: "Leo Tolstoy",
      description: "A sweeping epic of Russian society during the Napoleonic Era.",
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      description: "A story of teenage rebellion and alienation.",
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      description: "A fantastical adventure in Middle-earth.",
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      description: "A dystopian vision of a futuristic society.",
    },
    {
      title: "The Road",
      author: "Cormac McCarthy",
      description: "A bleak but hopeful journey through a post-apocalyptic world.",
    },
    {
      title: "Frankenstein",
      author: "Mary Shelley",
      description: "A cautionary tale of scientific hubris.",
    },
    {
      title: "Dracula",
      author: "Bram Stoker",
      description: "A Gothic novel of horror and romance.",
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      description: "A philosophical journey to find one's destiny.",
    },
    {
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      description: "A coming-of-age story about love and independence.",
    },
    {
      title: "The Kite Runner",
      author: "Khaled Hosseini",
      description: "A story of friendship, betrayal, and redemption.",
    },
  ];
  
function BrowseBooks() {
  return (
    <div className="browse-books">
      <h1>Browse Available Books</h1>
      <div className="book-list">
        {books.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            author={book.author}
            description={book.description}
          />
        ))}
      </div>
    </div>
  );
}

export default BrowseBooks;
