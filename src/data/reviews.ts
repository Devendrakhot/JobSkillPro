export interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
  course: string;
  featured: boolean;
  gradYear: string;
  achievements?: string[];
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    role: 'Software Developer',
    company: 'Amazon',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    content: 'The Naukri Pakki program transformed my career completely. The practical training approach and placement support were exceptional. I went from being a fresher to landing a role at Amazon with a great package.',
    rating: 5,
    course: 'Full Stack Development',
    featured: true,
    gradYear: '2023',
    achievements: [
      'Topped the batch with 95% score',
      'Completed 10+ industry projects',
      'Selected in first interview'
    ]
  },
  {
    id: '2',
    name: 'Rahul Verma',
    role: 'Full Stack Developer',
    company: 'Microsoft',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    content: 'The comprehensive curriculum and excellent mentors helped me master both frontend and backend development. Within a month of completing the course, I was placed at Microsoft.',
    rating: 5,
    course: 'Naukri Pakki Program',
    featured: true,
    gradYear: '2023',
    achievements: [
      'Developed 3 full-stack applications',
      'Won internal hackathon',
      'Featured in college newsletter'
    ]
  },
  {
    id: '3',
    name: 'Anjali Patel',
    role: 'Data Scientist',
    company: 'Google',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    content: 'The Data Science course at Job Skill Pro was exactly what I needed to transition into tech. The hands-on projects and industry exposure were invaluable.',
    rating: 5,
    course: 'Data Science',
    featured: true,
    gradYear: '2023',
    achievements: [
      'Published research paper',
      'Led team of 5 members',
      'Received excellence award'
    ]
  },
  {
    id: '4',
    name: 'Arjun Kumar',
    role: 'SAP Consultant',
    company: 'Deloitte',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    content: 'The SAP FICO course provided comprehensive training with real-world projects. The placement team was extremely supportive throughout the process.',
    rating: 5,
    course: 'SAP FICO',
    featured: false,
    gradYear: '2023',
    achievements: [
      'SAP certified professional',
      'Completed 5 case studies',
      'Campus ambassador'
    ]
  },
  {
    id: '5',
    name: 'Neha Singh',
    role: 'Business Analyst',
    company: 'Accenture',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    content: 'The BFA course helped me understand the core concepts of business and finance. The practical approach to learning made all the difference.',
    rating: 5,
    course: 'BFA',
    featured: false,
    gradYear: '2023',
    achievements: [
      'Best project award',
      'Internship at top firm',
      'Perfect attendance'
    ]
  },
  {
    id: '6',
    name: 'Vikram Reddy',
    role: 'Tax Consultant',
    company: 'EY',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    content: 'The Taxpro program was excellent. The curriculum covered all aspects of taxation, and the faculty was highly knowledgeable.',
    rating: 5,
    course: 'Taxpro',
    featured: false,
    gradYear: '2023',
    achievements: [
      'Gold medalist',
      'Published article',
      'Mentored juniors'
    ]
  }
];