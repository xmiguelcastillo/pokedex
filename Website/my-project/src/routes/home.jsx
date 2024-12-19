// src/App.js
import '../App.css'
import ProjectsBar from '../ProjectsBar'
import TopBar from './TopBar'
import HeadingBar from './HeadingBar'
import PythonDisplay from './PythonDisplay'
import CsharpDisplay from './CsharpDisplay'
import CppDisplay from './CppDisplay'
import { Link } from "react-router-dom";
import CsharpProjects from './CsharpProjects'


function App() {
  return (
    <div className="flex flex-col items-center bg-[#101010] h-full ">

      <HeadingBar />

      <TopBar />

      <Link className='' to="/python"><PythonDisplay /></Link >

      <Link className='' to="/csharp"><CsharpDisplay /></Link >

      <CppDisplay />
    </div>
  )
}

export default App
