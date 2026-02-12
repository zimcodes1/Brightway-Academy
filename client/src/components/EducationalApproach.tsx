import { motion } from 'framer-motion';

export default function EducationalApproach() {
  const approaches = [
    'Core Academic Excellence (Literacy & Numeracy)',
    'Play-based Learning',
    'Social Interaction',
    'Character Development in a cheerful environment',
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop"
              alt="Students learning"
              className="rounded-xl shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Educational Approach</h2>
            <p className="text-gray-600 mb-6 text-lg">
              BWIA utilizes a balanced curriculum that blends multiple learning methodologies to create well-rounded students.
            </p>
            <ul className="space-y-3">
              {approaches.map((approach, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">{approach}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
