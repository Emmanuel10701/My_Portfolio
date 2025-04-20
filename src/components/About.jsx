import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

   <motion.p
  variants={fadeIn('', '', 0.1, 1)}
  className='mt-4 text-secondary text-[15px] sm:text-[15px] md:text-[16px] max-w-3xl leading-[28px]'
>
  Hello, I'm Emmanuel, a dedicated full-stack engineer with expertise in Django, Python, React, Next.js, and backend system implementation. 
  I have a strong command of Tailwind CSS for responsive and modern design and a basic understanding of machine learning concepts using TensorFlow. 
  I’m passionate about creating efficient and scalable solutions that bridge functionality and aesthetics.

  Currently, at Upnxy Innovative Solutions, I’m sharpening my skills by engineering AI-driven marketing systems, working across API integrations, WebSocket features, and intelligent data workflows.
</motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />

        ))}
      </div>
    </>
  )
}

export default SectionWrapper ( About, 'about' )
