import { motion } from 'framer-motion';

export default function BoardingLife() {
  const houses = [
    'Emir of Keffi House',
    'Karu House',
    'Nasarawa House',
    'Toto House',
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Boarding Life</h2>
            <p className="text-gray-600 mb-6 text-lg">
              The academy features an efficient, well-ventilated boarding system designed to foster community and structured daily living.
            </p>
            <h3 className="text-xl font-bold text-indigo-600 mb-4">House System</h3>
            <p className="text-gray-600 mb-4">Named after local heritage sites:</p>
            <div className="grid grid-cols-2 gap-4">
              {houses.map((house, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-gradient-to-br border border-gray-200 from-indigo-50 to-purple-50 p-4 rounded-lg text-center font-semibold text-gray-800"
                >
                  {house}
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop"
              alt="Boarding facilities"
              className="rounded-xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
