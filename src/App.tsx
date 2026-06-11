import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { AboutPage } from './pages/About';
import { EditorialStandards } from './pages/EditorialStandards';
import { CorrectionsPolicy } from './pages/CorrectionsPolicy';
import { CookieNotice } from './pages/CookieNotice';
import { TermsOfUse } from './pages/TermsOfUse';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/editorial-standards" element={<EditorialStandards />} />
        <Route path="/corrections-policy" element={<CorrectionsPolicy />} />
        <Route path="/cookie-notice" element={<CookieNotice />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}
