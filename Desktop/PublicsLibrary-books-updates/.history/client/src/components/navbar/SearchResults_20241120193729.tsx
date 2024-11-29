import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SearchResults = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const searchQuery = new URLSearchParams(location.search).get("term");

  useEffect(() => {
    if (searchQuery) {
      axios
        .get(`http://localhost:8800/search?q=${searchQuery}`)
        .then((response) => setResults(response.data))
        .catch((error) => console.error("Error fetching search results:", error));
    }
  }, [searchQuery]);

  return (
    <div>
      <h1>Search Results for "{searchQuery}"</h1>
      {results.length > 0 ? (
        <ul>
          {results.map((book) => (
            <li key={book.book_id}>
              <Link to={`/books/${book.book_id}`}>{book.title}</Link> by {book.author}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
