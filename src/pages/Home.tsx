import React from 'react';
import { motion } from 'framer-motion';
import PromoModal from '../components/PromoModal';
import HeroSlider from '../components/HeroSlider';
import CourseCard from '../components/CourseCard';
import SocialProof from '../components/SocialProof';
import ReviewSlider from '../components/ReviewSlider';
import CompanySlider from '../components/CompanySlider';
import FeatureCards from '../components/FeatureCards';

function Home() {
  const courses = [
    {
      title: 'Naukri Pakki',
      description: 'Job guarantee program with comprehensive training and placement support',
      icon: 'job' as const,
      href: '/courses/naukri-pakki',
      image: '/images/one.webp'
    },
    {
      title: 'Full Stack Python with AI',
      description: 'Master Python programming with AI and machine learning integration',
      icon: 'python' as const,
      href: '/courses/python-ai',
      image: '/images/two.webp'
    },
    {
      title: 'Full Stack Development',
      description: 'Complete web development training from frontend to backend',
      icon: 'fullstack' as const,
      href: '/courses/fullstack',
      image: '/images/three.webp'
    },
    {
      title: 'Data Science',
      description: 'Learn data analysis, visualization, and predictive modeling',
      icon: 'data' as const,
      href: '/courses/data-science',
      image: '/images/four.webp'
    },
    {
      title: 'Graphic Design',
      description: 'Master visual communication with industry-standard design tools',
      icon: 'design' as const,
      href: '/courses/graphic-design',
      image: '/images/five.webp'
    },
    {
      title: 'Interior Design',
      description: 'Learn space planning, materials selection, and 3D visualization',
      icon: 'interior' as const,
      href: '/courses/interior-design',
      image: '/images/six.webp'
    },
    {
      title: 'Digital Marketing',
      description: 'Become expert in SEO, social media, and online advertising',
      icon: 'marketing' as const,
      href: '/courses/digital-marketing',
      image: '/images/seven.webp'
    },
    {
      title: 'Data Analysis',
      description: 'Acquire skills in data processing, statistics, and business intelligence',
      icon: 'analysis' as const,
      href: '/courses/data-analysis',
      image: '/images/eight.webp'
    }
  ];

  return (
    <main>
      <PromoModal />
      <HeroSlider />
      
      {/* Title Section */}
      <section className="py-20 text-center bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Job Skill Pro
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed">
            Master In-Demand Careers with Industry-Leading Training Programs
          </p>
        </motion.div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center gradient-text mb-16"
          >
            Our Featured Courses
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CourseCard {...course} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FeatureCards />
      <SocialProof />
      <ReviewSlider />
      <CompanySlider />
    </main>
  );
}

export default Home;