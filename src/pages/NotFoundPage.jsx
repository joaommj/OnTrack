import React from 'react'
import notfound from "../assets/not-found3.png";
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <section className="not-found">
          <img src={notfound} alt="home-image" /> 
          <h3>404: THIS TRAIL IS BLOCKED. LET'S FIND A SMOOTHER RIDE FOR YOU!</h3>
          <Link to ='/'>
          <h4>LET'S GET BACK, ONTRACK!</h4>
          </Link>
      </section>  
    </div>
  )
}

export default NotFoundPage