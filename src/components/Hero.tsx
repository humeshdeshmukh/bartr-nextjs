const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">UPGRADE YOUR LIFE BIT BY BIT</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            At BCG, we bridge ambition with reality, empowering businesses and entrepreneurs across 
            India and the world. With a deep understanding of the dynamic business landscape, we 
            deliver solutions that are tailored, impactful, and future-ready.
          </p>
          <button className="btn-primary">
            GET STARTED
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
