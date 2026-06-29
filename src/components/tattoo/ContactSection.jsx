import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Instagram, ExternalLink, PhoneCall } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#D4AF37_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.span
            className="text-xs tracking-[0.3em] uppercase text-primary/70 font-body font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Visit Us
          </motion.span>
          <motion.h2
            className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Get in <span className="text-primary">Touch</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info Cards */}
          <motion.div
            className="lg:col-span-2 space-y-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Address */}
            <div className="glass-panel rounded-2xl p-6 group hover:border-primary/20 transition-all duration-500">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <MapPin size={18} className="text-primary" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">Studio Address</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body mb-3">
                29-173, PS Circle, beside Aswin Diagnostic, near Sri Vasavi Bakery, New Vidya Nagar, Bank Colony, Neredmet, Secunderabad, Telangana 500056
              </p>
              <a
                href="https://maps.google.com/?q=Mahesh+Tattoo+Studio+Secunderabad+Telangana+500056"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-primary hover:text-primary/80 transition-colors font-body"
              >
                <ExternalLink size={12} />
                Open in Google Maps
              </a>
            </div>

            {/* Phone */}
            <div className="glass-panel rounded-2xl p-6 group hover:border-primary/20 transition-all duration-500">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Phone size={18} className="text-primary" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">Phone</h3>
              <div className="flex items-center gap-3">
                <a
                  href="#booking"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  booking
                </a>
                <a
                  href="#booking"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-110 select-none"
                  aria-label="Call now"
                >
                  <PhoneCall size={16} />
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="glass-panel rounded-2xl p-6 group hover:border-primary/20 transition-all duration-500">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Clock size={18} className="text-primary" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">Working Hours</h3>
              <p className="text-sm text-muted-foreground font-body">Open Daily</p>
              <p className="text-sm text-foreground/80 font-body mt-1">9:00 AM – 11:00 PM</p>
            </div>

            {/* Instagram */}
            <div className="glass-panel rounded-2xl p-6 group hover:border-primary/20 transition-all duration-500">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Instagram size={18} className="text-primary" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">Instagram</h3>
              <a
                href="https://instagram.com/maheshtattoostudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
              >
                @maheshtattoostudio
              </a>
              <p className="text-xs text-muted-foreground/60 mt-1 font-body">2,435 followers · 1,055 posts</p>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="lg:col-span-3 glass-panel rounded-2xl overflow-hidden min-h-[400px] lg:min-h-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps?q=Mahesh+Tattoo+Studio,+Neredmet,+Secunderabad,+Telangana+500056&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mahesh Tattoo Studio Location"
                className="grayscale-[0.7] brightness-75"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}