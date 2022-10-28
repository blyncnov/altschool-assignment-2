import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import App from "./pages/Home";
import Users from "./pages/users";
import User from "./pages/users/user";
import ErrorPage from "./pages/404";

// CSS
import "./style/index.css";

const RandomUserAPI = "https://randomuser.me/api/?results=50";

const IndexPage = () => {
  const [resultFromApi, setResultFromApi] = useState([]);

  useEffect(() => {
    FetchAPIFromServer();
  }, []);

  const router = createBrowserRouter([
    {
      path: "*",
      element: <ErrorPage />,
    },
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/users",
      element: <Users resultFromApi={resultFromApi} />,
    },
    {
      path: "/users/:id",
      element: <User resultFromApi={resultFromApi} />,
    },
  ]);

  const FetchAPIFromServer = async () => {
    const response = await fetch(RandomUserAPI);
    const result = await response.json();
    setResultFromApi(result.results);
  };

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IndexPage />
  </React.StrictMode>
);
