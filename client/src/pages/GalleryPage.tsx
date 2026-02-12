import { motion } from 'framer-motion';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import GalleryCard from '../components/GalleryCard';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function GalleryPage() {
  useEffect(() => {
    document.title = 'Gallery - Brightway International Academy | School Photos & Campus Life';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore Brightway International Academy through our photo gallery. View our modern classrooms, facilities, student activities, and vibrant campus life in Keffi, Nasarawa State.');
    }
  }, []);

  const carouselImages = [
    '/images/hero1.jpg',
    '/images/hero2.jpg',
    '/images/hero3.jpg',
    '/images/hero4.jpg',
  ];

  const galleryItems = [
    {
      image: '/images/cla.jpg',
      title: 'Modern Classrooms',
      description: 'Well-equipped learning spaces designed to foster academic excellence and student engagement.',
    },
    {
      image: '/images/103_0104.jpeg',
      title: 'Campus Facilities',
      description: 'State-of-the-art facilities supporting comprehensive education and student development.',
    },
    {
      image: '/images/103_0112.jpeg',
      title: 'Student Activities',
      description: 'Vibrant student life with diverse extracurricular activities and community engagement.',
    },
    {
      image: '/images/103_0115.jpeg',
      title: 'Learning Environment',
      description: 'Cheerful and conducive atmosphere promoting creativity and academic growth.',
    },
    {
      image: '/images/103_0858.jpeg',
      title: 'School Events',
      description: 'Memorable moments from our academic ceremonies and special school events.',
    },
    {
      image: '/images/IMG_0424.jpeg',
      title: 'Campus Life',
      description: 'Daily life at BWIA showcasing our commitment to holistic education.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-600 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white mb-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Gallery</h1>
            <p className="text-xl md:text-2xl text-indigo-100">
              Explore life at Brightway International Academy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Carousel images={carouselImages} />
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Campus & Student Life
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our modern facilities, vibrant student activities, and the enriching educational environment at BWIA
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <GalleryCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
