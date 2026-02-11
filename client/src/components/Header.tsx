import { useState } from 'react';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white shadow-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="BWIA Logo" className="w-10 h-10 rounded-full object-cover" />
            <span className="text-xl font-bold text-gray-800">Brightway International Academy</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#programs" className="text-gray-600 hover:text-indigo-600 transition">Programs</a>
            <a href="#features" className="text-gray-600 hover:text-indigo-600 transition">Features</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition">Contact</a>
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
