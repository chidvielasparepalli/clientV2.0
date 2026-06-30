import { useState, useRef } from 'react';
import axios from 'axios';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Calendar, User, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';

function FormField({ label, icon: Icon, error, children }) {
  return (
    <div>
      <label className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-foreground font-body font-bold mb-2">
        <Icon size={14} /> {label}
      </label>
      {children}
      {error && <p className="text-xs text-red-400 mt-1 font-body">{error}</p>}
    </div>
  );
}

export default function PiercingBookingSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'start start'] });
  const x = useTransform(scrollYProgress, [0, 0.5], [120, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email';
    if (!form.phone.trim()) errs.phone = 'Phone is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  try {
    setLoading(true);

    try {
      // axios request
    } finally {
      setLoading(false);
    }

    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("style", form.style);
    formData.append("date", form.date);
    formData.append("message", form.message);

    files.forEach((file) => {
      formData.append("images", file);
    });

    await axios.post(
  "https://maheshtattoostudio-emailuser.up.railway.app/api/book",
  formData,
  {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }
);

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFiles([]);
      setForm({
        name: "",
        email: "",  
        phone: "",
        style: "",
        date: "",
        message: "",
      });
    }, 4000);

  } catch (err) {
    console.error(err);
    alert("Booking failed.");
  } finally {
    setLoading(false);
  }
};

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: '' });
  };

  const inputClass = (hasError) =>
    `w-full px-4 py-3 rounded-lg bg-card border ${hasError ? 'border-red-500/50' : 'border-border/30'} text-foreground placeholder:text-muted-foreground/50 text-sm font-body focus:outline-none focus:border-primary/60 transition-colors shadow-sm`;

  return (
    <section ref={sectionRef} id="booking" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(ellipse_at_center,#720080_0%,transparent_50%)]" />

      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <motion.span
            className="text-xs tracking-[0.3em] uppercase text-primary/70 font-body font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Book Your Session
          </motion.span>
          <motion.h2
            className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Ready to <span className="text-primary">Pierce?</span>
          </motion.h2>
        </div>

        <motion.div style={{ x, opacity }} className="glass-panel rounded-2xl p-8 sm:p-10">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                className="flex flex-col items-center justify-center py-12 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 15 }}>
                  <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-6">
                    <CheckCircle size={36} className="text-primary" />
                  </div>
                </motion.div>
                <h3 className="font-display text-2xl text-foreground mb-2">Booking Confirmed!</h3>
                <p className="text-muted-foreground font-body max-w-sm">
                  Thank you, {form.name || 'there'}! We'll reach out within 24 hours to confirm your appointment.
                </p>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} className="space-y-6" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField label="Name" icon={User} error={errors.name}>
                    <input type="text" value={form.name} onChange={handleChange('name')} placeholder="Your full name" className={inputClass(errors.name)} />
                  </FormField>
                  <FormField label="Email" icon={Mail} error={errors.email}>
                    <input type="email" value={form.email} onChange={handleChange('email')} placeholder="your@email.com" className={inputClass(errors.email)} />
                  </FormField>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField label="Phone" icon={Phone} error={errors.phone}>
                    <input type="tel" value={form.phone} onChange={handleChange('phone')} placeholder="+91 XXXXX XXXXX" className={inputClass(errors.phone)} />
                  </FormField>
                  <FormField label="Preferred Date" icon={Calendar}>
                    <input type="date" value={form.date} onChange={handleChange('date')} className={inputClass(false) + ' cursor-pointer'} />
                  </FormField>
                </div>

                <FormField label="Message" icon={MessageSquare}>
                  <textarea
                    value={form.message}
                    onChange={handleChange('message')}
                    placeholder="Describe your piercing type, preferred jewelry, or any questions..."
                    rows={4}
                    className={inputClass(false) + ' resize-none'}
                  />
                  <label className="flex items-center justify-center gap-3 w-full h-14 rounded-full border border-white/10 bg-zinc-900 hover:bg-purple-500 hover:border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.4)]  transition-all duration-300 cursor-pointer text-white font-medium">
                    📁 Choose Reference Images
                      <input
                        type="file"
                        multiple
                        className="hidden"
                        onChange={(e) => setFiles([...e.target.files])}
                      />
                      </label>
                </FormField>

                <button
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit Booking Request"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}