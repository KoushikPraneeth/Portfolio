import React, { useState } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    "About",
    "Skills",
    "Projects",
    "Education",
    "Certifications",
    "Contact",
  ];

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.span
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              PK
            </motion.span>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item}
                  className="relative"
                  onHoverStart={() => setHoveredItem(item)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-600 hover:text-black transition-colors py-2 px-3 rounded-md relative"
                  >
                    {item}
                    {hoveredItem === item && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-500"
                        layoutId="underline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <motion.button
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-200">
                {navItems.map((item) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full px-3 py-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-md text-left"
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Praneeth Koushik Lakkam</h3>
              <p className="text-gray-400">
                Electronics and Communication Student
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/KoushikPraneeth"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/praneeth-koushik"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                <Linkedin />
              </a>
              <a
                href="mailto:praneethkoushik2003@gmail.com"
                className="hover:text-gray-400 transition-colors"
              >
                <Mail />
              </a>
              <a
                href="tel:+918886044311"
                className="hover:text-gray-400 transition-colors"
              >
                <Phone />
              </a>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-400">
            © {new Date().getFullYear()} Praneeth Koushik Lakkam. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
