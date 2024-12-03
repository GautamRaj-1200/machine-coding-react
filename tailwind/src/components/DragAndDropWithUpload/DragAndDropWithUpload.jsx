import React, { useState } from "react";

const DragAndDropWithUpload = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileError, setFileError] = useState(null);
  const [dragged, setDragged] = useState(false);

  const validateFile = (file) => {
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];

    if (!allowedTypes.includes(file?.type)) {
      setFileError("Only JPG, PNG and PDF files are allowed");
      return false;
    }
    if (file?.size > 5 * 1024 * 1024) {
      setFileError("File size must be less than 5 MB");
      return false;
    }
    return true;
  };

  const handleFileChange = (event) => {
    setFileError("");
    const file = event.target.files[0];
    if (validateFile(file)) {
      setUploadedFile(file);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragged(true);
    } else if (e.type === "dragleave" || e.type === "drop") {
      setDragged(false);

      if (e.type === "drop") {
        const file = e.dataTransfer.files[0];
        setFileError("");
        if (validateFile(file)) {
          setUploadedFile(file);
        }
      }
    }
  };

  const handleClear = () => {
    setUploadedFile(null);
    setFileError(null);
    document.getElementById("file").value = "";
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-slate-800 text-slate-200">
      <div
        className={`border border-dashed border-slate-300 w-[60%] h-96 rounded-md flex flex-col gap-4 justify-center items-center transition-colors duration-200 ${
          dragged ? "bg-slate-700" : "bg-slate-800"
        }`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrag}
      >
        <label
          htmlFor="file"
          className="px-4 py-2 font-semibold transition-all duration-200 rounded-sm cursor-pointer bg-slate-900 hover:scale-110"
        >
          Upload File
        </label>
        <input
          type="file"
          name="file"
          id="file"
          className="hidden"
          onChange={handleFileChange}
          accept=".jpg,.jpeg,.png,.pdf"
        />

        <p className="text-slate-400">or drag and drop here</p>

        {uploadedFile && (
          <div className="flex flex-col items-center gap-2">
            <p>{uploadedFile.name}</p>
            <p>{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
            <button
              onClick={handleClear}
              className="px-2 py-1 font-semibold transition-colors rounded-md bg-rose-700 hover:bg-rose-800"
            >
              Clear
            </button>
          </div>
        )}

        {fileError && <p className="font-medium text-rose-400">{fileError}</p>}
      </div>
    </div>
  );
};

export default DragAndDropWithUpload;
