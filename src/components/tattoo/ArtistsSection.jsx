import { motion } from 'framer-motion';

const artistImage =
  "https://media.base44.com/images/public/6a35699540c0f3fcf7294410/e7e3cc15a_ChatGPTImageJun20202607_22_14AM.png";

const artist = {
  name: "Mahesh",
  specialization: "Realism & Portrait Tattoos",
  experience: "40 years in art, 5 years tattooing",
  bio: "Retired Indian Army veteran specializing in realistic tattoos and custom portrait tattoos. Every design is created with precision, discipline, and artistic excellence.",
};

export default function ArtistsSection() {
  return (
    <section id="artists" className="relative bg-background">
      {/* Header */}
      <div className="text-center pt-0 pb-16 px-6">
        <motion.span
          className="text-xs tracking-[0.3em] uppercase text-primary/70 font-body font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The Craftsmen
        </motion.span>
        <motion.h2
          className="mt-1 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Featured <span className="text-primary">Artist</span>
        </motion.h2>
      </div>

      {/* Desktop: Left photo (4:5), Right content */}
      <motion.div
        className="hidden md:grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6 lg:px-12 pb-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Left: Photo */}
        <motion.div
          className="relative overflow-hidden rounded-2xl"
          style={{ aspectRatio: '4/5' }}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
  src={artistImage}
  alt="Mahesh - Tattoo Artist"
  className="w-full h-full object-cover"
  style={{ objectPosition: "center 20%" }}
/>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <h3 className="font-display text-5xl lg:text-6xl text-foreground mb-4">
              {artist.name}
            </h3>
            <p className="text-xl text-primary font-semibold mb-2">
              {artist.specialization}
            </p>
            <p className="text-sm text-muted-foreground font-body">
              {artist.experience}
            </p>
          </div>

          <p className="text-base text-foreground/85 leading-relaxed font-body max-w-md">
            {artist.bio}
          </p>

          <motion.button
            onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative px-12 py-4 rounded-full bg-primary text-primary-foreground text-sm tracking-[0.15em] uppercase font-body font-semibold overflow-hidden group w-fit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
              animate={{ x: [-100, 300] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <span className="relative">Connect with {artist.name}</span>
            <motion.div
              className="absolute inset-0 rounded-full -z-10"
              animate={{ boxShadow: ['0 0 30px rgba(193,18,31,0.7)', '0 0 60px rgba(193,18,31,1)', '0 0 30px rgba(193,18,31,0.7)'] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Mobile: Stacked layout */}
      <motion.div
        className="md:hidden space-y-8 px-6 pb-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Photo */}
        <motion.div
          className="relative overflow-hidden rounded-2xl"
          style={{ aspectRatio: '4/5' }}
        >
          <img
  src={artistImage}
  alt="Mahesh - Tattoo Artist"
  className="w-full h-full object-cover"
  style={{ objectPosition: "center 15%" }}
/>
        </motion.div>

        {/* Content */}
        <div className="space-y-6">
          <div> 
            <h3 className="font-display text-4xl text-foreground mb-3">
              {artist.name}
            </h3>
            <p className="text-lg text-primary font-semibold mb-2">
              {artist.specialization}
            </p>
            <p className="text-sm text-muted-foreground font-body">
              {artist.experience}
            </p>
          </div>

          <p className="text-base text-foreground/85 leading-relaxed font-body">
            {artist.bio}
          </p>

          <motion.button
            onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative w-full px-10 py-4 rounded-full bg-primary text-primary-foreground text-sm tracking-[0.15em] uppercase font-body font-semibold overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
              animate={{ x: [-100, 300] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <span className="relative">Connect with {artist.name}</span>
            <motion.div
              className="absolute inset-0 rounded-full -z-10"
              animate={{ boxShadow: ['0 0 30px rgba(193,18,31,0.7)', '0 0 60px rgba(193,18,31,1)', '0 0 30px rgba(193,18,31,0.7)'] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}