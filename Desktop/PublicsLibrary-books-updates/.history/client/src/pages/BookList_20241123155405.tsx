// src/components/BookList.jsx
import { useState, useEffect } from "react";
import BookCard from "../components/Bookcard.js";
import "./BookList.css";
import axios from "axios";

const BookList = () => {
  // Handle horizontal scroll on wheel event
  const handleScroll = (event: any) => {
    const container = event.currentTarget;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBook = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBook();
  }, []);

  interface Book {
    title: string;
    author: string;
    username: string;
  }

  return (
    <section className="book-list-container">
      <h2>Browse Books</h2>
      {/* Add onWheel to enable horizontal scroll on wheel event */}
      <div className="book-list" onWheel={handleScroll}>
        {books.map((book: Book) => (
          <BookCard
            title={book.title}
            author={book.author}
            description={"Owned by " + book.username}
          />
        ))}
        <BookCard
          // image="path/to/book-cover1.jpg"
          title="Book Title 1"
          author="Author 1"
          description="A brief description of Book Title 1." 
        <BookCard
          // image="path/to/book-cover2.jpg"
          title="Book Title 2"
          author="Author 2"
          description="A brief description of Book Title 2." image={undefined}        />
        <BookCard
          // image="path/to/book-cover3.jpg"
          title="Book Title 3"
          author="Author 3"
          description="A brief description of Book Title 3." image={undefined}        />
        {/* Add more BookCard components as needed */}
      </div>
    </section>
  );
};

export default BookList;