import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Navbar = ({ smoothScroll }) => {
  const sections = ["home", "about", "skills", "projects", "contact"];
  const [activeSection, setActiveSection] = useState("home");
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgba(255,255,255,0.5)",
      transition: { duration: 0.2 },
    },
  };

  const socialLinks = [
    {
      icon: <FiGithub />,
      href: "https://github.com/ROHIT-JINJALA",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin />,
      href: "https://www.linkedin.com/in/jinjala-rohit",
      label: "LinkedIn",
    },
  ];

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let currentActive = "";
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section) {
              const rect = section.getBoundingClientRect();
              if (
                rect.top <= window.innerHeight / 2 &&
                rect.bottom >= window.innerHeight / 2
              ) {
                currentActive = sections[i];
                break;
              }
            }
          }
          setActiveSection(currentActive);
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Logo */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 bg-opacity-90 backdrop-blur-sm p-4 shadow-lg md:static md:bg-transparent md:shadow-none md:hidden justify-right"
        
        variants={navVariants}
        animate="visible"
      >
        <a
          href="#home"
          className="flex items-center text-yellow-500 text-xl font-bold pl-2
                    transform transition-transform duration-300 hover:scale-105"
          onClick={(e) => {
            e.preventDefault();
            smoothScroll("home");
          }}
        >
          <span className="mr-1">&lt;</span> RJ{" "}
          <span className="ml-1">/&gt;</span>
        </a>
      </motion.div>

      {/* Mobile Bottom Nav */}
      <motion.ul
        className="fixed bottom-10 left-3 right-3 z-50 bg-opacity-90 backdrop-blur-3xl p-3 flex justify-center md:hidden text-gray-900 rounded-lg shadow-lg border border-gray-600 max-w-lg mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "linear" }}
      >
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                smoothScroll(section);
              }}
              className={`relative px-2.5 py-2 ease-in-out
          ${
            activeSection === section
              ? "text-yellow-400 border-b-[3px] border-yellow-400"
              : "text-soft-neutral"
          }
        `}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </motion.ul>

      {/* Desktop Navbar */}
      <motion.nav
        className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-opacity-90 backdrop-blur-sm p-4 md:p-6 shadow-lg  justify-between items-center text-gray-900"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center text-yellow-500 text-xl font-bold transform transition-transform duration-300 hover:scale-110"
          onClick={(e) => {
            e.preventDefault();
            smoothScroll("home");
          }}
        >
          <span className="mr-1">&lt;</span> RJ{" "}
          <span className="ml-1">/&gt;</span>
        </a>

        {/* Nav Links */}
        <ul className="flex space-x-6 md:space-x-8 text-sm md:text-base items-center">
          {sections.map((section, index) => (
            <motion.li
              key={section}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll(section);
                }}
                className={`relative px-2.5 py-2 ease-in-out
          ${
            activeSection === section
              ? "text-yellow-400 border-b-[3px] border-yellow-400"
              : "text-soft-neutral"
          }
        `}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </motion.li>
          ))}

          {/* Social Links */}
          <li className="flex space-x-4 border-l border-gray-700 pl-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800/70"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </li>
        </ul>
      </motion.nav>
    </>
  );
};

export default Navbar;
