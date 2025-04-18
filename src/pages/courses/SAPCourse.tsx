import React from 'react';
import { motion } from 'framer-motion';
import { Database, Building, Calculator, BookOpen, Users, Award, Clock, BarChart as ChartBar, DollarSign, FileText, Briefcase, Settings } from 'lucide-react';

const modules = [
  {
    title: 'SAP Fundamentals',
    duration: '4 weeks',
    icon: <Building className="w-6 h-6" />,
    topics: [
      'SAP Overview and Navigation',
      'SAP Modules Introduction',
      'Business Processes in SAP',
      'System Configuration Basics',
      'Master Data Management'
    ]
  },
  {
    title: 'Financial Accounting (FI)',
    duration: '8 weeks',
    icon: <DollarSign className="w-6 h-6" />,
    topics: [
      'General Ledger Accounting',
      'Accounts Payable & Receivable',
      'Bank Accounting',
      'Asset Accounting',
      'Financial Statements'
    ]
  },
  {
    title: 'Controlling (CO)',
    duration: '6 weeks',
    icon: <ChartBar className="w-6 h-6" />,
    topics: [
      'Cost Center Accounting',
      'Internal Orders',
      'Profit Center Accounting',
      'Product Costing',
      'Profitability Analysis'
    ]
  },
  {
    title: 'Business Reporting',
    duration: '4 weeks',
    icon: <FileText className="w-6 h-6" />,
    topics: [
      'SAP Reports Configuration',
      'Custom Report Development',
      'Analytics and Dashboards',
      'Report Performance Optimization',
      'Data Extraction Techniques'
    ]
  },
  {
    title: 'Integration & Workflows',
    duration: '6 weeks',
    icon: <Settings className="w-6 h-6" />,
    topics: [
      'Cross-Module Integration',
      'Business Workflow Design',
      'Interface Configuration',
      'Process Automation',
      'Testing and Validation'
    ]
  },
  {
    title: 'Project Implementation',
    duration: '4 weeks',
    icon: <Briefcase className="w-6 h-6" />,
    topics: [
      'Project Lifecycle Phases',
      'Implementation Methodology',
      'Configuration Documentation',
      'User Training',
      'Go-Live Support'
    ]
  }
];

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: '32 Weeks Program',
    description: 'Comprehensive SAP FICO training with hands-on practice'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'SAP Certified Trainers',
    description: 'Learn from experienced SAP consultants and practitioners'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Certification',
    description: 'Prepare for SAP Global Certification examinations'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Flexible Schedule',
    description: 'Weekend and weekday batches available'
  }
];

const SAPCourse = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
            alt="SAP FICO Course"
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
              SAP FICO
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Master Financial Accounting and Controlling with SAP
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
                        <Calculator className="w-5 h-5 text-[#fb8200]" />
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
            Start Your SAP Journey Today
          </h2>
          <p className="text-xl mb-8">
            Join thousands of successful SAP professionals who transformed their careers with us
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

export default SAPCourse;