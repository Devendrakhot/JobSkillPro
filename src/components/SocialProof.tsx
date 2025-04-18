import React from 'react';
import { Linkedin, Instagram, Youtube, Share2, Users, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const socialPlatforms = [
  {
    name: 'Instagram',
    handle: '@jobskillpro',
    followers: '15K+',
    engagement: '500+ daily likes',
    icon: <Instagram className="w-8 h-8" />,
    color: '#E1306C',
    link: 'https://instagram.com/jobskillpro',
    stats: [
      { icon: <Users className="w-5 h-5" />, label: '15K Followers' },
      { icon: <Heart className="w-5 h-5" />, label: '500+ Daily Likes' },
      { icon: <Share2 className="w-5 h-5" />, label: '200+ Shares' }
    ]
  },
  {
    name: 'LinkedIn',
    handle: 'Job Skill Pro',
    followers: '10K+',
    engagement: '300+ connections/week',
    icon: <Linkedin className="w-8 h-8" />,
    color: '#0A66C2',
    link: 'https://linkedin.com/company/jobskillpro',
    stats: [
      { icon: <Users className="w-5 h-5" />, label: '10K Followers' },
      { icon: <Share2 className="w-5 h-5" />, label: '150+ Shares' },
      { icon: <Heart className="w-5 h-5" />, label: '400+ Weekly Engagements' }
    ]
  },
  {
    name: 'YouTube',
    handle: 'Job Skill Pro',
    followers: '8K+',
    engagement: '1K+ views/video',
    icon: <Youtube className="w-8 h-8" />,
    color: '#FF0000',
    link: 'https://youtube.com/c/jobskillpro',
    stats: [
      { icon: <Users className="w-5 h-5" />, label: '8K Subscribers' },
      { icon: <Heart className="w-5 h-5" />, label: '1K+ Views per Video' },
      { icon: <Share2 className="w-5 h-5" />, label: '100+ Video Shares' }
    ]
  }
];

const SocialProof = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Join Our Thriving Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with us across our social platforms and stay updated with the latest in tech education
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialPlatforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-all duration-300"
            >
              <div 
                className="p-6"
                style={{ backgroundColor: platform.color }}
              >
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-3">
                    {platform.icon}
                    <div>
                      <h3 className="text-2xl font-bold">{platform.name}</h3>
                      <p className="opacity-90">{platform.handle}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                {platform.stats.map((stat, statIndex) => (
                  <div 
                    key={statIndex}
                    className="flex items-center space-x-3 group"
                  >
                    <span 
                      className="p-2 rounded-lg transition-colors duration-200"
                      style={{ color: platform.color }}
                    >
                      {stat.icon}
                    </span>
                    <span className="text-gray-700">{stat.label}</span>
                  </div>
                ))}
                
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 rounded-lg font-semibold transition-all duration-200 mt-4"
                  style={{ 
                    backgroundColor: platform.color,
                    color: 'white'
                  }}
                >
                  Follow Us
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;