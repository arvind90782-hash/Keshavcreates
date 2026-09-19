import React from 'react';
import { ArrowDown } from 'lucide-react';
import ArrowFillButton from '@/components/ui/arrow-fill-button';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#1B1B1E] to-[#141416] border border-[#26262A] p-8 sm:p-14 lg:p-20 text-center shadow-2xl">
          
          {/* Subtle Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FF5500]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-block text-xs uppercase tracking-widest font-['Space_Grotesk'] font-bold text-[#FF5500] mb-3">
              START GROWING TODAY
            </div>
            
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white tracking-tight mb-6">
              Ready to Make Your Videos Stand Out?
            </h2>
            
            <p className="text-base sm:text-lg text-[#9A9AA0] mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's turn your next video idea into high-converting clicks with custom thumbnails and hook-driven scripts.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <ArrowFillButton
                btnText="Work With Me"
                href="#contact"
                size="md"
                bgColor="#FF5500"
                fillBgColor="#ffffff"
                fillTextColor="#FF5500"
                textColor="#ffffff"
                className="shadow-[0_0_30px_rgba(255,85,0,0.35)] hover:shadow-[0_0_45px_rgba(255,85,0,0.6)]"
              />

              <a
                href="#work"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-['Space_Grotesk'] font-semibold text-base text-[#F5F5F5] bg-[#0A0A0B] border border-[#26262A] hover:border-[#FF5500] hover:text-white active:scale-95 transition-all min-h-[44px]"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
