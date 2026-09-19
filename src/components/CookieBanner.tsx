import React, { useState, useEffect } from 'react';
import { Cookie, X, ChevronDown, ChevronUp, ShieldCheck, Check } from 'lucide-react';

interface CookieBannerProps {
  forceOpen?: boolean;
  onCloseForce?: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ forceOpen = false, onCloseForce }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(true);

  useEffect(() => {
    // Check saved consent in localStorage
    const savedConsent = localStorage.getItem('keshav_cookie_consent');
    if (!savedConsent || forceOpen) {
      // Slight delay so it doesn't jarringly shift on initial load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 700);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [forceOpen]);

  const handleAcceptAll = () => {
    localStorage.setItem(
      'keshav_cookie_consent',
      JSON.stringify({
        essential: true,
        analytics: true,
        timestamp: new Date().toISOString(),
      })
    );
    setIsVisible(false);
    if (onCloseForce) onCloseForce();
  };

  const handleDecline = () => {
    localStorage.setItem(
      'keshav_cookie_consent',
      JSON.stringify({
        essential: true,
        analytics: false,
        timestamp: new Date().toISOString(),
      })
    );
    setIsVisible(false);
    if (onCloseForce) onCloseForce();
  };

  const handleSaveCustom = () => {
    localStorage.setItem(
      'keshav_cookie_consent',
      JSON.stringify({
        essential: true,
        analytics: analyticsConsent,
        timestamp: new Date().toISOString(),
      })
    );
    setIsVisible(false);
    if (onCloseForce) onCloseForce();
  };

  if (!isVisible && !forceOpen) return null;

  return (
    <aside
      id="cookie-consent-banner"
      role="region"
      aria-label="Cookie and Privacy Consent"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md md:max-w-lg z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-[#141416]/95 backdrop-blur-xl border border-[#26262A] rounded-2xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-[#F5F5F5]">
        
        {/* Header with Icon and Title */}
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/25 flex items-center justify-center flex-shrink-0">
              <Cookie className="w-4 h-4 text-[#FF5500]" />
            </div>
            <div>
              <h3 className="font-['Space_Grotesk'] text-sm sm:text-base font-bold text-white tracking-tight">
                Cookie Preferences
              </h3>
              <span className="text-[10px] text-[#9A9AA0] uppercase tracking-wider font-semibold">
                Keshav Creates Privacy
              </span>
            </div>
          </div>

          <button
            onClick={handleDecline}
            aria-label="Dismiss cookie banner"
            className="text-[#9A9AA0] hover:text-white p-1 rounded-lg hover:bg-[#1B1B1E] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message */}
        <p className="text-xs sm:text-[13px] text-[#9A9AA0] leading-relaxed mb-4">
          This portfolio uses cookies and local storage to ensure basic site functionality, preserve your preferences, and anonymously analyze visitor traffic to improve responsiveness.
        </p>

        {/* Expandable Preferences Drawer */}
        {showCustomize && (
          <div className="mb-4 pt-3 border-t border-[#26262A] space-y-2.5 animate-in fade-in duration-200">
            {/* Essential Cookies */}
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#1B1B1E] border border-[#26262A]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF5500]" />
                <div>
                  <div className="text-xs font-semibold text-white">Essential Cookies</div>
                  <div className="text-[10px] text-[#9A9AA0]">Necessary for site security and navigation</div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-white bg-[#26262A] px-2 py-0.5 rounded-md uppercase tracking-wider">
                Always Active
              </span>
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#1B1B1E] border border-[#26262A]">
              <div>
                <div className="text-xs font-semibold text-white">Analytics & Performance</div>
                <div className="text-[10px] text-[#9A9AA0]">Helps gauge page speed and gallery interactions</div>
              </div>
              <button
                type="button"
                onClick={() => setAnalyticsConsent(!analyticsConsent)}
                aria-label="Toggle analytics cookies"
                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                  analyticsConsent ? 'bg-[#FF5500]' : 'bg-[#26262A]'
                }`}
              >
                <span
                  className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                    analyticsConsent ? 'translate-x-4.5' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {showCustomize ? (
            <>
              <button
                onClick={handleSaveCustom}
                className="flex-1 px-4 py-2 text-xs font-semibold text-white bg-[#FF5500] hover:bg-[#FF2A00] rounded-xl transition-colors text-center"
              >
                Save Preferences
              </button>
              <button
                onClick={() => setShowCustomize(false)}
                className="px-3 py-2 text-xs font-medium text-[#9A9AA0] hover:text-white bg-[#1B1B1E] hover:bg-[#26262A] rounded-xl transition-colors"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                id="cookie-accept-all-btn"
                onClick={handleAcceptAll}
                className="flex-1 px-4 py-2 text-xs font-bold text-white bg-[#FF5500] hover:bg-[#FF2A00] rounded-xl transition-colors shadow-md shadow-[#FF5500]/20 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                <span>Accept All</span>
              </button>

              <button
                id="cookie-decline-btn"
                onClick={handleDecline}
                className="px-3.5 py-2 text-xs font-semibold text-[#F5F5F5] bg-[#1B1B1E] hover:bg-[#26262A] border border-[#26262A] rounded-xl transition-colors cursor-pointer"
              >
                Essential Only
              </button>

              <button
                id="cookie-customize-btn"
                onClick={() => setShowCustomize(true)}
                className="inline-flex items-center gap-1 px-2.5 py-2 text-xs font-medium text-[#9A9AA0] hover:text-white rounded-xl transition-colors cursor-pointer"
                title="Customize cookie categories"
              >
                <span>Preferences</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </>
          )}
        </div>

      </div>
    </aside>
  );
};
