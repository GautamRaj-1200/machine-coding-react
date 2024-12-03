import React, { useState } from "react";

const DragAndDrop = () => {
  const [dragged, setDragged] = useState(false);
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState(null);

  const validateFile = (file) => {
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];

    if (!file) {
      setFileError("Please select a file");
      return false;
    }

    if (!allowedTypes.includes(file.type)) {
      setFileError("Only JPG, PNG and PDF files are allowed");
      return false;
    }
    if (file.size > 5 * 1024 * 1024) {
      setFileError("File size must be less than 5 MB");
      return false;
    }
    return true;
  };

  const handleDrag = (e) => {
    e.preventDefault();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragged(true);
    } else if (e.type === "dragleave" || e.type === "drop") {
      setDragged(false);

      if (e.type === "drop") {
        setFileError(null); // Clear previous errors
        const droppedFile = e.dataTransfer.files[0];
        if (validateFile(droppedFile)) {
          setFile(droppedFile);
        }
      }
    }
  };

  const handleClear = () => {
    setFile(null);
    setFileError(null);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-slate-800 text-slate-200">
      <div
        className={`w-[60%] h-60 border border-dashed border-slate-300 flex flex-col gap-4 justify-center items-center transition-colors duration-200 ${
          dragged ? "bg-slate-700" : "bg-slate-800"
        } ${fileError ? "border-rose-500" : "border-slate-300"}`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrag}
      >
        <h2 className="text-4xl font-semibold">
          {file ? "File Uploaded!" : "Drag and Drop"}
        </h2>

        <p className="text-sm text-slate-400">
          Supported formats: JPG, PNG, PDF (max 5MB)
        </p>

        {file && (
          <div className="flex flex-col items-center gap-2">
            <p>{file.name}</p>
            <p>{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            <button
              onClick={handleClear}
              className="px-2 py-1 font-semibold transition-colors rounded-md bg-rose-700 hover:bg-rose-800"
            >
              Clear
            </button>
          </div>
        )}

        {fileError && (
          <p className="text-sm font-medium text-rose-500">{fileError}</p>
        )}
      </div>
    </div>
  );
};

export default DragAndDrop;
