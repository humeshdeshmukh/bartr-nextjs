'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaBalanceScale, 
  FaStar, 
  FaLightbulb, 
  FaHandshake, 
  FaUsers, 
  FaLeaf 
} from 'react-icons/fa';

const Values = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      title: "Integrity",
      description: "Upholding honesty and transparency in all our dealings.",
      icon: <FaBalanceScale className="w-8 h-8 text-primary-yellow" />
    },
    {
      title: "Excellence",
      description: "Delivering top-tier services that exceed client expectations.",
      icon: <FaStar className="w-8 h-8 text-primary-yellow" />
    },
    {
      title: "Innovation",
      description: "Encouraging creative solutions that drive impactful results.",
      icon: <FaLightbulb className="w-8 h-8 text-primary-yellow" />
    },
    {
      title: "Collaboration",
      description: "Building long-term partnerships based on trust and mutual success.",
      icon: <FaHandshake className="w-8 h-8 text-primary-yellow" />
    },
    {
      title: "Customer-Centricity",
      description: "Prioritizing client goals to create measurable value.",
      icon: <FaUsers className="w-8 h-8 text-primary-yellow" />
    },
    {
      title: "Sustainability",
      description: "Supporting growth while promoting ethical and sustainable practices.",
      icon: <FaLeaf className="w-8 h-8 text-primary-yellow" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section ref={ref} className="py-16" id="values">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text">Our Values</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-black/50 p-8 rounded-lg backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
