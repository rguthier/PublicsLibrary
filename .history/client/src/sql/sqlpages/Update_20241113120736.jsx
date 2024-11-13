import React from "react";
import { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Update = () => {
    const [book, setBook] = useState({
        title: "",
        author: "",
        book_condition: "",
        owner_id: "",
    });
  
    const [error, setError] = useState(false);
  
    const navigate = useNavigate();
    const location = useLocation();

    const bookId = console.log(location.pathname.split("/")[2])
    ${bookId}`
  
    const handleChange = (e) => {
      setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleClick = async (e) => {
      e.preventDefault();
      try {
        await axios.put("http://localhost:8800/books/"+, book);

        navigate("/");
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };
  
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
          <button className="formButton" onClick={handleClick}>Update</button>
      </div>
    );
  };
  
  export default Update;
  