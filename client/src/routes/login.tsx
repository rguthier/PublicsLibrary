import axios from "axios";
import { useState } from "react";

export default function Login({ setToken }: { setToken: Function }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  async function loginUser(credentials: {
    username: string;
    password: string;
  }) {
    try {
      const response = await axios.post("http://localhost:8800/login", {
        username: credentials.username,
        password: credentials.password,
      });
      console.log(response);
      return response.data;
    } catch (err) {
      console.log(err);
      return;
    }

    // return fetch("http://localhost:8800/login", {
    //   method: "POST",
    //   body: JSON.stringify(credentials),
    // }).then((data) => data.json());
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const credentials = { username: username, password: password };
    const token = await loginUser(credentials);
    if (token == "error") {
      console.log("here");
      setError(true);
    } else {
      setToken(token);
      setError(false);
    }
  };

  return (
    <div className="login-container">
      <h2 className="form-title"> Login </h2>
      {/* <div className="social-login">
        <button className="social-button">
          <img src="google.svg" alt="Google" className="social-icon" />
          Google
        </button>
        <button className="social-button">
          <img src="apple.svg" alt="Apple" className="social-icon" />
          Apple
        </button>
      </div>
      <p className="seperator">
        <span>or</span>
      </p> */}

      {error ? (
        <div className="error-message">
          <p>
            There was an error with your login. If you have an account, try
            again. If you do not have an account, make one{" "}
            <a href="/register">here</a>
          </p>
        </div>
      ) : null}

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Email address"
            className="input-field"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className="material-symbols-rounded">lock</i>
        </div>
        <a href="#" className="forgot-pass-link">
          Forgot Password?
        </a>
        <button className="login-button">Log in</button>
      </form>

      <p className="signup-text">
        Don't have an account? <a href="#">SignUp now</a>
      </p>
    </div>
  );
}
