import axios from 'axios';
import React, { use, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateBike = () => {
  const [bicycles, setBicycles] = useState({
    name:"",
    model:"",
    category:"",
    color:"",
    size:"",
    weight:"",
    material:"",
    price:"",
    picture_url:"",
    picture_detailed_url:"",
    general_description:"",
    extras:""
  });
  const nav = useNavigate();
  function handleCreate(event){
    const key = event.target.name;
    const infoSubmitted = event.target.value;
    setBicycles({...bicycles, [key]: infoSubmitted});
  }
async function handleCreateProject (event) {
  event.preventDefault();
  try{
    const res = await axios.post ("http://localhost:5005/bicycles", bicycles);
    console.log("Created!", res.data);
    nav("/");
  }
  catch (error){
    console.log(error);
  }
}
    return (
      <div className="create-bike-container"> {/* Wrapper with background */}
        <section className="announcement-form-container" onSubmit={handleCreateProject}>
          <h1>Create an Announcement</h1>
          <form className="announcement-form">
            <div className="form-group">
              <label htmlFor="model">Model</label>
              <input type="text" id="model" name="model" required placeholder="Enter bike model" value={bicycles.model} onChange={handleCreate}/>
            </div>
    
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select id="category" name="category" value={bicycles.category} onChange={handleCreate} required>
                <option value="" disabled>Select Category</option>
                <option value="mountain">Mountain</option>
                <option value="road">Road</option>
                <option value="gravel">Gravel</option>
                <option value="electric">Electric</option>
                <option value="child">Child</option>
                <option value="touring">Touring</option>
              </select>
            </div>
    
            <div className="form-group">
              <label htmlFor="color">Color</label>
              <input type="text" id="color" name="color" required placeholder="Enter bike color" value={bicycles.color} onChange={handleCreate}/>
            </div>
    
            <div className="form-group">
              <label htmlFor="weight">Weight (kg)</label>
              <input type="number" id="weight" name="weight" required placeholder="Enter bike weight in kg" value={bicycles.weight} onChange={handleCreate}/>
            </div>
    
            <div className="form-group">
              <label htmlFor="byke-image">Bike Image</label>
              <input type="file" id="byke-image" name="byke_image" accept="image/*" required onChange={handleCreate}/>
            </div>
    
            <div className="form-group">
              <label htmlFor="pub-image">Public Image</label>
              <input type="file" id="pub-image" name="pub_image" accept="image/*" required onChange={handleCreate}/>
            </div>
    
            <div className="form-group">
              <label htmlFor="size">Size</label>
              <input type="text" id="size" name="size" required placeholder="Enter bike size (e.g., M, L, XL)" value={bicycles.size} onChange={handleCreate}/>
            </div>
    
            <div className="form-group">
              <label htmlFor="material">Material</label>
              <input type="text" id="material" name="material" required placeholder="Enter bike material (e.g., Carbon Fiber)" value={bicycles.material} onChange={handleCreate}/>
            </div>
    
            <div className="form-group">
              <label htmlFor="general-description">General Description</label>
              <textarea id="general-description" name="general_description" rows="5" required placeholder="Enter general description of the bike" value={bicycles.general_description} onChange={handleCreate}></textarea>
            </div>
    
            <button type="submit">Submit Announcement</button>
          </form>
        </section>
      </div>
    );
}

export default CreateBike