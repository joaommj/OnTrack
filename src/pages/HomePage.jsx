import React from 'react'
import homeImg from "../assets/bikehome.png";
import mountain from "../assets/mountain1.jpg";
import road from "../assets/road.jpg";
import gravel from "../assets/gravel1.jpg";
import touring from "../assets/touring.jpg";
import child from "../assets/child.jpg";
import electric from "../assets/electric.png";

const HomePage = () => {
  return (
    <main>
        <div className='info-container'>
            <section className="home-img">
                <img src={homeImg} alt="home-image" /> 
                <h3>GOOD PRESENTATION/WELCOMING PHRASE!</h3>
            </section>  
            <section className='categ-container'>
                <div className="image">
                    <img src={mountain} alt="home-image" /> 
                    <h4>MOUNTAIN</h4>
                </div>
                <div className="image">
                    <img src={road} alt="home-image" /> 
                    <h4>ROAD</h4>
                </div>
                <div className="image">
                    <img src={gravel} alt="home-image" /> 
                    <h4>GRAVEL</h4>
                </div>
                <div className="image">
                    <img src={touring} alt="home-image" />
                    <h4>TOURING</h4> 
                </div>
                <div className="image">
                    <img src={child} alt="home-image" /> 
                    <h4>CHILD</h4>
                </div>
                <div className="image">
                    <img src={electric} alt="home-image" /> 
                    <h4>ELECTRIC</h4>
                </div>
            </section>
        </div>
    </main>
  )
}

export default HomePage