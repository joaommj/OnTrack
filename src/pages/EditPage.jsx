import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = ({ bicycleState, setBicycleState }) => {
  const [model, setModel] = useState("");
  const [category, setCategory] = useState(""); 
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [material, setMaterial] = useState("");
  const [price, setPrice] = useState("");
  const [picture_url, setPicture] = useState("");
  const [picture_detailed_url, setPictureDetailedUrl] = useState("");
  const [general_description, setGeneralDescription] = useState("");
  const [extras, setExtras] = useState("");
  const [error, setError] = useState("");

  const nav = useNavigate();
  const { bicycleId } = useParams();

  useEffect(() => {
    if (!bicycleState || bicycleState.length === 0) return;
    
    const toUpdateBicycle = bicycleState.find(
      (oneBicycle) => oneBicycle.id.toString() === bicycleId.toString()
    );

    if (!toUpdateBicycle) {
      setError("Bicycle Not Found");
      return;
    }

    setModel(toUpdateBicycle.model);
    setCategory(toUpdateBicycle.category);
    setColor(toUpdateBicycle.color);
    setSize(toUpdateBicycle.size);
    setWeight(toUpdateBicycle.weight);
    setMaterial(toUpdateBicycle.material);
    setPrice(toUpdateBicycle.price);
    setPicture(toUpdateBicycle.picture_url);
    setPictureDetailedUrl(toUpdateBicycle.picture_detailed_url);
    setGeneralDescription(toUpdateBicycle.general_description);
    setExtras(toUpdateBicycle.extras);
    setError("");
  }, [bicycleState, bicycleId]);

  function handleUpdateBicycle(event) {
    event.preventDefault();
    window.scrollTo(0, 0);

    // Basic validation to prevent empty fields
    if (!model || !category || !color || !size || !weight || !material || !price) {
      setError("Please fill in all required fields.");
      return;
    }

    const updatedBicycle = {
      id: bicycleId,
      model,
      category,
      color,
      size,
      weight,
      material,
      price,
      picture_url,
      picture_detailed_url,
      general_description,
      extras,
    };

    const updatedBicycleArray = bicycleState.map((oneBicycle) =>
      oneBicycle.id.toString() === bicycleId.toString()
        ? updatedBicycle
        : oneBicycle
    );

    setBicycleState(updatedBicycleArray);
    console.log("Bicycle updated:", updatedBicycle);
    nav("/");
  }

    async function handleUpdateBicycle (event) {
      event.preventDefault();
      try{
        const res = await axios.post (`http://localhost:5005/bicycles/${bicycleState.id}`);
        console.log("Posted!");
             
             nav("/");
      }
      catch (error){
        console.log(error);
      }
    }
    window.scrollTo(0, 0); 
    return (
      <div className="edit-page-container"> {/* Add this wrapper */}
        <div className="form-container">
          <form onSubmit={handleUpdateBicycle}>
            <h2>Update Bicycle</h2>
    
            {error && <p className="error-message">{error}</p>}
    
            <div className="input-group">
              <label>Model:</label>
              <input type="text" value={bicycleState.model} onChange={(event) => setModel(event.target.value)} required />
            </div>
    
            <div className="input-group">
              <label>Category:</label>
              <input type="text" value={bicycleState.category} onChange={(event) => setCategory(event.target.value)} required />
            </div>
    
            <div className="input-group">
              <label>Color:</label>
              <input type="text" value={bicycleState.color} onChange={(event) => setColor(event.target.value)} required />
            </div>
    
            <div className="input-group">
              <label>Size:</label>
              <input type="text" value={bicycleState.size} onChange={(event) => setSize(event.target.value)} required />
            </div>
    
            <div className="input-group">
              <label>Weight:</label>
              <input type="text" value={bicycleState.weight} onChange={(event) => setWeight(event.target.value)} required />
            </div>
    
            <div className="input-group">
              <label>Material:</label>
              <input type="text" value={bicycleState.material} onChange={(event) => setMaterial(event.target.value)} required />
            </div>
    
            <div className="input-group">
              <label>Price:</label>
              <input type="text" value={bicycleState.price} onChange={(event) => setPrice(event.target.value)} required />
            </div>
    
            <div className="input-group">
              <label>Picture URL:</label>
              <input type="text" value={bicycleState.picture_url} onChange={(event) => setPicture(event.target.value)} />
            </div>
    
            <div className="input-group">
              <label>Detailed Picture URL:</label>
              <input type="text" value={bicycleState.picture_detailed_url} onChange={(event) => setPictureDetailedUrl(event.target.value)} />
            </div>
    
            <div className="input-group">
              <label>General Description:</label>
              <textarea value={bicycleState.general_description} onChange={(event) => setGeneralDescription(event.target.value)} />
            </div>
    
            <div className="input-group">
              <label>Extras:</label>
              <textarea value={bicycleState.extras} onChange={(event) => setExtras(event.target.value)} />
            </div>
    
            <button className="submit-btn">Submit Update</button>
          </form>
        </div>
      </div>
    );
  }
export default EditPage;