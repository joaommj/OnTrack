import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backtop from "../assets/back-top.png";

const CreateCategory = () => {
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState({
    name: "",
    category_url: null,
    link: ""
  });

  const navigate = useNavigate();

  // Handle form input changes
  function handleCreate(event) {
    const key = event.target.name;
    const infoSubmitted = event.target.value;
    setCategories({ ...categories, [key]: infoSubmitted });
  }

  // Submit form data to the backend
  async function handleCreateCategory(event) {
    event.preventDefault(); // Prevents page reload on submit
    try {
      //send the img to the cloudinary
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "Ontrack");
      data.append("cloud_name", "dzne6fm6i");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dzne6fm6i/image/upload",
        data
      );
      console.log("res: ", response.data);
      //here we send the category to create to the json server
      const res = await axios.post("http://localhost:5005/categories", {
        ...categories,
        category_url:response.data.secure_url
      });
      console.log("Created!", res.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
    window.scrollTo(0, 0); 
  };

  return (
    <div className="create-category-container">
      {/* Wrapper with background */}
      <section className="category-form-container">
        <h1>Create a Category</h1>
        <form className="category-form" onSubmit={handleCreateCategory}>
          <div className="category-group">
            <label htmlFor="name">Category Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              placeholder="Enter category name" 
              value={categories.name} 
              onChange={handleCreate}
            />
          </div>
          <div className="category-group">
            <label htmlFor="category_url">Category Image URL</label>
            <input 
              type="file" 
              id="category_url" 
              name="category_url" 
              required 
              placeholder="Enter image URL" 
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="category-group">
            <label htmlFor="link">Category Link</label>
            <input 
              type="text" 
              id="link" 
              name="link" 
              required 
              placeholder="Enter link" 
              value={categories.link} 
              onChange={handleCreate} // ✅ Correct function for updating state
            />
          </div>
          <button className="back-btn" type="submit">Submit Category</button>
        </form>
        <button className="back-btn" onClick={handleBack}>⬅ Go Back</button>
      </section>
      <button 
        className="back-to-top-btn" 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img src={backtop} alt="back to top button" />
      </button>
    </div>
  );
}

export default CreateCategory;