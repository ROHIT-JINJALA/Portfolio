import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, children, className }) => (
  <motion.section
    id={id}
    className={`min-h-screen flex items-center justify-center p-8 md:p-16 relative z-10 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    {children}
  </motion.section>
);

export default Section;
