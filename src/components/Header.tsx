import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold gradient-text">
          BCG
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/values" className="nav-link">Values</Link>
        </nav>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
