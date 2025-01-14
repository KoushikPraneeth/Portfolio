import React from 'react';
import { motion } from 'framer-motion';

export function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'JavaScript', 'C++'],
    },
    {
      title: 'Web Technologies',
      skills: ['React', 'HTML', 'CSS', 'Tailwind CSS', 'Flask'],
    },
    {
      title: 'Machine Learning',
      skills: ['Scikit-learn', 'TensorFlow', 'Keras', 'Pandas', 'NumPy'],
    },
    {
      title: 'IoT & Hardware',
      skills: ['Arduino', 'ESP8266', 'Sensors'],
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'Vite', 'Node.js', 'Express.js'],
    },
    {
      title: 'Other Skills',
      skills: ['Cryptography (RSA, AES)', 'Data Structures', 'Algorithms'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-vintage-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center text-vintage-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-vintage-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all border-2 border-vintage-gray-medium transform hover:-translate-y-1"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-vintage-black">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-vintage-gray-light text-vintage-black rounded-full text-base font-medium hover:bg-vintage-black hover:text-vintage-white"
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
