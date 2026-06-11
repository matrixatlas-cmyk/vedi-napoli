import { Link } from 'react-router-dom';

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

        <div className="flex flex-col gap-6 md:w-2/3 items-start md:items-end md:text-right">
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[11px] uppercase tracking-[0.2em] font-semibold text-charcoal justify-start md:justify-end">
            <a href="https://www.instagram.com/vedinapoli_official/" target="_blank" rel="noreferrer noopener" className="hover:text-napoli-blue transition-colors">Instagram</a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[11px] uppercase tracking-[0.15em] font-semibold text-charcoal/60 justify-start md:justify-end">
            <Link to="/about" className="hover:text-napoli-blue transition-colors">About</Link>
            <Link to="/editorial-standards" className="hover:text-napoli-blue transition-colors">Editorial Standards</Link>
            <Link to="/corrections-policy" className="hover:text-napoli-blue transition-colors">Corrections Policy</Link>
            <Link to="/privacy-policy" className="hover:text-napoli-blue transition-colors">Privacy Policy</Link>
            <Link to="/cookie-notice" className="hover:text-napoli-blue transition-colors">Cookie Notice</Link>
            <Link to="/terms-of-use" className="hover:text-napoli-blue transition-colors">Terms of Use</Link>
            <Link to="/contact" className="hover:text-napoli-blue transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
