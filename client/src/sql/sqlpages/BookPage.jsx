import BookCard from "../../components/BookCard.tsx";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../addStyle.css";

const BookPage = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchAllBook = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBook(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBook();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);

      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1> Public's Library</h1>
      <div className="book-container">
        {book.map((bookItem) => (
          <div>
            <BookCard
              title={bookItem.title}
              author={bookItem.author}
              description="Description goes here"
            />
            <div className="book" key={bookItem.book_id}>
              <button
                className="delete"
                onClick={() => handleDelete(bookItem.book_id)}
              >
                {" "}
                Delete{" "}
              </button>
              <button className="update">
                <Link to={`/update/${bookItem.book_id}`}> Update </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add"> Add new book</Link>
      </button>
    </div>
  );
};

export default BookPage;
