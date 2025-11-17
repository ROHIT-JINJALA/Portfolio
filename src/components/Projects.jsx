import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Section from "./section";
import { Github, Link } from "lucide-react";
import projectData from "../data/ProjectData";

const Projects = () => (
  <Section id="projects" className="bg-primary-dark">
    <div className="max-w-6xl mx-auto w-full text-center px-4 mt-10 md:mt-16">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
        My Projects
      </h2>
      <motion.p
        className="md:text-lg text-gray-400 mb-4 md:mb-8 max-w-2xl mx-auto "
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Discover my latest work in web development and software engineering.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <motion.div
            key={project.name}
            className="bg-accent-dark border-1 rounded-xl shadow-lg overflow-hidden flex flex-col
                       transform hover:scale-[1.02] transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "circOut", delay: index * 0.15 }}
          >
            <div className="absolute flex flex-row p-2 gap-1 text-sm z-50">
              <p className="border border-gray-400 text-gray-700 bg-gray-100 rounded-full px-2">
                2025
              </p>
              <p className="border border-gray-400 text-gray-700 bg-gray-200 rounded-full px-2 ">
                &#9679; Live
              </p>
            </div>
            <motion.img
              src={project.image}
              alt={`${project.name} Project Screenshot`}
              className="w-full h-48 object-cover rounded-t-sm relative"
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/600x400/C9ADA7/4A4E69?text=${encodeURIComponent(
                  project.name
                )}`;
              }}
            />
            <div className="p-6 flex-grow">
              <h3 className="text-2xl font-bold text-gray-900 text-shadow-md mb-2">
                {project.name}
              </h3>
              <p className="text-soft-neutral text-gray-900 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-gray-900 text-xs px-3 py-1 border-1 rounded-full flex items-center"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* buttons */}
            <div className="p-6 pt-0 flex justify-center space-x-2 md:space-x-4">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-soft-neutral text-accent-dark font-semibold rounded-lg
                           hover:bg-light-background hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-gray-500 text-gray-900
                           "
              >
                <Link className="w-5 h-5 mr-2" /> Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-1 md:px-4 py-2 bg-gray-100 text-gray-800 font-semibold border rounded-lg
               hover:bg-gray-200 hover:border-gray-400 transition-all duration-300 shadow-md hover:shadow-gray-400/50"
              >
                <Github className="w-5 h-5 mr-2" /> View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

export default Projects;
