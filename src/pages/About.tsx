import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Target, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, value: '5000+', label: 'Students Trained' },
    { icon: <Briefcase className="w-6 h-6" />, value: '1000+', label: 'Successful Placements' },
    { icon: <BookOpen className="w-6 h-6" />, value: '50+', label: 'Industry Partners' },
    { icon: <Award className="w-6 h-6" />, value: '95%', label: 'Placement Rate' }
  ];

  const team = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      bio: '20+ years of experience in tech education and industry leadership'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Training',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      bio: 'Former Tech Lead at Google with passion for mentoring'
    },
    {
      name: 'Amit Patel',
      role: 'Placement Director',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      bio: 'Expert in career counseling and corporate relations'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="About Us Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08406e]/90 to-[#fb8200]/90" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About Job Skill Pro
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Transforming careers through innovative education and industry-focused training
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
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
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-[#08406e] to-[#fb8200] text-white">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold gradient-text mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Job Skill Pro, we're committed to bridging the gap between education and industry requirements. Our mission is to empower individuals with the skills, knowledge, and confidence needed to excel in the tech industry.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="w-6 h-6 text-[#08406e]" />
                  <span className="text-gray-700">Industry-aligned curriculum</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-6 h-6 text-[#08406e]" />
                  <span className="text-gray-700">Hands-on learning approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-6 h-6 text-[#08406e]" />
                  <span className="text-gray-700">Guaranteed job placement</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
                alt="Our Mission"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#08406e]/10 to-[#fb8200]/10 rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts who are shaping the future of tech education
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <p className="text-gray-200">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;