import React from "react";
import { Link } from "react-router-dom";

import "../style/home.css";

function App() {
  return (
    <>
      <div className="home-page-container">
        <h1>START PAGE </h1>
        <h2>A simple pagination + API user interface</h2>
        <br />
        <Link to="/users">
          <button>Get Started</button>
        </Link>
      </div>
    </>
  );
}

export default App;
