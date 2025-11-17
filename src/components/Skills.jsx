import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import skillData from "../data/skillData";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All Skills");
  const tabs = ["All Skills", "Frontend", "Backend", "Tools & Others"];

  const filteredSkills = skillData.filter(
    (skill) => activeTab === "All Skills" || skill.category === activeTab
  );

  const item = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.35, ease: "circOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 10,
      transition: { duration: 0.25, ease: "circOut" },
    },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: "circOut",
        staggerChildren: 0.9, 
      },
    },
  };

  return (
    <div
      id="skills"
      className="py-20  md:py-28 px-4 relative flex items-center justify-center bg-white text-white"
    >
      <motion.div
        className="max-w-7xl mx-auto w-full text-center "
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4 text-gray-900"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        <motion.p
          className="text-lg md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Here are the technologies I work with to bring ideas to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap justify-center mb-8 p-1 rounded-3xl shadow-lg border border-gray-600 max-w-lg mx-auto bg-white"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ease-in-out font-medium text-sm md:text-base
              ${
                activeTab === tab
                  ? "bg-gray-100 text-gray-900 border-b-1 shadow-lg"
                  : "text-gray-500 hover:bg-gray-100 hover:shadow-xl"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                className="p-3 sm:p-6 rounded-xl shadow-lg flex flex-col items-center justify-center 
                            hover:scale-90 hover:rotate-2  cursor-pointer border border-gray-500 hover:border-gray-300 bg-gray-100 text-gray-700
                           transform transition-transform duration-300"
                variants={item}
                initial="hidden"
                animate="show"
                exit="exit"
                title={skill.name}
              >
                <div className="mb-3 transform transition-transform duration-300 hover:scale-125 hover:rotate-6">
                  {skill.icon}
                </div>
                <p className="text-sm sm:text-lg md:text-xl font-semibold text-center">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
