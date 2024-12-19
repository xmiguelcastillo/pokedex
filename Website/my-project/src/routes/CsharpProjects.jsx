import React, { useEffect, useRef } from 'react';
import '../App.css';
import ProjectsBar from '../ProjectsBar';
import TopBar from './TopBar';
import HeadingBar from './HeadingBar';
import { Link } from "react-router-dom";
import Prism from 'prismjs'; // Import Prism.js for syntax highlighting
import 'prismjs/themes/prism.css'; // Import default Prism CSS
import CsharpDisplay from './CsharpDisplay';

function CsharpProjects() {

  return (
    <div className="flex flex-col items-center  h-full">
      <HeadingBar />
      <CsharpDisplay />
    </div>
  );
}

export default CsharpProjects;
