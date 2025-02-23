'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaUserTie, FaLightbulb, FaNewspaper, FaChartLine, FaComments, FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ service, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className={`relative rgb-border glass-effect glow-effect
                ${isExpanded ? 'md:col-span-2 lg:col-span-2' : ''}`}
      whileHover={{ scale: isExpanded ? 1 : 1.02 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <motion.div layout className="p-6 cursor-pointer">
        <motion.div layout className="flex items-center justify-between">
          <motion.div layout className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-black/30 rgb-border">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
          </motion.div>
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaArrowRight className="w-5 h-5 text-primary-yellow" />
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {!isExpanded && service.description && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-gray-400 mt-4"
            >
              {service.description}
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6"
            >
              {service.description && (
                <p className="text-gray-300 mb-4">{service.description}</p>
              )}
              {service.items && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-yellow transition-colors p-2 rounded-lg hover:bg-black/20"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary-yellow" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Management Consulting Services",
      icon: <FaUserTie className="w-8 h-8 text-primary-yellow" />,
      items: [
        "Customer Experience",
        "Sustainability",
        "Innovation",
        "M&A",
        "Operations",
        "People & Organization",
        "Private Equity",
        "Sales & Marketing",
        "Strategy",
        "AI, Insights, and Solutions",
        "Transformation"
      ]
    },
    {
      title: "Startup Incubation",
      icon: <FaLightbulb className="w-8 h-8 text-primary-yellow" />,
      items: [
        "Business Building and Incubation",
        "Business Operations",
        "Consulting",
        "Data Science and Analytics",
        "Design Strategy",
        "Finance",
        "Legal and Risk Management",
        "Marketing and Communications",
        "People and HR",
        "Product Management",
        "Research and Insight",
        "Technology and Engineering"
      ]
    },
    {
      title: "Press Release Services",
      icon: <FaNewspaper className="w-8 h-8 text-primary-yellow" />,
      description: "Why Choose Our Press Release Services?",
      items: [
        "Expertly Crafted Content",
        "Tailored Messaging",
        "Media Outreach",
        "Compliance and Accuracy"
      ]
    },
    {
      title: "Angel Investing",
      icon: <FaChartLine className="w-8 h-8 text-primary-yellow" />,
      description: "Strategic investment solutions for promising startups and emerging businesses."
    },
    {
      title: "Bartr OPINIONS",
      icon: <FaComments className="w-8 h-8 text-primary-yellow" />,
      description: "Expert insights and analysis on industry trends and market dynamics."
    }
  ];

  return (
    <section ref={ref} className="py-16 relative overflow-hidden" id="services">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-yellow opacity-30 rounded-full filter blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-green opacity-30 rounded-full filter blur-[100px] animate-pulse" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Our Services</h2>
          <p className="text-gray-400 text-lg">Click on any service to explore more</p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
