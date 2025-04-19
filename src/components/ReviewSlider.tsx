import React from 'react';
import Slider from 'react-slick';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Priya Sharma',
    role: 'Software Developer at Amazon',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    content: 'The Naukri Pakki program was a game-changer for my career. The practical training and placement support were exceptional.',
    rating: 5,
    gradient: 'from-blue-600 to-purple-600'
  },
  {
    name: 'Rahul Verma',
    role: 'Full Stack Developer at Infosys',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    content: 'Comprehensive curriculum and excellent mentors. Got placed within a month of course completion.',
    rating: 5,
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    name: 'Anjali Patel',
    role: 'Data Scientist at TCS',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    content: 'The AI and Data Science course helped me transition from a fresher to a skilled professional.',
    rating: 5,
    gradient: 'from-pink-600 to-red-600'
  }
];

const ReviewSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            Hear from our alumni who transformed their careers with us
          </p>
        </div>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 h-full border border-gray-100"
              >
                <div className="flex items-start mb-6">
                  {/* <div className="relative">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 ring-blue-600"
                    />
                    <Quote className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r ${review.gradient} text-white rounded-full p-1`} />
                  </div> */}
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-800">{review.name}</h3>
                    {/* <p className="text-gray-600">{review.role}</p> */}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{review.content}</p>
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ReviewSlider;