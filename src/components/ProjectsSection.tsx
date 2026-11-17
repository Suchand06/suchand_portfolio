import React, { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight, Layers } from 'lucide-react';
import { FEATURED_PROJECTS, ProjectCategory, ProjectItem } from '../data/portfolioData';
import { filterProjects } from '../utils/portfolioLogic';
import { ProjectMockup } from './ProjectMockups';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

const CATEGORIES: ProjectCategory[] = ['All', 'Full Stack', 'AI/ML', 'Backend', 'Other'];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects = filterProjects(FEATURED_PROJECTS, activeCategory);

  return (
    <section id="projects" className="py-24 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Heading & Category Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-mono tracking-wider text-violet-400">
              04. FEATURED ENGINEERING WORK
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Things I&apos;ve Built
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Turning ideas into practical software solutions — from local-first RAG engines and
              AI database workspaces to deep-learning traffic predictors and 60fps canvas games.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#141419] border border-zinc-800/90"
          >
            {CATEGORIES.map((category) => {
              const isSelected = activeCategory === category;
              const count = filterProjects(FEATURED_PROJECTS, category).length;
              return (
                <button
                  key={category}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Bento Grid */}
        <div
          data-testid="projects-grid"
          className="grid grid-cols-1 lg:grid-cols-12 gap-7"
        >
          {filteredProjects.map((project) => {
            const isEmphasized =
              project.id === 'repolens' ||
              project.id === 'traffic-flow';

            return (
              <article
                key={project.id}
                className={`${
                  isEmphasized ? 'lg:col-span-12' : 'lg:col-span-6'
                } rounded-2xl bg-[#141419] border border-zinc-800/90 hover:border-zinc-700 overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5`}
              >
                <div>
                  {/* Top Custom Interactive / Visual Mockup */}
                  <ProjectMockup project={project} />

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-8 space-y-5">
                    {/* Metadata Line (Zero-Pill Unboxed Discipline) */}
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-400">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-violet-300 font-semibold">{project.category}</span>
                        {project.secondaryCategories.map((sec) => (
                          <React.Fragment key={sec}>
                            <span aria-hidden="true">·</span>
                            <span>{sec}</span>
                          </React.Fragment>
                        ))}
                      </div>
                      <span className="text-zinc-500">{project.ownershipNote}</span>
                    </div>

                    {/* Title & Short Description */}
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Problem Being Solved */}
                    <div className="pt-3 border-t border-zinc-800/80 space-y-1.5">
                      <div className="text-xs font-mono text-cyan-400">
                        Problem & Architectural Approach
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {project.problemSolved}
                      </p>
                    </div>

                    {/* Quantitative / Architectural Highlights if available */}
                    {project.metrics && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                        {project.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="p-3 rounded-xl bg-[#0D0D11] border border-zinc-800/70"
                          >
                            <div className="text-[11px] font-mono text-zinc-400">{m.label}</div>
                            <div className="text-sm font-bold font-mono tabular-nums text-white mt-0.5">
                              {m.value}
                            </div>
                            <div className="text-[11px] text-zinc-500 mt-0.5">{m.detail}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Top Features Preview */}
                    <div className="space-y-2 pt-1">
                      <div className="text-xs font-mono text-zinc-400">Key Capabilities</div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs sm:text-sm text-zinc-300">
                        {project.features.slice(0, 4).map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-violet-400 font-mono">→</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer: Tech Stack & Action Buttons */}
                <div className="px-6 sm:px-8 py-5 bg-[#0E0E13] border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs font-mono text-zinc-400 leading-relaxed">
                    <span className="text-zinc-500 mr-1.5">Stack:</span>
                    {project.techStack.join(' · ')}
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <Layers className="w-3.5 h-3.5 text-violet-400" />
                      <span>View Details</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-zinc-200 hover:text-white bg-[#141419] hover:bg-zinc-800 border border-zinc-800 transition-colors whitespace-nowrap shrink-0"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 transition-all whitespace-nowrap shrink-0"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
