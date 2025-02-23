'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaUsers, FaRocket, FaChartLine, FaGlobe } from 'react-icons/fa';

const StatCard = ({ number, label }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-black/40 p-6 rounded-lg backdrop-blur-sm border border-gray-800"
  >
    <h3 className="text-3xl font-bold mb-2 gradient-text">{number}</h3>
    <p className="text-gray-400 text-sm">{label}</p>
  </motion.div>
);

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "100+", label: "Clients Worldwide" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "50M+", label: "Revenue Generated" },
    { number: "25+", label: "Countries Served" }
  ];

  return (
    <section ref={ref} className="py-20 bg-black/30" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">About Us</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Empowering businesses through innovative solutions and strategic guidance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-yellow to-primary-green rounded-lg blur opacity-25"></div>
                <div className="relative bg-black/50 p-8 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-black/30 rounded-lg">
                      <FaUsers className="w-8 h-8 text-primary-yellow" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Who We Are</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    At Bartr Catalyst Group (BCG), we are a dynamic team of industry experts and innovators 
                    dedicated to empowering businesses. Our comprehensive approach combines strategic consulting, 
                    technological innovation, and deep market insights to drive sustainable growth and success.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-yellow to-primary-green rounded-lg blur opacity-25"></div>
                <div className="relative bg-black/50 p-8 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-black/30 rounded-lg">
                      <FaRocket className="w-8 h-8 text-primary-yellow" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Our Purpose</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    We exist to transform ambitious ideas into impactful realities. By delivering actionable 
                    insights and fostering innovation, we help businesses navigate challenges, seize opportunities, 
                    and achieve their full potential in an ever-evolving market landscape.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="sticky top-8 space-y-8">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-yellow to-primary-green rounded-lg blur opacity-25"></div>
                  <div className="relative bg-black/50 p-8 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-black/30 rounded-lg">
                        <FaGlobe className="w-8 h-8 text-primary-yellow" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white">Global Impact</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      Our global presence and diverse expertise enable us to deliver impactful solutions 
                      across industries and markets. We take pride in our track record of helping businesses 
                      scale and succeed internationally.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
