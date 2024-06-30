import React, { useState, useEffect } from 'react';
import { Navigation, EffectCube, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import him from '../../assets/him.jpg';
import mmm from '../../assets/mmm.jpg';
import langtang from '../../assets/langtang.jpg';
import ann from '../../assets/ann.jpeg';
import '../package/TrekkingPackage.css';

const TrekkingPackage = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const packageData = [
      {
        id: 1,
        imageUrl: him,
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
        imageUrl: ann,
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
        description: 'Explore the beautiful "valley of glaciers" on this shorter trek.',
        highlights: ['Kyanjin Gompa', 'Yak cheese factories', 'Tserko Ri viewpoint']
      },
      {
        id: 4,
        imageUrl: mmm,
        packageName: 'Manaslu Circuit Trek',
        duration: 16,
        difficulty: 'Challenging',
        maxElevation: '5,160m',
        price: 2200,
        description: 'Trek around the world\'s 8th highest peak on less crowded trails.',
        highlights: ['Larkya La Pass', 'Remote villages', 'Diverse ecosystems']
      },
      // Add more packages here...
    ];
    setPackages(packageData);
  }, []);

  return (
    <section id="packages">
      <div className="container">
        <h3 className="text-center section-subheading">- Unforgettable Adventures Await -</h3>
        <h1 className="text-center section-heading">Discover Nepal's Majestic Himalayas</h1>
      </div>
      <div className="container">
        <Swiper
          modules={[Navigation, EffectCube, Pagination]}
          effect={'cube'}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          className="mySwiper"
        >
          {packages.map((packageData) => (
            <SwiperSlide key={packageData.id}>
              <div className="package-card">
                <div className="package-image">
                  <img src={packageData.imageUrl} alt={packageData.packageName} />
                  <div className="package-overlay">
                    <span className="difficulty-badge">{packageData.difficulty}</span>
                  </div>
                </div>
                <div className="package-card-content">
                  <h2>{packageData.packageName}</h2>
                  <p className="description">{packageData.description}</p>
                  <div className="package-details">
                    <span className="duration"><i className="fas fa-clock"></i> {packageData.duration} Days</span>
                    <span className="elevation"><i className="fas fa-mountain"></i> {packageData.maxElevation}</span>
                  </div>
                  <div className="highlights">
                    <h4>Highlights:</h4>
                    <ul>
                      {packageData.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="package-footer">
                    <h3 className="price">${packageData.price}</h3>
                    <button className="book-now">Book Now</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TrekkingPackage;