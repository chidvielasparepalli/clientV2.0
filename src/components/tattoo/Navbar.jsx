import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from '@/components/tattoo/ThemeToggle';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Artists', href: '#artists' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const allItems = [...navLinks, { label: 'Book Now', href: '#booking', isBook: true }];

const pageLabels = {
  '/pencil-arts': 'Pencil Arts',
  '/piercing': 'Piercing',
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isSubPage = location.pathname !== '/';
  const pageLabel = pageLabels[location.pathname] || '';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Only lock scroll when mobile menu is open; always restore on close or unmount
    document.body.style.overflowY = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflowY = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    } else {
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-panel shadow-lg shadow-black/40 navbar-scrolled' : 'bg-transparent navbar-top'
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: isSubPage ? 0 : 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-2 lg:px-8">
          <div className="flex items-center h-20 lg:h-24 gap-2">

            {/* Mobile hamburger menu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-foreground p-1.5 z-10 select-none"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-2 group">
              <img
                src="https://media.base44.com/images/public/6a38df239c41ae8a5a1c941e/9340e0d79_lolologo-removebg-preview.png"
                alt="Mahesh Tattoo Studio"
                className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover border-2 border-primary/40 group-hover:border-primary transition-colors duration-300"
              />
              <div className="flex flex-col">
                <span className={`text-xs sm:text-sm tracking-[0.2em] uppercase font-body font-semibold leading-tight transition-colors duration-300 ${
                  scrolled ? 'text-foreground' : 'text-white'
                }`}>
                  Mahesh Tattoos & Arts
                </span>
                {isSubPage && pageLabel && (
                  <span className="text-[10px] tracking-[0.15em] uppercase text-primary font-body font-medium lg:hidden">
                    {pageLabel}
                  </span>
                )}
              </div>
            </a>

            {/* Spacer on mobile */}
            <div className="lg:hidden ml-auto flex items-center gap-2"></div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8 ml-auto">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 font-body select-none ${
                    scrolled ? 'text-foreground/70 hover:text-primary' : 'text-[#FFDAB9]/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#booking"
                className="ml-2 flex flex-row justify-center items-center gap-2 px-10 py-2 rounded-full border border-primary/30 text-primary text-xs tracking-[0.15em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-body select-none"
              >
                <Phone size={14} />
                <span className="whitespace-nowrap">Book Now</span>
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-30 lg:hidden bg-black/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-20 left-0 z-40 lg:hidden w-1/2 max-w-[200px] rounded-br-2xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.18)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.25)',
                borderTop: 'none',
                borderLeft: 'none',
              }}
              initial={{ opacity: 0, scale: 0.85, originX: 0, originY: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            >
              <ul className="py-3 px-2">
                {allItems.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`block px-4 py-2.5 text-xs tracking-[0.12em] uppercase font-body font-semibold rounded-lg transition-all duration-200 select-none ${
                        item.isBook
                          ? 'text-primary-foreground bg-primary mt-1'
                          : 'text-foreground hover:text-primary hover:bg-white/20'
                      }`}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}