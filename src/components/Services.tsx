const Services = () => {
  const services = [
    {
      title: "Management Consulting Services",
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
      description: "Strategic investment solutions for promising startups and emerging businesses."
    },
    {
      title: "Bartr OPINIONS",
      description: "Expert insights and analysis on industry trends and market dynamics."
    }
  ];

  return (
    <section className="py-16" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 gradient-text text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-black/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
              {service.description && (
                <p className="text-gray-300 mb-4">{service.description}</p>
              )}
              {service.items && (
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="text-gray-400">{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
