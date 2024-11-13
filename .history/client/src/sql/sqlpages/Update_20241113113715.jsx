import React from "react";
import { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Update = () => {
    const [book, setBook] = useState({
      title: "",
      author: "",
      book_condition: "",
    });
  
    const [error, setError] = useState(false);
  
    const location = useLocation();
    const navigate = useNavigate();


  const bookId = location.pathname.split("/")[2];
  
    const handleChange = (e) => {
      setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleClick = async (e) => {
      e.preventDefault();
      try {
        navigate("/");
      } catch (err) {
        console.log(err);
        setError(true);
      }
    }
  

    console.log(book)
    return (
        <div className="form">
          <h1>Update new book</h1>
          <input
            type="text"
            placeholder="title"
            onChange={handleChange}
            name="title"
          />
          <input
            type="text"
            placeholder="author"
            onChange={handleChange}
            name="author"
          />
          <input
            type="text"
            placeholder="owner_id"
            onChange={handleChange}
            name="owner_id"
          />
          <button onClick={handleClick}>Update</button>
      </div>
    );
  };
  
  export default Update;
  