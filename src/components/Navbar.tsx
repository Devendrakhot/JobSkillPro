import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showEnrollForm, setShowEnrollForm] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavigation = (path: string) => {
    setIsOpen(false); // Close mobile menu
    navigate(path);
  };

  const handleEnrollSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const message = `New Enrollment Request:\nName: ${formData.get('name')}\nEmail: ${formData.get('email')}\nPhone: ${formData.get('phone')}\nCourse: ${formData.get('course')}`;
    window.open(`sms:+911234567890?body=${encodeURIComponent(message)}`);
    setShowEnrollForm(false);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Courses',
      href: '#',
      dropdown: [
        { name: 'Naukri Pakki', href: '/courses/naukri-pakki' },
        { name: 'Software Programming', href: '/courses/software-programming' },
      ],
    },
    { name: 'Career Journey', href: '/career-journey' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    // { name: 'Placement', href: '#placement' },
  ];

  return (
    <>
      <div className="h-16"></div>
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#08406e]/95 backdrop-blur-sm shadow-lg' : 'bg-[#08406e]'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-[#fb8200]">
                Job Skill Pro
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div
                      className="flex items-center space-x-1 cursor-pointer text-white hover:text-[#fb8200] transition-colors duration-200"
                      onMouseEnter={() => setIsCoursesOpen(true)}
                      onMouseLeave={() => setIsCoursesOpen(false)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} />
                      {isCoursesOpen && (
                        <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 transform opacity-0 group-hover:opacity-100 transition-all duration-200">
                          {item.dropdown.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              to={dropItem.href}
                              className="block px-4 py-2 text-sm text-[#08406e] hover:bg-[#fb8200] hover:text-white transition-colors duration-200"
                              onClick={() => setIsCoursesOpen(false)}
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`text-white hover:text-[#fb8200] transition-colors duration-200 ${
                        location.pathname === item.href ? 'text-[#fb8200]' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <button
                onClick={() => setShowEnrollForm(true)}
                className="bg-[#fb8200] text-white px-4 py-2 rounded-full hover:bg-[#fb8200]/90 transition-colors duration-200"
              >
                Enroll Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-[#fb8200] transition-colors duration-200"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#08406e]/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="space-y-1">
                      <button
                        onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                        className="w-full flex items-center justify-between px-3 py-2 text-white hover:text-[#fb8200] transition-colors duration-200"
                      >
                        <span>{item.name}</span>
                        <ChevronDown size={16} />
                      </button>
                      {isCoursesOpen && (
                        <div className="pl-4 space-y-1 bg-white/10 rounded-lg">
                          {item.dropdown.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              to={dropItem.href}
                              className="block px-3 py-2 text-sm text-white hover:text-[#fb8200] transition-colors duration-200"
                              onClick={() => {
                                setIsOpen(false);
                                setIsCoursesOpen(false);
                              }}
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 text-white hover:text-[#fb8200] transition-colors duration-200 ${
                        location.pathname === item.href ? 'text-[#fb8200]' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setShowEnrollForm(true);
                }}
                className="w-full bg-[#fb8200] text-white px-4 py-2 rounded-full hover:bg-[#fb8200]/90 transition-colors duration-200 mt-4"
              >
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Enrollment Form Modal */}
      {showEnrollForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#08406e]">Enroll Now</h2>
              <button
                onClick={() => setShowEnrollForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleEnrollSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#08406e] focus:border-transparent"
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
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#08406e] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#08406e] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                  Course
                </label>
                <select
                  id="course"
                  name="course"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#08406e] focus:border-transparent"
                >
                  <option value="">Select a course</option>
                  <option value="Naukri Pakki">Naukri Pakki</option>
                  <option value="Full Stack Python">Full Stack Python with AI</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Full Stack Development">Full Stack Development</option>
                  <option value="SAP FICO">SAP FICO</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#fb8200] text-white py-3 rounded-lg hover:bg-[#fb8200]/90 transition-colors duration-200"
              >
                Submit Enrollment
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;