// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const BookDetails = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8800/books/${id}`)
//       .then((response) => setBook(response.data))
//       .catch((error) => console.error("Error fetching book details:", error));
//   }, [id]);

//   return (
//     <div>
//       {book ? (
//         <>
//           <h1>{book.title}</h1>
//           <p>Author: {book.author}</p>
//           <p>Condition: {book.book_condition}</p>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default BookDetails;
