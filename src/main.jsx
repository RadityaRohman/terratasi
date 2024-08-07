import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Organik from "./sections/About/TrashTypes/Organik";
import Anorganik from "./sections/About/TrashTypes/Anorganik";
import Bahan from "./sections/About/TrashTypes/Bahan";
import Galeri from "./sections/Galeri/Galeri.jsx";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/organik" element={<Organik />} />
        <Route path="/anorganik" element={<Anorganik />} />
        <Route path="/bahan" element={<Bahan />} />
        <Route path="/galeri" element={<Galeri />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
