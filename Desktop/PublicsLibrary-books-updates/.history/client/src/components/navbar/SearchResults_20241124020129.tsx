import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "../../pages/SearchResults.css";

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
          <div className="results-grid">
            {results.map((book) => (
              <div className="book-found" key={book.book_id}>
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Condition: {book.book_condition}</p>
                <p>Owned by: {book.}</p>
                <button className="trade-button">Request Trade</button>
              </div>
            ))}
          </div>
        ) : (
          <p>No books found</p>
        )}
      </div>
    </>
  );
};

export default SearchResults;

