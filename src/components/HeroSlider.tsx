import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    title: 'Learn In-Demand Skills',
    subtitle: 'Start your journey towards a successful tech career',
    gradient: 'from-blue-600 to-purple-600'
  },
  {
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    title: 'Industry-Ready Training',
    subtitle: 'Get trained by industry experts',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    title: 'Guaranteed Placement',
    subtitle: 'Your success is our priority',
    gradient: 'from-pink-600 to-red-600'
  },
];

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: false
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[80vh]">
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 hero-gradient" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center text-white max-w-4xl"
              >
                <h1 className={`text-6xl font-bold mb-6 bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent`}>
                  {slide.title}
                </h1>
                <p className="text-2xl mb-8 text-gray-100">{slide.subtitle}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gradient-to-r ${slide.gradient} text-white py-4 px-8 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;