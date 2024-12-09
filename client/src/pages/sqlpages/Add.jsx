import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Add = () => {
  const getUser = () => {
    const userString = localStorage.getItem("user");
    const userUser = JSON.parse(userString);
    return userUser?.user;
  };

  const [book, setBook] = useState({
    title: "",
    author: "",
    book_condition: "",
    username: getUser(),
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/addbook", book);
      window.location.reload();
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div>
      <div className="form">
        <h2>Add new book</h2>
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
        <button className="formButton" onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Add;
