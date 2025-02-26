'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const WebsiteAnimation = () => {
  return (
    <div className="relative w-full h-full">
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Main animated shape */}
        <motion.div
          className="absolute w-72 h-72 right-20"
          style={{
            background: 'var(--text-gradient)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            filter: 'blur(2px)'
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
            borderRadius: [
              '60% 40% 30% 70% / 60% 30% 70% 40%',
              '30% 60% 70% 40% / 50% 60% 30% 60%',
              '60% 40% 30% 70% / 60% 30% 70% 40%'
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: `${30 + i * 15}px`,
              height: `${30 + i * 15}px`,
              right: `${100 + i * 50}px`,
              top: `${-100 + i * 60}px`,
              background: 'var(--text-gradient)',
              borderRadius: i % 2 === 0 ? '30% 70%' : '50%',
              opacity: 0.15
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, i % 2 === 0 ? 30 : -30, 0],
              rotate: [0, 360],
              opacity: [0.15, 0.3, 0.15]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}

        {/* Glowing orb */}
        <motion.div
          className="absolute w-40 h-40 right-40 top-20"
          style={{
            background: 'var(--text-gradient)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            opacity: 0.2
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-black">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, var(--primary-yellow), rgba(0, 0, 0, 0) 50%),
                        radial-gradient(circle at ${100 - mousePosition.x}% ${mousePosition.y}%, var(--primary-green), rgba(0, 0, 0, 0) 50%)`
          }}
        />
      </div>

      {/* Main content */}
      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Left content */}
          <div className="col-span-12 lg:col-span-7 pt-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-sm md:text-base text-[var(--primary-yellow)] font-semibold tracking-wider uppercase">
                Welcome to BCG
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="gradient-text bg-clip-text text-transparent">
                  UPGRADE YOUR LIFE BIT BY BIT
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                At BCG, we bridge ambition with reality, empowering businesses and entrepreneurs across 
                India and the world. With a deep understanding of the dynamic business landscape, we 
                deliver solutions that are tailored, impactful, and future-ready.
              </p>

              <div className="flex items-center gap-6 pt-4">
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-[var(--primary-yellow)] to-[var(--primary-green)] rounded-lg text-lg font-semibold
                            hover:opacity-90 transform hover:scale-105 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GET STARTED
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right animation */}
          <div className="hidden lg:block lg:col-span-5 relative h-[600px]">
            <WebsiteAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
