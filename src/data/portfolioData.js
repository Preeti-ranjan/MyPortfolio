import {
  BrainCircuit,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Mail,
  ServerCog,
  Sparkles,
  Trophy,
} from 'lucide-react';

export const profile = {
  name: 'Preeti Ranjan Sarangi',
  initials: 'PRS',
  primaryRole: 'Java Full Stack Developer',
  secondaryRole: 'Full Stack Developer • Software Developer • AI/ML Enthusiast',
  email: 'preetiranjansarangi25@gmail.com',
  phone: '+91 9937666605',
  github: 'https://github.com/Preeti-ranjan',
  linkedin: 'https://www.linkedin.com/in/preeti-ranjan-sarangi-5933a4283/',
  resumeUrl: '/assets/Preeti_Ranjan_Resume.pdf',
  photoUrl: '/assets/passport-photo.jpeg',
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { value: '3+', label: 'Featured Projects' },
  { value: 'B.Tech', label: 'Computer Science' },
  { value: '7.87', label: 'CGPA' },
  { value: '1', label: 'Web Development Internship' },
];

export const aboutCards = [
  { number: '01', title: 'Full Stack Development', icon: Layers3 },
  { number: '02', title: 'Backend Engineering', icon: ServerCog },
  { number: '03', title: 'AI & Computer Vision', icon: BrainCircuit },
  { number: '04', title: 'Problem Solving', icon: Sparkles },
];

export const skills = [
  { title: 'Languages', icon: Code2, items: ['Java', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Python'] },
  { title: 'Frameworks & Libraries', icon: Layers3, items: ['React.js', 'Spring Boot'] },
  { title: 'Backend & APIs', icon: ServerCog, items: ['Node.js', 'Express.js', 'REST APIs'] },
  { title: 'Databases', icon: Database, items: ['MongoDB', 'MySQL'] },
  {
    title: 'Developer Tools',
    icon: Code2,
    items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Eclipse', 'Jupyter Notebook', 'Android Studio'],
  },
  { title: 'Core Concepts', icon: GraduationCap, items: ['Data Structures & Algorithms', 'DBMS', 'Operating Systems'] },
];

export const filters = ['All', 'Full Stack', 'AI', 'Machine Learning', 'Computer Vision', 'Web Development'];

export const projects = [
  {
    number: '01',
    slug: 'interviewiq',
    title: 'InterviewIQ',
    badge: 'Featured Project',
    featured: true,
    description:
      'A scalable AI-driven interview platform for real-time interview simulation and resume-based question generation.',
    technology: 'React.js / Node.js / Express.js / MongoDB',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Authentication', 'Razorpay', 'Framer Motion'],
    category: 'AI / Full Stack',
    filterTags: ['AI', 'Full Stack'],
    github: 'https://github.com/Preeti-ranjan/InterviewIQ',
    visual: 'interview',
    highlights: [
      'Served 100+ users',
      '85%+ relevant question accuracy',
      'Reduced backend response time by approximately 30%',
      'Implemented secure Firebase OAuth authentication',
      'Integrated Razorpay payment gateway',
      'Created a dynamic responsive user interface',
    ],
    sections: {
      overview:
        'InterviewIQ focuses on real-time interview simulation and resume-based question generation for practical interview preparation.',
      implementation:
        'The project combines a responsive React interface with Node.js, Express.js, MongoDB, Firebase Authentication, Razorpay, and Framer Motion.',
    },
  },
  {
    number: '02',
    slug: 'face-recognition-attendance',
    title: 'Face-Recognition-Attendance-System',
    featured: true,
    description:
      'A web-based application that automates the process of marking attendance using facial recognition technology.',
    technology: 'JavaScript',
    technologies: ['JavaScript'],
    category: 'AI / Computer Vision',
    filterTags: ['AI', 'Computer Vision'],
    github: 'https://github.com/Preeti-ranjan/Face-Recognition-Attendance-System',
    visual: 'vision',
    sections: {
      overview:
        'A computer-vision themed attendance project focused on automating attendance workflows through facial recognition.',
    },
  },
  {
    number: '03',
    slug: 'quiz-game',
    title: 'Quiz-Game',
    description:
      "A fun, interactive, and web-based quiz application designed to test users' knowledge through a collection of multiple-choice questions.",
    technology: 'PHP',
    technologies: ['PHP'],
    category: 'Web Development',
    filterTags: ['Web Development'],
    github: 'https://github.com/Preeti-ranjan/Quiz-Game',
    visual: 'web',
  },
  {
    number: '04',
    slug: 'svm-image-classification',
    title: 'Support-Vector-Machine-SVM-to-classify-images',
    description:
      'A Support Vector Machine image classification project demonstrating the use of an SVM machine-learning algorithm to classify images into different categories.',
    technology: 'Jupyter Notebook',
    technologies: ['Jupyter Notebook'],
    category: 'Machine Learning',
    filterTags: ['Machine Learning'],
    github: 'https://github.com/Preeti-ranjan/Support-Vector-Machine-SVM-to-classify-images',
    visual: 'ml',
  },
  {
    number: '05',
    slug: 'house-price-prediction',
    title: 'Predict-house-prices-based-on-square-footage',
    description:
      'A machine learning project that uses Linear Regression to predict house prices based on property features such as square footage and number of bedrooms.',
    technology: 'Jupyter Notebook',
    technologies: ['Jupyter Notebook'],
    category: 'Machine Learning',
    filterTags: ['Machine Learning'],
    github: 'https://github.com/Preeti-ranjan/Predict-house-prices-based-on-square-footage',
    visual: 'ml',
  },
  {
    number: '06',
    slug: 'hand-gesture-recognition',
    title: 'Hand-gesture-recognition-model',
    description:
      'A machine learning and computer vision project designed to recognize and classify different hand gestures from input data.',
    technology: 'Jupyter Notebook',
    technologies: ['Jupyter Notebook'],
    category: 'Machine Learning / Computer Vision',
    filterTags: ['Machine Learning', 'Computer Vision'],
    github: 'https://github.com/Preeti-ranjan/Hand-gesture-recognition-model',
    visual: 'vision',
  },
  {
    number: '07',
    slug: 'kmeans-customer-segmentation',
    title: 'K-means-clustering-algorithm-to-group-customers-based-on-their-purchasing-behavior',
    description:
      'A customer segmentation project using the K-Means clustering algorithm to group customers based on purchasing behavior.',
    technology: 'Jupyter Notebook',
    technologies: ['Jupyter Notebook'],
    category: 'Machine Learning / Data Science',
    filterTags: ['Machine Learning'],
    github:
      'https://github.com/Preeti-ranjan/K-means-clustering-algorithm-to-group-customers-based-on-their-purchasing-behavior',
    visual: 'ml',
  },
];

export const experience = {
  role: 'Web Developer Intern',
  company: 'Prodigy InfoTech',
  duration: 'July 2024 - August 2024',
  description:
    'Completed a Web Development internship where I developed responsive and user-friendly web pages, designed interactive user interfaces, debugged and optimized frontend code for better performance, and collaborated on real-world projects while gaining practical experience in modern web development practices and problem-solving.',
};

export const education = [
  {
    degree: 'Bachelors of Technology in Computer Science',
    institution: 'Centurion University of Technology and Management, Bhubaneswar',
    duration: '2021-2025',
    result: 'CGPA: 7.87',
  },
  {
    degree: 'Higher Secondary',
    institution: 'Royal College of Science and Technology, Bhubaneswar',
    duration: '2019-2021',
    result: 'Percentage: 68.5%',
  },
  {
    degree: 'Secondary Education',
    institution: 'SSVM, Dhenkanal',
    duration: '2018-2019',
    result: 'Percentage: 66.5%',
  },
];

export const certifications = [
  { title: 'AWS Certified Cloud Practitioner', icon: Trophy },
  { title: 'Prodigy InfoTech Internship', icon: Mail },
];
