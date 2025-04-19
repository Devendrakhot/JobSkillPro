import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+91 9892879810', '+91 9372471869'],
      color: '#08406e'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['info@jobskillpro.com', 'support@jobskillpro.com'],
      color: '#fb8200'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      details: ['1St Floor, mathura niwas, Navghar Rd,', 'Bhayandar East'],
      color: '#08406e'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Class Hours',
      details: ['Monday - Saturday', '9:00 AM - 9:00 PM'],
      color: '#fb8200'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Contact Us Hero"
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            We're here to help you take the next step in your career
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white"
                  style={{ backgroundColor: info.color }}
                >
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold gradient-text">Get in Touch</h2>
              <p className="text-lg text-gray-600">
                Have questions about our courses or want to learn more about our training programs?
                Fill out the form and we'll get back to you as soon as possible.
              </p>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d615.5205762198968!2d72.85268158278018!3d19.312140452708164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3be7b02a8f769059%3A0x8f08eda35f9c932b!2s1St%20Floor%2C%20mathura%20niwas%2C%20Navghar%20Rd%2C%20opp.%20Shani%20Mandir%2C%20Bhayandar%2C%20Chandan%20nagar%2C%20Bhayandar%20East%2C%20Mira%20Bhayandar%2C%20Maharashtra%20401105!3m2!1d19.3121306!2d72.85331699999999!5e1!3m2!1sen!2sin!4v1743246331784!5m2!1sen!2sin"
                    width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08406e] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08406e] focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08406e] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08406e] focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="course-inquiry">Course Inquiry</option>
                      <option value="admission">Admission</option>
                      <option value="placement">Placement</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08406e] focus:border-transparent"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#08406e] to-[#fb8200] text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-[#08406e] hover:to-[#fb8200] transition-all duration-300"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;