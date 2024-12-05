import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error";
import Login from "./routes/login.js";
import BookPage from "./sql/sqlpages/BookPage.jsx";
import Add from "./sql/sqlpages/Add.jsx";
import Update from "./sql/sqlpages/Update.jsx";
import Dashboard from "./routes/dashboard.tsx";
import { useState } from "react";
import Register from "./routes/register.tsx";

function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: { token: string }) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    token,
    setToken: saveToken,
  };
}

export default function App() {
  const { token, setToken } = useToken();
  console.log("token: " + token);

  const LoggedInRoutes = () => {
    return token != undefined ? <Outlet /> : <Login setToken={setToken} />;
  };

  const LoggedOutRoutes = () => {
    return !token ? <Outlet /> : <Navigate to="/" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route path="/" element={<Root />} />
          <Route path="/browse" element={<BookPage />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<LoggedOutRoutes />}>
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Register setToken={setToken} />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);

//old router
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/bookpage",  // Directly adding the /bookpage route here
//     element: <BookPage />,  // Renders the BookPage component when visiting /bookpage
//   },
//   {
//     path: "/add",
//     element: <Add />,
//   },
//   {
//     path: "/update/:id",
//     element: <Update />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );