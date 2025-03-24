import React, { useEffect, useState } from 'react'
import mountain from "../assets/mountain1.jpg";
import road1 from "../assets/road1.png";
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


  return (
    <div> 
                   
    {bicycleCategory === "Road" && <div className='img-detail-container'>
                    <h3>{bicycleCategory}</h3>
                    <img src={mountain} alt="mountain-image" /> 
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
                        <li>Price: {oneBicycle.price}</li>
                        <li>Size: {oneBicycle.size}</li>
                    </ul>
                    <div className='card-btn-container'>
                        <Link to={`/details/${oneBicycle.id}`}>
                        <button>See More</button>
                        </Link>
                        <Link to={""}>
                        <button>Delete Post</button>
                        </Link>
                    </div>
                </div>
            </div>  
        </section>
    );}
     })}
    </div>
  )
}

export default CategoryView