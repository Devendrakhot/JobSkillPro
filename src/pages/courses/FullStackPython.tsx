import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Database, Brain, Terminal, 
  Server, Globe, Cloud, Lock,
  BookOpen, Users, Award, Clock
} from 'lucide-react';

const modules = [
  {
    title: 'Python Fundamentals',
    duration: '4 weeks',
    icon: <Terminal className="w-6 h-6" />,
    topics: [
      'Python Syntax and Data Types',
      'Control Flow and Functions',
      'Object-Oriented Programming',
      'Error Handling and Debugging',
      'File Operations and Modules'
    ]
  },
  {
    title: 'Web Development',
    duration: '6 weeks',
    icon: <Globe className="w-6 h-6" />,
    topics: [
      'HTML5, CSS3, and JavaScript',
      'Django Framework',
      'RESTful API Development',
      'Database Integration',
      'Authentication and Authorization'
    ]
  },
  {
    title: 'AI & Machine Learning',
    duration: '8 weeks',
    icon: <Brain className="w-6 h-6" />,
    topics: [
      'NumPy and Pandas',
      'Scikit-learn',
      'Neural Networks',
      'Natural Language Processing',
      'Computer Vision Basics'
    ]
  },
  {
    title: 'Backend Development',
    duration: '6 weeks',
    icon: <Server className="w-6 h-6" />,
    topics: [
      'Server Architecture',
      'Database Design',
      'API Security',
      'Performance Optimization',
      'Microservices'
    ]
  },
  {
    title: 'Cloud & DevOps',
    duration: '4 weeks',
    icon: <Cloud className="w-6 h-6" />,
    topics: [
      'AWS/Azure Basics',
      'Docker and Kubernetes',
      'CI/CD Pipelines',
      'Cloud Security',
      'Monitoring and Logging'
    ]
  },
  {
    title: 'Security & Best Practices',
    duration: '4 weeks',
    icon: <Lock className="w-6 h-6" />,
    topics: [
      'Web Security',
      'Code Review',
      'Testing Strategies',
      'Documentation',
      'Project Architecture'
    ]
  }
];

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: '32 Weeks Program',
    description: 'Comprehensive curriculum covering all aspects of full stack development'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Industry Experts',
    description: 'Learn from experienced professionals with real-world expertise'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Certification',
    description: 'Industry-recognized certification upon course completion'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Flexible Timing',
    description: 'Weekend and weekday batches available'
  }
];

const FullStackPython = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
            alt="Full Stack Python with AI"
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
              Full Stack Python with AI
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Master Python development from basics to advanced AI integration
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#08406e] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Enroll Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-[#08406e] to-[#fb8200] rounded-full flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">
              Course Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive curriculum designed to make you industry-ready
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6 bg-gradient-to-r from-[#08406e] to-[#fb8200]">
                  <div className="flex items-center justify-between text-white mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-white/10 rounded-lg">
                        {module.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{module.title}</h3>
                        <p className="text-white/80">{module.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center space-x-3">
                        <Code className="w-5 h-5 text-[#fb8200]" />
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#08406e] to-[#fb8200]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-xl mb-8">
            Join thousands of successful developers who transformed their careers with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#08406e] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Apply Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors duration-300"
            >
              Download Syllabus
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FullStackPython;