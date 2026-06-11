import { useEffect } from 'react';
import { PageLayout } from '../components/PageLayout';

export function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout title="About Vedi Napoli">
      <p>Vedi Napoli is an independent English-language digital publisher dedicated to SSC Napoli, Naples, football culture, and matchday life.</p>
      
      <p>The publication covers club news, matchday context, tactical and cultural analysis, fan perspectives, city guides, and selected commentary related to Napoli and the wider Neapolitan sporting identity.</p>
      
      <p>Vedi Napoli is not affiliated with, endorsed by, or officially connected to SSC Napoli, Lega Serie A, or any related commercial rights holder unless explicitly stated.</p>
      
      <p>The editorial aim is to help an international audience understand Napoli not only as a football club, but as a city, culture, and community.</p>
      
      <p>Coverage may include original reporting, curated summaries of publicly available information, commentary, explainers, and newsletter-style editorial products.</p>
    </PageLayout>
  );
}
