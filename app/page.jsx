import CustomCursor from '@/components/CustomCursor';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollObserver from '@/components/ScrollObserver';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Tickers from '@/components/Tickers';
import Services from '@/components/Services';
import About from '@/components/About';
import Ecosystem from '@/components/Ecosystem';
import Work from '@/components/Work';
import Influencer from '@/components/Influencer';
import GrowthStrip from '@/components/GrowthStrip';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      {/* Interactive Client Enhancements */}
      <CustomCursor />
      <LoadingScreen />
      <ScrollObserver />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Tickers />
        <Services />
        <About />
        <Ecosystem />
        <Work />
        <Influencer />
        <GrowthStrip />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
