// src/components/BookList.jsx
import React from 'react';
import BookCard from '../components/Bookcard.jsx';
import './BookList.css';

const BookList = () => {
  // Handle horizontal scroll on wheel event
  const handleScroll = (event) => {
    const container = event.currentTarget;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="book-list-container">
      <h2>Featured Books</h2>
      {/* Add onWheel to enable horizontal scroll on wheel event */}
      <div className="book-list" onWheel={handleScroll}>
        <BookCard
          image="path/to/book-cover1.jpg"
          title="Book Title 1"
          author="Author 1"
          description="A brief description of Book Title 1."
        />
        <BookCard
          image="path/to/book-cover2.jpg"
          title="Book Title 2"
          author="Author 2"
          description="A brief description of Book Title 2."
        />
        <BookCard
          image="path/to/book-cover3.jpg"
          title="Book Title 3"
          author="Author 3"
          description="A brief description of Book Title 3."
        />
        <BookCard
          image="path/to/book-cover1.jpg"
          title="Book Title 1"
          author="Author 1"
          description="A brief description of Book Title 1."
        />
        <BookCard
          image="path/to/book-cover2.jpg"
          title="Book Title 2"
          author="Author 2"
          description="A brief description of Book Title 2."
        />
        <BookCard
          image="path/to/book-cover3.jpg"
          title="Book Title 3"
          author="Author 3"
          description="A brief description of Book Title 3."
        />
        <BookCard
          image="path/to/book-cover1.jpg"
          title="Book Title 1"
          author="Author 1"
          description="A brief description of Book Title 1."
        />
        <BookCard
          image="path/to/book-cover2.jpg"
          title="Book Title 2"
          author="Author 2"
          description="A brief description of Book Title 2."
        />
        <BookCard
          image="path/to/book-cover3.jpg"
          title="Book Title 3"
          author="Author 3"
          description="A brief description of Book Title 3."
        />
        {/* Add more BookCard components as needed */}
      </div>
    </section>
  );
};

export default BookList;
