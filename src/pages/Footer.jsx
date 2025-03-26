import React from 'react'
import footerBtn from '../assets/bikes.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (

    
    <footer>
      <Link to ={"./"}>
      <img src={footerBtn} alt="footerBtn"/>
      </Link>
    </footer>
  )
}

export default Footer