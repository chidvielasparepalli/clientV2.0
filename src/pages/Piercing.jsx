import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/tattoo/Navbar';
import FloatingButtons from '@/components/tattoo/FloatingButtons';
import PiercingHeroSection from '@/components/piercing/PiercingHeroSection';
import PiercingAboutSection from '@/components/piercing/PiercingAboutSection';
import ArtistsSection from '@/components/piercing/ArtistsSection';
import PiercingGallery from '@/components/piercing/PiercingGallery';
import PiercingBookingSection from '@/components/piercing/PiercingBookingSection';
import TestimonialsSection from '@/components/tattoo/TestimonialsSection';
import WhyChooseUsSection from '@/components/tattoo/WhyChooseUsSection';
import ContactSection from '@/components/tattoo/ContactSection';
import Footer from '@/components/tattoo/Footer';
import BottomNav from '@/components/tattoo/BottomNav';

// Piercing theme: electric violet / silver
const theme = `
  :root {
    --primary: 270 70% 50%;
    --primary-foreground: 40 95% 92%;
    --accent: 270 50% 35%;
    --accent-foreground: 40 95% 92%;
    --ring: 270 70% 50%;
    --chart-1: 270 70% 50%;
  }
`;

export default function Piercing() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('revealed')),
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{theme}</style>
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <Navbar />
        <FloatingButtons />
        <main>
          <PiercingHeroSection />
          <PiercingAboutSection />
          <ArtistsSection />
          <PiercingGallery />
          <PiercingBookingSection />
          <TestimonialsSection />
          <WhyChooseUsSection />
          <ContactSection />
        </main>
        <Footer />
        <BottomNav />
        <div className="h-14 lg:hidden" />
      </motion.div>
    </>
  );
}