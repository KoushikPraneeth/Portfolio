import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react";
import { Hero3D } from "./Hero3D";
import { Typewriter } from "react-simple-typewriter";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const socialLinks = [
    {
      icon: <Github size={28} />,
      href: "https://github.com/KoushikPraneeth",
      color: "hover:text-github hover:shadow-github/50",
    },
    {
      icon: <Linkedin size={28} />,
      href: "https://www.linkedin.com/in/praneeth-koushik",
      color: "hover:text-linkedin hover:shadow-linkedin/50",
    },
    {
      icon: <Mail size={28} />,
      href: "mailto:praneethkoushik2003@gmail.com",
      color: "hover:text-red-500 hover:shadow-red-500/50",
    },
    {
      icon: <Phone size={28} />,
      href: "tel:+918886044311",
      color: "hover:text-green-500 hover:shadow-green-500/50",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      <Hero3D />
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          variants={itemVariants}
        >
          <Typewriter
            words={["Praneeth Koushik Lakkam"]}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl text-gray-300 mb-8"
          variants={itemVariants}
          animate={floatingAnimation}
        >
          Electronics and Communication Student
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-gray-400"
          variants={itemVariants}
        >
          Passionate about software development, machine learning, and IoT.
          Building innovative solutions for real-world problems.
        </motion.p>

        <motion.div
          className="flex justify-center space-x-6 mb-12"
          variants={itemVariants}
        >
          {socialLinks.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 transition-all duration-300 ${item.color}
                hover:scale-110 rounded-full p-3
                hover:shadow-lg backdrop-blur-sm
                bg-white/10 hover:bg-white/20`}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={32} className="animate-bounce" />
        </motion.div>
      </motion.div>
    </div>
  );
}
