import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useRef } from 'react';
import sendEmail from '../utils/sendMail';
import SuccessModal from './modals/SuccessModal';
import FailureModal from './modals/FailureModal';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const form = useRef<HTMLFormElement>(null);
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    sendEmail({ 
      e, 
      form,
      onSuccess: () => {
        setShowSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      },
      onFailure: (error) => {
        setErrorMsg(error);
        setShowFailure(true);
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white  border border-gray-200 p-8 rounded-xl shadow-lg"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
      <form ref={form} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name='name'
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name='email'
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            name='message'
            id="message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none"
          />
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          Send Message
        </motion.button>
      </form>
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
      {showFailure && <FailureModal onClose={() => setShowFailure(false)} error={errorMsg} />}
    </motion.div>
  );
}
