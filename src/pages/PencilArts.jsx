import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/tattoo/Navbar';
import FloatingButtons from '@/components/tattoo/FloatingButtons';
import PencilArtsHeroSection from '@/components/pencilarts/PencilArtsHeroSection';
import PencilArtsAboutSection from '@/components/pencilarts/PencilArtsAboutSection';
import PencilArtsGallery from '@/components/pencilarts/PencilArtsGallery';
import ArtistsSection from '@/components/pencilarts/ArtistsSection';
import ServicesSection from '@/components/tattoo/ServicesSection';
import PencilArtsBookingSection from '@/components/pencilarts/PencilArtsBookingSection';
import TestimonialsSection from '@/components/tattoo/TestimonialsSection';
import WhyChooseUsSection from '@/components/tattoo/WhyChooseUsSection';
import ContactSection from '@/components/tattoo/ContactSection';
import Footer from '@/components/tattoo/Footer';
import BottomNav from '@/components/tattoo/BottomNav';

// Pencil Arts theme: deep forest green + warm amber accent
const theme = `
  :root {
    --primary: 158 64% 32%;
    --primary-foreground: 40 95% 92%;
    --accent: 38 92% 50%;
    --accent-foreground: 12 10% 10%;
    --ring: 158 64% 32%;
    --chart-1: 158 64% 32%;
  }
`;

export default function PencilArts() {
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
          <PencilArtsHeroSection />
          <PencilArtsAboutSection />
          <PencilArtsGallery />
          <ArtistsSection />
          <PencilArtsBookingSection />
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