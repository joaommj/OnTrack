import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = (props) => {
  const [id, setId] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [material, setMaterial] = useState("");
  const [price, setPrice] = useState("");
  const [picture_url, setPicture] = useState("");
  const [picture_detailed_url, setPictureDetailedUrl] = useState("");
  const [general_description, setGeneralDescription] = useState("");
  const [extras, setExtras] = useState("");
  const nav = useNavigate();
  const { bicycleId } = useParams();
};

useEffect(() => {
  if (props.bicycleState.length === 0) return;
  const toUpdateBicycle = props.bicycleState.find(
    (oneBicycle) => oneBicycle.id.toString() === bicycleId.toString()
  );
  if (!toUpdateBicycle) {
    console.error("Bicycle Not Found");
    return;
  }

  setModel(toUpdateBicycle.model);
  setCategory(toUpdateBicycle.category);
  setColor(toUpdateBicycle.color);
  setSize(toUpdateBicycle.size);
  setWeight(toUpdateBicycle.weight);
  setPrice(toUpdateBicycle.price);
  setMaterial(toUpdateBicycle.material);
  setPicture(toUpdateBicycle.picture_url);
  setPictureDetailedUrl(toUpdateBicycle.picture_detailed_url);
  setGeneralDescription(toUpdateBicycle.general_description);
  setExtras(toUpdateBicycle.extras);
}, [props.bicycleState, bicycleId]);
function handleUpdateBicycle(event) {
  event.preventDefault();
  window.scrollTo(0, 0);
  const updatedApartment = {
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
  const updatedBicycleArray = props.bicycleState.map((oneBicycle) =>
    oneBicycle.id.toString() === bicycleId.toString()
      ? updatedBicycle
      : oneBicycle
  );
  props.setBicycleState(updatedBicycleArray);
  console.log("Bicycle actualizado:", updatedBicycle);
  nav("/");
  return (
    <div className="form-container">
      <form onSubmit={handleUpdateBicycle}>
        <h2>Update Bicycle</h2>
        <div className="input-group">
          <label>Id:</label>
          <input
            type="text"
            value={id}
            onChange={(event) => setId(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Model:</label>
          <input
            type="text"
            value={model}
            onChange={(event) => setModel(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Color:</label>
          <input
            type="text"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Size:</label>
          <input
            type="text"
            value={size}
            onChange={(event) => setSize(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Weight:</label>
          <input
            type="text"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Material:</label>
          <input
            type="text"
            value={material}
            onChange={(event) => setMaterial(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Price:</label>
          <input
            type="text"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Picture_Url:</label>
          <input
            type="text"
            value={picture_url}
            onChange={(event) => setPicture_Url(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Picture_Detailed_Url:</label>
          <input
            type="text"
            value={picture_detailed_url}
            onChange={(event) => setPictureDetailedUrl(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label>General_Description:</label>
          <input
            type="text"
            value={general_description}
            onChange={(event) => setGeneralDescription(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Extras:</label>
          <input
            type="text"
            value={extras}
            onChange={(event) => setExtras(event.target.value)}
          />
        </div>
        <button className="submit-btn">Submit Update</button>
      </form>
    </div>
  );
}
export default EditPage;
