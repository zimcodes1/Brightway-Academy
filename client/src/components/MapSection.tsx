import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function MapSection() {
  return (
    <section className="w-full bg-gradient-to-br from-gray-800 to-gray-900 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-8 h-8 text-indigo-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Find Us</h2>
          </div>
          <p className="text-gray-300">G.R.A., Keffi, Nasarawa State, Nigeria</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-xl overflow-hidden shadow-xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.218587986509!2d7.89747217501687!3d8.859231391195495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1051e43937405935%3A0x66def1bfa01d1c02!2sBrightway%20International%20Academy!5e0!3m2!1sen!2sng!4v1770823610572!5m2!1sen!2sng"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
