import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export default function ScheduleSection() {
  const schedule = [
    { days: 'Monday - Thursday', hours: '7:45 AM - 2:10 PM' },
    { days: 'Friday', hours: '7:45 AM - 12:20 PM' },
    { days: 'Saturday - Sunday', hours: 'Closed' },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-8 h-8 text-indigo-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">School Hours</h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-indigo-50 border border-gray-200 to-purple-50 rounded-xl shadow-lg overflow-hidden"
        >
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={`flex justify-between items-center p-6 ${
                index !== schedule.length - 1 ? 'border-b border-indigo-100' : ''
              }`}
            >
              <span className="text-lg font-semibold text-gray-800">{item.days}</span>
              <span className="text-lg text-gray-600">{item.hours}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
