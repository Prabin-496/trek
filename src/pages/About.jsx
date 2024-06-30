import React from 'react';
import '../pages/pagesCss/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Himalayan Spirit</h1>
        <div className="about-card">
          <div className="card-face card-front">
            <h2>Nepal's Premier Trekking Experience</h2>
            <p>Discover the magic of the Himalayas with Himalayan Spirit, your gateway to unforgettable adventures in Nepal.</p>
          </div>
          <div className="card-face card-back">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>Expert local guides</li>
              <li>Tailored trekking packages</li>
              <li>Sustainable tourism practices</li>
              <li>Safety-first approach</li>
            </ul>
          </div>
        </div>
        <div className="about-features">
          <div className="feature">
            <i className="fas fa-mountain"></i>
            <h3>Diverse Routes</h3>
            <p>From Everest Base Camp to hidden gems of the Annapurna region.</p>
          </div>
          <div className="feature">
            <i className="fas fa-users"></i>
            <h3>Expert Team</h3>
            <p>Knowledgeable guides with years of Himalayan experience.</p>
          </div>
          <div className="feature">
            <i className="fas fa-heart"></i>
            <h3>Personalized Care</h3>
            <p>Tailored services to meet your specific needs and preferences.</p>
          </div>
        </div>
        <div className="about-cta">
          <h2>Ready to Embark on Your Himalayan Journey?</h2>
          <button className="cta-button">Explore Our Packages</button>
        </div>
      </div>
    </div>
  );
};

export default About;