/* src/components/BookList.css */

.book-list-container {
  padding: 20px;
  text-align: center;
  background-color: #f4f1ea;
}

.book-list-container h2 {
  font-size: 2rem;
  color: #2e5339;
  margin-bottom: 1.5rem;
}

.book-list {
  display: flex;
  gap: 20px;
  overflow-x: auto; /* Enable horizontal scrolling */
  padding: 10px 0;
  scroll-snap-type: x mandatory; /* Optional smooth snapping */
}

.book-list::-webkit-scrollbar {
  height: 8px;
}

.book-list::-webkit-scrollbar-thumb {
  background-color: #c3d6b6;
  border-radius: 10px;
}

.book-list::-webkit-scrollbar-track {
  background: #f4f1ea;
}

/* src/components/BookCard.module.css */
.card {
  background-color: #ffffff;
  border-radius: 12px;
  width: 180px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.book-list-container{
  display: flex; 
  flex-wrap: nowarp; 
  overflow-x: scroll;
}

.book-list{
  width: 100vw;
}

.book-list-container::-webkit-scrollbar {
  height: 8px;
}

.book-list-container::-webkit-scrollbar-thumb {
  background-color: gray;
  border-radius: 10px;
}

.book-list-container::-webkit-scrollbar-track {
  background-color: white;
  border-radius: 10px;
}

// // src/components/BookList.jsx
// import { useState, useEffect } from "react";
// import BookCard from "../components/Bookcard.js";
// import "./BookList.css";
// import axios from "axios";

// const BookList = () => {
//   // Handle horizontal scroll on wheel event
//   const handleScroll = (event: any) => {
//     const container = event.currentTarget;
//     const scrollAmount = event.deltaY;
//     container.scrollTo({
//       top: 0,
//       left: container.scrollLeft + scrollAmount,
//       behavior: "smooth",
//     });
//   };

//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const fetchAllBook = async () => {
//       try {
//         const res = await axios.get("http://localhost:8800/books");
//         setBooks(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchAllBook();
//   }, []);

//   interface Book {
//     title: string;
//     author: string;
//     username: string;
//   }

//   return (
//     <section className="book-list-container">
//       <h2>Browse Books</h2>
//       {/* Add onWheel to enable horizontal scroll on wheel event */}
//       <div className="book-list" onWheel={handleScroll}>
//         {books.map((book: Book) => (
//           <BookCard
//             title={book.title}
//             author={book.author}
//             description={"Owned by " + book.username}
//           />
//         ))}
//         <BookCard
//           // image="path/to/book-cover1.jpg"
//           title="Book Title 1"
//           author="Author 1"
//           description="A brief description of Book Title 1."
//         />
//         <BookCard
//           // image="path/to/book-cover2.jpg"
//           title="Book Title 2"
//           author="Author 2"
//           description="A brief description of Book Title 2."
//         />
//         <BookCard
//           // image="path/to/book-cover3.jpg"
//           title="Book Title 3"
//           author="Author 3"
//           description="A brief description of Book Title 3."
//         />
//         {/* Add more BookCard components as needed */}
//       </div>
//     </section>
//   );
// };

// export default BookList;
