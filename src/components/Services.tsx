'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaUserTie, FaLightbulb, FaNewspaper, FaChartLine, FaComments } from 'react-icons/fa';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Management Consulting Services",
      icon: <FaUserTie className="w-8 h-8 mb-4 text-primary-yellow" />,
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
      icon: <FaLightbulb className="w-8 h-8 mb-4 text-primary-yellow" />,
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
      icon: <FaNewspaper className="w-8 h-8 mb-4 text-primary-yellow" />,
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
      icon: <FaChartLine className="w-8 h-8 mb-4 text-primary-yellow" />,
      description: "Strategic investment solutions for promising startups and emerging businesses."
    },
    {
      title: "Bartr OPINIONS",
      icon: <FaComments className="w-8 h-8 mb-4 text-primary-yellow" />,
      description: "Expert insights and analysis on industry trends and market dynamics."
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
    <section ref={ref} className="py-16" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text">Our Services</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-black/50 p-6 rounded-lg backdrop-blur-sm hover:bg-black/60 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col items-center text-center mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
              </div>
              {service.description && (
                <p className="text-gray-300 mb-4">{service.description}</p>
              )}
              {service.items && (
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      variants={itemVariants}
                      className="text-gray-400"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
