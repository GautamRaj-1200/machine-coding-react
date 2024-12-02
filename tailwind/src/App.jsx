import React from "react";
import SimpleResponsiveNavbar from "./components/SimpleResponsiveNavbar/SimpleResponsiveNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/simple-navbar" element={<SimpleResponsiveNavbar />} />
    </Routes>
  );
};

export default App;
