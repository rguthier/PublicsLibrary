import BookCard from "../../components/BookCard.tsx";
import { useEffect, useState } from "react";
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
    <div style={{ backgroundColor: "#2e5339", height: "90vh" }}>
      <h1 style={{ color: "white" }}> Available Books </h1>
      <div className="book-container">
        {book.map((bookItem) => (
          <div>
            <BookCard
              title={bookItem.title}
              author={bookItem.author}
              description="Description goes here"
              isMine={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookPage;
