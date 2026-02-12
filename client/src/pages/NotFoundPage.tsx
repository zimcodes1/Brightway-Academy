import { motion } from 'framer-motion';
import { Home, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <AlertCircle className="w-24 h-24 text-indigo-600 mx-auto mb-6" />
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-200 flex items-center gap-2 mx-auto"
          >
            <Home className="w-5 h-5" />
            Go to Homepage
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
