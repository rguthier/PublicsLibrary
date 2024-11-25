export default function ErrorPage() {
  return (
    <div id="error-page" style={{ color: "white" }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <a href="/">
        <button className="cta-button">Go home</button>
      </a>
    </div>
  );
}
