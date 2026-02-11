import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import ProgramCard from '../components/ProgramCard';
import FeatureItem from '../components/FeatureItem';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';
import ScheduleSection from '../components/ScheduleSection';
import MapSection from '../components/MapSection';
import Footer from '../components/Footer';
import { BookOpen, Users, Trophy, Home, Mail, Phone, MapPin } from 'lucide-react';

export default function LandingPage() {
  const carouselImages = [
    '/images/hero1.jpg',
    '/images/hero2.jpg',
    '/images/hero3.jpg',
    '/images/hero4.jpg',
  ];

  const programs = [
    { icon: Home, title: 'Pre-School & Nursery', description: 'Foundational learning through play, numeracy, and social development.' },
    { icon: BookOpen, title: 'Basic School', description: 'Focus on literacy and building self-confidence through a balanced curriculum.' },
    { icon: Trophy, title: 'Secondary School', description: 'Advanced academics with an emphasis on discipline and preparation for higher education.' },
  ];

  const features = [
    { icon: Users, title: 'Compassionate Learning', description: 'We nurture compassionate, confident, and independent learners.' },
    { icon: BookOpen, title: 'Academic Excellence', description: 'Core focus on literacy and numeracy with character development.' },
    { icon: Home, title: 'Boarding System', description: 'Well-ventilated, efficient boarding system fostering community and structured living.' },
    { icon: Trophy, title: 'House System', description: 'Named after local heritage sites: Emir of Keffi, Karu, Nasarawa, and Toto.' },
  ];

  const contactDetails = [
    { icon: Phone, text: '+234 807 164 3029' },
    { icon: Phone, text: '+234 802 786 7818' },
    { icon: Phone, text: '+234 810 970 7122' },
    { icon: MapPin, text: 'G.R.A., Keffi, Nasarawa State, Nigeria' },
    { icon: Mail, text: 'visit brightacad.com.ng' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <Carousel images={carouselImages} />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Brightway International Academy
            </h1>
            <p className="text-xl md:text-2xl text-indigo-600 font-semibold mb-2">
              "Success Through Hardwork and Discipline"
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Imparting Tomorrow's Education Today
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-200"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <AnimatedSection className="w-full bg-gradient-to-br from-indigo-50 to-purple-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Vision & Mission</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Towards the Happiness of Our Children</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-300 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">Vision</h3>
              <p className="text-gray-600 text-lg">
                To spread knowledge and sustain the educational well-being of society.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-300 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Objective</h3>
              <p className="text-gray-600 text-lg">
                To positively affect lives and improve Nigeria through the instrument of education.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Programs Section */}
      <section id="programs" className="w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Our Programs</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full bg-gradient-to-br from-gray-50 to-indigo-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Why Choose BWIA?</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureItem key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Guiding Principle Section */}
      <AnimatedSection className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Guiding Principle</h2>
          <p className="text-2xl text-indigo-100 font-semibold">
            "Towards the Happiness of Our Children"
          </p>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Get In Touch</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-200 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactDetails.map((detail, index) => {
                  const IconComponent = detail.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-start gap-4"
                    >
                      <IconComponent className="w-6 h-6 text-indigo-600 shrink-0 mt-1" />
                      <p className="text-gray-600 text-lg">{detail.text}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            <ContactForm />
          </div>
        </div>
      </section>

      <ScheduleSection />

      <MapSection />

      <Footer />
    </div>
  );
}
