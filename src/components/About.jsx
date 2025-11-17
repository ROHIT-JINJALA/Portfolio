import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function About() {
  const item = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "circOut" } },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Slower stagger for nicer effect
      },
    },
  };

  return (
    <section id="about" className="bg-primary-dark">
      <motion.div
        className="max-w-4xl mx-auto text-center px-4 mt-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-gray-900 mb-8"
          variants={item}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-800 leading-relaxed"
          variants={item}
        >
          I’m a B.E Information Technology student (graduating 2026) who
          builds full-stack web applications with a focus on React and Node.
          I enjoy turning ideas into products — from building responsive UI
          to designing REST APIs and persisting data with MongoDB.
        </motion.p>

        {/* Grid Cards */}
        <div className="mt-6 grid sm:grid-cols-2 gap-4 text-gray-800 text-left">
          <motion.div
            variants={item}
            className="p-4 rounded-xl border border-gray-700 bg-[var(--card)] shadow-md hover:shadow-lg transition"
          >
            <h4 className="text-sm font-semibold text-light-background">Education</h4>
            <p className="text-[var(--muted)] text-sm mt-2">
              B.E in Information Technology — GTU (2022 - 2026)
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="p-4 rounded-xl border border-gray-700 bg-[var(--card)] shadow-md hover:shadow-lg transition"
          >
            <h4 className="text-sm font-semibold text-light-background">Interests</h4>
            <p className="text-[var(--muted)] text-sm mt-2">
              MERN stack development
            </p>
          </motion.div>
          
          <motion.div
            variants={item}
            className="p-4 rounded-xl border border-gray-700 bg-[var(--card)] shadow-md hover:shadow-lg transition"
          >
            <h4 className="text-sm font-semibold text-light-background">Hobbies</h4>
            <p className="text-[var(--muted)] text-sm mt-2">
              Reading about new tech trends, contributing to open-source
            </p>
          </motion.div>
          
          <motion.div
            variants={item}
            className="p-4 rounded-xl border border-gray-700 bg-[var(--card)] shadow-md hover:shadow-lg transition"
          >
            <h4 className="text-sm font-semibold text-light-background">Goals</h4>
            <p className="text-[var(--muted)] text-sm mt-2">
              To become a skilled Full-Stack Developer and work on impactful, scalable products.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
