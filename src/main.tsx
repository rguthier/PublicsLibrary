import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root"
import ErrorPage from "./error";
import BrowseBooks from "./routes/browse";
import RegistrationPage from "./routes/registration";
import ProfilePage from "./routes/profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/browse",
        element: <BrowseBooks />
      },
      {
        path: "/registration",
        element: <RegistrationPage />
      },
      {
        path: "/profile",
        element: <ProfilePage />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
