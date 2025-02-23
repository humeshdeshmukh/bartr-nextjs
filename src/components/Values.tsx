const Values = () => {
  const values = [
    {
      title: "Integrity",
      description: "Upholding honesty and transparency in all our dealings."
    },
    {
      title: "Excellence",
      description: "Delivering top-tier services that exceed client expectations."
    },
    {
      title: "Innovation",
      description: "Encouraging creative solutions that drive impactful results."
    },
    {
      title: "Collaboration",
      description: "Building long-term partnerships based on trust and mutual success."
    },
    {
      title: "Customer-Centricity",
      description: "Prioritizing client goals to create measurable value."
    },
    {
      title: "Sustainability",
      description: "Supporting growth while promoting ethical and sustainable practices."
    }
  ];

  return (
    <section className="py-16" id="values">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 gradient-text text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-black/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
