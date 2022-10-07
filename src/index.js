import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Join from "./routes/Join";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <div className="flex gap-2">
        {/* <span>
          <Link to="/"> App</Link>
        </span>
        <span>
          <Link to="/home"> Home</Link>
        </span>
        <span>
          <Link to="/about/1"> About</Link>
        </span> */}
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about/:id" element={<About />}></Route>
        <Route path="/join" element={<Join />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
