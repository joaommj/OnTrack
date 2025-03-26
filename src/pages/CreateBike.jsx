import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import backtop from "../assets/back-top.png";

const CreateBike = () => {
  const [bicycles, setBicycles] = useState({
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
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);

  const navigate = useNavigate();
  function handleCreate(event){
    const key = event.target.name;
    const infoSubmitted = event.target.value;
    setBicycles({...bicycles, [key]: infoSubmitted});
  }

  const uploadImage = async(image) => {
    const data = new FormData();

    data.append("file",image);
    data.append("upload_preset", "OnTrack");
    data.append("cloud_name", "dzne6fm6i");

    const cloudinaryResponse = await axios.post(
      "https://api.cloudinary.com/v1_1/dzne6fm6i/image/upload",
      data
    );
    console.log(cloudinaryResponse.data)

    return cloudinaryResponse.data.secure_url;
  }
async function handleCreateProject (event) {
  event.preventDefault();
  try{
    //before sending the announcement to the server, we need to send the image to the cloudinary
    //create a form data
    // const data = new FormData()
    // data.append("file", image)
    // data.append("file", image2)
    // data.append("upload_preset", "OnTrack")
    // data.append("cloud_name", "dzne6fm6i")
    // //after create the form data and add all the properties
    // //send an axios post request to cloudinary to 'host' your image
    // const cloudinaryResponse = await axios.post(
    //   "https://api.cloudinary.com/v1_1/dzne6fm6i/image/upload",
    //   data
    // );
    // console.log(cloudinaryResponse.data)´

    const [imageUrl1,imageUrl2] = await Promise.all([
      uploadImage(image),
      uploadImage(image2)
    ])

    console.log("Image 1:",imageUrl1)
    console.log("Image 2:",imageUrl2)

    //this is where we send the project to the json server
    const res = await axios.post ("http://localhost:5005/bicycles", {
      ...bicycles, 
      picture_url:imageUrl1, picture_detailed_url:imageUrl2
    });
    console.log("Created!", res.data);
    navigate("/");
  }
  catch (error){
    console.log(error);
  }
}
const handleBack = () => {
  navigate(-1); // Go back to the previous page
  window.scrollTo(0, 0); 
};

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
                <option value="Mountain">Mountain</option>
                <option value="Road">Road</option>
                <option value="Gravel">Gravel</option>
                <option value="Electric">Electric</option>
                <option value="Child">Child</option>
                <option value="Touring">Touring</option>
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
              <input type="file" id="byke-image" name="picture_url" accept="image/*" required onChange={(event)=>{

            setImage(event.target.files[0]);
            console.log("event target for picture:",event.target.files[0])
              }}/>
            </div>
    
            <div className="form-group">
              <label htmlFor="pub-image">Public Image</label>
              <input type="file" id="pub-image" name="picture_detailed_url" accept="image/*" required onChange={(event)=>{
                
                setImage2(event.target.files[0]);
                console.log("évent target for detailed picture:",event.target.files[0])
              }}/>
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
              <label htmlFor="price">Price</label>
              <input type="text" id="price" name="price" required placeholder="00,00" value={bicycles.price} onChange={handleCreate}/>
            </div>

            <div className="form-group">
              <label htmlFor="general-description">General Description</label>
              <textarea id="general-description" name="general_description" rows="5" required placeholder="Enter general description of the bike" value={bicycles.general_description} onChange={handleCreate}></textarea>
            </div>
    
            <div className="form-group">
              <label htmlFor="extras">Extras</label>
              <textarea id="extras" name="extras" rows="3" required placeholder="Enter some extras of the bike" value={bicycles.extras} onChange={handleCreate}></textarea>
            </div>
            <button className="back-btn" type="submit">Submit Announcement</button>
          </form>
          <button className="back-btn" onClick={handleBack}>⬅ Go Back</button>
        </section>
        <button 
  className="back-to-top-btn" 
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
<img src={backtop} alt ="back to top button" />
</button>
      </div>
    );
}

export default CreateBike