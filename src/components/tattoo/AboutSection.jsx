import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import CountUp from '@/components/tattoo/CountUp';

export default function AboutSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 2000, suffix: '+', label: 'Tattoos Done' },
    { value: 8, suffix: '+', label: 'Years Experience' },
    { value: 5, suffix: '★ ', label: 'Star Rating' },
    { value: 4000, suffix: '+', label: 'Happy Clients' },
  ];

  return (
    <section id="about" className="relative py-12 lg:py-32 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_30%_50%,#D4AF37_1px,transparent_1px)] bg-[length:40px_40px]" />
      
      <div className="max-w-7xl mx-auto px-3 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center" ref={ref}>
          {/* Left - Text */}
          <div>
            <motion.span
              className="mt-4 text-xs tracking-[0.3em] uppercase text-primary/70 font-body font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              The Legacy 
            </motion.span>

            <motion.h2
              className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              From Army<br />Discipline to<br />
              <span className="text-primary">Artistic Mastery</span>
            </motion.h2>

            <motion.p
              className="mt-6 text-muted-foreground leading-relaxed font-body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Founded by Mahesh — a retired Indian Army veteran with 40 years of experience in sketching, canvas painting, live portrait art, sand art, and blood art. For the past 5 years, he has channeled this lifetime of artistic discipline into creating some of the most striking realistic tattoos in India.
            </motion.p>

            <motion.p
              className="mt-4 text-muted-foreground/80 leading-relaxed font-body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Every tattoo at Mahesh Tattoos and Arts carries the precision of military training and the soul of a lifelong artist. We don't just ink skin — we tell stories that last forever.
            </motion.p>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
               className="
glass-panel
p-6 sm:p-8
rounded-2xl
text-center
group
border
border-zinc-700
transition-all
duration-500
hover:border-red-500
hover:shadow-[0_0_10px_#ef4444,0_0_25px_#ef4444,0_0_50px_rgba(239,68,68,0.6)]
"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              >
                <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-black mb-2 flex items-center justify-center">
  <span className="text-primary">
    {inView ? <CountUp end={stat.value} decimals={0} /> : "0"}
  </span>

  {stat.suffix.trim() === "★" ? (
    <span
      className="ml-1"
      style={{ color: "#FFD700" }}
    >
      ★
    </span>
  ) : (
    <span className="text-primary">{stat.suffix}</span>
  )}
</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}