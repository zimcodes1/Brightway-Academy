import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-600 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About BWIA</h1>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
            Producing compassionate, confident, independent, and multi-skilled lifelong learners
          </p>
        </motion.div>
      </div>
    </section>
  );
}
