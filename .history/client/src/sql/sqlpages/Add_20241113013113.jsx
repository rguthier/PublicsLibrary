// import axios from "axios";
// import React from "react";
// import { useState } from "react";
// import { Link ,useNavigate } from "react-router-dom";

// const Add = () =>{
//     const [book,setBook] = useState({
//         title:"",
//         author:"",
//         book_condition:"",
//     });

//     const [error,setError] = useState(false)

//     const navigate = useNavigate();

//     const handleChange = (e) =>{
//     setBook((prev) => ({...prev,[e.target.name]: e.target.value}));
//     };

//     const handleClick = async (e) =>{
//         e.preventDefault();
//         try{
//             await axios.post("http://localhost:8800/addbook", book);
//             navigate("/");
//         }catch(err){
//             console.log(err);
//             setError(true)
//         }
//     };

//     return(
//         <div className="form">
//             <h1>Add new book</h1>
//             <input type="text" placeholder="title" onChange={handleChange} name="title"/>
//             <input type="text" placeholder="author" onChange={handleChange} name="author" />
//             <input type="text" placeholder="owner_id" onChange={handleChange} name="owner_id" />
//             <button onClick={handleClick}>Add</button>
//         </div>
         
//     );
// };

// export default Add;

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust path to your Navbar component
import BookPage from "./sqlpages/BookPage";
import Add from "./sqlpages/Add";
import Update from "./sqlpages/Update";
import ErrorPage from "./sqlpages/ErrorPage";

// Set up the routes
const router = createBrowserRouter([
  {
    path: "/bookpage",
    element: <BookPage />,
    errorElement: <ErrorPage />, // Handles errors
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/update/:id",
    element: <Update />,
  },
]);

export default function App() {
  return (
    <div>
      <Navbar /> {/* Navbar should be placed outside the RouterProvider */}
      <RouterProvider router={router} />
    </div>
  );
}
