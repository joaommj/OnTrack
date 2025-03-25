import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"; // You forgot to import axios

const EditPage = () => {
  const [bicycle, setBicycle] = useState(null); // Store the selected bicycle object
  const [error, setError] = useState("");
  
  const nav = useNavigate();
  const { bicycleId } = useParams();

  useEffect(() => {
axios.get (`http://localhost:5005/bicycles/${bicycleId}`)
.then((resp)=>{
  setBicycle(resp.data);
}
)
.catch((err)=>{
console.log(err)
})

  }, [bicycleId]);

  // Handle the form submission
  async function handleUpdateBicycle(event) {
    event.preventDefault();
    window.scrollTo(0, 0);

    if (!bicycle) return; // Prevent form submission if no bicycle data

    try {
      const res = await axios.put(`http://localhost:5005/bicycles/${bicycleId}`, bicycle);
      console.log("Updated!", res.data);

      // Update state
      const updatedBicycleArray = bicycleState.map((oneBicycle) =>
        oneBicycle.id.toString() === bicycleId.toString() ? res.data : oneBicycle
      );
      setBicycleState(updatedBicycleArray);

      nav("/");
    } catch (error) {
      console.log(error);
      setError("Failed to update bicycle.");
    }
  }

  if (!bicycle) {
    return <p>Loading bicycle details...</p>;
  }

  return (
    <div className="edit-page-container">
      <div className="form-container">
        <form onSubmit={handleUpdateBicycle}>
          <h2>Update Bicycle</h2>
          {error && <p className="error-message">{error}</p>}

          <div className="input-group">
            <label>Model:</label>
            <input type="text" value={bicycle.model} 
              onChange={(event) => setBicycle({ ...bicycle, model: event.target.value })} required />
          </div>

          <div className="input-group">
            <label>Category:</label>
            <input type="text" value={bicycle.category} 
              onChange={(event) => setBicycle({ ...bicycle, category: event.target.value })} required />
          </div>

          <div className="input-group">
            <label>Color:</label>
            <input type="text" value={bicycle.color} 
              onChange={(event) => setBicycle({ ...bicycle, color: event.target.value })} required />
          </div>

          <div className="input-group">
            <label>Size:</label>
            <input type="text" value={bicycle.size} 
              onChange={(event) => setBicycle({ ...bicycle, size: event.target.value })} required />
          </div>

          <div className="input-group">
            <label>Weight:</label>
            <input type="text" value={bicycle.weight} 
              onChange={(event) => setBicycle({ ...bicycle, weight: event.target.value })} required />
          </div>

          <div className="input-group">
            <label>Material:</label>
            <input type="text" value={bicycle.material} 
              onChange={(event) => setBicycle({ ...bicycle, material: event.target.value })} required />
          </div>

          <div className="input-group">
            <label>Price:</label>
            <input type="text" value={bicycle.price} 
              onChange={(event) => setBicycle({ ...bicycle, price: event.target.value })} required />
          </div>

          <div className="input-group">
            <label>Picture URL:</label>
            <input type="text" value={bicycle.picture_url} 
              onChange={(event) => setBicycle({ ...bicycle, picture_url: event.target.value })} />
          </div>

          <div className="input-group">
            <label>Detailed Picture URL:</label>
            <input type="text" value={bicycle.picture_detailed_url} 
              onChange={(event) => setBicycle({ ...bicycle, picture_detailed_url: event.target.value })} />
          </div>

          <div className="input-group">
            <label>General Description:</label>
            <textarea value={bicycle.general_description} 
              onChange={(event) => setBicycle({ ...bicycle, general_description: event.target.value })} />
          </div>

          <div className="input-group">
            <label>Extras:</label>
            <textarea value={bicycle.extras} 
              onChange={(event) => setBicycle({ ...bicycle, extras: event.target.value })} />
          </div>

          <button className="submit-btn">Submit Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;