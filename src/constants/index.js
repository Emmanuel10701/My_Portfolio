import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    carrent,
    jobit,
    tripguide,
    meta,
    starbucks,
    tesla,
    shopify,
    django,
    SQL,
    tensorflow,
    next,
    Pytorch,
    University,
    doctor,
    rental,
    blog,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Database Management ",
      icon: mobile,
    },
    {
      title: "Backend and API  Developer",
      icon: backend,
    },
    {
      title: "Machine Learning And AI  Developer ",
      icon: creator,
    },
  ];
 
  

  const technologies = [
    
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
   
    {
      name: "git",
      icon: git,
    },
    {
      name: "django",
      icon: django,
    },
    {
      name: "next-gen",
      icon: next,
    },
    {
      name: "pytorch",
      icon: Pytorch,
    },
    {
      name: "SQL",
      icon: SQL,
    },
    {
      name: "tesorflow",
      icon: tensorflow,
    },
   
  ];
  
  const experiences = [
    {
      title: "Full-Stack Developer",
      company_name: "Dedan Kimathi University of Technology",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Design for every device.",
      points: [
        "Designed and developed responsive websites using HTML, CSS, and JavaScript.",
        "Ensured optimal performance across all devices and screen sizes.",
        "Focused on creating seamless user experiences with clean, adaptive layouts.",
      ],
    },
    {
      title: "Next.js Full-Stack Development",
      company_name: "Open Source Projects",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Users first, always",
      points: [
        "Created interactive prototypes and wireframes for web applications.",
        "Focused on user experience and functionality.",
        "Utilized tools like Figma and Adobe XD to design intuitive and visually appealing interfaces.",
      ],
    },
    {
      title: "Frontend Development with React",
      company_name: "My Projects",
      icon: shopify,
      iconBg: "#383E56",
      date: "Dynamic, scalable apps.",
      points: [
        "Built dynamic and scalable frontend applications using React JS.",
        "Leveraged React's component-based architecture to create reusable UI components.",
        "Optimized performance and improved user interaction.",
      ],
    },
    {
      title: "Backend & Machine Learning with Django and tensorflow",
      company_name: "My Projects",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Interactive web magic.",
      points: [
        "Developed interactive web applications using JavaScript.",
        "Built backend services with Django and Django REST Framework.",
        "Created machine learning models with TensorFlow for enhanced user interaction.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I pursued my studies at Dedan Kimathi University of Technology, where I not only excelled academically but also honed my leadership skills, contributing to both my personal and professional growth.",
      name: "Dedan Kimathi University of Technology",
      designation: "[2022-Present]",
      company: "Student with Academic Excellence and Leadership Skills",
      image: University,
    },
    {
      testimonial:
        "During my time at Dedan Kimathi University of Technology, I focused on developing strong leadership abilities while maintaining a high academic performance, which enabled me to contribute effectively to various student activities.",
      name: "Dedan Kimathi University of Technology",
      designation: "[2022-Present]",
      company: "Leadership and Academic Excellence",
      image: University,
    },
    
    {
      testimonial:
 " I am pursuing a degree in Mathematics and Statistics, developing a strong foundation in data analysis, statistical modeling, mathematical problem-solving, and software development."  ,    
      name: "Dedan Kimathi University of Technology",
      designation: "[2021-Present]",
      company: "Undergraduate Student",
      image: University,
    },
  ];
  
  const projects = [
    {
      name: "Doctors",
      description:
        "A platform for doctors to manage appointments, patient data, and more.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: doctor, // Using the imported doctor image
      source_code_link: "https://github.com/your-repo/Doctors",
      live_site_link: "https://healthcare-project-sepia.vercel.app/",
    },
    {
      name: "Blog",
      description:
        "A dynamic blog platform allowing users to post and manage articles.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: blog, // Using the imported blog image
      source_code_link: "https://github.com/your-repo/Blog",
      live_site_link: "https://developers-home.vercel.app/",
    },
    {
      name: "Rental",
      description:
        "A rental platform for managing properties, booking, and customer interactions.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: rental, // Using the imported rental image
      source_code_link: "https://github.com/your-repo/Rental",
      live_site_link: "https://apartments-site-rental.vercel.app/",
    },
  ];
  

  
  export { services, technologies, experiences, testimonials, projects };