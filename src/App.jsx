import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home"; // Replace with the actual path to your HomePage component
import LoginPage from "./Pages/Login"; // Replace with your login page component path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<LoginPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
