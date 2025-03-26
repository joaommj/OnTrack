import React, { useEffect, useState } from 'react';
import homeImg from "../assets/bikehome1.png";
import backtop from "../assets/back-top.png";
import deletebtn from "../assets/delete.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5005/categories")
      .then((res) => {
        console.log(res.data);
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (event, id) => {
    event.preventDefault();

    if (!id) {
      console.error("No ID provided for deletion.");
      return;
    }

    try {
      await axios.delete(`http://localhost:5005/categories/${id}`);

      // Remove the deleted item from the state without reloading
      setCategories((prevCategories) =>
        prevCategories.filter((category) => category.id !== id)
      );
      
      // Optionally, navigate after deletion if needed, or just let the UI update
      // navigate("/"); // You can leave this or remove if you want to stay on the same page
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <main>
      {/* Home Image Section */}
      <section className="home-img">
        <img src={homeImg} alt="home-image" />
        <h3>RIDE FASTER, GO FURTHER, STAY AHEAD!</h3>
      </section>

      {/* Category Grid */}
      <section className="categ-container">
        {categories.map((oneCategory) => (
          <div className="category-info" key={oneCategory.id}>
            <Link to={`/category/${oneCategory.name}`}>
              <h4>{oneCategory.name}</h4>
              <button onClick={(event) => handleDelete(event, oneCategory.id)}>
                <img src={deletebtn} alt="delete button" />
              </button>
              <img src={oneCategory.category_url} alt="Category" />
            </Link>
          </div>
        ))}
      </section>

      {/* Back to Top Button */}
      <button
        className="back-to-top-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img src={backtop} alt="Back to top button" />
      </button>
    </main>
  );
};

export default HomePage;