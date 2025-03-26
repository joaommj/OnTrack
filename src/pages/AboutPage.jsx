import React from 'react'
import homeImg from "../assets/bikehome1.png";


const AboutPage = () => {
  return (
    <main>
   <div className='about-container'>
      <section className="about-info">
          <img src={homeImg} alt="home-image" /> 
          <h3><span className="about-sentence">OnTrack | </span>CYCLING WITH PURPOSE, FOR A GREENER TOMORROW.</h3>
      </section> 
      <section className='about-text'> 
        <h4>Welcome to OnTrack!</h4>
<p>OnTrack was born out of a passion for cycling and sustainability. We craft high-quality bicycles that deliver exceptional comfort, performance, and style, all while supporting a healthier, greener lifestyle. Our mission is to make sustainable mobility accessible to everyone—whether you're commuting, adventuring, or enjoying your free time. With cutting-edge design and a commitment to the planet, every OnTrack bike is built to transform your journey.</p>
<p>OnTrack – Ride with Purpose. Ride the Future.</p>
      </section>
    </div>
    </main>
  )
}

export default AboutPage  