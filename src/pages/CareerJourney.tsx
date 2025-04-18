import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileCheck, Briefcase, Target, MessageSquare, 
  Code, Laptop, BookmarkCheck, ChevronRight, 
  GraduationCap, Users, Award, Star
} from 'lucide-react';

const careerSteps = [
  {
    title: 'Course Completion Exam',
    description: 'The final stage before getting the DREAM JOB - to assess the Student\'s industry readiness',
    icon: <FileCheck className="w-8 h-8" />,
    details: [
      'Comprehensive assessment of technical skills',
      'Industry-standard evaluation methods',
      'Real-world problem-solving scenarios',
      'Performance analysis and feedback'
    ],
    color: '#fb8200'
  },
  {
    title: 'LinkedIn & Portfolio',
    description: 'Dedicated sessions for LinkedIn and Portfolio to take you closer to your dream job',
    icon: <Briefcase className="w-8 h-8" />,
    details: [
      'Professional profile optimization',
      'Portfolio development workshops',
      'Network building strategies',
      'Personal branding guidance'
    ],
    color: '#08406e'
  },
  {
    title: 'Domain',
    description: 'Wise Skills mapping for your career growth',
    icon: <Target className="w-8 h-8" />,
    details: [
      'Industry-specific skill assessment',
      'Career path planning',
      'Technology stack recommendations',
      'Growth opportunity analysis'
    ],
    color: '#fb8200'
  },
  {
    title: 'Soft Skills & Mock Interviews',
    description: 'Complete training for soft skills, aptitude and mock interviews',
    icon: <MessageSquare className="w-8 h-8" />,
    details: [
      'Communication skills development',
      'Interview preparation techniques',
      'Aptitude test training',
      'Personality development sessions'
    ],
    color: '#08406e'
  },
  {
    title: 'Industry Projects',
    description: '15+ industry projects to make you ready for your dream job',
    icon: <Code className="w-8 h-8" />,
    details: [
      'Real-world project experience',
      'Industry collaboration',
      'Project management skills',
      'Portfolio-worthy deliverables'
    ],
    color: '#fb8200'
  },
  {
    title: '80:20 Practical Sessions',
    description: '80 practical : 20 theory approach gives you exposure to real world IT projects & case studies',
    icon: <Laptop className="w-8 h-8" />,
    details: [
      'Hands-on learning experience',
      'Industry case studies',
      'Practical problem solving',
      'Real-time project work'
    ],
    color: '#08406e'
  },
  {
    title: 'Follow Our 3A Rule',
    description: 'Mandatory for students to follow Attendance, Assessment and Assignment model with minimum 90% score',
    icon: <BookmarkCheck className="w-8 h-8" />,
    details: [
      'Regular attendance tracking',
      'Continuous assessment system',
      'Assignment completion monitoring',
      'Performance benchmarking'
    ],
    color: '#fb8200'
  }
];

const stats = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    value: '5000+',
    label: 'Students Trained'
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: '1000+',
    label: 'Successful Placements'
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: '95%',
    label: 'Success Rate'
  },
  {
    icon: <Star className="w-8 h-8" />,
    value: '50+',
    label: 'Industry Partners'
  }
];

const CareerJourney = () => {
  const [selectedStep, setSelectedStep] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#08406e] to-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#08406e]/80 to-gray-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-4 mb-6">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Career Journey
              </h1>
              <span className="text-[#fb8200] text-6xl md:text-8xl font-bold">#JSP</span>
            </div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center mb-8"
            >
              <div className="bg-gradient-to-r from-[#fb8200] to-[#08406e] p-1 rounded-full">
                <div className="bg-[#08406e] px-8 py-3 rounded-full">
                  <span className="text-3xl md:text-4xl font-bold text-white">नौकरी पक्की!</span>
                </div>
              </div>
            </motion.div>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Your step-by-step guide to success in the tech industry
            </p>
            <button className="bg-gradient-to-r from-[#fb8200] to-[#08406e] text-white px-12 py-4 mt-4 rounded-full text-2xl font-bold hover:shadow-lg hover:shadow-[#fb8200]/20 transform hover:scale-105 transition-all duration-300">
              START YOUR JOURNEY
            </button>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#fb8200] to-[#08406e] rounded-full flex items-center justify-center text-white">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Career Steps */}
          <div className="space-y-8">
            {careerSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                onClick={() => setSelectedStep(step)}
                className="group cursor-pointer"
              >
                <div className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 border-l-4`}
                  style={{ borderColor: step.color }}
                >
                  <div className="flex items-start space-x-6">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-[#fb8200] to-[#08406e] text-white">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                    <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Start Button */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
           
          </motion.div>
        </div>
      </section>

      {/* Step Details Modal */}
      <AnimatePresence>
        {selectedStep && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setSelectedStep(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full p-8"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#fb8200] to-[#08406e] text-white">
                  {selectedStep.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedStep.title}</h3>
                  <p className="text-gray-600">{selectedStep.description}</p>
                </div>
              </div>
              <div className="space-y-4">
                {selectedStep.details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <ChevronRight className="w-5 h-5 text-[#fb8200]" />
                    <span className="text-gray-700">{detail}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CareerJourney;