// // src/components/BookCard.jsx
import axios from "axios";
import "./Bookcard.css";

const BookCard = ({
  title,
  author,
  description,
  isMine,
  id,
}: {
  title: string;
  author: string;
  description?: string;
  isMine: boolean;
  id: number;
}) => {
  console.log(id);

  const getUser = () => {
    const userString = localStorage.getItem("user");
    const userUser = JSON.parse(userString);
    return userUser?.user;
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleTradeRequest = async () => {
    try {
      await axios.post("http://localhost:8800/traderequest", {
        book_id: id,
        username: getUser(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="book-card">
      <div className="book-details">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">by {author}</p>
        <p className="book-description">{description}</p>
        {!isMine && (
          <button className="trade-button" onClick={() => handleTradeRequest()}>
            Request Trade
          </button>
        )}
        {isMine && (
          <div>
            <button className="delete-button" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCard;

// src/components/BookCard.jsx
// import React from 'react';
// import './Bookcard.css';

// const BookCard = ({ image, title, author, description }) => {
//   return (
//     <div className="book-card">
//       <img src={image} alt={`${title} cover`} className="book-image" />
//       <div className="book-details">
//         <h3 className="book-title">{title}</h3>
//         <p className="book-author">by {author}</p>
//         <p className="book-description">{description}</p>
//         <button className="trade-button">Trade Book</button>
//       </div>
//     </div>
//   );
// };

// export default BookCard;
