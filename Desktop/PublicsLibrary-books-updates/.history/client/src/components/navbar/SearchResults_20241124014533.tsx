import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import BookCard from "../../components/bookCard/BookCard.css"; 

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const query = searchParams.get("q");

  useEffect(() => {
    if (!query) {
      setError("No search term provided");
      setLoading(false);
      return;
    }

    fetch(`http://localhost:8800/search?q=${query}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch search results");
        }
        return res.json();
      })
      .then((data) => {
        setResults(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [query]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
    <Navbar />
    <div>
      <h1>Search Results for "{query}"</h1>
      {results.length > 0 ? (
        <ul>
          {results.map((book) => (
             <div className="book-card">
            <li key={book.book_id}>
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Condition: {book.book_condition}</p>
              <button className="trade-button">Request Trade</button>
            </li>
            </div>
          ))}
        </ul>
      ) : (
        <p>No books found</p>
      )}
    </div>
    </>
  );
};

export default SearchResults;
