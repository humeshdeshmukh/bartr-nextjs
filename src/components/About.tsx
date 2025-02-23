const About = () => {
  return (
    <section className="py-16 bg-black/30" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 gradient-text text-center">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Who We Are</h3>
              <p className="text-gray-300">
                At Bartr Catalyst Group (BCG), we empower startups and established companies by offering tailored 
                consulting and strategic solutions. From startup incubations to corporate growth strategies, we are 
                your trusted partner in navigating the complexities of modern business.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Our Purpose</h3>
              <p className="text-gray-300">
                Our purpose is to catalyze innovation, growth, and sustainability in businesses worldwide. We strive 
                to transform ambitious ideas into impactful realities by delivering actionable insights, fostering 
                innovation, and empowering entrepreneurs to achieve their full potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
