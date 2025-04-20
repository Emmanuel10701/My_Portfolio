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
    python,
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
      title: "Database Management and DevOps",
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
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "CSS 3",
      icon: css,
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
    
    {
      name: "Python",
      icon: python,
    },
  ];
  
  const experiences = [
{
  title: "Software Engineer",
  company_name: "Upnxy Innovative Solutions, India",
  icon: tesla,
  iconBg: "#E6DEDD",
  date: "Feb 2024 - March 2025",
  points: [
    "Developed full-stack solutions for an AI-powered marketing automation software using modern backend and frontend technologies.",
    "Created scalable RESTful APIs and implemented WebSocket communication for real-time features.",
    "Integrated secure and user-friendly payment gateways to enhance customer experience and monetization.",
    "Coordinated with the frontend team to ensure seamless API integration and data flow across the platform.",
    "Collaborated with the data science team to retrieve and process relevant datasets for AI model training.",
    "Used PostgreSQL for database management and implemented CI/CD pipelines for streamlined deployments.",
    "Built web scraping solutions using BeautifulSoup and leveraged Azure LLMs for intelligent automation tasks.",
  ],
}
,
   {
  title: "Django & Next.js Full-Stack Engineer",
  company_name: "Open Source Projects",
  icon: starbucks,
  iconBg: "#E6DEDD",
  date: "Feb 2024 - Present",
  points: [
    "Developed full-stack web applications using Next.js for the frontend and Django for the backend.",
    "Integrated Django REST Framework APIs with Next.js, ensuring seamless data flow between client and server.",
    "Enhanced performance and SEO using Next.js features like server-side rendering (SSR) and static site generation (SSG).",
    "Implemented secure authentication, role-based access control, and state management using tools like NextAuth.js and Redux.",
    "Collaborated on open-source projects with a focus on scalable architectures, responsive UI/UX design, and clean, testable code.",
  ],
}
,
    {
      title: "Frontend Developer with React",
      company_name: "My Projects",
      icon: shopify,
      iconBg: "#383E56",
      date: "Mar 2024 - Nov 2024",
      points: [
        "Built dynamic and scalable frontend applications using React JS, focusing on reusability and performance.",
        "Utilized React's component-based architecture to create modular and maintainable user interfaces.",
        "Improved user experience by optimizing page load times and enhancing interactivity.",
        "Integrated frontend components with RESTful APIs and third-party services.",
        "Ensured cross-browser compatibility and responsiveness for a seamless user experience across devices.",
      ],
    },
    {
      title: "Backend Developer & Machine Learning Engineer",
      company_name: "My Projects",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Mar 2024 - Nov 2024",
      points: [
        "Developed backend services using Django and Django REST Framework for creating RESTful APIs.",
        "Integrated machine learning models built with TensorFlow to enhance web application functionality.",
        "Created custom algorithms and features for improving user interactions and data processing.",
        "Managed databases, optimized queries, and ensured the security of user data.",
        "Collaborated on full-stack web applications, ensuring smooth integration between backend services and frontend components.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "At Dedan Kimathi University of Technology, I excelled academically and developed a strong passion for full-stack software development, which fueled my career aspirations.",
      name: "Dedan Kimathi University of Technology",
      designation: "[2022-2024]",
      company: "Student with Academic Excellence and Passion for Full-Stack Development",
      image: University,
    },
    {
      testimonial:
        "My time at Dedan Kimathi University of Technology helped me focus on leadership and academic growth, preparing me to contribute effectively in various activities.",
      name: "Dedan Kimathi University of Technology",
      designation: "[2022-2024]",
      company: "Leadership and Academic Excellence",
      image: University,
    },
    {
      testimonial:
        "Currently pursuing a degree in Mathematics and Statistics, I’m building a strong foundation in data analysis, statistics, and software development, fueling my passion for technology.",
      name: "Dedan Kimathi University of Technology",
      designation: "[2021-2024]",
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
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "Mysql",
          color: "pink-text-gradient",
        },
      ],
      image: doctor, // Using the imported doctor image
      source_code_link: "https://github.com/Emmanuel10701/Healthcare-",
    },
    {
      name: "Blog",
      description:
        "A dynamic blog platform allowing users to post and manage articles.",
      tags: [
        {
          name: "Next js",
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
      source_code_link: "https://github.com/Emmanuel10701/developers_blog",
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
      source_code_link: "https://github.com/Emmanuel10701/Apartments",
    },
  ];
  

  
  export { services, technologies, experiences, testimonials, projects };
