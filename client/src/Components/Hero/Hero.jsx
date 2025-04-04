import React from 'react'
import "./Hero.css"
import hand_icon from "../Assets/Frontend_Assets/hand_icon.png"
import hero_image from "../Assets/Frontend_Assets/hero_image.png";
import arrow_icon from "../Assets/Frontend_Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt=""></img>
          </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-button">
            <div>Latest Collection</div>
            <img src={arrow_icon}alt=''></img>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image}alt=''></img>
      </div>
    </div>
  );
}

export default Hero