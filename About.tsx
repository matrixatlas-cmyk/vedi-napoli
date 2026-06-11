import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { LogoCombination } from './LogoArt';

export function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-8 flex justify-between items-center border-b border-napoli-blue/10"
    >
      <Link to="/" className="scale-[0.45] origin-left transform -ml-4">
        <LogoCombination layout="horizontal" />
      </Link>
      <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-semibold text-napoli-blue">
        <a href="https://www.instagram.com/vedinapoli_official/" target="_blank" rel="noreferrer noopener" className="hover:opacity-60 transition-opacity">
          <Instagram size={16} />
        </a>
        <a href="/#about" className="hover:opacity-60 transition-opacity">About</a>
        <a href="/#expect" className="hover:opacity-60 transition-opacity">Expect</a>
        <a href="/#waitlist" className="hover:text-volcanic transition-colors">Waitlist</a>
      </nav>
    </motion.header>
  );
}
