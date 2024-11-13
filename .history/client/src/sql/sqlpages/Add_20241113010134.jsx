import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";

const Add = () =>{

    return(
        <div className="form">
            <h1>Add new book</h1>
            <input type="text" placeholder="title" onChange={handleChange} name="title"/>
            <input type="text" placeholder="author" onChange={handleChange} name="author" />
            <input type="text" placeholder="book_condition" onChange={handleChange} name="book_condition" />
            <button onClick={handleClick}>Add</button>
        </div>
         
    );
};

export default Add;