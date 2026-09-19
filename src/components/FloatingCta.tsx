import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import ArrowFillButton from '@/components/ui/arrow-fill-button';

export const FloatingCta: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      id="floating-mobile-cta"
      className="fixed bottom-5 right-5 z-40 sm:hidden animate-fadeIn"
    >
      <ArrowFillButton
        href="#contact"
        btnText="Chat with Keshav"
        size="sm"
        bgColor="#FF5500"
        fillBgColor="#ffffff"
        fillTextColor="#FF5500"
        textColor="#ffffff"
        className="shadow-[0_4px_25px_rgba(255,85,0,0.5)] border-[#FF5500]"
        icon={<Send className="w-3.5 h-3.5" />}
      />
    </div>
  );
};
