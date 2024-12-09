import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "../components/Bookcard";
import Add from "../pages/sqlpages/Add";

export default function Dashboard() {
  const getUser = () => {
    const userString = localStorage.getItem("user");
    const userUser = JSON.parse(userString);
    return userUser?.user;
  };
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const username = getUser();
  const token = getToken();
  const [userData, setUserData] = useState({
    userData: {
      user_id: "",
      username: "",
      zip_code: "",
      favorite_genres: "",
    },
    books: [],
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.post("http://localhost:8800/userdata", {
          username: username,
          token: token,
        });
        console.log(response.data);
        setUserData(response.data);
      } catch (err) {
        console.log(err);
        return;
      }
    };
    fetchUserData();
  }, []);

  return (
    <div
      className="nav-container"
      style={{ backgroundColor: "#f9f7f4", padding: "10px" }}
    >
      <h1 style={{ textAlign: "center" }}>Dashboard</h1>
      <h2>User info</h2>
      <div>
        <p>Username: {userData.userData.username}</p>
        <p>User ID: {userData.userData.user_id}</p>
        <p>Zipcode: {userData.userData.zip_code}</p>
        <p>Favorite genres: {userData.userData.favorite_genres}</p>
        <button className="trade-button">Edit</button>
      </div>
      <br />
      <h2 style={{ padding: "5px" }}>My Books</h2>
      <div className="my-books">
        {userData.books.map((bookItem) => (
          <BookCard
            title={bookItem.title}
            author={bookItem.author}
            isMine={true}
            id={bookItem.book_id}
          />
        ))}
      </div>
      <br />
      <Add />
    </div>
  );
}
