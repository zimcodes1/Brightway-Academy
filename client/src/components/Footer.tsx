import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo.png" alt="BWIA Logo" className="w-10 h-10 rounded-full object-cover" />
              <span className="text-xl font-bold text-white">BWIA</span>
            </div>
            <p className="text-gray-400">
              Brightway International Academy - Imparting Tomorrow's Education Today
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#programs" className="hover:text-indigo-400 transition">Programs</a></li>
              <li><a href="#features" className="hover:text-indigo-400 transition">Features</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+234 807 164 3029</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>G.R.A., Keffi, Nasarawa State</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>brightacad.com.ng</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Brightway International Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
