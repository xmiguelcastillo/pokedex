import React, { useEffect, useRef } from 'react';
import '../App.css';
import TopBar from './TopBar';
import HeadingBar from './HeadingBar';
import { Link } from "react-router-dom";
import Prism from 'prismjs'; // Import Prism.js for syntax highlighting
import 'prismjs/themes/prism.css'; // Import default Prism CSS
import Astar from './PythonProjects/Astar'
import Detection from './PythonProjects/Detection'
function PythonProjects() {

  return (
    <div className="flex flex-col items-center  h-full">
      <HeadingBar />
      <Link className='' to="/python/astar">      <Astar />
        <Detection />
        <Link className='' to="/python"></Link >
      </Link >
    </div >
  );
}

export default PythonProjects;
