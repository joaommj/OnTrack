
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons
const NavBar = () => {
  const [bicycle, setBicycle] = useState([]); // Store bicycle data
  const [query, setQuery] = useState(""); // Search query
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar toggle
  const location = useLocation(); // Get the current pathname
  // Fetch bicycles on component mount
  useEffect(() => {
    async function getAllBicycle() {
      try {
        const res = await fetch("http://localhost:5005/bicycles");
        const parsed = await res.json();
        setBicycle(parsed); 
      } catch (error) {
        console.log(error);
      }
    }
    getAllBicycle();
  }, []);

  return (
    <>
    <nav className="navbar">
      <div className="nav-links">
        {/* Sidebar Toggle Button (Only show on category pages) */}
      {location.pathname.startsWith("/category") && (
          <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        )}
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/create">Create Post</Link>
        <Link to="/createcategory">Create Category</Link>
      </div>
      <div className='logo'>
        <img src={logo} alt="Logo image"/>
      </div>
      {/* Search Input */}
      <div className="nav-search">
        <input 
          type="text" 
          placeholder="Search..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {/* Sidebar (Only show on category pages) */}
      {location.pathname.startsWith("/category") && (
        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <h3>Categories</h3>
          <ul>
            <li><Link to="/category/Road">Road Bicycles</Link></li>
            <li><Link to="/category/Mountain">Mountain Bicycles</Link></li>
            <li><Link to="/category/Gravel">Gravel Bicycles</Link></li>
            <li><Link to="/category/Electric">Electric Bicycles</Link></li>
            <li><Link to="/category/Child">Child Bicycles</Link></li>
            <li><Link to="/category/Touring">Touring Bicycles</Link></li>
          </ul>
        </div>
      )}

      {/* Display search results */}
      {query && (
        <div className="search-dropdown">
          {bicycle
            .filter((oneBicycle) => 
              oneBicycle.model.toLowerCase().includes(query.toLowerCase())
            )
            .map((bicycle) => (
              <div key={bicycle.id} className="search-card" onClick={() => setQuery("")}>
                <Link to={`/details/${bicycle.id}`}>
                  <img src={bicycle.picture_url} alt={`image of ${bicycle.model}`} />
                  <h5>{bicycle.model}</h5>
                  <h6><em>{bicycle.category}</em></h6>
                </Link>
              </div>
            ))
          }
        </div>
      )}
      
      </nav>

      
    </>
  );
};

export default NavBar;
