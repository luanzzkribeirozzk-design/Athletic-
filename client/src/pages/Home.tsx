import Header from '@/components/Header';
import Hero from '@/components/Hero';
import QuickActions from '@/components/QuickActions';
import About from '@/components/About';
import Services from '@/components/Services';
import PremiumEnvironment from '@/components/PremiumEnvironment';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Schedule from '@/components/Schedule';
import CTASection from '@/components/CTASection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Home Page - Academia Atlética
 * Design: Modernismo Minimalista, otimizado para mobile
 * Seções: Hero, QuickActions, Sobre, Serviços, Galeria, Depoimentos, Horários, CTA, Contato, Footer
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <QuickActions />
        <About />
        <Services />
        <PremiumEnvironment />
        <Gallery />
        <Testimonials />
        <Schedule />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
