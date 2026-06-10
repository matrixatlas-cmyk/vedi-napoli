import { motion } from 'motion/react';
import { Newspaper, Coffee, MapPin, Radio } from 'lucide-react';

const expectations = [
  {
    title: "Editorial & Analysis",
    description: "In-depth tactical breakdowns, long-form essays, and thoughtful commentary on every match.",
    icon: Newspaper
  },
  {
    title: "Culture & Lifestyle",
    description: "The food, the art, and the history shaping the streets of Napoli and its people.",
    icon: Coffee
  },
  {
    title: "Matchday Guides",
    description: "Where to stay, what to eat, and how to navigate the Stadio Diego Armando Maradona.",
    icon: MapPin
  },
  {
    title: "The Inner Circle",
    description: "A newsletter curating the best stories from around the Partenopei universe.",
    icon: Radio
  }
];

export function Expectations() {
  return (
    <section id="expect" className="bg-napoli-blue text-off-white py-24 md:py-32 relative overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 md:gap-24 relative z-10">
        <div className="md:w-1/3">
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-off-white/60 block">What to Expect</span>
        </div>

        <div className="md:w-2/3">
          <div className="grid grid-cols-1 gap-y-12 md:gap-y-16">
            {expectations.map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start group"
              >
                <span className="font-serif italic text-3xl md:text-4xl mr-6 md:mr-8 opacity-30 mt-1">
                  0{index + 1}
                </span>
                <div>
                  <h4 className="text-xl md:text-2xl font-serif mb-2">{item.title}</h4>
                  <p className="text-sm md:text-base opacity-70 leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Subtle Volcanic Accent Overlay */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#33302E] opacity-10 mix-blend-multiply rounded-tl-[100px] -mr-16 -mb-16 pointer-events-none"></div>
    </section>
  );
}
