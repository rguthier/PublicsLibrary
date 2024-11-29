// import BookCard from "../components/Bookcard";

// const books = [
//   { title: "1984", author: "George Orwell", cover: "/path/to/1984-cover.jpg" },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     cover: "/path/to/mockingbird-cover.jpg",
//   },
//   // Add more books as needed
// ];

// function BrowseBooks() {
//   return (
//     <div className="browse-books">
//       <h1>Browse Available Books</h1>
//       <div className="book-list">
//         {books.map((book, index) => (
//           <BookCard
//             key={index}
//             book={{ title: book.title, author: book.author }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default BrowseBooks;


import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "../components/Bookcard";
import Navbar from "./../components/navbar/Navbar";


function BrowseBooks() {
  const [books, setBooks] = useState([]);  // Initialize state to store books
  const [loading, setLoading] = useState(true);  // To show loading state while data is being fetched

  // Fetch data from the backend
  useEffect(() => {
    axios
      .get("http://localhost:8800/books")  // URL of the backend endpoint
      .then((response) => {
        setBooks(response.data);  // Store the fetched books in the state
        setLoading(false);  // Stop loading when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);  // Stop loading in case of an error
      });
  }, []);  // Empty dependency array means this effect will run only once when the component mounts

  if (loading) {
    return <p>Loading books...</p>;  // Display a loading message while fetching data
  }

  return (
    
    <div className="browse-books">
       <Navbar /> 
      <h1>Browse Available Books</h1>
      <div className="book-list">
        {books.length > 0 ? (
          books.map((book) => (
            <BookCard
              key={book.book_id}  // Assuming each book has a unique book_id
              book={{ title: book.title, author: book.author, cover: book.cover }}  // Assuming 'cover' is available in the book data
            />
          ))
        ) : (
          <p>No books available</p>
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;
