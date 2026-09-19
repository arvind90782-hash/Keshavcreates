import React, { useState } from 'react';
import { Project } from '../types';
import { getInitialProjects, CONTACT_INFO } from '../data/portfolioData';
import { LightboxModal } from './LightboxModal';
import { Maximize2, Send } from 'lucide-react';
import ArrowFillButton from '@/components/ui/arrow-fill-button';

export const WorkGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [projectsList] = useState<Project[]>(() => getInitialProjects());
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'tech', label: 'Tech & AI' },
    { id: 'gaming', label: 'Gaming' },
    { id: 'documentary', label: 'Documentary' },
    { id: 'finance', label: 'Finance & Money' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projectsList
      : projectsList.filter((p) => p.category === activeFilter);

  const handleOpenLightbox = (proj: Project) => {
    setSelectedProject(proj);
    setIsLightboxOpen(true);
  };

  return (
    <section id="work" className="py-16 sm:py-20 lg:py-24 border-t border-[#26262A]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Direct CTA */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="inline-block text-xs uppercase tracking-widest font-['Space_Grotesk'] font-bold text-[#FF5500] mb-2">
              SELECTED WORK
            </div>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white tracking-tight">
              High-CTR Thumbnails
            </h2>
            <p className="text-[#9A9AA0] text-xs sm:text-sm sm:mt-1">
              Engineered to stop the scroll and maximize viewer click-through rates.
            </p>
          </div>

          <ArrowFillButton
            href={CONTACT_INFO.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            btnText="Request Custom Concept"
            size="sm"
            bgColor="#141416"
            textColor="#ffffff"
            fillBgColor="#FF5500"
            fillTextColor="#ffffff"
            arrowColor="#FF5500"
            hoverArrowColor="#ffffff"
            className="border-[#26262A] hover:border-[#FF5500] self-start sm:self-auto"
            icon={<Send className="w-3.5 h-3.5 text-[#FF5500] group-hover:text-white transition-colors" />}
          />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-['Space_Grotesk'] font-semibold transition-all min-h-[36px] ${
                  isActive
                    ? 'bg-gradient-to-r from-[#FF5500] to-[#FF2A00] text-white shadow-md shadow-[#FF5500]/30'
                    : 'bg-[#141416] text-[#9A9AA0] border border-[#26262A] hover:text-white hover:border-[#FF5500]/50'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Compact Grid: 2 columns on Mobile/Tablet (4 cards fit directly on 1 mobile screen without scroll) & 4 columns on Desktop */}
        <div
          id="projects-grid-container"
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 lg:gap-4"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="thumbnail thumbnail-card group cursor-pointer rounded-xl overflow-hidden bg-[#141416] border border-[#26262A] hover:border-[#FF5500] hover:shadow-[0_0_25px_rgba(255,85,0,0.35)] transition-all duration-300 relative"
              role="listitem"
              data-type="image"
              data-src={project.imageUrl}
              onClick={() => handleOpenLightbox(project)}
            >
              {/* ===================================================================== */}
              {/* PROJECT THUMBNAIL IMAGE (Pure 16:9, click to open zoom lightbox)      */}
              {/* ===================================================================== */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#0A0A0B]">
                <img
                  id={`project-thumb-${project.id}`}
                  src={project.imageUrl}
                  alt={`${project.title} - High-CTR ${project.categoryLabel} YouTube Thumbnail by Keshav Creates`}
                  width={640}
                  height={360}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    // Gracefully fallback to high-quality sample if local relative file isn't uploaded yet
                    if (project.posterUrl && e.currentTarget.src !== project.posterUrl) {
                      e.currentTarget.src = project.posterUrl;
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                />

                {/* Subtle Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center text-white pointer-events-none">
                  <div className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-['Space_Grotesk'] font-bold flex items-center gap-1.5 shadow-lg">
                    <Maximize2 className="w-3 h-3 text-[#FF5500]" />
                    <span>Fullscreen</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        project={selectedProject}
        projects={filteredProjects}
        onClose={() => setIsLightboxOpen(false)}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />
    </section>
  );
};
