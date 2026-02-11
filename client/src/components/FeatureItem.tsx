import { type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function FeatureItem({ icon: Icon, title, description, index }: FeatureItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex gap-6"
    >
      <div className="shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}
