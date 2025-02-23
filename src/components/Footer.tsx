import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black/90 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">BCG</h3>
            <p className="text-gray-400">
              Empowering businesses and entrepreneurs across India and the world.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-primary-yellow">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary-yellow">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-primary-yellow">About</Link></li>
              <li><Link href="/values" className="text-gray-400 hover:text-primary-yellow">Values</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">inrcommunication@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} BCG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
