import Header from '../components/Header';
import AboutHero from '../components/AboutHero';
import PhilosophySection from '../components/PhilosophySection';
import EducationalApproach from '../components/EducationalApproach';
import ProgramCard from '../components/ProgramCard';
import BoardingLife from '../components/BoardingLife';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import { BookOpen, Home, Trophy } from 'lucide-react';

export default function AboutPage() {
  const programs = [
    { icon: Home, title: 'Pre-School & Nursery', description: 'Foundational learning through play, numeracy, and social development.' },
    { icon: BookOpen, title: 'Basic School', description: 'Focus on literacy and building self-confidence through a balanced curriculum.' },
    { icon: Trophy, title: 'Secondary School', description: 'Advanced academics with an emphasis on discipline and preparation for higher education.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <AboutHero />
      <PhilosophySection />
      <EducationalApproach />
      
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Academic Structure</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} index={index} />
            ))}
          </div>
        </div>
      </section>

      <BoardingLife />
      <Footer />
    </div>
  );
}
