import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary mb-8"
          >
            We Design Digital
            <br />
            Products That 
            <span className="text-accent"> Help</span>
            <br />
            <span className="text-accent">Grow Business</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-secondary text-xl sm:text-2xl max-w-3xl mx-auto mb-12"
          >
            We are a creative studio specializing in UI/UX design, 
            development and strategy. We help transform businesses 
            through design-driven solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Link 
              to="/contact"
              className="bg-accent text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-accent-dark transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/work"
              className="border-2 border-primary text-primary px-10 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;