import { motion } from 'framer-motion';
import { ClipboardCheck, MapPin, Clock } from 'lucide-react';

export default function EnrollmentSection() {
  return (
    <section className="w-full bg-gradient-to-br from-indigo-50 to-purple-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How to Enroll
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our community of learners and start your journey with us
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-lg text-center"
          >
            <MapPin className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Us</h3>
            <p className="text-gray-600">
              Come to our school located at G.R.A., Keffi, Nasarawa State, Nigeria
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-lg text-center"
          >
            <ClipboardCheck className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Physical Enrollment</h3>
            <p className="text-gray-600">
              Complete the enrollment process in person at our administrative office
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-lg text-center"
          >
            <Clock className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Office Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 8:00 AM - 4:00 PM. Contact us for more information
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
