import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "../components/Bookcard";

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
        setUserData(response.data);
      } catch (err) {
        console.log(err);
        return;
      }
    };
    fetchUserData();
    console.log(userData);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>User info</h2>
      <ul>
        <li>Username: {userData.userData.username}</li>
        <li>User ID: {userData.userData.user_id}</li>
        <li>Zipcode: {userData.userData.zip_code}</li>
        <li>Favorite genres: {userData.userData.favorite_genres}</li>
      </ul>
      <div>
        {userData.books.map((bookItem) => (
          <BookCard
            title={bookItem.title}
            author={bookItem.author}
            description="Description goes here"
          />
        ))}
      </div>
    </div>
  );
}
