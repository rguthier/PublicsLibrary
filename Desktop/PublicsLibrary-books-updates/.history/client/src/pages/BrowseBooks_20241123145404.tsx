import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "../components/Bookcard";
import Navbar from "./../components/navbar/Navbar";
// import "../components/navbar/Navbar.css"; 
import "../pages/BookList.css"


function BrowseBooks() {
  const [books, setBooks] = useState([]);  // Initialize state to store books
  const [loading, setLoading] = useState(true);  // To show loading state while data is being fetched

  // Fetch data from the backend
  useEffect(() => {
    axios
      .get("http://localhost:8800/books")  // URL of the backend endpoint
      .then((response) => {
        setBooks(response.data);  // Store the fetched books in the state
        setLoading(false);  // Stop loading when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);  // Stop loading in case of an error
      });
  }, []);  // Empty dependency array means this effect will run only once when the component mounts

  if (loading) {
    <>
    <Navbar /> 
    return <p>Loading books...</p>;  // Display a loading message while fetching data
    </>
  }

  return (
    <div className="browse-books">
       <Navbar /> 
      <h1>Browse Available Books</h1>
      <div className="book-list">
        {books.length > 0 ? (
          books.map((book) => (
            <BookCard
              key={book.book_id}
              title={book.title}
              author={book.author}
              description={"Owned by " + book.username}
           />
          ))
        ) : (
          <p>No books available</p>
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;









// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import BookCard from "../components/Bookcard";
// import Navbar from "./../components/navbar/Navbar";
// // import "./BrowseBook.css"; 
// import "../components/navbar/Navbar.css";  // Adjusted path


// function BrowseBooks() {
//   const [books, setBooks] = useState([]);  // Initialize state to store books
//   const [loading, setLoading] = useState(true);  // To show loading state while data is being fetched

//   // Fetch data from the backend
//   useEffect(() => {
//     axios
//       .get("http://localhost:8800/books")  // URL of the backend endpoint
//       .then((response) => {
//         setBooks(response.data);  // Store the fetched books in the state
//         setLoading(false);  // Stop loading when data is fetched
//       })
//       .catch((error) => {
//         console.error("Error fetching books:", error);
//         setLoading(false);  // Stop loading in case of an error
//       });
//   }, []);  // Empty dependency array means this effect will run only once when the component mounts

//   if (loading) {
//     <>
//     <Navbar /> 
//     return <p>Loading books...</p>;  // Display a loading message while fetching data
//     </>
//   }

//   return (
//     <div className="browse-books">
//        <Navbar /> 
//       <h1>Browse Available Books</h1>
//       <div className="book-list">
//         {books.length > 0 ? (
//           books.map((book) => (
//             <BookCard
//               key={book.book_id}
//               title={book.title}
//               author={book.author}
//               description={"Owned by " + book.username}
//            />
//           ))
//         ) : (
//           <p>No books available</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default BrowseBooks;
