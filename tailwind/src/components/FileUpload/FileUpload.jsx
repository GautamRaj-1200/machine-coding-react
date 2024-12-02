import React, { useState } from "react";

const FileUpload = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileError, setFileError] = useState(null);

  const handleFileChange = (event) => {
    setFileError("");
    const file = event.target.files[0];

    // Check file type
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    if (!allowedTypes.includes(file?.type)) {
      setFileError("Only JPG, PNG and PDF files are allowed");
      return;
    }

    // Check file size
    if (file?.size > 5 * 1024 * 1024) {
      setFileError("File size must be less than 5 MB");
      return;
    }

    setUploadedFile(file);
  };

  const handleClearFile = () => {
    setUploadedFile(null);
    setFileError(null);
    document.getElementById("file").value = "";
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-slate-800 text-slate-200">
      <div className="border border-dashed border-slate-300 w-[60%] h-96 rounded-md flex flex-col gap-4 justify-center items-center">
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

        <div className="flex items-center gap-2">
          {uploadedFile && (
            <>
              <p>{uploadedFile.name}</p>
              <p>{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
            </>
          )}
        </div>

        {fileError && <p className="font-medium text-rose-400">{fileError}</p>}

        {uploadedFile && (
          <button
            className="px-2 py-1 font-semibold transition-colors rounded-md bg-rose-700 hover:bg-rose-800"
            onClick={handleClearFile}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
