import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const cardVariants = {
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-lg text-gray-700 leading-relaxed mb-8"
            variants={itemVariants}
          >
            I am a passionate Electronics and Communication student with a strong interest in software development, 
            machine learning, and IoT. I enjoy building innovative projects that solve real-world problems and have 
            hands-on experience in Python, Java, React, and Arduino. My goal is to leverage my technical skills and 
            creativity to contribute to impactful solutions in the tech industry.
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              variants={itemVariants}
              whileHover="hover"
              variants={cardVariants}
            >
              <h3 className="font-bold mb-2 text-lg">Location</h3>
              <p className="text-gray-600">Nizamabad, Telangana</p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              variants={itemVariants}
              whileHover="hover"
              variants={cardVariants}
            >
              <h3 className="font-bold mb-2 text-lg">Education</h3>
              <p className="text-gray-600">B.Tech in Electronics and Communication</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
