import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Schedule from '@/components/Schedule';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Home Page - Academia Atlética
 * Design: Modernismo Minimalista com Energia Cinética
 * Seções: Hero, Sobre, Serviços, Horários, Contato, Footer
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
