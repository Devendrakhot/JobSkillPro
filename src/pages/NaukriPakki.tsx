import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Clock, Award, CheckCircle, Users, Star, 
  Target, Briefcase, GraduationCap, Building, DollarSign,
  Laptop, BookCheck, Brain, Presentation, Rocket,
  FileCheck, MessageSquare, Code, BookmarkCheck
} from 'lucide-react';
import CareerPath from '../components/CareerPath';

const courseModules = [
  {
    title: 'BFA Business Finance Accounting',
    description: 'Master core business finance and accounting principles',
    duration: '12 weeks',
    icon: <DollarSign className="w-8 h-8" />,
    highlights: [
      'Industry-standard accounting practices',
      'Real-world case studies',
      'Hands-on financial modeling',
      'Advanced Excel training'
    ],
    modules: [
      'Introduction to Business Finance',
      'Financial Statements Analysis',
      'Cost Accounting Fundamentals',
      'Budgeting and Forecasting',
      'Corporate Finance Essentials',
      'Risk Management',
      'Investment Analysis'
    ]
  },
  {
    title: 'Taxpro',
    description: 'Comprehensive tax preparation and planning',
    duration: '8 weeks',
    icon: <Building className="w-8 h-8" />,
    highlights: [
      'Latest tax regulations',
      'Tax software training',
      'Client consultation practice',
      'Real tax return preparation'
    ],
    modules: [
      'Income Tax Fundamentals',
      'GST Framework',
      'Tax Planning Strategies',
      'Corporate Taxation',
      'International Taxation',
      'Tax Compliance'
    ]
  },
  {
    title: 'Data Analyst',
    description: 'Learn data analysis and visualization techniques',
    duration: '10 weeks',
    icon: <Brain className="w-8 h-8" />,
    highlights: [
      'Industry-standard tools',
      'Real dataset analysis',
      'Advanced visualization',
      'Statistical modeling'
    ],
    modules: [
      'Data Analysis Fundamentals',
      'Statistical Methods',
      'Data Visualization',
      'SQL for Data Analysis',
      'Python for Data Analysis',
      'Business Intelligence Tools',
      'Data Reporting'
    ]
  },
  {
    title: 'SAP FICO',
    description: 'Master SAP Financial and Controlling modules',
    duration: '14 weeks',
    icon: <Laptop className="w-8 h-8" />,
    highlights: [
      'SAP certification prep',
      'Live system access',
      'Industry projects',
      'Best practices'
    ],
    modules: [
      'SAP Navigation',
      'Financial Accounting Basics',
      'General Ledger Accounting',
      'Accounts Payable & Receivable',
      'Asset Accounting',
      'Cost Center Accounting',
      'Profit Center Accounting'
    ]
  },
  {
    title: 'Zoho',
    description: 'Complete Zoho suite for business management',
    duration: '6 weeks',
    icon: <BookCheck className="w-8 h-8" />,
    highlights: [
      'Zoho certified training',
      'Business automation',
      'Integration techniques',
      'Custom solutions'
    ],
    modules: [
      'Zoho Books',
      'Zoho CRM',
      'Zoho People',
      'Zoho Invoice',
      'Zoho Inventory',
      'Zoho Reports'
    ]
  },
  {
    title: 'BFSI',
    description: 'Banking, Financial Services and Insurance fundamentals',
    duration: '12 weeks',
    icon: <Briefcase className="w-8 h-8" />,
    highlights: [
      'Industry partnerships',
      'Live market analysis',
      'Portfolio management',
      'Risk assessment'
    ],
    modules: [
      'Banking Operations',
      'Financial Markets',
      'Insurance Products',
      'Risk Management',
      'Investment Banking',
      'Wealth Management'
    ]
  },
  {
    title: 'PD (Personality Development)',
    description: 'Enhance your professional personality and soft skills',
    duration: '4 weeks',
    icon: <Presentation className="w-8 h-8" />,
    highlights: [
      'Mock interviews',
      'Public speaking',
      'Corporate etiquette',
      'Personal branding'
    ],
    modules: [
      'Communication Skills',
      'Interview Preparation',
      'Business Etiquette',
      'Leadership Skills',
      'Time Management',
      'Team Building',
      'Presentation Skills'
    ]
  }
];

const programBenefits = [
  {
    icon: <Target className="w-6 h-6" />,
    title: '100% Placement Guarantee',
    description: 'Secure placement in top companies with our job guarantee program'
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Industry Expert Mentors',
    description: 'Learn from professionals with years of industry experience'
  },
  {
    icon: <Laptop className="w-6 h-6" />,
    title: 'Practical Training',
    description: 'Hands-on experience with real-world projects and case studies'
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Career Support',
    description: 'Lifetime access to our career services and job portal'
  }
];

const careerJourneySteps = [
  {
    title: 'Course Completion Exam',
    description: 'The final stage before getting the DREAM JOB - to assess the Student\'s industry readiness',
    icon: <FileCheck className="w-8 h-8" />,
    color: '#fb8200'
  },
  {
    title: 'LinkedIn & Portfolio',
    description: 'Dedicated sessions for LinkedIn and Portfolio to take you closer to your dream job',
    icon: <Briefcase className="w-8 h-8" />,
    color: '#08406e'
  },
  {
    title: 'Domain',
    description: 'Wise Skills mapping for your career growth',
    icon: <Target className="w-8 h-8" />,
    color: '#fb8200'
  },
  {
    title: 'Soft Skills & Mock Interviews',
    description: 'Complete training for soft skills, aptitude and mock interviews',
    icon: <MessageSquare className="w-8 h-8" />,
    color: '#08406e'
  },
  {
    title: 'Industry Projects',
    description: '15+ industry projects to make you ready for your dream job',
    icon: <Code className="w-8 h-8" />,
    color: '#fb8200'
  },
  {
    title: '80:20 Practical Sessions',
    description: '80 practical : 20 theory approach gives you exposure to real world IT projects & case studies',
    icon: <Laptop className="w-8 h-8" />,
    color: '#08406e'
  },
  {
    title: 'Follow Our 3A Rule',
    description: 'Mandatory for students to follow Attendance, Assessment and Assignment model with minimum 90% score',
    icon: <BookmarkCheck className="w-8 h-8" />,
    color: '#fb8200'
  }
];

const NaukriPakki = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Naukri Pakki Program"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08406e]/90 to-[#fb8200]/90" />
        </div>
        <div className="relative z-10 text-center text-white px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Naukri Pakki Program
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Transform Your Career with Our Industry-Leading Training Program
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-[#fb8200] mr-2" />
                <span>100% Job Guarantee</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-[#fb8200] mr-2" />
                <span>Industry Expert Training</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-[#fb8200] mr-2" />
                <span>Placement Assistance</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#fb8200] text-white px-12 py-5 rounded-full text-xl font-semibold hover:bg-[#08406e] transition-all duration-300 shadow-lg"
            >
              Start Your Journey Today
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">
              Why Choose Naukri Pakki?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive program is designed to transform you into an industry-ready professional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-[#08406e] to-[#fb8200] rounded-full flex items-center justify-center text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
              Comprehensive Course Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master all essential skills with our carefully crafted modules
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courseModules.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8 bg-gradient-to-r from-[#08406e] to-[#fb8200]">
                  <div className="flex items-center justify-between text-white mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-white/10 rounded-lg">
                        {course.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{course.title}</h3>
                        <p className="text-white/90">{course.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-white/80">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-4">Key Highlights:</h4>
                    <ul className="grid grid-cols-2 gap-3">
                      {course.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center">
                          <Star className="w-4 h-4 text-[#fb8200] mr-2" />
                          <span className="text-gray-700 text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Module Contents:</h4>
                    <ul className="space-y-3">
                      {course.modules.map((module, moduleIndex) => (
                        <li key={moduleIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-[#fb8200] mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{module}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-[#08406e] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-gray-300">Students Trained</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-gray-300">Placement Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-gray-300">Corporate Partners</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">₹8 LPA</div>
              <div className="text-gray-300">Average Package</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Journey Section */}
      <section className="py-20 bg-[#08406e] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 mb-6">
              <h2 className="text-4xl font-bold text-white">Career Journey</h2>
              <span className="text-[#fb8200] text-4xl font-bold">#JSP</span>
            </div>
            <div className="flex justify-center mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-r from-[#fb8200] to-[#08406e] p-1 rounded-full"
              >
                <div className="bg-[#08406e] px-6 py-2 rounded-full">
                  <span className="text-2xl font-bold text-white">नौकरी पक्की!</span>
                </div>
              </motion.div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your path to success starts here
            </p>
             {/* <div className="bg-[#fb8200] text-white px-8 py-4 rounded-full text-2xl font-bold shadow-lg">
              START
            </div> */}
          </motion.div>

          <div className="career-path">
            {careerJourneySteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`career-step ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
              >
                <div className={`career-content ${index % 2 === 0 ? 'ml-auto' : ''}`}>
                  <div className={`career-icon ${index % 2 === 0 ? 'ml-auto' : ''}`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
           
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#08406e] to-[#fb8200] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Transform Your Career Today
            </h2>
            <p className="text-xl mb-8">
              Join our Naukri Pakki program and secure your future with guaranteed placement. 
              Limited seats available for the upcoming batch!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#08406e] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Apply Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NaukriPakki;