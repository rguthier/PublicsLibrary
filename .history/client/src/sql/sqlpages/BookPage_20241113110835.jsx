import React from "react";
import { useEffect } from "react";
import { useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../addStyle.css";




const BookPage = () =>{
    const [book, setBook] = useState([]);

    useEffect(() =>{
      const fetchAllBook = async ()=>{
        try{
            const res = await axios.get("http://localhost:8800/books");
            setBook(res.data);
        }catch(err){
            console.log(err)
        }
      };
      fetchAllBook();
    },[]);

    const handleDelete = async (id) =>{
      try{
        await axios.delete("http://localhost:8800/books" + id)
        window.location.re
      }catch(err){
        console.log(err)
      }
    }

    return ( <div>
            <h1> publics library shop</h1>
            <div className="book-container">
                {book.map((bookItem)=>(
                    <div className="book" key={bookItem.book_id}>
                      {/* {bookItem.cover && <img src={bookItem.cover} alt=""/>} */}
                      <img 
              src={bookItem.cover || "https://via.placeholder.com/200x300?text=No+Image"} 
              alt={`${bookItem.title} cover`} 
            />

                       <h2>{bookItem.title}</h2>
                       <h2>{bookItem.author}</h2>
                       <h2>{bookItem.owner_id}</h2>
                       <button className="delete" onClick={()=> handleDelete(book.id)}> Delete </button>
                       <button className="delete"> Update </button>
                    </div>
                ))}
            </div>
            <button><Link to ="/add"> Add new book</Link></button>
        </div>
    );
};

export default BookPage;