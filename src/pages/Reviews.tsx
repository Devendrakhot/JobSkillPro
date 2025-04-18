import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Star, Building, Users } from 'lucide-react';
import ReviewCard from '../components/ReviewCard';
import { reviews } from '../data/reviews';

const Reviews = () => {
  const stats = [
    {
      value: '1000+',
      label: 'Successful Placements',
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      value: '95%',
      label: 'Placement Rate',
      icon: <Star className="w-8 h-8" />
    },
    {
      value: '50+',
      label: 'Partner Companies',
      icon: <Building className="w-8 h-8" />
    },
    {
      value: '10K+',
      label: 'Students Trained',
      icon: <Users className="w-8 h-8" />
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Student Reviews"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08406e]/90 to-[#fb8200]/90" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Discover how our students transformed their careers and achieved their dreams
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#08406e] to-[#fb8200] rounded-full flex items-center justify-center text-white">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-[#08406e] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <ReviewCard
                key={review.id}
                review={review}
                featured={review.featured}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#08406e] to-[#fb8200]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl mb-8">
            Join our growing community of successful professionals
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#08406e] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Enroll Now
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Reviews;