import React from "react";
import SimpleResponsiveNavbar from "./components/SimpleResponsiveNavbar/SimpleResponsiveNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FileUpload from "./components/FileUpload/FileUpload";
import DragAndDrop from "./components/DragAnDrop/DragAndDrop";
import DragAndDropWithUpload from "./components/DragAndDropWithUpload/DragAndDropWithUpload";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/simple-navbar" element={<SimpleResponsiveNavbar />} />
      <Route path="/file-upload" element={<FileUpload />} />
      <Route path="/drag-drop" element={<DragAndDrop />} />
      <Route path="/drag-drop-upload" element={<DragAndDropWithUpload />} />
    </Routes>
  );
};

export default App;
