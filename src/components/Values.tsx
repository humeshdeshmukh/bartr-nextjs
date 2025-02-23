'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  FaBalanceScale, 
  FaStar, 
  FaLightbulb, 
  FaHandshake, 
  FaUsers, 
  FaLeaf,
  FaChevronRight
} from 'react-icons/fa';
import { ReactNode } from 'react';

interface ValueItem {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ValueCardProps {
  value: ValueItem;
  index: number;
}

const ValueCard = ({ value, index }: ValueCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
      className="relative group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="rgb-border glass-effect glow-effect relative z-10 h-full
                   transform transition-all duration-300 group-hover:-translate-y-2"
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="p-3 bg-black/30 rounded-lg rgb-border">
              {value.icon}
            </div>
            <motion.div
              animate={{ rotate: isHovered ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronRight className="w-5 h-5 text-primary-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary-yellow transition-colors">
            {value.title}
          </h3>
          
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
            {value.description}
          </p>

          <motion.div
            className="mt-6 overflow-hidden"
            initial={false}
            animate={{ height: isHovered ? 'auto' : 0, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pt-4 border-t border-gray-700">
              <p className="text-sm text-gray-400">
                {getValueDetail(value.title)}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const getValueDetail = (title: string): string => {
  const details: Record<string, string> = {
    "Integrity": "We maintain the highest ethical standards in all our business practices, ensuring trust and reliability.",
    "Excellence": "Our commitment to quality drives us to continuously improve and deliver outstanding results.",
    "Innovation": "We embrace cutting-edge solutions and creative thinking to stay ahead of industry trends.",
    "Collaboration": "Working together with our clients and partners creates synergies that drive success.",
    "Customer-Centricity": "Your success is our priority - we align our strategies with your business goals.",
    "Sustainability": "We promote responsible business practices that benefit both society and the environment."
  };
  return details[title];
};

const Values = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values: ValueItem[] = [
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

  return (
    <section ref={ref} className="py-16 relative overflow-hidden" id="values">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-yellow opacity-30 rounded-full filter blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-green opacity-30 rounded-full filter blur-[100px] animate-pulse" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Our Values</h2>
          <p className="text-gray-400 text-lg">The principles that guide our work and relationships</p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
