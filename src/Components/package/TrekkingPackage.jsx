import React, { useState, useEffect } from 'react';
import { Navigation, EffectCube } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';
import him from '../../assets/him.jpg';
import mmm from '../../assets/mmm.jpg';
import rular from '../../assets/rular.jpg';
import '../package/TrekkingPackage.css';
import ann from '../../assets/ann.jpeg'

const TrekkingPackage = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const packageData = [
      {
        id: 1,
        imageUrl: him,
        packageName: 'Everest Base Camp Trek',
        duration: 14,
        difficulty: 'Moderate',
        price: 2500
      },
      {
        id: 2,
        imageUrl: ann,
        packageName: 'Annapurna Circuit',
        duration: 21,
        difficulty: 'Challenging',
        price: 3000
      },
      {
        id: 3,
        imageUrl: rular,
        packageName: 'Langtang Valley Trek',
        duration: 10,
        difficulty: 'Moderate',
        price: 1800
      }
    ];
    setPackages(packageData);
  }, []);

  return (
    <section id="packages">
      <div className="container">
        <h3 className="text-center section-subheading">- Popular Trekking Packages -</h3>
        <h1 className="text-center section-heading">Explore The Himalayas</h1>
      </div>
      <div className="container">
        <Swiper
          modules={[Navigation, EffectCube]}
          effect={'cube'}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          slidesPerView={1}
          navigation={true}
          loop={true}
          className="mySwiper"
        >
          {packages.map((packageData) => (
            <SwiperSlide key={packageData.id}>
              <div className="package-card">
                <img src={packageData.imageUrl} alt={packageData.packageName} />
                <div className="package-card-content">
                  <h2>{packageData.packageName}</h2>
                  <p>
                    <span className="duration">Duration: {packageData.duration} Days</span>
                    <span className="difficulty">Difficulty: {packageData.difficulty}</span>
                  </p>
                  <h3 className="price">${packageData.price}</h3>
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