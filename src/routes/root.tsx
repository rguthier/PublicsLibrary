import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
      <div id="container">
        <div id="sidebar">
          <h1>The Public's Library</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={`/`}>Profile</Link>
              </li>
              <li>
                <Link to={`/browse`}>Browse</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
      </div>
    );
  }  