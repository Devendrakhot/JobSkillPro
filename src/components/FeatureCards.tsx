import React from 'react';
import { 
  Rocket, Star, Trophy, Users, BookCheck,
  Code, Target, Lightbulb, BarChart, MessageSquare,
  UserCheck, BookOpen, GraduationCap, Brain, Award
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Learning Pathways',
    color: '#08406e',
    icon: <GraduationCap className="w-8 h-8" />,
    description: 'Structured learning paths designed for your success',
    items: [
      { text: 'Personalized Learning Plans', icon: <Target /> },
      { text: 'Industry-Aligned Curriculum', icon: <BookOpen /> },
      { text: 'Hands-on Projects', icon: <Code /> },
      { text: 'Real-world Case Studies', icon: <Brain /> },
      { text: 'Career Progression Tracks', icon: <Award /> }
    ]
  },
  {
    title: 'Expert Mentorship',
    color: '#fb8200',
    icon: <Star className="w-8 h-8" />,
    description: 'Learn from industry veterans and tech leaders',
    items: [
      { text: '1-on-1 Mentoring Sessions', icon: <Users /> },
      { text: 'Industry Expert Guidance', icon: <Trophy /> },
      { text: 'Technical Interview Prep', icon: <MessageSquare /> },
      { text: 'Code Reviews & Feedback', icon: <Code /> },
      { text: 'Career Counseling', icon: <UserCheck /> }
    ]
  },
  {
    title: 'Innovation Hub',
    color: '#08406e',
    icon: <Rocket className="w-8 h-8" />,
    description: 'Stay ahead with cutting-edge tech education',
    items: [
      { text: 'Latest Tech Stack Training', icon: <Code /> },
      { text: 'Innovation Workshops', icon: <Lightbulb /> },
      { text: 'Hackathons & Challenges', icon: <Trophy /> },
      { text: 'Research Projects', icon: <Brain /> },
      { text: 'Tech Talks & Seminars', icon: <MessageSquare /> }
    ]
  }
];

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform hover:-translate-y-2 transition-all duration-300"
      style={{
        background: `linear-gradient(135deg, ${feature.color}05 0%, ${feature.color}10 100%)`
      }}
    >
      <div 
        className="p-8 relative overflow-hidden"
        style={{ backgroundColor: feature.color }}
      >
        <div className="relative z-10">
          <span className="text-white mb-4 inline-block">{feature.icon}</span>
          <h3 className="text-3xl font-bold text-white mb-2">{feature.title}</h3>
          <p className="text-white/80">{feature.description}</p>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
      </div>
      <div className="p-8 space-y-6">
        {feature.items.map((item, itemIndex) => (
          <motion.div
            key={itemIndex}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4 group"
          >
            <span 
              className="p-2 rounded-xl text-white shrink-0 transform group-hover:scale-110 transition-all duration-300"
              style={{ backgroundColor: feature.color }}
            >
              {item.icon}
            </span>
            <p className="text-gray-700 font-medium group-hover:text-black transition-colors duration-200">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const FeatureCards = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">
            Our Educational Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming careers through innovative learning approaches and industry-leading expertise
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;