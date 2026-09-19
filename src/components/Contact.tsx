import React, { useState } from 'react';
import { Send, Instagram, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';
import ArrowFillButton from '@/components/ui/arrow-fill-button';
import { CONTACT_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<'telegram' | 'instagram' | 'draft' | null>(null);
  const [selectedService, setSelectedService] = useState('Thumbnail Design');
  const [channelTopic, setChannelTopic] = useState('');

  const telegramHandle = CONTACT_INFO.telegramHandle;
  const telegramLink = CONTACT_INFO.telegramUrl;
  const instagramHandle = CONTACT_INFO.instagramHandle;
  const instagramLink = CONTACT_INFO.instagramUrl;

  const handleCopy = (text: string, type: 'telegram' | 'instagram' | 'draft') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const draftMessage = `Hey Keshav! I came across your portfolio and I'm interested in working together on ${selectedService}${
    channelTopic ? ` for my channel/video on "${channelTopic}"` : ''
  }. Let me know your current turnaround and availability!`;

  return (
    <section id="contact" className="py-20 lg:py-32 border-t border-[#26262A]/60 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs uppercase tracking-widest font-['Space_Grotesk'] font-bold text-[#FF5500] mb-3">
            GET IN TOUCH
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-[#9A9AA0] text-base sm:text-lg mt-4">
            Fast replies on Telegram and Instagram. Reach out to discuss your next upload or thumbnail package.
          </p>
        </div>

        {/* 2 Primary Direct Contact Cards in 2-Column Grid on Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-2.5 sm:gap-6 lg:gap-8 max-w-4xl mx-auto mb-8 sm:mb-16">
          
          {/* Telegram Card */}
          <div className="p-3 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-[#141416] border border-[#26262A] hover:border-[#2AABEE]/60 hover:shadow-[0_10px_35px_-10px_rgba(42,171,238,0.2)] transition-all flex flex-col justify-between group">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2.5 sm:mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-[#2AABEE]/10 border border-[#2AABEE]/25 flex items-center justify-center text-[#2AABEE] shrink-0">
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </div>
                <span className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#2AABEE]/10 text-[#2AABEE] border border-[#2AABEE]/25 whitespace-nowrap">
                  Fastest Response
                </span>
              </div>

              <span className="text-[10px] sm:text-xs uppercase tracking-wider font-['Space_Grotesk'] font-semibold text-[#9A9AA0]">
                Direct Chat
              </span>
              <h3 className="font-['Space_Grotesk'] text-sm sm:text-xl lg:text-2xl font-bold text-white mt-0.5 sm:mt-1 mb-1 sm:mb-2">
                Telegram
              </h3>
              <p className="text-[11px] sm:text-xs lg:text-sm text-[#9A9AA0] mb-2 sm:mb-4 lg:mb-6 leading-snug sm:leading-normal">
                Best for quick turnaround requests, brief exchange, and file delivery.
              </p>

              <div className="flex items-center justify-between p-2 sm:p-3.5 rounded-lg sm:rounded-xl bg-[#1B1B1E] border border-[#26262A] mb-3 sm:mb-4 lg:mb-6">
                <span className="font-mono text-[11px] sm:text-sm text-white font-medium truncate mr-1">
                  {telegramHandle}
                </span>
                <button
                  onClick={() => handleCopy(telegramHandle, 'telegram')}
                  className="text-[10px] sm:text-xs text-[#9A9AA0] hover:text-white flex items-center gap-1 p-0.5 sm:p-1 transition-colors shrink-0"
                  aria-label="Copy Telegram handle"
                >
                  {copiedType === 'telegram' ? (
                    <>
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 hidden sm:inline">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <ArrowFillButton
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              btnText="Message on Telegram"
              size="full"
              bgColor="#2AABEE"
              textColor="#ffffff"
              fillBgColor="#ffffff"
              fillTextColor="#2AABEE"
              className="!h-9 sm:!h-[54px] !text-xs sm:!text-base !px-2.5 sm:!px-6 !pr-8 sm:!pr-14 [--icon-circle:22px] sm:[--icon-circle:34px] [--icon-right:5px] sm:[--icon-right:8px] [--icon-size:12px] sm:[--icon-size:16px] shadow-lg shadow-[#2AABEE]/25 border-[#2AABEE]"
              icon={<Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            />
          </div>

          {/* Instagram Card */}
          <div className="p-3 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-[#141416] border border-[#26262A] hover:border-[#E1306C]/60 hover:shadow-[0_10px_35px_-10px_rgba(225,48,108,0.2)] transition-all flex flex-col justify-between group">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2.5 sm:mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4] p-0.5 flex items-center justify-center shrink-0">
                  <div className="w-full h-full bg-[#141416] rounded-[6px] sm:rounded-[10px] flex items-center justify-center text-white group-hover:text-[#FD1D1D] transition-colors">
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </div>
                </div>
                <span className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#E1306C]/10 text-[#E1306C] border border-[#E1306C]/25 whitespace-nowrap">
                  Portfolio & DMs
                </span>
              </div>

              <span className="text-[10px] sm:text-xs uppercase tracking-wider font-['Space_Grotesk'] font-semibold text-[#9A9AA0]">
                Social & Portfolio
              </span>
              <h3 className="font-['Space_Grotesk'] text-sm sm:text-xl lg:text-2xl font-bold text-white mt-0.5 sm:mt-1 mb-1 sm:mb-2">
                Instagram
              </h3>
              <p className="text-[11px] sm:text-xs lg:text-sm text-[#9A9AA0] mb-2 sm:mb-4 lg:mb-6 leading-snug sm:leading-normal">
                Connect on Instagram, see latest stories, and discuss creative thumbnail concepts.
              </p>

              <div className="flex items-center justify-between p-2 sm:p-3.5 rounded-lg sm:rounded-xl bg-[#1B1B1E] border border-[#26262A] mb-3 sm:mb-4 lg:mb-6">
                <span className="font-mono text-[11px] sm:text-sm text-white font-medium truncate mr-1">
                  {instagramHandle}
                </span>
                <button
                  onClick={() => handleCopy(instagramHandle, 'instagram')}
                  className="text-[10px] sm:text-xs text-[#9A9AA0] hover:text-white flex items-center gap-1 p-0.5 sm:p-1 transition-colors shrink-0"
                  aria-label="Copy Instagram handle"
                >
                  {copiedType === 'instagram' ? (
                    <>
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 hidden sm:inline">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <ArrowFillButton
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              btnText="DM on Instagram"
              size="full"
              bgColor="#E1306C"
              textColor="#ffffff"
              fillBgColor="#ffffff"
              fillTextColor="#E1306C"
              className="!h-9 sm:!h-[54px] !text-xs sm:!text-base !px-2.5 sm:!px-6 !pr-8 sm:!pr-14 [--icon-circle:22px] sm:[--icon-circle:34px] [--icon-right:5px] sm:[--icon-right:8px] [--icon-size:12px] sm:[--icon-size:16px] shadow-lg shadow-[#E1306C]/25 border-[#E1306C]"
              icon={<Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            />
          </div>

        </div>

        {/* Interactive Quick-Inquiry Composer */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#141416] border border-[#26262A] shadow-xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-['Space_Grotesk'] font-bold text-[#FF5500] mb-3">
            <Sparkles className="w-4 h-4" />
            <span>QUICK INQUIRY ASSISTANT</span>
          </div>
          <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-4">
            Draft Your Project Brief in Seconds
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-medium text-[#9A9AA0] mb-1.5">
                Service You Need
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#1B1B1E] border border-[#26262A] text-white text-sm focus:outline-none focus:border-[#FF5500]"
              >
                <option value="Thumbnail Design">Thumbnail Design (₹499)</option>
                <option value="Graphic Design">Graphic Design & Channel Art</option>
                <option value="Script Writing">Script Writing & Hooks</option>
                <option value="Full Growth Package">Full Growth Package (Thumbnail + Script)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#9A9AA0] mb-1.5">
                Channel Niche or Video Title
              </label>
              <input
                type="text"
                value={channelTopic}
                onChange={(e) => setChannelTopic(e.target.value)}
                placeholder="e.g. AI tools documentary / Gaming challenge"
                className="w-full px-4 py-2.5 rounded-xl bg-[#1B1B1E] border border-[#26262A] text-white text-sm focus:outline-none focus:border-[#FF5500] placeholder:text-[#9A9AA0]/50"
              />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0A0A0B] border border-[#26262A] mb-4">
            <p className="text-xs text-[#9A9AA0] uppercase font-mono tracking-wider mb-1">
              Ready-to-send Message:
            </p>
            <p className="text-sm text-white/90 italic">
              "{draftMessage}"
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-3">
            <button
              onClick={() => handleCopy(draftMessage, 'draft')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-['Space_Grotesk'] font-semibold text-white bg-[#1B1B1E] border border-[#26262A] hover:border-[#FF5500] transition-colors"
            >
              {copiedType === 'draft' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Brief Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Brief</span>
                </>
              )}
            </button>

            <ArrowFillButton
              href={`${telegramLink}?text=${encodeURIComponent(draftMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              btnText="Send via Telegram"
              size="sm"
              bgColor="#2AABEE"
              textColor="#ffffff"
              fillBgColor="#ffffff"
              fillTextColor="#2AABEE"
              className="shadow-md shadow-[#2AABEE]/20 border-[#2AABEE]"
              icon={<Send className="w-3.5 h-3.5" />}
            />
          </div>
        </div>

      </div>
    </section>
  );
};
