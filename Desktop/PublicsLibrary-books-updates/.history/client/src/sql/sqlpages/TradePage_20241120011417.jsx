import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TradePage = () => {
  const [books, setBooks] = useState([]);
  const [trade, setTrade] = useState({
    book_id: "",
    giver_id: "",
    receiver_id: "",
    trade_status: "in progress", // default trade status
  });
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  // Fetch books owned by the user
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books/1"); 
        setBooks(res.data);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };
    fetchBooks();
  }, []);

  const handleChange = (e) => {
    setTrade((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/trade", trade);
      navigate("/trades"); 
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div>
      <h1>Initiate a Trade</h1>
      <form onSubmit={handleSubmit}>
        <select
          name="book_id"
          value={trade.book_id}
          onChange={handleChange}
        >
          <option value="">Select a Book</option>
          {books.map((book) => (
            <option key={book.book_id} value={book.book_id}>
              {book.title}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="giver_id"
          placeholder="Your User ID"
          value={trade.giver_id}
          onChange={handleChange}
        />

        <input
          type="text"
          name="receiver_id"
          placeholder="Receiver User ID"
          value={trade.receiver_id}
          onChange={handleChange}
        />

        <button type="submit">Start Trade</button>
      </form>

      {error && <p>Something went wrong. Please try again.</p>}
    </div>
  );
};

export default TradePage;
