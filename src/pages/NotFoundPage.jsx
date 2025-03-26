import React from 'react'
import notfound from "../assets/Bicycles/bike17_pub.png";

const NotFoundPage = () => {
  return (
    <div>
      <section className="not-found">
          <img src={notfound} alt="home-image" /> 
          <h3>404: This trail is blocked. Let's find a smoother ride for you!</h3>
      </section>  
    </div>
  )
}

export default NotFoundPage