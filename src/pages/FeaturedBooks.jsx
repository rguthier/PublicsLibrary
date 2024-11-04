// src/components/FeaturedBooks.jsx
import React from 'react';
import BookCard from '../components/Bookcard';



const FeaturedBooks = () => (
  <section className="featured-books">
    <h2>Featured Books</h2>
    <div className="book-list">
      <BookCard
        image="path/to/book-cover1.jpg"
        title="Book Title 1"
        author="Author 1"
        description="A brief description of Book Title 1 that captures the reader's interest."
      />
      <BookCard
        image="path/to/book-cover2.jpg"
        title="Book Title 2"
        author="Author 2"
        description="A brief description of Book Title 2 that highlights its key themes."
      />
      {/* Add more BookCard components as needed */}
    </div>
  </section>
);

export default FeaturedBooks;
