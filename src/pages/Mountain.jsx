import React from 'react'
import mountain from "../assets/mountain1.jpg";
import road1 from "../assets/road1.png";

const Mountain = () => {
  return (
    <> 
    <div className='img-detail-container'>
            <img src={mountain} alt="mountain-image" />
            <h3>BIKE CATEGORY</h3>
    </div>
    <div className='bicycle-card'>
    <div className='img-container'>
        <img src={road1} alt="road1-bike" />
    </div>
    <div className='card-info'>
        <h2>Bike Name</h2>
        <ul>
            <li>Model: 2025 Racer X</li>
            <li>Color: Matte Black</li>
            <li>Price: $4,499</li>
        </ul>
        <div className='card-btn-container'>
            <button>See More</button>
            <button>Delete Post</button>
        </div>
    </div>
</div>
    </>
  )
}

export default Mountain