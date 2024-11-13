export default function Login() {
  return (
    <div className="login-container">
      <h2 className="form-title"> Login </h2>
      <div className="social-login">
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
      </p>

      <form action="#" className="login-form">
        <div className="input-wrapper">
          <input
            type="email"
            placeholder="Email address"
            className="input-field"
            required
          />
          <i className="material-symbols-rounded"></i>
        </div>

        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            required
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
