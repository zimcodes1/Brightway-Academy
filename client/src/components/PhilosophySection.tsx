import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

export default function PhilosophySection() {
  const items = [
    { icon: Eye, title: 'Vision', text: 'To spread knowledge and sustain the educational well-being of society.' },
    { icon: Target, title: 'Objective', text: 'To positively affect lives and improve Nigeria through the instrument of education.' },
    { icon: Heart, title: 'Guiding Principle', text: 'Towards the Happiness of Our Children' },
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12"
        >
          Our Philosophy
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
