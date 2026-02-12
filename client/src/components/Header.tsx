import { useState } from 'react';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeClass = 'text-indigo-600 font-semibold';
  return (
    <>
      <header className="w-full bg-white shadow-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="BWIA Logo" className="w-10 h-10 rounded-full object-cover" />
            <span className="text-xl font-bold text-gray-800">Brightway International Academy</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <NavLink to="/" className={({ isActive }) => isActive ? activeClass : "text-gray-600 hover:text-indigo-600 transition"}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : "text-gray-600 hover:text-indigo-600 transition"}>About</NavLink>
            <Link to="/#programs" className="text-gray-600 hover:text-indigo-600 transition">Features</Link>
            <Link to="/#contact" className="text-gray-600 hover:text-indigo-600 transition">Contact</Link>
            <NavLink to="/gallery" className={({ isActive }) => isActive ? activeClass : "text-gray-600 hover:text-indigo-600 transition"}>Gallery</NavLink>
          </nav>
          <button onClick={() => setMobileMenuOpen(true)} className="md:hidden">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </header>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
