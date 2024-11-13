
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BookPage = () => {
  const [books, setBooks] = useState([]);

  // Fetch data from backend on component mount
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8800/books");
        setBooks(response.data); // Update state with fetched books
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []); // Empty dependency array ensures it runs only once when component mounts

  return (
    <div>
      <h1>Book List</h1>
      <div>
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.book_id}>
              <h2>{book.title}</h2>
              <p>Author: {book.author}</p>
              <p>Condition: {book.book_condition || "Not specified"}</p>
              <p>Owner: {book.username}</p>
              <p>Zip Code: {book.zip_code}</p>
              <Link to={`/update/${book.book_id}`}>Edit Book</Link>
            </div>
          ))
        ) : (
          <p>No books available</p>
        )}
      </div>
    </div>
  );
};

export default BookPage;
