import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-16 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-napoli-blue/10 pt-8">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-2">
            <h1 className="text-xl font-serif font-bold text-napoli-blue tracking-tight italic">
              Vedi Napoli
            </h1>
          </Link>
          <p className="text-[10px] uppercase tracking-[0.15em] opacity-40">
            &copy; {new Date().getFullYear()} Vedi Napoli. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-4 text-[11px] uppercase tracking-[0.2em] font-semibold text-charcoal">
          <a href="#" className="hover:text-napoli-blue transition-colors">Instagram</a>
          <a href="#" className="hover:text-napoli-blue transition-colors">X / Twitter</a>
          <a href="#" className="hover:text-napoli-blue transition-colors">YouTube</a>
          <Link to="/privacy-policy" className="hover:text-napoli-blue transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
