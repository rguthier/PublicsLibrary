// import React from "react";
// import { useState } from "react";
// import axios from "axios";

// import { Link, useNavigate } from "react-router-dom";



// const Update = () => {
//     const [book, setBook] = useState({
//       title: "",
//       author: "",
//       book_condition: "",
//     });
  
//     const [error, setError] = useState(false);
  
//     const location = useLocation();
//     const navigate = useNavigate();
  
//     const handleChange = (e) => {
//       setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     };
  
//     const handleClick = async (e) => {
//       e.preventDefault();
//       try {
//         await axios.post("http://localhost:8800/addbook", book);
//         navigate("/");
//       } catch (err) {
//         console.log(err);
//         setError(true);
//       }
//     };
  
//     return (
//       <div>
//         <Navbar /> {/* Include the Navbar */}
//         <div className="form">
//           <h1>Update new book</h1>
//           <input
//             type="text"
//             placeholder="title"
//             onChange={handleChange}
//             name="title"
//           />
//           <input
//             type="text"
//             placeholder="author"
//             onChange={handleChange}
//             name="author"
//           />
//           <input
//             type="text"
//             placeholder="owner_id"
//             onChange={handleChange}
//             name="owner_id"
//           />
//           <button onClick={handleClick}>Update</button>
//         </div>
//       </div>
//     );
//   };
  
//   export default Update;
  
import React, { useState, useEffect } from 'react'; // Add useState and useEffect here
import axios from 'axios';

const Update = () => {
  const [book, setBook] = useState(null);  // Example useState to hold book data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the book data you want to update
    const fetchBook = async () => {
      try {
        const response = await axios.get('http://localhost:8800/books/1'); // Replace with actual book id
        setBook(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching book data:', error);
        setLoading(false);
      }
    };

    fetchBook();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <h1>Update Book</h1>
      <form>
        <label>
          Title:
          <input type="text" value={book.title} />
        </label>
        <label>
          Author:
          <input type="text" value={book.author} />
        </label>
        {/* Add other fields as necessary */}
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
