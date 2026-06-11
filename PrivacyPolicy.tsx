import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState } from 'react';

export function Hero() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !consent) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setEmail('');
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message || 'Failed to subscribe.');
    }
  };

  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col min-h-[70vh] justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-8"
      >
        <div className="max-w-2xl">
          <span className="flex items-center space-x-4 mb-8">
            <span className="w-2 h-2 rounded-full bg-volcanic shadow-[0_0_8px_rgba(229,75,75,0.4)]"></span>
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-charcoal/40">Live from Napoli</span>
          </span>
          
          <h2 className="text-[60px] md:text-[100px] lg:text-[140px] font-serif italic text-napoli-blue leading-[0.85] tracking-tighter mb-10">
            Vedi<br/>Napoli
          </h2>
          
          <p className="text-xl md:text-2xl font-serif text-[#2A2A2A] max-w-md leading-relaxed mb-8">
            The English home for Napoli football, culture, and matchday life.
          </p>

          <p className="text-[15px] text-[#4A4A4A] max-w-md leading-relaxed">
            Beyond the pitch. We are curating the definitive portal for the Anglophone Partenopei—blending rigorous football analysis with the rich, chaotic, heartbeat of Naples itself. 
          </p>
        </div>

        <div className="w-full max-w-md md:mb-12">
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold mb-4 block text-napoli-blue">Join the Waitlist</span>
          <form 
            onSubmit={handleSubscribe}
            id="waitlist"
            className="flex flex-col w-full"
          >
            <div className="relative flex w-full">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading' || status === 'success'}
                placeholder="Email address..." 
                className="w-full bg-transparent border-b border-napoli-blue/30 py-3 text-sm focus:outline-none focus:border-napoli-blue transition-colors placeholder:text-napoli-blue/30 text-napoli-blue disabled:opacity-50"
                required
              />
              <button 
                type="submit" 
                disabled={status === 'loading' || status === 'success'}
                className="absolute right-0 bottom-3 text-[11px] uppercase tracking-[0.2em] font-bold hover:text-volcanic transition-colors text-napoli-blue disabled:opacity-50"
              >
                {status === 'loading' ? 'Submitting...' : 'Subscribe'}
              </button>
            </div>
            
            <label className="flex items-start gap-3 mt-4 text-[11px] text-charcoal/60 leading-tight">
              <input 
                type="checkbox" 
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                disabled={status === 'loading' || status === 'success'}
                className="mt-0.5 accent-napoli-blue cursor-pointer"
                required
              />
              <span>
                I agree to the processing of my personal data to receive the newsletter. I have read and understand the <Link to="/privacy-policy" className="underline hover:text-napoli-blue">Privacy Policy</Link>.
              </span>
            </label>
          </form>
          
          {status === 'success' && (
            <p className="text-sm text-napoli-blue mt-4 font-medium">✨ You're on the list. Keep an eye on your inbox.</p>
          )}
          
          {status === 'error' && (
            <p className="text-sm text-volcanic mt-4 max-w-md">{errorMessage}</p>
          )}

          <p className="text-[10px] text-charcoal/40 mt-4 opacity-70">
            Launching Soon. No spam, just pure amore.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
