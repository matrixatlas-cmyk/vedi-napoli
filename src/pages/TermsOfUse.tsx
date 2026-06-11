import { useEffect } from 'react';
import { PageLayout } from '../components/PageLayout';

export function TermsOfUse() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout title="Terms of Use">
      <p>By accessing or using Vedi Napoli, users agree to these Terms of Use.</p>

      <h2 className="text-2xl font-serif text-napoli-dark mt-8 mb-4">1. Informational use</h2>
      <p>Vedi Napoli provides editorial, informational, and opinion content for general information purposes only.</p>

      <h2 className="text-2xl font-serif text-napoli-dark mt-8 mb-4">2. No professional advice</h2>
      <p>Content published on Vedi Napoli does not constitute legal, financial, betting, or other professional advice.</p>

      <h2 className="text-2xl font-serif text-napoli-dark mt-8 mb-4">3. Intellectual property</h2>
      <p>Unless otherwise stated, original text, branding, and site materials are owned by or licensed to Vedi Napoli. Users may not reproduce, republish, or commercially exploit site content without permission, except where allowed by law.</p>

      <h2 className="text-2xl font-serif text-napoli-dark mt-8 mb-4">4. External links</h2>
      <p>The site may link to third-party websites. Vedi Napoli is not responsible for the content, availability, or policies of external sites.</p>

      <h2 className="text-2xl font-serif text-napoli-dark mt-8 mb-4">5. Acceptable use</h2>
      <p>Users may not misuse the site, attempt unauthorized access, interfere with operations, or use the site for unlawful purposes.</p>

      <h2 className="text-2xl font-serif text-napoli-dark mt-8 mb-4">6. Changes</h2>
      <p>Vedi Napoli may update these terms from time to time. The current version will be published on the site.</p>

      <h2 className="text-2xl font-serif text-napoli-dark mt-8 mb-4">7. Governing law</h2>
      <p>These terms and any dispute arising from the use of the site are governed by the laws of Italy, unless otherwise mandatory by the user's jurisdiction.</p>
    </PageLayout>
  );
}
