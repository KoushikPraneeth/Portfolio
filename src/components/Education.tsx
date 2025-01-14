import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';

export function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology in Electronics and Communication",
      institution: "Vellore Institute of Technology, Vellore",
      details: "CGPA: 7.8",
      icon: <GraduationCap className="w-8 h-8 text-gray-800" />
    },
    {
      degree: "Senior Secondary (XI and XII)",
      institution: "Narayana Jr. College",
      details: "Percentage: 96%",
      icon: <School className="w-8 h-8 text-gray-800" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 w-0.5 h-full bg-gray-200 transform -translate-x-1/2"></div>

          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              className={`mb-8 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center w-full`}
              variants={itemVariants}
            >
              {/* Timeline content */}
              <div className={`w-5/12 px-4 py-6 bg-white rounded-lg shadow-md ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-gray-600 mb-2">{edu.institution}</p>
                <p className="text-gray-700 font-medium">{edu.details}</p>
              </div>

              {/* Timeline icon */}
              <div className="w-2/12 flex justify-center relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white p-2">
                  {edu.icon}
                </div>
              </div>

              {/* Year display */}
              <div className={`w-5/12 px-4 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                <div className="text-2xl font-bold text-gray-800">
                  {index === 0 ? "2020–2024" : "2018–2020"}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
