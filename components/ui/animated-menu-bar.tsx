import React from 'react';

export type NavSectionKey = 'home' | 'about' | 'skills' | 'process' | 'work' | 'pricing' | 'contact';

export interface MenuBarProps {
  active?: NavSectionKey | string;
  onSelect?: (key: NavSectionKey | string) => void;
  className?: string;
}

const icons = {
  home: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
      <path d="M3 9.5L12 4l9 5.5v7.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.5z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  about: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  skills: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  work: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  pricing: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
      <line x1="12" y1="1" x2="12" y2="23" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  contact: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
      <path d="M22 2L11 13" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
  id?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, label, active, onClick, id }) => {
  const [hovered, setHovered] = React.useState(false);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const tooltipTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // Responsive: expand on hover or active on screens >= sm
  const isExpanded = hovered || active;
  const expandedWidth = Math.max(40 + label.length * 8 + 24, 96);

  // Show tooltip on mobile tap
  const handleMobileTooltip = (e: React.MouseEvent) => {
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      setShowTooltip(true);
      if (tooltipTimeout.current) clearTimeout(tooltipTimeout.current);
      tooltipTimeout.current = setTimeout(() => setShowTooltip(false), 1200);
    }
    if (onClick) onClick();
  };

  React.useEffect(() => () => {
    if (tooltipTimeout.current) clearTimeout(tooltipTimeout.current);
  }, []);

  return (
    <button
      id={id}
      type="button"
      aria-label={label}
      className={`group relative flex items-center rounded-xl border transition-all duration-300 focus:outline-none overflow-visible select-none
        ${
          active
            ? 'border-[#FF5500]/60 bg-gradient-to-r from-[#FF5500]/15 to-[#FF2A00]/10 text-white shadow-[0_0_15px_rgba(255,85,0,0.25)] font-semibold'
            : 'border-transparent text-zinc-400 hover:text-white hover:bg-white/5'
        }
        w-9 sm:w-auto h-9 sm:h-10
        px-0 sm:px-3
        justify-center sm:justify-start
      `}
      style={{
        minWidth: 36,
        minHeight: 36,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleMobileTooltip}
    >
      {/* Tooltip for mobile view */}
      <span
        className={`sm:hidden absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1B1B1E] border border-[#26262A] text-white text-[11px] font-['Space_Grotesk'] font-semibold rounded-md px-2 py-0.5 shadow-xl transition-opacity duration-200 pointer-events-none z-50 whitespace-nowrap
          ${showTooltip ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      >
        {label}
      </span>

      {/* Icon */}
      <span className={`flex items-center justify-center w-9 h-9 transition-colors ${active ? 'text-[#FF5500]' : 'text-zinc-400 group-hover:text-white'}`}>
        {icon}
      </span>

      {/* Label with smooth width expansion on desktop */}
      <span
        className={`text-xs font-['Space_Grotesk'] tracking-wide transition-all duration-300 whitespace-nowrap pointer-events-none hidden sm:inline overflow-hidden
          ${isExpanded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          width: isExpanded ? expandedWidth - 40 - 12 : 0,
        }}
      >
        {label}
      </span>
    </button>
  );
};

export const MenuBar: React.FC<MenuBarProps> = ({ active = 'home', onSelect, className = '' }) => {
  const normalizedActive = (active || 'home').toLowerCase();

  return (
    <nav
      id="animated-menu-bar-nav"
      className={`flex items-center gap-1 sm:gap-1.5 bg-[#141416]/95 backdrop-blur-xl p-1.5 rounded-2xl border border-[#26262A] shadow-[0_8px_32px_rgba(0,0,0,0.5)] max-w-full overflow-x-auto no-scrollbar transition-all duration-300 ${className}`}
    >
      <IconButton
        id="menu-item-home"
        icon={icons.home}
        label="Home"
        active={normalizedActive === 'home'}
        onClick={() => onSelect?.('home')}
      />
      <IconButton
        id="menu-item-about"
        icon={icons.about}
        label="About"
        active={normalizedActive === 'about'}
        onClick={() => onSelect?.('about')}
      />
      <IconButton
        id="menu-item-skills"
        icon={icons.skills}
        label="Skills"
        active={normalizedActive === 'skills'}
        onClick={() => onSelect?.('skills')}
      />
      <div className="w-px h-5 bg-[#26262A] mx-0.5 sm:mx-1 flex-shrink-0" />
      <IconButton
        id="menu-item-work"
        icon={icons.work}
        label="Work"
        active={normalizedActive === 'work'}
        onClick={() => onSelect?.('work')}
      />
      <IconButton
        id="menu-item-pricing"
        icon={icons.pricing}
        label="Pricing"
        active={normalizedActive === 'pricing'}
        onClick={() => onSelect?.('pricing')}
      />
      <IconButton
        id="menu-item-contact"
        icon={icons.contact}
        label="Contact"
        active={normalizedActive === 'contact'}
        onClick={() => onSelect?.('contact')}
      />
    </nav>
  );
};

export default MenuBar;
