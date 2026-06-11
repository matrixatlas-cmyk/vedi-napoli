import { useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen selection:bg-napoli-blue selection:text-off-white flex flex-col bg-off-white">
      <Header />
      <div className="flex-1 w-full max-w-[800px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-serif italic text-napoli-blue mb-4">Privacy Policy</h1>
        <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-charcoal/40 mb-12">Last Updated: June 2024</p>
        
        <div className="space-y-10 text-[15px] text-[#4A4A4A] leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif text-napoli-dark mb-4">1. Introduction</h2>
            <p>Welcome to Vedi Napoli ("we," "our," or "us"). We are committed to protecting your personal data and respecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website (vedinapoli.com) and subscribe to our newsletter, in compliance with the General Data Protection Regulation (GDPR).</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-napoli-dark mb-4">2. The Data We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you, including:</p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li><strong>Identity Data:</strong> First name, last name (if provided).</li>
              <li><strong>Contact Data:</strong> Email address.</li>
              <li><strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting, location, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-napoli-dark mb-4">3. Third-Party Services We Use</h2>
            <p className="mb-4">We employ the following third-party services to operate our digital portal, analyze traffic, and communicate with you:</p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-charcoal mb-2">Brevo (Newsletter & Email Marketing)</h3>
                <p>We use Brevo (formerly Sendinblue) as our marketing automation platform. When you subscribe to our waitlist, your email address and consent data are securely processed by Brevo. Brevo complies strictly with GDPR. We may use their tracking pixels within our emails to analyze open rates and click-throughs to improve our content.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-charcoal mb-2">Google Analytics (Traffic Analysis)</h3>
                <p>We use Google Analytics to measure website traffic and understand user behavior. Google Analytics utilizes cookies to collect anonymized Usage and Technical Data. We enforce IP anonymization to ensure this data cannot be directly traced to specific individuals.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-charcoal mb-2">Meta Pixel (Social Media & Ads)</h3>
                <p>We use the Meta (Facebook/Instagram) Pixel to track the effectiveness of our social media campaigns and understand how users arriving from our social channels interact with the site. This tool may use cookies and similar technologies to collect or receive information from your website and use that to provide measurement services and targeted ads.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-napoli-dark mb-4">4. Data Processing and Storage</h2>
            <p>Your data is processed within the European Economic Area (EEA). If our third-party providers transport data outside the EEA (such as to the US), we ensure a similar degree of protection is afforded by ensuring standard contractual clauses (SCCs) are in place, in accordance with applicable laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-napoli-dark mb-4">5. Your Legal Rights (GDPR)</h2>
            <p>Under the GDPR, you possess several rights pertaining to your personal data, including the right to:</p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li><strong>Request access</strong> to your personal data.</li>
              <li><strong>Request correction</strong> of the personal data that we hold about you.</li>
              <li><strong>Request erasure</strong> of your personal data (the "right to be forgotten").</li>
              <li><strong>Object to processing</strong> of your personal data.</li>
              <li><strong>Withdraw consent</strong> at any time where we are relying on consent to process your personal data (e.g., unsubscribing from our newsletter).</li>
            </ul>
            <p className="mt-4">If you wish to exercise any of these rights, please contact us.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-napoli-dark mb-4">6. Contact Us</h2>
            <p>For questions about this Privacy Policy or to exercise your GDPR rights, please contact our Data Protection Officer at <a href="mailto:privacy@vedinapoli.com" className="text-napoli-blue hover:underline">privacy@vedinapoli.com</a>.</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
