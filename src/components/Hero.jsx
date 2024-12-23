import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import resume from '../assets/resume.pdf';  // Import the resume file from the assets folder

import { styles } from "../styles"; // Assuming you have styles defined in your project

const Hero = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleClick = () => {
    setIsProcessing(true);
    setTimeout(() => {
      window.location.href = "#contact"; // React-based routing
      setIsProcessing(false);
    }, 2000);
  };

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = resume; // Use the imported resume file path
      link.download = 'emmanuel-resume.pdf'; // Set the filename for download
      link.click();
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="md:mb-[17%] mb-6">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent'>Emmanuel</span>
          </h1>
          <p className="mt-2 text-white-100 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            I design user interfaces with a focus on usability, build dynamic frontend applications using React and Next.js, and develop robust backend systems with Django and Node.js for seamless integration and efficient data handling.
          </p>

        </div>
      </div>

      {/* Zip (Add margin-bottom to create gap) */}
      <div className='absolute xs:bottom-10 mt-12 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

      {/* Buttons Section: About Me, Resume, and Contact */}
      <div className="absolute bottom-16 w-full flex justify-center gap-20 mt-10"> {/* Adjusted margin-top here */}
        <button
          type="button"
          onClick={handleClick}
          className="bg-gradient-to-r from-teal-600 to-blue-500 hover:from-teal-700 hover:to-blue-600 text-white py-2 px-4 w-40 md:w-44 lg:w-48 rounded-full text-sm md:text-base lg:text-lg flex items-center justify-center"
          disabled={isProcessing}
        >
          {isProcessing ? <CircularProgress size={24} color="inherit" className="mr-2" /> : 'Contact Me'}
          {isProcessing && <span>Processing...</span>}
        </button>
        <button
          type="button"
          onClick={handleDownload}
          className="bg-gray-200 text-gray-800 py-2 px-4 w-40 md:w-44 lg:w-48 rounded-full text-sm md:text-base lg:text-lg flex items-center justify-center gap-2"
          disabled={isDownloading}
        >
          {isDownloading ? <CircularProgress size={24} color="inherit" className="mr-2" /> : 'My Resume'}
          {isDownloading && <span>Downloading...</span>}
          <Download />
        </button>
      </div>
    </section>
  );
};

export default Hero;
