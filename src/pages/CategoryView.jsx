import React, { useEffect, useState } from 'react'
import mountain from "../assets/mountain1.jpg";
import road from "../assets/road.jpg";
import gravel from "../assets/gravel1.png";
import touring from "../assets/touring.jpg";
import child from "../assets/child.jpg";
import deletebtn from "../assets/delete.png";
import infobtn from "../assets/info-icon.png";
import electric from "../assets/electric.png";
import backtop from "../assets/back-top.png";
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const CategoryView = () => {
    const [bicycles, setBicycles] = useState([]);
    const {bicycleCategory} = useParams();
    useEffect(()=> {
    axios.get("http://localhost:5005/bicycles")
        .then((res) => {
            console.log(res.data);
            setBicycles(res.data);
        })
    .catch ((err) => console.log(err));
         }, []);
        const navigate = useNavigate();
        const handleDelete = async (event, id) => {
            event.preventDefault();
            if (!id) {
              console.error("No ID provided for deletion.");
              return;
            }
          
            try {
              await axios.delete(`http://localhost:5005/bicycles/${id}`);
          
              //Remove deleted item from state
              setBicycles((prevBicycles) => prevBicycles.filter((bike) => bike.id !== id));
          
              // Navigate after deletion (optional)
              navigate(`/category/${bicycleCategory}`);
            } catch (error) {
              console.error("Error deleting bicycle:", error);
            }
          };
          const handleBack = () => {
            navigate("/"); 
            window.scrollTo(0, 0);
          };
          
  return (
    <div> 
    {bicycleCategory === "Road" && <div className='img-detail-container'>
            <h3>{bicycleCategory}</h3>
            <img src={road} alt="road-image" /> 
    </div>}
    {bicycleCategory === "Mountain" && <div className='img-detail-container'>
            <h3>{bicycleCategory}</h3>
            <img src={mountain} alt="mountain-image" /> 
    </div>}
    {bicycleCategory === "Touring" && <div className='img-detail-container'>
            <h3>{bicycleCategory}</h3>
            <img src={touring} alt="touring-image" /> 
    </div>}
    {bicycleCategory === "Child" && <div className='img-detail-container'>
            <h3>{bicycleCategory}</h3>
            <img src={child} alt="child-image" /> 
    </div>}
    {bicycleCategory === "Electric" && <div className='img-detail-container'>
            <h3>{bicycleCategory}</h3>
            <img src={electric} alt="electric-image" /> 
    </div>}
    {bicycleCategory === "Gravel" && <div className='img-detail-container'>
            <h3>{bicycleCategory}</h3>
            <img src={gravel} alt="gravel-image" /> 
    </div>}
    {bicycles.map((oneBicycle)=>{
        if(oneBicycle.category === bicycleCategory){
        return(
        <section  key={oneBicycle.id}>
            
            <div className='bicycle-card'>
            <div className='img-container'>
                <img src={oneBicycle.picture_url} alt="road1-bike" />
            </div>
                <div className='card-info'>
                    <h2>{oneBicycle.model}</h2>
                    <ul>
                        <li>Color: {oneBicycle.color}</li>
                        <li>Price: {oneBicycle.price}€</li>
                        <li>Size: {oneBicycle.size}</li>
                    </ul>
                    <div className='card-btn-container'>
                        <button className="back-btn" onClick={handleBack}>⬅ Go Back</button>
                        <Link to={`/details/${oneBicycle.id}`}>
                        <button className="back-btn"> 
                            <img src={infobtn} alt ="info button" />
                        </button>
                        </Link>
                        <button className="back-btn" onClick={(event) => handleDelete(event, oneBicycle.id)}>          
                            <img src={deletebtn} alt ="delete button" />
                        </button>
                    </div>
                </div>
            </div>  
        </section>
        
    );}
    
     })}
     <button 
  className="back-to-top-btn" 
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
<img src={backtop} alt ="back to top button" />
</button>
    </div>
  )
}

export default CategoryView