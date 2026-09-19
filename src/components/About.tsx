import React from 'react';
import { CREATOR_PROFILE_PICTURE, CONTACT_INFO } from '../data/portfolioData';
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32 border-t border-[#26262A]/60 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bio & Stat Row */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-['Space_Grotesk'] font-bold text-[#FF5500] mb-3">
              <span>HELLO!</span>
            </div>
            
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white mb-6 tracking-tight">
              About Me
            </h2>
            
            <div className="space-y-4 text-base sm:text-lg text-[#9A9AA0] leading-relaxed mb-8">
              <p>
                <span className="text-white font-semibold">Keshav Creates</span> is the creative portfolio and brand of <span className="text-white font-semibold">Keshav</span>, a freelance YouTube thumbnail designer, graphic designer, and script writer dedicated to creating <span className="text-white font-medium">{CONTACT_INFO.tagline}</span>
              </p>
              <p>
                Specializing in <span className="text-white font-medium">{CONTACT_INFO.servicesSummary}</span>. By pairing psychology-driven visual contrast, 3D typography, and cinematic lighting with hook-focused scripts, I deliver thumbnails that stop the scroll and capture clicks.
              </p>
            </div>

            {/* Client Experience Highlights */}
            <div className="mb-8 p-4 rounded-xl bg-[#141416] border border-[#26262A]">
              <div className="flex items-center gap-2 text-xs font-['Space_Grotesk'] font-bold text-[#FF5500] uppercase tracking-wider mb-2.5">
                <ShieldCheck className="w-4 h-4" />
                <span>10+ Client Experience</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {CONTACT_INFO.clientExperience.map((exp) => (
                  <span
                    key={exp}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B1B1E] border border-[#26262A] text-xs font-medium text-[#F5F5F5]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                    {exp}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics Row: 2 cols x 2 rows on mobile (4 metrics in one viewport) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
              <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-[#141416] border border-[#26262A] hover:border-[#FF5500]/50 hover:shadow-[0_10px_30px_-10px_rgba(255,85,0,0.2)] transition-all text-center">
                <div className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-extrabold text-white">
                  20+
                </div>
                <div className="text-[10px] sm:text-xs uppercase font-medium tracking-wider text-[#9A9AA0] mt-1">
                  Thumbnails
                </div>
              </div>

              <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-[#141416] border border-[#26262A] hover:border-[#FF5500]/50 hover:shadow-[0_10px_30px_-10px_rgba(255,85,0,0.2)] transition-all text-center">
                <div className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-extrabold text-white">
                  15+
                </div>
                <div className="text-[10px] sm:text-xs uppercase font-medium tracking-wider text-[#9A9AA0] mt-1">
                  Happy Clients
                </div>
              </div>

              <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-[#141416] border border-[#26262A] hover:border-[#FF5500]/50 hover:shadow-[0_10px_30px_-10px_rgba(255,85,0,0.2)] transition-all text-center">
                <div className="font-['Space_Grotesk'] text-xl sm:text-3xl font-extrabold text-gradient">
                  Multiple
                </div>
                <div className="text-[10px] sm:text-xs uppercase font-medium tracking-wider text-[#9A9AA0] mt-1">
                  Content Niches
                </div>
              </div>

              <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-[#141416] border border-[#26262A] hover:border-[#FF5500]/50 hover:shadow-[0_10px_30px_-10px_rgba(255,85,0,0.2)] transition-all text-center">
                <div className="font-['Space_Grotesk'] text-lg sm:text-2xl font-extrabold text-white">
                  Full-Stack
                </div>
                <div className="text-[10px] sm:text-xs uppercase font-medium tracking-wider text-[#9A9AA0] mt-1">
                  Design & Script
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative group mx-auto max-w-md">
              {/* Ambient glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#FF5500] to-[#FF2A00] rounded-3xl blur-2xl opacity-25 group-hover:opacity-50 transition duration-500" />
              
              <div className="relative rounded-2xl overflow-hidden bg-[#1B1B1E] border border-[#26262A] shadow-2xl">
                {/* ========================================================================= */}
                {/* PROFILE PICTURE: Easy HTML <img> format to change or customize portrait  */}
                {/* Change image in src/data/portfolioData.ts (CREATOR_PROFILE_PICTURE)       */}
                {/* ========================================================================= */}
                <img
                  id="about-profile-picture"
                  src={CREATOR_PROFILE_PICTURE}
                  alt="Keshav - Founder of Keshav Creates, YouTube Thumbnail Designer and Graphic Designer"
                  width={400}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto aspect-square object-cover group-hover:scale-105 transition duration-500 ease-out"
                />
                
                {/* Bottom card badge */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/85 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-['Space_Grotesk'] font-bold text-white text-lg sm:text-xl">
                        Keshav
                      </h3>
                      <p className="text-xs text-[#FF5500] font-medium mt-0.5">
                        YouTube Growth Designer
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500]" />
                      <span>Verified Creator</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
