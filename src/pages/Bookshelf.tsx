// import React from "react";
// import "./MyLibrary.css";

// const BookShelf = () => {
//   return (
//     <section className="book-shelf">
//       <h2>My Book Library</h2>
//       <div className="shelves">
//         <div className="shelf">
//           <div className="book">Book 1</div>
//           <div className="book">Book 2</div>
//           <div className="book">Book 3</div>
//         </div>
//         <div className="shelf">
//           <div className="book">Book 4</div>
//           <div className="book">Book 5</div>
//           <div className="book">Book 6</div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BookShelf;


import React from "react";
import "./MyLibrary.css"; // Import shared CSS for this component

const BookShelf = () => {
  return (
    <section className="book-shelf">
      <h2>My Book Library</h2>
      <div className="shelves">
        <div className="shelf">
          <div className="book">Book 1</div>
          <div className="book">Book 2</div>
          <div className="book">Book 3</div>
        </div>
        <div className="shelf">
          <div className="book">Book 4</div>
          <div className="book">Book 5</div>
          <div className="book">Book 6</div>
        </div>
      </div>
    </section>
  );
};

export default BookShelf;
