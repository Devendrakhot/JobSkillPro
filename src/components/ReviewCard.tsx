import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Trophy } from 'lucide-react';
import type { Review } from '../data/reviews';

interface ReviewCardProps {
  review: Review;
  featured?: boolean;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, featured = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="p-8">
        <div className="flex items-start space-x-4">
          {/* <div className="relative">
            <img
              src={review.image}
              alt={review.name}
              className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 ring-[#fb8200]"
            />
            <Quote className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#08406e] to-[#fb8200] text-white rounded-full p-1" />
          </div> */}
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{review.name}</h3>
                {/* <p className="text-gray-600">{review.role}</p> */}
                {/* <p className="text-[#fb8200] font-semibold">{review.company}</p> */}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center space-x-2 mb-4">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed">{review.content}</p>
        </div>

        {review.achievements && (
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Achievements</h4>
            <div className="space-y-2">
              {review.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  <Trophy className="w-4 h-4 text-[#fb8200]" />
                  <span className="text-gray-600">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 pt-6 border-t border-gray-100">
          <div>
            <p className="text-sm text-gray-500">Course</p>
            <p className="font-semibold text-[#08406e]">{review.course}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;