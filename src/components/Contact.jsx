import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send form data to the backend API (Assuming the API is located at '/api/sendEmail')
      const response = await fetch("/service/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setLoading(false);
        toast.success("Thank you! I will get back to you as soon as possible.");

        // Clear the form after successful submission
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setLoading(false);
        toast.error(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error sending email:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Contact Information Section */}
        <div className='flex flex-col gap-4 mt-4'>
          <div className='flex items-center gap-2'>
            <Mail className='text-white w-6 h-6' />
            <span className='text-white text-lg'>emmanuelmakau90@gmail.com</span>
          </div>
          <div className='flex items-center gap-2'>
            <Phone className='text-white w-6 h-6' />
            <span className='text-white text-lg'>0793472960</span>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-secondary font-medium'
              style={{ borderColor: '#f39c12' }}
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-secondary font-medium'
              style={{ borderColor: '#f39c12' }}
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-secondary font-medium'
              style={{ borderColor: '#f39c12' }}
            />
          </label>

          <button
            type='submit'
            className="bg-gradient-to-r from-teal-600 to-blue-500 hover:from-teal-700 hover:to-blue-600 text-white py-2 px-4 w-40 md:w-44 lg:w-48 rounded-full text-sm md:text-base lg:text-lg flex items-center justify-center mt-6"
            disabled={loading}
          >
            {loading ? (
              <span>Sending...</span>
            ) : (
              'Send'
            )}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>

      {/* ToastContainer positioned at the bottom */}
      <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
