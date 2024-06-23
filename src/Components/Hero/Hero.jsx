import './Hero.css';
import arrow from '../../assets/arrow.png';
import play from '../../assets/play.png';
import pause from '../../assets/pause.png';

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the Trek</p>
        <img src={arrow} alt="Explore Arrow" className="hero-arrow-icon" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          {[0, 1, 2].map((index) => (
            <li 
              key={index}
              onClick={() => setHeroCount(index)} 
              className={`hero-dot ${heroCount === index ? "orange" : ""}`}
            ></li>
          ))}
        </ul>
        <div className="hero-play">
          <img 
            onClick={() => setPlayStatus(!playStatus)} 
            src={playStatus ? pause : play} 
            alt={playStatus ? "Pause" : "Play"} 
            className="hero-play-icon"
          />
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;