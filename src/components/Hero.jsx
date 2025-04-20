import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import resume from '../assets/resume.pdf'; // Import the resume file from the assets folder

// Define the Hero component
const Hero = () => {
  return (
    <div className="w-full h-screen mx-auto flex flex-col justify-center items-center">
      {/* Hero Section */}
      <section className="w-full h-full flex flex-col justify-center items-center">
        <div className="inset-0 max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          </div>

          {/* Hero Text */}
          <div className="md:mt-[2%] md:mb-[2%] mb-6 text-left md:max-w-2xl lg:max-w-3xl">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent font-extrabold">
                Emmanuel
              </span>
            </h1>
         <p className="mt-2 text-white-100 text-sm sm:text-sm md:text-base lg:text-lg">
          I am a full-stack developer specializing in front-end technologies like React and Next.js, 
          back-end systems with Django and Node.js, and data management with SQL and NoSQL databases. 
          I have hands-on experience with DevOps practices, including setting up CI/CD pipelines using Jenkins and GitLab, 
          ensuring efficient deployment and continuous delivery. Additionally, I explore machine learning with TensorFlow 
          to build neural networks for intelligent web applications.
        
          At Upnxy Innovative Solutions, I’m expanding my skills in integrating real-time systems using WebSockets and REST APIs.  
          I'm gaining strong backend expertise by building scalable APIs with PostgreSQL and Django.  
          I'm also working alongside AI teams, contributing to intelligent automation through Azure LLMs and advanced web scraping.
        </p>


          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="xs:bottom-10 mt-12 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
