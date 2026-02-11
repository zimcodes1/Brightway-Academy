import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed right-0 top-0 h-full w-64 bg-white shadow-xl z-50 p-6"
          >
            <button onClick={onClose} className="absolute top-4 right-4">
              <X className="w-6 h-6 text-gray-600" />
            </button>
            <nav className="flex flex-col gap-6 mt-12">
              <a href="#programs" onClick={onClose} className="text-gray-700 hover:text-indigo-600 text-lg font-medium">Programs</a>
              <a href="#features" onClick={onClose} className="text-gray-700 hover:text-indigo-600 text-lg font-medium">Features</a>
              <a href="#contact" onClick={onClose} className="text-gray-700 hover:text-indigo-600 text-lg font-medium">Contact</a>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
