import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-8 flex justify-between items-center border-b border-napoli-blue/10"
    >
      <Link to="/" className="flex items-center gap-2">
        <h1 className="text-xl font-serif font-bold text-napoli-blue tracking-tight italic">
          Vedi Napoli
        </h1>
        <div className="w-2 h-2 rounded-full bg-volcanic shadow-[0_0_8px_rgba(229,75,75,0.4)] mt-1"></div>
      </Link>
      <nav className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-semibold text-napoli-blue">
        <a href="/#about" className="hover:opacity-60 transition-opacity">About</a>
        <a href="/#expect" className="hover:opacity-60 transition-opacity">Expect</a>
        <a href="/#waitlist" className="hover:text-volcanic transition-colors">Waitlist</a>
      </nav>
    </motion.header>
  );
}
