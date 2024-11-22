

// //panels yes 
// import React, { useState } from "react";
// import "./MyLibrary.css";
// import "./BookShelf.css";
// import "./TradeSection.css";
// import "./EditProfilePanel.css";
// import EditProfilePanel from "./EditProfilePanel";
// import AddNewTradePanel from "./AddNewTradePanel";
// import BookCard from "../components/Bookcard";

// const MyLibrary = () => {
//   const [isEditingProfile, setIsEditingProfile] = useState(false);
//   const [isAddingTradeBook, setIsAddingTradeBook] = useState(false);
//   const [activeTab, setActiveTab] = useState("Books");
//   const [profileData, setProfileData] = useState({
//     name: "Anastasia",
//     pronouns: "",
//     about: "Avid reader and book lover.",
//     photo: "/path/to/default-profile.png",
//     tradeBooks: [
//       {
//         title: "The Great Gatsby",
//         author: "F. Scott Fitzgerald",
//         description: "A classic novel about the American dream.",
//         image: "/path/to/gatsby-image.png",
//       },
//       {
//         title: "To Kill a Mockingbird",
//         author: "Harper Lee",
//         description: "A novel about justice and morality.",
//         image: "/path/to/mockingbird-image.png",
//       },
//     ],
//   });

//   // Toggle the Edit Profile panel
//   const toggleEditProfile = () => {
//     setIsEditingProfile(!isEditingProfile);
//     setIsAddingTradeBook(false); // Ensure Add Trade Panel is closed
//   };

//   // Toggle the Add New Trade panel
//   const toggleAddTradeBook = () => {
//     setIsAddingTradeBook(!isAddingTradeBook);
//     setIsEditingProfile(false); // Ensure Edit Profile Panel is closed
//   };

//   // Save profile changes
//   const handleProfileSave = (newData) => {
//     setProfileData(newData);
//     setIsEditingProfile(false); // Close the panel after saving
//   };

//   // Save new trade book
//   const handleAddTradeBook = (newBook) => {
//     if (!newBook.title || !newBook.author || !newBook.description || !newBook.image) {
//       alert("Please fill in all fields to add a new trade book.");
//       return;
//     }
//     setProfileData({
//       ...profileData,
//       tradeBooks: [...profileData.tradeBooks, newBook],
//     });
//     setIsAddingTradeBook(false); // Close the panel after saving
//   };

//   return (
//     <div className="library-layout">
//       {/* Profile Section */}
//       <section className="profile-header">
//         <div className="profile-photo">
//           <img
//             src={profileData.photo || "/path/to/default-profile.png"}
//             alt="User Avatar"
//             className="profile-image"
//           />
//         </div>
//         <div className="profile-info">
//           <h1>{profileData.name}</h1>
//           <p className="bio">{profileData.about}</p>
//           <button className="edit-button" onClick={toggleEditProfile}>
//             Edit Profile
//           </button>
//         </div>
//       </section>

//       {/* Navigation Tabs */}
//       <ul className="tab-navigation">
//         <li
//           className={activeTab === "Books" ? "active-tab" : ""}
//           onClick={() => setActiveTab("Books")}
//         >
//           Books
//         </li>
//         <li
//           className={activeTab === "Clubs" ? "active-tab" : ""}
//           onClick={() => setActiveTab("Clubs")}
//         >
//           Clubs
//         </li>
//         <li
//           className={activeTab === "Reviews" ? "active-tab" : ""}
//           onClick={() => setActiveTab("Reviews")}
//         >
//           Reviews
//         </li>
//         <li
//           className={activeTab === "Posts" ? "active-tab" : ""}
//           onClick={() => setActiveTab("Posts")}
//         >
//           Posts
//         </li>
//       </ul>

//       {/* Main Content */}
//       <div className="main-content">
//         {activeTab === "Books" && (
//           <section className="book-library">
//             <h2>My Book Library</h2>
//             <div className="shelves">
//               <div className="shelf">
//                 <div className="book">Book 1</div>
//                 <div className="book">Book 2</div>
//                 <div className="book">Book 3</div>
//               </div>
//               <div className="shelf">
//                 <div className="book">Book 4</div>
//                 <div className="book">Book 5</div>
//                 <div className="book">Book 6</div>
//               </div>
//             </div>
//             <button className="add-to-library-btn">Add New Book</button>
//           </section>
//         )}

//         {activeTab === "Clubs" && (
//           <section className="clubs-section">
//             <h2>Your Clubs</h2>
//             <div className="club-card">
//               <h3>Fantasy Club</h3>
//               <p>Join discussions about your favorite fantasy books.</p>
//             </div>
//             <button className="join-club-btn">Join Club</button>
//           </section>
//         )}

//         {activeTab === "Reviews" && (
//           <section className="reviews-section">
//             <h2>Your Reviews</h2>
//             <div className="review-card">
//               <h4>Book Title</h4>
//               <p>Great book, highly recommend!</p>
//               <span className="rating">★★★★☆</span>
//             </div>
//             <button className="add-review-btn">Add New Review</button>
//           </section>
//         )}

//         {activeTab === "Posts" && (
//           <section className="posts-section">
//             <div className="posts-header">
//               <h2>Books Available for Trade</h2>
//               <button
//                 className="add-trade-button green-button"
//                 onClick={toggleAddTradeBook}
//               >
//                 + Add New Trade
//               </button>
//             </div>
//             <div className="trade-books">
//               {profileData.tradeBooks.map((book, index) => (
//                 <BookCard
//                   key={index}
//                   title={book.title}
//                   author={book.author}
//                   description={book.description}
//                   image={book.image}
//                 />
//               ))}
//             </div>
//           </section>
//         )}
//       </div>

//       {/* Side Panel for Adding Trade Book */}
//       {isAddingTradeBook && (
//         <AddNewTradePanel
//           onClose={toggleAddTradeBook}
//           onSave={handleAddTradeBook}
//         />
//       )}

//       {/* Side Panel for Editing Profile */}
//       {isEditingProfile && (
//         <EditProfilePanel
//           profileData={profileData}
//           onClose={toggleEditProfile}
//           onSave={handleProfileSave}
//         />
//       )}
//     </div>
//   );
// };

// export default MyLibrary;




///^works 

//some glitchess 
// import React, { useState } from "react";
// import "./MyLibrary.css";
// import "./BookShelf.css";
// import "./TradeSection.css";
// import "./EditProfilePanel.css";
// import EditProfilePanel from "./EditProfilePanel";
// import AddNewTradePanel from "./AddNewTradePanel";
// import TradePosts from "./TradePosts"; // Import the new component

// const MyLibrary = () => {
//   const [isEditingProfile, setIsEditingProfile] = useState(false);
//   const [isAddingTradeBook, setIsAddingTradeBook] = useState(false);
//   const [activeTab, setActiveTab] = useState("Books");
//   const [profileData, setProfileData] = useState({
//     name: "Anastasia",
//     pronouns: "",
//     about: "Avid reader and book lover.",
//     photo: "/path/to/default-profile.png",
//     tradeBooks: [
//       {
//         title: "The Great Gatsby",
//         author: "F. Scott Fitzgerald",
//         description: "A classic novel about the American dream.",
//         image: "/path/to/gatsby-image.png",
//       },
//       {
//         title: "To Kill a Mockingbird",
//         author: "Harper Lee",
//         description: "A novel about justice and morality.",
//         image: "/path/to/mockingbird-image.png",
//       },
//     ],
//   });

//   const toggleEditProfile = () => {
//     setIsEditingProfile(!isEditingProfile);
//     setIsAddingTradeBook(false);
//   };

//   const toggleAddTradeBook = () => {
//     setIsAddingTradeBook(!isAddingTradeBook);
//     setIsEditingProfile(false);
//   };

//   const handleProfileSave = (newData) => {
//     setProfileData(newData);
//     setIsEditingProfile(false);
//   };

//   const handleAddTradeBook = (newBook) => {
//     if (!newBook.title || !newBook.author || !newBook.description || !newBook.image) {
//       alert("Please fill in all fields to add a new trade book.");
//       return;
//     }
//     setProfileData({
//       ...profileData,
//       tradeBooks: [...profileData.tradeBooks, newBook],
//     });
//     setIsAddingTradeBook(false);
//   };

//   return (
//     <div className="library-layout">
//       {/* Profile Section */}
//       <section className="profile-header">
//         <div className="profile-photo">
//           <img
//             src={profileData.photo || "/path/to/default-profile.png"}
//             alt="User Avatar"
//             className="profile-image"
//           />
//         </div>
//         <div className="profile-info">
//           <h1>{profileData.name}</h1>
//           <p className="bio">{profileData.about}</p>
//           <button className="edit-button" onClick={toggleEditProfile}>
//             Edit Profile
//           </button>
//         </div>
//       </section>

//       {/* Navigation Tabs */}
//       <ul className="tab-navigation">
//         <li
//           className={activeTab === "Books" ? "active-tab" : ""}
//           onClick={() => setActiveTab("Books")}
//         >
//           Books
//         </li>
//         <li
//           className={activeTab === "Clubs" ? "active-tab" : ""}
//           onClick={() => setActiveTab("Clubs")}
//         >
//           Clubs
//         </li>
//         <li
//           className={activeTab === "Reviews" ? "active-tab" : ""}
//           onClick={() => setActiveTab("Reviews")}
//         >
//           Reviews
//         </li>
//         <li
//           className={activeTab === "Posts" ? "active-tab" : ""}
//           onClick={() => setActiveTab("Posts")}
//         >
//           Posts
//         </li>
//       </ul>

//       {/* Main Content */}
//       <div className="main-content">
//         {activeTab === "Books" && (
//           <section className="book-library">
//             <h2>My Book Library</h2>
//             <div className="shelves">
//               <div className="shelf">
//                 <div className="book">Book 1</div>
//                 <div className="book">Book 2</div>
//                 <div className="book">Book 3</div>
//               </div>
//               <div className="shelf">
//                 <div className="book">Book 4</div>
//                 <div className="book">Book 5</div>
//                 <div className="book">Book 6</div>
//               </div>
//             </div>
//             <button className="add-to-library-btn">Add New Book</button>
//           </section>
//         )}

//         {activeTab === "Clubs" && (
//           <section className="clubs-section">
//             <h2>Your Clubs</h2>
//             <div className="club-card">
//               <h3>Fantasy Club</h3>
//               <p>Join discussions about your favorite fantasy books.</p>
//             </div>
//             <button className="join-club-btn">Join Club</button>
//           </section>
//         )}

//         {activeTab === "Reviews" && (
//           <section className="reviews-section">
//             <h2>Your Reviews</h2>
//             <div className="review-card">
//               <h4>Book Title</h4>
//               <p>Great book, highly recommend!</p>
//               <span className="rating">★★★★☆</span>
//             </div>
//             <button className="add-review-btn">Add New Review</button>
//           </section>
//         )}

//         {activeTab === "Posts" && (
//           <TradePosts
//             tradeBooks={profileData.tradeBooks}
//             onAddTradeClick={toggleAddTradeBook}
//           />
//         )}
//       </div>

//       {/* Side Panels */}
//       {isAddingTradeBook && (
//         <AddNewTradePanel
//           onClose={toggleAddTradeBook}
//           onSave={handleAddTradeBook}
//         />
//       )}
//       {isEditingProfile && (
//         <EditProfilePanel
//           profileData={profileData}
//           onClose={toggleEditProfile}
//           onSave={handleProfileSave}
//         />
//       )}
//     </div>
//   );
// };

// export default MyLibrary;

//MY CURRENT CHOICE 
import React, { useState } from "react";
import "./MyLibrary.css";
import "./BookShelf.css";
import "./EditProfilePanel.css";
import EditProfilePanel from "./EditProfilePanel";
import AddNewTradePanel from "./AddNewTradePanel";
import BookCard from "../components/Bookcard";

const MyLibrary = () => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isAddingTradeBook, setIsAddingTradeBook] = useState(false);
  const [activeTab, setActiveTab] = useState("Books");
  const [profileData, setProfileData] = useState({
    name: "Anastasia",
    pronouns: "",
    about: "Avid reader and book lover.",
    photo: "/path/to/default-profile.png",
    tradeBooks: [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "A classic novel about the American dream.",
        image: "/path/to/gatsby-image.png",
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        description: "A novel about justice and morality.",
        image: "/path/to/mockingbird-image.png",
      },
    ],
  });

  const toggleEditProfile = () => {
    setIsEditingProfile(!isEditingProfile);
  };

  const toggleAddTradeBook = () => {
    setIsAddingTradeBook(!isAddingTradeBook);
  };

  const handleProfileSave = (newData) => {
    setProfileData(newData);
    setIsEditingProfile(false); // Close the panel after saving
  };

  const handleAddTradeBook = (newBook) => {
    setProfileData({
      ...profileData,
      tradeBooks: [...profileData.tradeBooks, newBook],
    });
    setIsAddingTradeBook(false); // Close the panel after saving
  };

  return (
    <div className="library-layout">
      {/* Profile Section */}
      <section className="profile-header">
        <div className="profile-photo">
          <img
            src={profileData.photo || "/path/to/default-profile.png"}
            alt="User Avatar"
            className="profile-image"
          />
        </div>
        <div className="profile-info">
          <h1>{profileData.name}</h1>
          <p className="bio">{profileData.about}</p>
          <button className="edit-button" onClick={toggleEditProfile}>
            Edit Profile
          </button>
        </div>
      </section>

      {/* Navigation Tabs */}
      <ul className="tab-navigation">
        <li
          className={activeTab === "Books" ? "active-tab" : ""}
          onClick={() => setActiveTab("Books")}
        >
          Books
        </li>
        <li
          className={activeTab === "Clubs" ? "active-tab" : ""}
          onClick={() => setActiveTab("Clubs")}
        >
          Clubs
        </li>
        <li
          className={activeTab === "Reviews" ? "active-tab" : ""}
          onClick={() => setActiveTab("Reviews")}
        >
          Reviews
        </li>
        <li
          className={activeTab === "Posts" ? "active-tab" : ""}
          onClick={() => setActiveTab("Posts")}
        >
          Posts
        </li>
      </ul>

      {/* Main Content */}
      <div className="main-content">
        {activeTab === "Books" && (
          <section className="book-library">
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
            <button className="add-to-library-btn">Add New Book</button>
          </section>
        )}

        {activeTab === "Clubs" && (
          <section className="clubs-section">
            <h2>Your Clubs</h2>
            <div className="club-card">
              <h3>Fantasy Club</h3>
              <p>Join discussions about your favorite fantasy books.</p>
            </div>
            <button className="join-club-btn">Join Club</button>
          </section>
        )}

        {activeTab === "Reviews" && (
          <section className="reviews-section">
            <h2>Your Reviews</h2>
            <div className="review-card">
              <h4>Book Title</h4>
              <p>Great book, highly recommend!</p>
              <span className="rating">★★★★☆</span>
            </div>
            <button className="add-review-btn">Add New Review</button>
          </section>
        )}

        {activeTab === "Posts" && (
          <section className="posts-section">
            <div className="posts-header">
              <h2>Books Available for Trade</h2>
              <button
                className="add-trade-button green-button"
                onClick={toggleAddTradeBook}
              >
                + Add New Trade
              </button>
            </div>
            <div className="trade-books">
              {profileData.tradeBooks.map((book, index) => (
                <BookCard
                  key={index}
                  title={book.title}
                  author={book.author}
                  description={book.description}
                  image={book.image}
                />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Side Panel for Adding Trade Book */}
      {isAddingTradeBook && (
        <AddNewTradePanel
          onClose={toggleAddTradeBook}
          onSave={handleAddTradeBook}
        />
      )}

      {/* Side Panel for Editing Profile */}
      {isEditingProfile && (
        <EditProfilePanel
          profileData={profileData}
          onClose={toggleEditProfile}
          onSave={handleProfileSave}
        />
      )}
    </div>
  );
};

export default MyLibrary;


//same thing but saves if changed 
// import React, { useState } from "react";
// import "./MyLibrary.css";
// import "./BookShelf.css";
// import "./TradeSection.css";
// import "./EditProfilePanel.css";
// import EditProfilePanel from "./EditProfilePanel";
// import AddNewTradePanel from "./AddNewTradePanel";
// import BookCard from "../components/Bookcard";

// const MyLibrary = () => {
//   const [isEditingProfile, setIsEditingProfile] = useState(false);
//   const [isAddingTradeBook, setIsAddingTradeBook] = useState(false);
//   const [activeTab, setActiveTab] = useState("Books");
//   const [profileData, setProfileData] = useState({
//     name: "Anastasia",
//     pronouns: "",
//     about: "Avid reader and book lover.",
//     photo: "/path/to/default-profile.png",
//     tradeBooks: [
//       {
//         title: "The Great Gatsby",
//         author: "F. Scott Fitzgerald",
//         description: "A classic novel about the American dream.",
//         image: "/path/to/gatsby-image.png",
//       },
//       {
//         title: "To Kill a Mockingbird",
//         author: "Harper Lee",
//         description: "A novel about justice and morality.",
//         image: "/path/to/mockingbird-image.png",
//       },
//     ],
//   });

//   const toggleEditProfile = () => {
//     setIsEditingProfile(!isEditingProfile);
//   };

//   const toggleAddTradeBook = () => {
//     setIsAddingTradeBook(!isAddingTradeBook);
//   };

//   const handleProfileSave = (newData) => {
//     setProfileData(newData);
//     setIsEditingProfile(false); // Close the panel after saving
//   };

//   const handleAddTradeBook = (newBook) => {
//     if (!newBook.title || !newBook.author || !newBook.description || !newBook.image) {
//       alert("Please fill in all fields to add a new trade book.");
//       return;
//     }
//     setProfileData({
//       ...profileData,
//       tradeBooks: [...profileData.tradeBooks, newBook],
//     });
//     setIsAddingTradeBook(false); // Close the panel after saving
//   };

//   return (
//     <div className="library-layout">
//       {/* Profile Section */}
//       <section className="profile-header">
//         <div className="profile-photo">
//           <img
//             src={profileData.photo || "/path/to/default-profile.png"}
//             alt="User Avatar"
//             className="profile-image"
//           />
//         </div>
//         <div className="profile-info">
//           <h1>{profileData.name}</h1>
//           <p className="bio">{profileData.about}</p>
//           <button className="edit-button" onClick={toggleEditProfile}>
//             Edit Profile
//           </button>
//         </div>
//       </section>

//       {/* Navigation Tabs */}
//       <ul className="tab-navigation">
//         <li
//           className={activeTab === "Books" ? "active-tab" : ""}
//           onClick={() => setActiveTab("Books")}
//         >
//           Books
//         </li>
//         <li
//           className={activeTab === "Clubs" ? "active-tab" : ""}
//           onClick={() => setActiveTab("Clubs")}
//         >
//           Clubs
//         </li>
//         <li
//           className={activeTab === "Reviews" ? "active-tab" : ""}
//           onClick={() => setActiveTab("Reviews")}
//         >
//           Reviews
//         </li>
//         <li
//           className={activeTab === "Posts" ? "active-tab" : ""}
//           onClick={() => setActiveTab("Posts")}
//         >
//           Posts
//         </li>
//       </ul>

//       {/* Main Content */}
//       <div className="main-content">
//         {activeTab === "Books" && (
//           <section className="book-library">
//             <h2>My Book Library</h2>
//             <div className="shelves">
//               <div className="shelf">
//                 <div className="book">Book 1</div>
//                 <div className="book">Book 2</div>
//                 <div className="book">Book 3</div>
//               </div>
//               <div className="shelf">
//                 <div className="book">Book 4</div>
//                 <div className="book">Book 5</div>
//                 <div className="book">Book 6</div>
//               </div>
//             </div>
//             <button className="add-to-library-btn">Add New Book</button>
//           </section>
//         )}

//         {activeTab === "Clubs" && (
//           <section className="clubs-section">
//             <h2>Your Clubs</h2>
//             <div className="club-card">
//               <h3>Fantasy Club</h3>
//               <p>Join discussions about your favorite fantasy books.</p>
//             </div>
//             <button className="join-club-btn">Join Club</button>
//           </section>
//         )}

//         {activeTab === "Reviews" && (
//           <section className="reviews-section">
//             <h2>Your Reviews</h2>
//             <div className="review-card">
//               <h4>Book Title</h4>
//               <p>Great book, highly recommend!</p>
//               <span className="rating">★★★★☆</span>
//             </div>
//             <button className="add-review-btn">Add New Review</button>
//           </section>
//         )}

//         {activeTab === "Posts" && (
//           <section className="posts-section">
//             <div className="posts-header">
//               <h2>Books Available for Trade</h2>
//               <button
//                 className="add-trade-button green-button"
//                 onClick={toggleAddTradeBook}
//               >
//                 + Add New Trade
//               </button>
//             </div>
//             <div className="trade-books">
//               {profileData.tradeBooks.map((book, index) => (
//                 <BookCard
//                   key={index}
//                   title={book.title}
//                   author={book.author}
//                   description={book.description}
//                   image={book.image}
//                 />
//               ))}
//             </div>
//           </section>
//         )}
//       </div>

//       {/* Side Panel for Adding Trade Book */}
//       {isAddingTradeBook && (
//         <AddNewTradePanel
//           onClose={toggleAddTradeBook}
//           onSave={handleAddTradeBook} // Pass the handler function
//         />
//       )}

//       {/* Side Panel for Editing Profile */}
//       {isEditingProfile && (
//         <EditProfilePanel
//           profileData={profileData}
//           onClose={toggleEditProfile}
//           onSave={handleProfileSave}
//         />
//       )}
//     </div>
//   );
// };

// export default MyLibrary;















