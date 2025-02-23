'use client';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">UPGRADE YOUR LIFE BIT BY BIT</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At BCG, we bridge ambition with reality, empowering businesses and entrepreneurs across 
            India and the world. With a deep understanding of the dynamic business landscape, we 
            deliver solutions that are tailored, impactful, and future-ready.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GET STARTED
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
