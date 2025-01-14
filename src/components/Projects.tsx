import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const projects = [
    {
      title: "Crop Prediction Using Machine Learning",
      description: "Developed a machine learning model to predict optimal crops based on soil and climate data.",
      technologies: ["Python", "Flask", "Scikit-learn", "Pandas", "NumPy"],
      highlights: [
        "Utilized KNN and Random Forest algorithms for prediction",
        "Built a user-friendly web interface using Flask"
      ]
    },
    {
      title: "Cyber Attack Detection in Healthcare",
      description: "Designed a system to detect cyberattacks using machine learning.",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Keras", "Flask"],
      highlights: [
        "Implemented multiple ML algorithms",
        "Achieved high accuracy with hyperparameter tuning"
      ]
    },
    {
      title: "Secure Banking System",
      description: "Built a Java-based application for secure communication using cryptographic techniques.",
      technologies: ["Java", "RSA", "AES", "Digital Signatures"],
      highlights: [
        "Implemented RSA key pair generation and AES encryption",
        "Measured performance metrics"
      ]
    },
    {
      title: "Smart Train Accident Detection",
      description: "Developed an Arduino-based system for train safety monitoring.",
      technologies: ["Arduino", "ESP8266", "IR Sensor", "Flame Sensor"],
      highlights: [
        "Detected anomalies like fire and disconnection",
        "Integrated with ThingSpeak for data logging"
      ]
    },
    {
      title: "Secure Cloud System",
      description: "Created a Flask-based web app for secure file sharing.",
      technologies: ["Python", "Flask", "Dropbox API", "Fernet"],
      highlights: [
        "Implemented file encryption with Fernet",
        "Added email notifications for secure sharing"
      ]
    },
    {
      title: "Real-Time Sewage Analysis",
      description: "Designed an IoT system for sewage monitoring in smart cities.",
      technologies: ["IoT Sensors", "Arduino", "Real-Time Monitoring"],
      highlights: [
        "Monitored water levels and harmful gases",
        "Provided real-time alerts for issues"
      ]
    },
    {
      title: "Liar's Bar - Card Game",
      description: "Multiplayer card game with real-time gameplay.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      highlights: [
        "Built responsive UI",
        "Implemented real-time multiplayer features"
      ]
    },
    {
      title: "MacOS Desktop Simulation",
      description: "React-based simulation of MacOS environment.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      highlights: [
        "Created interactive dock and menu bar",
        "Added real-time clock updates"
      ]
    },
    {
      title: "Habit Tracker",
      description: "Modern habit tracking app with analytics.",
      technologies: ["React", "Vite", "Tailwind CSS"],
      highlights: [
        "Added visual calendar",
        "Implemented dark/light mode"
      ]
    },
    {
      title: "Currency Converter",
      description: "Real-time currency conversion web app.",
      technologies: ["React", "Tailwind CSS", "ExchangeRate-API"],
      highlights: [
        "Integrated with ExchangeRate-API",
        "Added dark mode support"
      ]
    },
    {
      title: "Sudoku Game",
      description: "React-based Sudoku with real-time validation.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      highlights: [
        "Implemented game logic",
        "Added input validation"
      ]
    },
    {
      title: "Live Cricket Scores",
      description: "Real-time cricket score tracking app.",
      technologies: ["React", "Vite", "CricAPI"],
      highlights: [
        "Integrated with CricAPI",
        "Added theme toggle"
      ]
    }
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex >= projects.length) nextIndex = 0;
      if (nextIndex < 0) nextIndex = projects.length - 1;
      return nextIndex;
    });
  };

  return (
    <section id="projects" className="py-20 bg-vintage-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-vintage-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        
        <div className="relative h-[600px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                <motion.div
                  className="col-span-2 border border-vintage-gray-medium rounded-lg p-8 hover:shadow-2xl transition-all bg-vintage-white"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.h3 
                    className="text-2xl font-bold mb-4 flex items-center text-vintage-black"
                    whileHover={{ x: 10 }}
                  >
                    {projects[currentIndex].title}
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </motion.h3>
                  <p className="text-vintage-gray-dark mb-6 text-lg">{projects[currentIndex].description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-lg text-vintage-black">Key Features:</h4>
                    <ul className="list-disc list-inside text-vintage-gray-dark space-y-2">
                      {projects[currentIndex].highlights.map((highlight, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="text-lg"
                        >
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {projects[currentIndex].technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-4 py-2 bg-vintage-gray-light text-vintage-black rounded-full text-base font-medium hover:bg-vintage-black hover:text-vintage-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center mt-8 space-x-4">
          <motion.button
            className="p-2 rounded-full bg-vintage-black text-vintage-white hover:bg-vintage-gray-dark"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
          >
            <ChevronLeft size={24} />
          </motion.button>
          <div className="text-vintage-black font-medium">
            {currentIndex + 1} / {projects.length}
          </div>
          <motion.button
            className="p-2 rounded-full bg-vintage-black text-vintage-white hover:bg-vintage-gray-dark"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
