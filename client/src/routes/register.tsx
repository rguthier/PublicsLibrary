import axios from "axios";
import { useEffect, useState } from "react";

export default function Register({ setToken }: { setToken: Function }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [favoriteGenres, setFavoriteGengres] = useState("");

  const [passwordError, setPasswordError] = useState(false);
  const [zipcodeError, setZipcodeError] = useState(false);
  const [usernameExists, setUsernameExists] = useState(false);
  const [queryError, setQueryError] = useState(false);

  useEffect(() => {
    if (password != confirmPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }, [password, confirmPassword]);

  useEffect(() => {
    if (zipcode.length != 5 && zipcode.length != 0) {
      setZipcodeError(true);
    } else {
      setZipcodeError(false);
    }
  }, [zipcode]);

  async function registerUser(userInfo: {
    username: string;
    password: string;
    zipcode: string;
    favoriteGenres: string;
  }) {
    try {
      const response = await axios.post(
        "http://localhost:8800/register",
        userInfo
      );
      return response.data;
    } catch (err) {
      console.log(err);
      return;
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const userInfo = {
      username: username,
      password: password,
      zipcode: zipcode,
      favoriteGenres: favoriteGenres,
    };
    const response = await registerUser(userInfo);
    if (response?.error) {
      switch (response.error) {
        case "query":
          setQueryError(true);
          break;
        case "username":
          setUsernameExists(true);
      }
    } else {
      alert(
        "Account successfully created. We will now direct you to the homepage"
      );
      setToken(response);
    }
  };

  return (
    <div className="login-container">
      <h2 className="form-title">User Registration</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Username"
            className="input-field"
            name="username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Confirm password"
            className="input-field"
            name="confirm_password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Zipcode (optional)"
            className="input-field"
            name="zipcode"
            onChange={(e) => setZipcode(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Favorite genres (optional)"
            className="input-field"
            name="favorite_genres"
            onChange={(e) => setFavoriteGengres(e.target.value)}
          />
        </div>
        {passwordError ? (
          <div className="error-message">
            <p>Error: passwords much match</p>
          </div>
        ) : null}
        {zipcodeError ? (
          <div className="error-message">
            <p>Error: invalid zipcode</p>
          </div>
        ) : null}
        {queryError ? (
          <div className="error-message">
            Error creating account. Please try again later.
          </div>
        ) : null}
        {usernameExists ? (
          <div className="error-message">
            Username already exists. Please choose a different username. Or, if
            this is you, <a href="/login">login here</a>
          </div>
        ) : null}
        <button className="login-button">Register</button>
      </form>

      <p className="signup-text">
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
}
