import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle2, Cpu, GitCommit } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { ProjectMockup } from './ProjectMockups';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#141419] border border-zinc-800 shadow-2xl text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Top Header */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-[#141419]/95 backdrop-blur-md border-b border-zinc-800 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="text-xs font-mono text-violet-400">
              {project.category} · {project.ownershipNote}
            </div>
            <h2
              id="modal-project-title"
              className="text-xl sm:text-2xl font-bold text-white truncate"
            >
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details modal"
            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Mockup Banner */}
        <ProjectMockup project={project} />

        {/* Detailed Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Overview & Problem Solved */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-violet-400">
                Problem Addressed
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">{project.problemSolved}</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                System Architecture & Implementation
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.architectureSummary}
              </p>
            </div>
          </div>

          {/* Metrics Strip */}
          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-4 rounded-xl bg-[#0D0D11] border border-zinc-800"
                >
                  <div className="text-xs font-mono text-zinc-400">{metric.label}</div>
                  <div className="text-lg font-bold font-mono tabular-nums text-white mt-1">
                    {metric.value}
                  </div>
                  <div className="text-xs text-zinc-500 mt-0.5">{metric.detail}</div>
                </div>
              ))}
            </div>
          )}

          {/* Complete Feature Breakdown */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-violet-400" />
              <span>Complete Feature & Technical Breakdown</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-200">
              {project.features.map((feat, idx) => (
                <li
                  key={idx}
                  className="p-3 rounded-xl bg-[#0D0D11] border border-zinc-800/70 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Execution Workflow */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <GitCommit className="w-4 h-4 text-cyan-400" />
              <span>Engineering Workflow</span>
            </h3>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-300">
              {project.workflowSteps.map((step, i) => (
                <li
                  key={i}
                  className="p-3.5 rounded-xl bg-[#0D0D11] border border-zinc-800/70 flex items-start gap-3"
                >
                  <span className="font-mono text-xs font-bold text-violet-400">
                    0{i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Technology Stack & Links */}
          <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-mono text-zinc-500">Full Technology Stack</div>
              <div className="text-xs sm:text-sm font-mono text-zinc-200">
                {project.techStack.join(' · ')}
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Live Deployment</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
