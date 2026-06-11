import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-32 border-t border-napoli-blue/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        <div className="md:col-span-4">
          <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-napoli-blue/60 mt-1">
            About the Project
          </h3>
        </div>
        
        <div className="md:col-span-8 space-y-8">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif italic text-napoli-dark leading-tight"
          >
            "Vedi Napoli e poi muori." <br/>
            <span className="text-charcoal/40 italic font-sans text-xl md:text-2xl mt-4 block">See Naples and then die.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-[15px] text-[#4A4A4A] leading-relaxed max-w-2xl"
          >
            <p>
              Following SSC Napoli is not merely about football; it is a cultural immersion. Yet, for the English-speaking world, the nuanced stories of the city, the tactical breakdowns of the team, and the visceral matchday experience often get lost in translation.
            </p>
            <p>
              <strong>Vedi Napoli</strong> is being built to bridge that gap. We are creating a premium editorial space dedicated to detailed match coverage, historical retrospectives, local aesthetics, and the undeniable romance of Southern Italy's greatest obsession.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
