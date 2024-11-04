// // src/components/BookCard.jsx

export default function BookCard({
  image,
  title,
  author,
  description,
}: {
  image?: string;
  title: string;
  author: string;
  description?: string;
}) {
  return (
    <div className="book-card">
      <img src={image} alt={`${title} cover`} className="book-image" />
      <div className="book-details">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">by {author}</p>
        <p className="book-description">{description}</p>
        <button className="trade-button">Trade Book</button>
      </div>
    </div>
  );
}

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
