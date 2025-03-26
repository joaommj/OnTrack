import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import deletebtn from "../assets/delete.png";
import editbtn from "../assets/edit-icon.png";
import backtop from "../assets/back-top.png";
import axios from 'axios';

const BicycleDetail = () => {
  const [bicycles, setBicycles] = useState([]);
  const {bicycleId} = useParams();
  useEffect (()=>{
    axios.get(`http://localhost:5005/bicycles/${bicycleId}`)
        .then((res) => {
            console.log(res.data);
            setBicycles(res.data);
        })
        .catch ((err) => console.log(err));
            }, [bicycleId]);
      if (!bicycles) {
            return <p>Loading bicycle details...</p>; // Handle loading state
      }
      const navigate = useNavigate();
      const handleDelete = async (event, id) => {
        event.preventDefault();
        try{
          await axios.delete (`http://localhost:5005/bicycles/${bicycleId}`);
          console.log("Deleted!");
          
               navigate(`/category/${bicycles.category}`);
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
    <>
      
          <div className='img-detail-container'>
            <img src={bicycles.picture_detailed_url} alt="home-image" />
            <h3>{bicycles.model}</h3> 
          </div>
          <section className='detailed-container'>
            <div className='one-bicycle-img'>
              <img src={bicycles.picture_url} alt="bike-image" />
            </div>
            <div className='description-container'>
              <h2>{bicycles.model}</h2>
              <p>{bicycles.description}</p>
              <ul>
                <li><strong>Description:</strong> {bicycles.general_description}</li>
                <li><strong>Extras:</strong> {bicycles.extras}</li>
                <li><strong>Model:</strong> {bicycles.model}</li>
                <li><strong>Material:</strong> {bicycles.material}</li>
                <li><strong>Weight:</strong> {bicycles.weight} kg</li>
                <li><strong>Color:</strong> {bicycles.color}</li>
                <li><strong>Price:</strong> {bicycles.price}€</li>
              </ul>
              <div className='button-container'>
                <button className="back-btn" onClick={handleBack}>⬅ Go Back</button>
                <Link to={`/edit/${bicycles.id}`}>
                  <button className="back-btn"> 
                    <img src={editbtn} alt ="edit button" />
                  </button>
                  </Link>
                <button className="back-btn" onClick={handleDelete}>          
                   <img src={deletebtn} alt ="delete button" />
                </button>
              </div>
            </div>
          </section>
          <button 
            className="back-to-top-btn" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
          <img src={backtop} alt ="back to top button" />
          </button>
    </>
);
}
export default BicycleDetail