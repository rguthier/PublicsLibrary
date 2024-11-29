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

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  const { id } = useParams();  // Get the book ID from the URL
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Fetch book details from the backend using the book ID
    axios
      .get(`http://localhost:8800/books/${id}`)
      .then((response) => {
        // Since your backend returns an array, we need to access the first item
        setBook(response.data);  // response.data will contain the book details
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
      });
  }, [id]);  // The effect will run whenever the 'id' changes

  return (
    <div>
      {book ? (
        <>
          <h1>{book.title}</h1>
          <p>Author: {book.author}</p>
          <p>Condition: {book.book_condition}</p>
        </>
      ) : (
        <p>Loading...</p>  // Display loading message until data is fetched
      )}
    </div>
  );
};

export default BookDetails;
