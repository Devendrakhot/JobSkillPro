// import React from 'react';
// import { BookOpen, Code, Database, BrainCircuit } from 'lucide-react';
// import { motion } from 'framer-motion';

// interface CourseCardProps {
//   title: string;
//   description: string;
//   icon: 'job' | 'python' | 'fullstack' | 'data';
//   href: string;
//   image: string;
// }

// const CourseCard: React.FC<CourseCardProps> = ({ title, description, icon, href, image }) => {
//   const getIcon = () => {
//     switch (icon) {
//       case 'job':
//         return <BookOpen className="w-10 h-10 text-[#fb8200]" />;
//       case 'python':
//         return <Code className="w-10 h-10 text-[#08406e]" />;
//       case 'fullstack':
//         return <Database className="w-10 h-10 text-[#fb8200]" />;
//       case 'data':
//         return <BrainCircuit className="w-10 h-10 text-[#08406e]" />;
//     }
//   };

//   return (
//     <motion.a
//       href={href}
//       whileHover={{ scale: 1.05, y: -5 }}
//       whileTap={{ scale: 0.95 }}
//       className="block overflow-hidden"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
//       >
//         <div className="relative h-48 overflow-hidden">
//           <img 
//             src={image} 
//             alt={title}
//             className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//           <div className="absolute bottom-4 left-4 text-white">
//             <div className="mb-2">{getIcon()}</div>
//             <h3 className="text-2xl font-bold">{title}</h3>
//           </div>
//         </div>
//         <div className="p-6">
//           <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
//           <div className="flex items-center justify-between">
//             <span className="inline-flex items-center text-[#08406e] font-semibold">
//               Learn More
//               <svg className="w-4 h-4 ml-2 transition-transform duration-200 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </span>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-4 py-2 bg-[#fb8200] text-white rounded-lg hover:bg-[#08406e] transition-colors duration-300"
//             >
//               Enroll Now
//             </motion.button>
//           </div>
//         </div>
//       </motion.div>
//     </motion.a>
//   );
// };

// export default CourseCard;
import React from 'react';
import { BookOpen, Code, Database, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

interface CourseCardProps {
  title: string;
  description: string;
  icon: 'job' | 'python' | 'fullstack' | 'data';
  href: string;
  image: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, icon, href, image }) => {
  const iconMap: Record<CourseCardProps['icon'], JSX.Element> = {
    job: <BookOpen className="w-10 h-10 text-[#fb8200]" />,
    python: <Code className="w-10 h-10 text-[#08406e]" />,
    fullstack: <Database className="w-10 h-10 text-[#fb8200]" />,
    data: <BrainCircuit className="w-10 h-10 text-[#08406e]" />,
  };

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="block overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <div className="mb-2">{iconMap[icon] || <BookOpen className="w-10 h-10 text-gray-500" />}</div>
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center text-[#08406e] font-semibold">
              Learn More
              <svg className="w-4 h-4 ml-2 transition-transform duration-200 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-[#fb8200] text-white rounded-lg hover:bg-[#08406e] transition-colors duration-300"
            >
              Enroll Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.a>
  );
};

export default CourseCard;
