import React from "react";
import { useEffect } from "react";
import { useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const Book = () =>{
    const [book, setBook] = useState([]);

    useEffect(() =>{
      const fetchAllBook = async ()=>{
        try{
            const res = await axios.get("http://localhost:3000/book");
            setBook(res.data);
        }catch(err){
            console.log(err)
        }
      };
      fetchAllBook();
    },[]);

    return ( <div>
            <h1> publics library shop</h1>
            <div className="book">
                {book.map((bookItem)=>(
                    <div className="book" key={bookItem.book_id}>
                       <h2>{bookItem.title}</h2>
                       <h2>{bookItem.author}</h2>
                       <h2>{bookItem.book_condition}</h2>
                       <h2>{bookItem.owner_id}</h2>
                    </div>
                ))}
            </div>
            <button><Link to ="/add"> Add new book</Link></button>
        </div>
    );
};

export default Book;
