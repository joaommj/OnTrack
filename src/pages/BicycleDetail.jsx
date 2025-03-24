import React, { useState } from 'react'
import homeImg from "../assets/bikehome.png";

const BicycleDetail = () => {
  const [bicycle, setBicycles] = useState([]);
  const {bicycleCategory} = useParams();

  return (
    <>
      <div className='img-detail-container'>
        <img src={homeImg} alt="home-image" />
        <h3>BIKE NAME</h3>
      </div>
      <section className='detailed-container'>
      <div className='one-bycicle-img'>
      <img src={homeImg} alt="home-image" />
      </div>
      <div className='description-container'>
        <h2>Bike Name</h2>
        <p>This bike is designed for enthusiasts who love speed and comfort. It comes with the latest technology, making your riding experience exceptional.</p>
        <ul>
          <li>Model: 2025 Racer X</li>
          <li>Material: Carbon Fiber</li>
          <li>Weight: 8.5 kg</li>
          <li>Color: Matte Black</li>
          <li>Price: $4,499</li>
        </ul>
        <div className='button-container'>
          <button>Edit Post</button>
          <button>Delete Post</button>
        </div>
      </div>
      </section>
    </>
  )
}

export default BicycleDetail