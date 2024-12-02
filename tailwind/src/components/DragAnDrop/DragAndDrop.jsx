import React, { useState } from "react";
{
  /*
    Key differences between dragenter and dragover:

    dragenter:
    - Fires once when dragged item enters the drop target
    - Used for initial state changes
    - Better for performance-critical operations

    dragover:
    - Fires continuously (many times per second) while item is over the drop target
    - Used for real-time visual feedback
    - Can impact performance if handling complex operations
    - Required for enabling drop functionality

    Best practice: Use dragenter for one-time state changes and dragover only when continuous updates are needed. Always call preventDefault() on dragover to enable dropping. 
*/
}
const DragAndDrop = () => {
  const [dragged, setDragged] = useState(false);
  const [file, setFile] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragged(true);
    } else if (e.type === "dragleave" || e.type === "drop") {
      setDragged(false);

      if (e.type === "drop") {
        const droppedFile = e.dataTransfer.files[0];
        setFile(droppedFile);
      }
    }
  };

  const handleClear = () => {
    setFile(null);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-slate-800 text-slate-200">
      <div
        className={`w-[60%] h-60 border border-dashed border-slate-300 flex flex-col gap-4 justify-center items-center transition-colors duration-200 ${
          dragged ? "bg-slate-500" : "bg-slate-800"
        }`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrag}
      >
        <h2 className="text-4xl font-semibold">
          {file ? "File Uploaded!" : "Drag and Drop"}
        </h2>

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
      </div>
    </div>
  );
};

export default DragAndDrop;
