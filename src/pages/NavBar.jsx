import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/create">Create New</Link>
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