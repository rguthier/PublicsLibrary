

// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const BookPage = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const fetchAllBooks = async () => {
//       try {
//         const res = await axios.get("http://localhost:8800/books");
//         setBooks(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchAllBooks();
//   }, []);

//   console.log(books);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8800/books/${id}`);
//       window.location.reload()
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div>
//       <h1>Lama Book Shop</h1>
//       <div className="books">
//         {books.map((book) => (
//           <div key={book.id} className="book">
//             <img src={book.cover} alt="" />
//             <h2>{book.title}</h2>
//             <p>{book.desc}</p>
//             <span>${book.price}</span>
//             <button className="delete" onClick={() => handleDelete(book.id)}>Delete</button>
//             <button className="update">
//               <Link
//                 to={`/update/${book.id}`}
//                 style={{ color: "inherit", textDecoration: "none" }}
//               >
//                 Update
//               </Link>
//             </button>
//           </div>
//         ))}
//       </div>

//       <button className="addHome">
//         <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
//           Add new book
//         </Link>
//       </button>
//     </div>
//   );
// };

// export default BookPage;
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