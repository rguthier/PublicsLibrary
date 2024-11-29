// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";

// const SearchResults = () => {
//   const location = useLocation();
//   const [results, setResults] = useState([]);
//   const searchQuery = new URLSearchParams(location.search).get("q");

//   useEffect(() => {
//     if (searchQuery) {
//       axios
//         .get(`http://localhost:8800/search?q=${searchQuery}`)
//         .then((response) => setResults(response.data))
//         .catch((error) => console.error("Error fetching search results:", error));
//     }
//   }, [searchQuery]);

//   return (
//     <div>
//       <h1>Search Results for "{searchQuery}"</h1>
//       {results.length > 0 ? (
//         <ul>
//           {results.map((book) => (
//             <li key={book.book_id}>
//               <Link to={`/books/${book.book_id}`}>{book.title}</Link> by {book.author}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No results found</p>
//       )}
//     </div>
//   );
// };

// export default SearchResults;

// import React, { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";

// const SearchResults = () => {
//   const [searchParams] = useSearchParams();
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const query = searchParams.get("q"); // Extract 'q' parameter

//   useEffect(() => {
//     if (!query) {
//       setError("No search term provided");
//       setLoading(false);
//       return;
//     }

//     fetch(`http://localhost:8800/search?q=${query}`)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Failed to fetch search results");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setResults(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, [query]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//        <Navbar />
//       <h1>Search Results for "{query}"</h1>
//       {results.length > 0 ? (
//         <ul>
//           {results.map((book) => (
//             <li key={book.book_id}>
//               <h3>{book.title}</h3>
//               <p>Author: {book.author}</p>
//               <p>Condition: {book.book_condition}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No books found</p>
//       )}
//     </div>
//   );
// };

// export default SearchResults;
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/navbar/Navbar"; // Adjust the import path based on your project structure

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const query = searchParams.get("q"); // Extract 'q' parameter

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
      <Navbar /> {/* Include the Navbar at the top */}
      <div>
        <h1>Search Results for "{query}"</h1>
        {results.length > 0 ? (
          <ul>
            {results.map((book) => (
              <li key={book.book_id}>
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Condition: {book.book_condition}</p>
              </li>
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
