import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Expectations } from '../components/Expectations';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <main className="min-h-screen selection:bg-napoli-blue selection:text-off-white flex flex-col">
      <Header />
      <Hero />
      <About />
      <Expectations />
      <Footer />
    </main>
  );
}
