import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Values from '@/components/Values';

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <Hero />
      <Services />
      <About />
      <Values />
    </main>
  );
}
