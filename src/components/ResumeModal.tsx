import React, { useEffect } from 'react';
import { X, Download, Printer } from 'lucide-react';
import {
  PERSONAL_INFO,
  EDUCATION_TIMELINE,
  SKILL_CATEGORIES,
  FEATURED_PROJECTS,
  ACHIEVEMENTS,
  CERTIFICATIONS,
  BEYOND_TECHNOLOGY,
} from '../data/portfolioData';
import { generateResumeHtmlDocument } from '../utils/portfolioLogic';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadResumeFile = () => {
    const htmlContent = generateResumeHtmlDocument();
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Suchand_C_Achar_Resume.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrintResume = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#141419] border border-zinc-800 shadow-2xl text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-[#141419]/95 backdrop-blur-md border-b border-zinc-800 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-violet-400">CURRICULUM VITAE</div>
            <h2 id="resume-modal-title" className="text-lg sm:text-xl font-bold text-white">
              {PERSONAL_INFO.fullName} — Resume
            </h2>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handlePrintResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-zinc-200 hover:text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadResumeFile}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume modal"
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Structured Resume Sheet */}
        <div className="p-6 sm:p-10 space-y-7 text-sm">
          <div className="border-b border-zinc-800 pb-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-extrabold text-white">{PERSONAL_INFO.fullName}</h3>
              <p className="text-xs font-mono text-violet-300 mt-0.5">
                Information Science & Engineering · Software Engineer
              </p>
            </div>
            <div className="text-xs font-mono text-zinc-400 space-y-0.5 sm:text-right">
              <div>{PERSONAL_INFO.location}</div>
              <div>{PERSONAL_INFO.email}</div>
              <div>github.com/Suchand06 · linkedin.com/in/suchand-c-achar</div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400">Summary</h4>
            <p className="text-zinc-300 leading-relaxed">{PERSONAL_INFO.resumeSummary}</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400">Education</h4>
            <div className="space-y-3">
              {EDUCATION_TIMELINE.map((ed) => (
                <div
                  key={ed.id}
                  className="p-3.5 rounded-xl bg-[#0D0D11] border border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div>
                    <div className="font-bold text-white">
                      {ed.institution} ({ed.location})
                    </div>
                    <div className="text-xs text-zinc-300">{ed.degree}</div>
                  </div>
                  <div className="text-xs font-mono sm:text-right shrink-0">
                    <div className="text-violet-300 font-bold">
                      {ed.primaryScoreLabel}: {ed.primaryScoreValue}
                    </div>
                    <div className="text-zinc-500">
                      {ed.year}
                      {ed.secondaryScore ? ` · ${ed.secondaryScore}` : ''}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              Technical Skills
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  className="p-3 rounded-xl bg-[#0D0D11] border border-zinc-800/80"
                >
                  <span className="font-semibold text-white">{cat.title}: </span>
                  <span className="text-zinc-300">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              Featured Projects
            </h4>
            <div className="space-y-2.5">
              {FEATURED_PROJECTS.map((proj) => (
                <div
                  key={proj.id}
                  className="p-3.5 rounded-xl bg-[#0D0D11] border border-zinc-800/80 space-y-1"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-bold text-white">{proj.title}</span>
                    <span className="text-xs font-mono text-zinc-400">
                      {proj.techStack.slice(0, 5).join(' · ')}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300">{proj.shortDescription}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                Achievements & Certifications
              </h4>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                {ACHIEVEMENTS.map((a) => (
                  <li key={a.id}>
                    • <strong className="text-white">{a.metric} {a.title}:</strong> {a.description}
                  </li>
                ))}
                {CERTIFICATIONS.map((c) => (
                  <li key={c.id}>
                    • <strong className="text-white">{c.title}</strong> — {c.instructor} ({c.platform})
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                Extracurricular Leadership
              </h4>
              <div className="text-xs text-zinc-300 space-y-1">
                <div className="font-semibold text-white">
                  {BEYOND_TECHNOLOGY.organization} — {BEYOND_TECHNOLOGY.role}
                </div>
                {BEYOND_TECHNOLOGY.milestones.map((m) => (
                  <div key={m.id}>• {m.description}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
