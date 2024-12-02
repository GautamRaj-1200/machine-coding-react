import React from "react";
import SimpleResponsiveNavbar from "./components/SimpleResponsiveNavbar/SimpleResponsiveNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FileUpload from "./components/FileUpload/FileUpload";
import DragAndDrop from "./components/DragAnDrop/DragAndDrop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/simple-navbar" element={<SimpleResponsiveNavbar />} />
      <Route path="/file-upload" element={<FileUpload />} />
      <Route path="/drag-drop" element={<DragAndDrop />} />
    </Routes>
  );
};

export default App;
