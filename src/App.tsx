import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Pricing } from './components/Pricing';
import { Process } from './components/Process';
import { WorkGallery } from './components/WorkGallery';
import { WhyMe } from './components/WhyMe';
import { CtaBanner } from './components/CtaBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingCta } from './components/FloatingCta';
import { CookieBanner } from './components/CookieBanner';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'pricing', 'process', 'work', 'why-me', 'contact'];
    
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F5F5F5] relative bg-noise selection:bg-[#FF5500] selection:text-white">
      {/* 01. Sticky Header Navigation */}
      <Navbar activeSection={activeSection} />

      <main>
        {/* 02. Hero Section */}
        <Hero />

        {/* 03. About Section with portrait & real metrics */}
        <About />

        {/* 04. Skills Section (01–07 grid) */}
        <Skills />

        {/* 05. Pricing Section (3 cards, thumbnail design featured) */}
        <Pricing />

        {/* 06. Process Section (01–06 systematic workflow) */}
        <Process />

        {/* 07. Selected Work Gallery (4x4 responsive grid & interactive lightbox) */}
        <WorkGallery />

        {/* 08. Why Choose Me (4 value pillars) */}
        <WhyMe />

        {/* 09. High-Conversion CTA Banner */}
        <CtaBanner />

        {/* 10. Direct Contact (Telegram @YTKeshav & Instagram @YTKeshav) */}
        <Contact />
      </main>

      {/* 11. Footer with Socials, Cookie Preferences & Developer Watermark */}
      <Footer onOpenCookieSettings={() => setShowCookieSettings(true)} />

      {/* Mobile Sticky Floating CTA */}
      <FloatingCta />

      {/* Cookie Consent Banner */}
      <CookieBanner
        forceOpen={showCookieSettings}
        onCloseForce={() => setShowCookieSettings(false)}
      />
    </div>
  );
}

export default App;
