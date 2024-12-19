import React, { useEffect, useRef } from 'react';
import '../App.css';
import ProjectsBar from '../ProjectsBar';
import TopBar from './TopBar';
import HeadingBar from './HeadingBar';
import { Link } from "react-router-dom";
import Prism from 'prismjs'; // Import Prism.js for syntax highlighting
import 'prismjs/themes/prism.css'; // Import default Prism CSS

function PythonProjects() {
  const codeRef = useRef(null); // Reference for the code block

  useEffect(() => {
    Prism.highlightAll(); // Highlight the code block when the component mounts
  }, []);

  const handleCopyClick = () => {
    // Check if the code block exists
    if (codeRef.current) {
      const text = codeRef.current.textContent;
      navigator.clipboard.writeText(text) // Use the Clipboard API to copy text
        .then(() => {
          alert("Code copied to clipboard!"); // Show feedback
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    }
  };

  return (
    <div className="flex flex-col items-center  h-full">
      <HeadingBar />
      <ProjectsBar />

      <div className="relative p-6 mt-6 rounded-lg shadow-lg w-[500px] max-w-4xl bg-indigo-800">
        {/* Copy Button */}
        <button
          onClick={handleCopyClick}
          className="absolute top-2 right-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          aria-label="Copy code to clipboard"
        >
          Copy Code
        </button>

        {/* Display code block with syntax highlighting */}
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
          <code ref={codeRef} className=" {color: red} language-javascript">
            {`
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci Sequence up to 10:");
for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}
            `}
          </code>
        </pre>
      </div>
    </div>
  );
}

export default PythonProjects;
