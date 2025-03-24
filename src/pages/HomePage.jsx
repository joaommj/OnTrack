import React from 'react'
import homeImg from "../assets/bikehome.png";
import mountain from "../assets/mountain1.jpg";
import road from "../assets/road.jpg";
import gravel from "../assets/gravel1.jpg";
import touring from "../assets/touring.jpg";
import child from "../assets/child.jpg";
import electric from "../assets/electric.png";
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main>
        <div className='info-container'>
            <section className="home-img">
            <Link><img src={homeImg} alt="home-image" /> 
                <h3>GOOD PRESENTATION/WELCOMING PHRASE!</h3>
                </Link>
            </section>  
            <section className='categ-container'>
                <div className="image">
                <Link to ="/category/Mountain"> 
                    <img src={mountain} alt="home-image" /> 
                    <h4>MOUNTAIN</h4>
                </Link>
                </div>
                <div className="image">
                <Link to ="/category/Road">
                    <img src={road} alt="home-image" /> 
                    <h4>ROAD</h4>
                </Link>
                </div>
                <div className="image">
                <Link to ="/category/Gravel">
                    <img src={gravel} alt="home-image" /> 
                    <h4>GRAVEL</h4>
                 </Link>
                </div>
                <div className="image">
                <Link to ="/category/Touring">
                    <img src={touring} alt="home-image" />
                    <h4>TOURING</h4> 
                </Link>
                </div>
                <div className="image">
                <Link to ="/category/Child"> 
                    <img src={child} alt="home-image" /> 
                    <h4>CHILD</h4>
                </Link>
                </div>
                <div className="image">
                <Link to ="/category/Electric">
                    <img src={electric} alt="home-image" /> 
                    <h4>ELECTRIC</h4>
                </Link>
                </div>
            </section>
        </div>
    </main>
  )
}

export default HomePage