import React from 'react';
import './Hero.css';
import arrow from '../../assets/arrow.png';
import play from '../../assets/play.png'; // Changed from .jpg to .png for consistency
import pause from '../../assets/pause.png';
import { Link } from 'react-router-dom';

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  return (
    <div className="hero">
      <div className="hero-text">{heroData.text1}</div>
      <div className="hero-text">{heroData.text2}</div>
      <div className="hero-explore">
  <Link to="/Package" className="hero-explore-link" onClick={() => setHeroCount(heroCount)}>
    <span>Explore the Trek</span>
    <img src={arrow} alt="" aria-hidden="true" />
  </Link>
</div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          {[0, 1, 2].map((index) => (
            <li
              key={index}
              onClick={() => setHeroCount(index)}
              className={`hero-dot ${heroCount === index ? 'orange' : ''}`}
            ></li>
          ))}
        </ul>
        <div className="hero-play" onClick={() => setPlayStatus(!playStatus)}>
          <img
            src={playStatus ? pause : play}
            alt={playStatus ? 'Pause' : 'Play'}
            className="hero-play-icon"
          />
          <p>{playStatus ? 'Pause' : 'Play'} the video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
