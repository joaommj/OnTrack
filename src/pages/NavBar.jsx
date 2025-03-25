import React from 'react';
import { Link } from 'react-router-dom';
import homeBtn from "../assets/bike-icon.png";
import aboutBtn from "../assets/abou-icon1.png";
import addBtn from "../assets/add-icon.png";
const NavBar = () => {
  return (
    <nav className="navbar">
        <div className="nav-links">
            <Link to="/">
              <img src={homeBtn} alt={"homeBtn"}/>
            </Link>
            <Link to="/about">             
            About Us  
            </Link>
            <Link to="/create">             
             Create Post
            </Link>
        </div>
        <div className="nav-search">
            <input type="text" placeholder="Search..."/>
        </div>
        <div className="nav-logo">
            {/*<img src={} alt="Logo"/>*/}
        </div>
    </nav>
  )
}

export default NavBar