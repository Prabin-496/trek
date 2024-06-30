import React from 'react';
import '../pages/pagesCss/Package.css';
import manaslu from '../assets/manaslu-1-1-1.jpg';
import everest from '../assets/Everest.jpeg';
import Annapurna from '../assets/ann.jpeg';
import langtang from '../assets/langtang.jpg';
import uppermustang from '../assets/uppermustang.jpg';
import GokyoLake from '../assets/GokyoLake.jpeg';

const packages = [
  {
    id: 1,
    imageUrl: everest,
    packageName: 'Everest Base Camp Trek',
    duration: 14,
    difficulty: 'Challenging',
    maxElevation: '5,545m',
    price: 2500,
    description: 'Stand at the foot of the world\'s highest peak on this iconic trek.',
    highlights: ['Panoramic views from Kala Patthar', 'Sherpa culture', 'Stunning Himalayan scenery']
  },
  {
    id: 2,
    imageUrl: Annapurna,
    packageName: 'Annapurna Circuit',
    duration: 21,
    difficulty: 'Strenuous',
    maxElevation: '5,416m',
    price: 3000,
    description: 'Circle the Annapurna massif on this diverse and challenging trek.',
    highlights: ['Thorong La Pass', 'Diverse landscapes', 'Traditional villages']
  },
  {
    id: 3,
    imageUrl: langtang,
    packageName: 'Langtang Valley Trek',
    duration: 10,
    difficulty: 'Moderate',
    maxElevation: '4,984m',
    price: 1800,
    description: 'Explore the beautiful Langtang region, known for its diverse flora and fauna.',
    highlights: ['Kyanjin Gompa', 'Glaciers', 'Rhododendron forests']
  },
  {
    id: 4,
    imageUrl: manaslu,
    packageName: 'Manaslu Circuit Trek',
    duration: 16,
    difficulty: 'Challenging',
    maxElevation: '5,160m',
    price: 2800,
    description: 'Trek around the eighth highest mountain in the world.',
    highlights: ['Larkya La Pass', 'Remote villages', 'Stunning mountain views']
  },
  {
    id: 5,
    imageUrl: uppermustang,
    packageName: 'Upper Mustang Trek',
    duration: 14,
    difficulty: 'Moderate',
    maxElevation: '3,810m',
    price: 3200,
    description: 'Discover the hidden kingdom of Lo in this unique cultural trek.',
    highlights: ['Ancient Buddhist monasteries', 'Tibetan culture', 'Desert landscapes']
  },
  {
    id: 6,
    imageUrl: GokyoLake,
    packageName: 'Gokyo Lakes Trek',
    duration: 12,
    difficulty: 'Challenging',
    maxElevation: '5,357m',
    price: 2300,
    description: 'Visit the stunning turquoise lakes of the Gokyo Valley.',
    highlights: ['Gokyo Ri viewpoint', 'Cho La Pass', 'Everest views']
  }
];

const Package = () => {
  return (
    <div className="package-page">
      <h1 className="text-center">Our Trekking Packages</h1>
      <div className="package-list">
        {packages.map(pkg => (
          <div key={pkg.id} className="package-card">
            <div className="package-card-inner">
              <div className="package-image-container">
                <img src={pkg.imageUrl} alt={pkg.packageName} className="package-image" />
                <div className="highlights">
                  <h4>Highlights:</h4>
                  <ul>
                    {pkg.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="package-details">
                <h2>{pkg.packageName}</h2>
                <p className="description">{pkg.description}</p>
                <div className="package-info">
                  <span className="duration"><i className="fas fa-clock"></i> {pkg.duration} Days</span>
                  <span className="difficulty"><i className="fas fa-mountain"></i> {pkg.difficulty}</span>
                  <span className="elevation"><i className="fas fa-map-marker-alt"></i> {pkg.maxElevation}</span>
                </div>
                <h3 className="price">${pkg.price}</h3>
                <button className="book-now">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Package;