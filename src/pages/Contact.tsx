import { useEffect } from 'react';
import { PageLayout } from '../components/PageLayout';

export function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout title="Contact and Legal Notice">
      <p><strong>Publisher:</strong> Vedi Napoli</p>
      <p><strong>Website:</strong> <a href="https://www.vedinapoli.com" className="text-napoli-blue hover:underline">https://www.vedinapoli.com</a></p>
      
      <p className="mt-6"><strong>General editorial contact:</strong> <a href="mailto:hello@vedinapoli.com" className="text-napoli-blue hover:underline">hello@vedinapoli.com</a></p>
      <p><strong>Corrections:</strong> <a href="mailto:corrections@vedinapoli.com" className="text-napoli-blue hover:underline">corrections@vedinapoli.com</a></p>
      <p><strong>Business / partnerships:</strong> <a href="mailto:partnerships@vedinapoli.com" className="text-napoli-blue hover:underline">partnerships@vedinapoli.com</a></p>

      <p className="mt-8">For legal notices, rights inquiries, or urgent concerns, contact the publication at the main editorial address and include "Legal Notice" in the subject line.</p>

      <p className="mt-8">Vedi Napoli is an independent digital publication. Unless explicitly stated otherwise, it is not affiliated with or endorsed by SSC Napoli, Lega Serie A, UEFA, FIFA, or any associated rights holder.</p>
    </PageLayout>
  );
}
