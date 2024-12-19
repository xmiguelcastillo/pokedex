import React from 'react'

function TopBar() {
  return (
    <nav className="bg-[#111111]  ">
      <ul className="flex justify-between  text-white">

        <li><a href="#about" className="hover:text-[#015c81]">About</a></li>
        <li><a href="#portfolio" className="hover:text-lime-400">Portfolio</a></li>
        <li><a href="#projects" className="hover:text-lime-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-lime-400">Contact Me</a></li>
      </ul>
    </nav>
  )
}

export default TopBar
