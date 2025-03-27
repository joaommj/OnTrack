import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import backtop from "../assets/back-top.png";

import axios from "axios";
import { API_URL } from "../config/apiConfig";

const EditPage = () => {
  const [bicycle, setBicycle] = useState(null); // Store a single bicycle object
  const [error, setError] = useState("");

  const { bicycleId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/bicycles/${bicycleId}`)
      .then((resp) => {
        setBicycle(resp.data);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to fetch bicycle data.");
      });
  }, [bicycleId]);

  const handleUpdateBicycle = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.put(`${API_URL}/bicycles/${bicycleId}`, bicycle);
      console.log("Updated!", res.data);
      setBicycle(res.data); //way to update an object

      navigate(`/category/${bicycle.category}`);
    } catch (error) {
      console.log(error);
      setError("Failed to update bicycle.");
    }
  };
  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  window.scrollTo(0, 0);
  return (
    <div className="edit-page-container">
      <div className="form-container">
        <form onSubmit={handleUpdateBicycle}>
          <h2>Update Bicycle</h2>
          {error && <p className="error-message">{error}</p>}
  
          <div className="input-group">
            <label>Model:</label>
            <input type="text" value={bicycle?.model || ""} 
              onChange={(event) => setBicycle({ ...bicycle, model: event.target.value })} required />
          </div>
  
          <div className="input-group">
            <label>Category:</label>
            <input type="text" value={bicycle?.category || ""} 
              onChange={(event) => setBicycle({ ...bicycle, category: event.target.value })} required />
          </div>
  
          <div className="input-group">
            <label>Color:</label>
            <input type="text" value={bicycle?.color || ""} 
              onChange={(event) => setBicycle({ ...bicycle, color: event.target.value })} required />
          </div>
  
          <div className="input-group">
            <label>Size:</label>
            <input type="text" value={bicycle?.size || ""} 
              onChange={(event) => setBicycle({ ...bicycle, size: event.target.value })} required />
          </div>
  
          <div className="input-group">
            <label>Weight:</label>
            <input type="text" value={bicycle?.weight || ""} 
              onChange={(event) => setBicycle({ ...bicycle, weight: event.target.value })} required />
          </div>
  
          <div className="input-group">
            <label>Material:</label>
            <input type="text" value={bicycle?.material || ""} 
              onChange={(event) => setBicycle({ ...bicycle, material: event.target.value })} required />
          </div>
  
          <div className="input-group">
            <label>Price:</label>
            <input type="text" value={bicycle?.price || ""} 
              onChange={(event) => setBicycle({ ...bicycle, price: event.target.value })} required />
          </div>
  
          <div className="input-group">
            <label>Picture URL:</label>
            <input type="text" value={bicycle?.picture_url || ""} 
              onChange={(event) => setBicycle({ ...bicycle, picture_url: event.target.value })} />
          </div>
  
          <div className="input-group">
            <label>Detailed Picture URL:</label>
            <input type="text" value={bicycle?.picture_detailed_url || ""} 
              onChange={(event) => setBicycle({ ...bicycle, picture_detailed_url: event.target.value })} />
          </div>
  
          <div className="input-group">
            <label>General Description:</label>
            <textarea value={bicycle?.general_description || ""} 
              onChange={(event) => setBicycle({ ...bicycle, general_description: event.target.value })} />
          </div>
  
          <div className="input-group">
            <label>Extras:</label>
            <textarea value={bicycle?.extras || ""} 
              onChange={(event) => setBicycle({ ...bicycle, extras: event.target.value })} />
          </div>
          <button className="back-btn" onClick={handleBack}>⬅ Go Back</button>
          <button className="back-btn">Submit Update</button>
        </form>
      </div>
        <button 
          className="back-to-top-btn" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
          <img src={backtop} alt ="back to top button" />
        </button>
    </div>
  );
};

export default EditPage;