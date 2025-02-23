'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaUsers, FaRocket } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section ref={ref} className="py-16 bg-black/30" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text">About Us</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <motion.div
            variants={itemVariants}
            className="space-y-6 bg-black/50 p-8 rounded-lg backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4">
              <FaUsers className="w-8 h-8 text-primary-yellow" />
              <h3 className="text-2xl font-semibold text-white">Who We Are</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              At Bartr Catalyst Group (BCG), we empower startups and established companies by offering tailored 
              consulting and strategic solutions. From startup incubations to corporate growth strategies, we are 
              your trusted partner in navigating the complexities of modern business.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-6 bg-black/50 p-8 rounded-lg backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4">
              <FaRocket className="w-8 h-8 text-primary-yellow" />
              <h3 className="text-2xl font-semibold text-white">Our Purpose</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Our purpose is to catalyze innovation, growth, and sustainability in businesses worldwide. We strive 
              to transform ambitious ideas into impactful realities by delivering actionable insights, fostering 
              innovation, and empowering entrepreneurs to achieve their full potential.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
