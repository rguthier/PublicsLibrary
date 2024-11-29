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

// export default BrowseBooks;

// import { useState, useEffect } from "react";
// import BookCard from "../components/Bookcard.js"; // Ensure the import path is correct
// import "./BookList.css";
// import axios from "axios";

// const BookList = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const fetchAllBook = async () => {
//       try {
//         const res = await axios.get("http://localhost:3000/books");
//         setBooks(res.data);
//       } catch (err) {
//         console.log("Error fetching books:", err);
//       }
//     };
//     fetchAllBook();
//   }, []);

//   return (
//     <section className="book-list-container">
//       <h2>Browse Books</h2>
//       <div className="book-list">
//         {books.map((book) => (
//           <BookCard
//             key={book.title}
//             title={book.title}
//             author={book.author}
//             description={`Owned by ${book.username}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default BookList;
