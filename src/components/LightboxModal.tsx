import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, ExternalLink } from 'lucide-react';

interface LightboxModalProps {
  project: Project | null;
  projects: Project[];
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  project,
  projects,
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setIsZoomed(false);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !project) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, project, projects]);

  if (!isOpen || !project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      onSelectProject(projects[currentIndex + 1]);
    } else {
      onSelectProject(projects[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectProject(projects[currentIndex - 1]);
    } else {
      onSelectProject(projects[projects.length - 1]);
    }
  };

  return (
    <div
      id="portfolio-lightbox-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-xl p-3 sm:p-6 select-none animate-fadeIn"
      onClick={onClose}
    >
      {/* Lightbox Container */}
      <div
        className="relative max-w-5xl w-full bg-[#141416] border border-[#26262A] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#26262A] bg-[#0A0A0B]/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#FF5500]/15 text-[#FF5500] text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-[#9A9AA0]">
              {currentIndex + 1} of {projects.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              title={isZoomed ? 'Reset zoom' : 'Inspect 2x Zoom'}
              className="p-2 rounded-xl bg-[#1B1B1E] border border-[#26262A] text-[#9A9AA0] hover:text-white hover:border-[#FF5500] transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
            >
              {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#1B1B1E] border border-[#26262A] text-[#9A9AA0] hover:text-white hover:border-[#FF5500] transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Thumbnail Stage */}
        <div className="relative flex-1 overflow-auto flex items-center justify-center bg-[#0A0A0B] p-4 sm:p-6 min-h-[260px] sm:min-h-[420px]">
          <div
            className={`transition-transform duration-300 ${
              isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              onError={(e) => {
                if (project.posterUrl && e.currentTarget.src !== project.posterUrl) {
                  e.currentTarget.src = project.posterUrl;
                }
              }}
              className="max-h-[68vh] w-auto rounded-xl object-contain shadow-2xl border border-[#26262A]"
            />
          </div>

          {/* Left / Right arrow navigation buttons */}
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#141416]/80 backdrop-blur-md border border-[#26262A] text-white hover:text-[#FF5500] hover:border-[#FF5500] transition-all min-w-[44px] min-h-[44px] flex items-center justify-center shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#141416]/80 backdrop-blur-md border border-[#26262A] text-white hover:text-[#FF5500] hover:border-[#FF5500] transition-all min-w-[44px] min-h-[44px] flex items-center justify-center shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Details Footer */}
        <div className="px-6 py-4 border-t border-[#26262A] bg-[#141416] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white">
              {project.title}
            </h3>
            <p className="text-xs text-[#9A9AA0] mt-0.5">
              {project.nicheDescription} · Engineered with cinematic depth & custom typography
            </p>
          </div>

          <div className="flex items-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium uppercase px-2.5 py-1 rounded-md bg-[#1B1B1E] border border-[#26262A] text-[#9A9AA0]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
