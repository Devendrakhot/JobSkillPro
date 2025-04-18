import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, Terminal, Braces, FileCode, 
  BookOpen, Users, Award, Clock,
  Database, Server, Globe, Cloud,
  Coffee, Hash, Cpu, GitBranch,
  Calendar, DollarSign, GraduationCap,
  CheckCircle, X, BookCheck, Target,
  Briefcase
} from 'lucide-react';

const programmingLanguages = [
  {
    title: 'C Programming',
    duration: '8 weeks',
    icon: <Code className="w-6 h-6" />,
    level: 'Beginner to Advanced',
    topics: [
      'Introduction to Programming Concepts',
      'Data Types and Variables',
      'Control Structures',
      'Functions and Arrays',
      'Pointers and Memory Management',
      'Structures and Unions',
      'File Handling',
      'Advanced Topics and Projects'
    ],
    details: {
      description: 'Master C programming from basics to advanced concepts. This comprehensive course covers everything you need to become a proficient C programmer.',
      prerequisites: ['Basic computer knowledge', 'Understanding of basic mathematics'],
      projects: [
        'Console-based Management System',
        'File Compression Utility',
        'Custom Data Structure Implementation',
        'Memory Management System'
      ],
      career: [
        'Systems Programmer',
        'Embedded Systems Developer',
        'Software Developer',
        'Game Developer'
      ],
      features: [
        'Live coding sessions',
        'Weekly assignments',
        'One-on-one mentoring',
        'Industry-standard projects'
      ],
      fee: '₹25,000',
      nextBatch: '15th March 2024',
      certification: 'Industry-recognized C programming certification'
    }
  },
  {
    title: 'C++ Programming',
    duration: '10 weeks',
    icon: <Braces className="w-6 h-6" />,
    level: 'Intermediate',
    topics: [
      'Object-Oriented Programming',
      'Classes and Objects',
      'Inheritance and Polymorphism',
      'Templates and STL',
      'Exception Handling',
      'Smart Pointers',
      'Modern C++ Features',
      'Project Development'
    ],
    details: {
      description: 'Take your programming skills to the next level with C++. Learn modern C++ features and build robust applications.',
      prerequisites: ['Basic programming knowledge', 'Understanding of C (recommended)'],
      projects: [
        'Banking System with OOP',
        'Custom STL Container Implementation',
        'Game Engine Development',
        'Multi-threaded Application'
      ],
      career: [
        'Software Engineer',
        'Game Developer',
        'System Software Developer',
        'Application Developer'
      ],
      features: [
        'Modern C++ concepts',
        'Industry projects',
        'Code reviews',
        'Performance optimization training'
      ],
      fee: '₹30,000',
      nextBatch: '20th March 2024',
      certification: 'Advanced C++ Developer Certification'
    }
  },
  {
    title: 'Java Development',
    duration: '12 weeks',
    icon: <Coffee className="w-6 h-6" />,
    level: 'Beginner to Advanced',
    topics: [
      'Core Java Fundamentals',
      'Object-Oriented Programming',
      'Collections Framework',
      'Multithreading',
      'Java GUI Programming',
      'Database Connectivity',
      'Spring Framework Basics',
      'Web Application Development'
    ],
    details: {
      description: 'Comprehensive Java training program covering core Java to enterprise development with Spring Framework.',
      prerequisites: ['Basic programming concepts', 'HTML/CSS knowledge for web development'],
      projects: [
        'E-commerce Platform',
        'Spring Boot REST API',
        'Desktop Application with JavaFX',
        'Microservices Architecture'
      ],
      career: [
        'Java Developer',
        'Full Stack Developer',
        'Application Architect',
        'Technical Lead'
      ],
      features: [
        'Enterprise Java training',
        'Spring Framework deep dive',
        'Real-world projects',
        'Interview preparation'
      ],
      fee: '₹35,000',
      nextBatch: '1st April 2024',
      certification: 'Full Stack Java Developer Certification'
    }
  },
  {
    title: 'Python Programming',
    duration: '10 weeks',
    icon: <Terminal className="w-6 h-6" />,
    level: 'All Levels',
    topics: [
      'Python Basics',
      'Data Structures',
      'File Operations',
      'Object-Oriented Python',
      'GUI Development with Tkinter',
      'Database Integration',
      'Web Scraping',
      'API Development'
    ],
    details: {
      description: 'Learn Python programming from scratch and master its application in various domains including web development and automation.',
      prerequisites: ['No prior programming experience required', 'Basic computer skills'],
      projects: [
        'Automation Scripts',
        'Web Scraping Tool',
        'Flask Web Application',
        'Data Analysis Dashboard'
      ],
      career: [
        'Python Developer',
        'Automation Engineer',
        'Backend Developer',
        'Data Analyst'
      ],
      features: [
        'Hands-on learning',
        'Real-world applications',
        'Project-based curriculum',
        'Industry mentorship'
      ],
      fee: '₹28,000',
      nextBatch: '10th April 2024',
      certification: 'Python Developer Certification'
    }
  },
  {
    title: 'JavaScript & TypeScript',
    duration: '12 weeks',
    icon: <FileCode className="w-6 h-6" />,
    level: 'Intermediate',
    topics: [
      'JavaScript Fundamentals',
      'DOM Manipulation',
      'Async Programming',
      'TypeScript Basics',
      'React/Vue/Angular Intro',
      'Node.js Fundamentals',
      'Testing and Debugging',
      'Full Stack Development'
    ],
    details: {
      description: 'Master modern JavaScript and TypeScript development. Build full-stack applications with popular frameworks.',
      prerequisites: ['HTML/CSS knowledge', 'Basic programming concepts'],
      projects: [
        'Single Page Application',
        'Real-time Chat Application',
        'E-commerce Platform',
        'Social Media Dashboard'
      ],
      career: [
        'Frontend Developer',
        'Full Stack Developer',
        'JavaScript Engineer',
        'UI/UX Developer'
      ],
      features: [
        'Modern JS frameworks',
        'TypeScript integration',
        'Testing practices',
        'Performance optimization'
      ],
      fee: '₹32,000',
      nextBatch: '5th April 2024',
      certification: 'Modern JavaScript Developer Certification'
    }
  },
  {
    title: 'Data Structures & Algorithms',
    duration: '14 weeks',
    icon: <Hash className="w-6 h-6" />,
    level: 'Advanced',
    topics: [
      'Array and String Algorithms',
      'Linked Lists',
      'Stacks and Queues',
      'Trees and Graphs',
      'Sorting and Searching',
      'Dynamic Programming',
      'Problem Solving Strategies',
      'Interview Preparation'
    ],
    details: {
      description: 'Advanced course covering data structures, algorithms, and problem-solving techniques for technical interviews.',
      prerequisites: ['Strong programming fundamentals', 'Knowledge of any programming language'],
      projects: [
        'Algorithm Visualizer',
        'Custom Data Structure Library',
        'Performance Analysis Tool',
        'Competitive Programming Portfolio'
      ],
      career: [
        'Software Engineer',
        'Algorithm Developer',
        'Technical Architect',
        'Research Engineer'
      ],
      features: [
        'Interview preparation',
        'Problem-solving techniques',
        'Competitive programming',
        'System design basics'
      ],
      fee: '₹40,000',
      nextBatch: '25th March 2024',
      certification: 'Advanced Algorithms Specialist Certification'
    }
  }
];

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Comprehensive Learning',
    description: 'In-depth coverage of programming fundamentals to advanced concepts'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Expert Instructors',
    description: 'Learn from experienced developers and tech leaders'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Certification',
    description: 'Industry-recognized certification upon course completion'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Flexible Schedule',
    description: 'Weekend and weekday batches available'
  }
];

const SoftwareProgramming = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    if (selectedCourse) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedCourse]);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
            alt="Software Programming Courses"
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
              Software Programming
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Master the art of programming with our comprehensive courses
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#08406e] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Explore Courses
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

      {/* Programming Languages Section */}
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
              Programming Languages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our wide range of programming courses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmingLanguages.map((lang, index) => (
              <motion.div
                key={lang.title}
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
                        {lang.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{lang.title}</h3>
                        <p className="text-white/80">{lang.duration}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 inline-block bg-white/20 px-3 py-1 rounded-full text-sm text-white">
                    {lang.level}
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {lang.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center space-x-3">
                        <Code className="w-5 h-5 text-[#fb8200]" />
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCourse(lang)}
                      className="bg-gradient-to-r from-[#08406e] to-[#fb8200] text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Details Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-gradient-to-r from-[#08406e] to-[#fb8200] text-white p-6 rounded-t-2xl">
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white"
                >
                  <X size={24} />
                </button>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    {selectedCourse.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{selectedCourse.title}</h2>
                    <p className="text-white/80">{selectedCourse.duration} • {selectedCourse.level}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-8">
                {/* Course Description */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Course Overview</h3>
                  <p className="text-gray-600">{selectedCourse.details.description}</p>
                </div>

                {/* Key Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 text-[#08406e] mb-2">
                      <Calendar className="w-5 h-5" />
                      <span className="font-semibold">Next Batch</span>
                    </div>
                    <p className="text-gray-600">{selectedCourse.details.nextBatch}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 text-[#08406e] mb-2">
                      <DollarSign className="w-5 h-5" />
                      <span className="font-semibold">Course Fee</span>
                    </div>
                    <p className="text-gray-600">{selectedCourse.details.fee}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 text-[#08406e] mb-2">
                      <GraduationCap className="w-5 h-5" />
                      <span className="font-semibold">Certification</span>
                    </div>
                    <p className="text-gray-600">{selectedCourse.details.certification}</p>
                  </div>
                </div>

                {/* Prerequisites */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Prerequisites</h3>
                  <ul className="space-y-2">
                    {selectedCourse.details.prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-[#fb8200]" />
                        <span className="text-gray-600">{prereq}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Projects */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Projects You'll Build</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedCourse.details.projects.map((project, index) => (
                      <div key={index} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                        <FileCode className="w-5 h-5 text-[#fb8200]" />
                        <span className="text-gray-600">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Opportunities */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Career Opportunities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedCourse.details.career.map((career, index) => (
                      <div key={index} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                        <Briefcase className="w-5 h-5 text-[#fb8200]" />
                        <span className="text-gray-600">{career}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Features */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Course Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedCourse.details.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                        <Target className="w-5 h-5 text-[#fb8200]" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enroll Button */}
                <div className="flex justify-center pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-[#08406e] to-[#fb8200] text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Enroll Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#08406e] to-[#fb8200]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Programming Journey Today
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

export default SoftwareProgramming;