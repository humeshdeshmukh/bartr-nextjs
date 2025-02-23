'use client';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Footer = () => {
  const router = useRouter();

  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com' },
    { icon: <FaTwitter />, url: 'https://twitter.com' },
    { icon: <FaInstagram />, url: 'https://instagram.com' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com' }
  ];

  const footerLinks = [
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Values', id: 'values' },
    // { label: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="bg-black/30 backdrop-blur-lg py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link 
              href="/"
              className="text-2xl font-bold gradient-text"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('home');
              }}
            >
              BCG
            </Link>
            <p className="text-gray-400">
              Empowering businesses through innovative solutions and strategic guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavigation(link.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href="mailto:inrcommunication@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  inrcommunication@gmail.com
                </a>
              </li>
              <li>Bartr Catalyst Group (BCG)</li>
              <li>Your Trusted Partner in Business Growth</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-yellow transition-colors text-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            {new Date().getFullYear()} Bartr Catalyst Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
