import { type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProgramCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function ProgramCard({ icon: Icon, title, description, index }: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="mb-4 flex justify-center">
        <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center">
          <Icon className="w-8 h-8 text-indigo-600" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 text-center mb-3">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  );
}
