import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-charcoal flex flex-col font-sans selection:bg-napoli-blue/20">
      <Header />
      <main className="flex-1 w-full max-w-[800px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-napoli-dark mb-12 tracking-tight">
          {title}
        </h1>
        <div className="space-y-6 text-[#4A4A4A] leading-relaxed">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
