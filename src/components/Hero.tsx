import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Code2,
  Mail,
  MapPin,
  Terminal,
  Play,
  CheckCircle2,
} from 'lucide-react';
import { PERSONAL_INFO, HERO_WORKBENCH_TABS } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [activeTabId, setActiveTabId] = useState(HERO_WORKBENCH_TABS[0].id);
  const [terminalCommandIndex, setTerminalCommandIndex] = useState(0);

  const terminalCommands = [
    {
      cmd: 'repolens query "How are citations validated?"',
      res: 'Verified 4 AST spans across CitationCard.tsx & verifier.py (Grounding: 0.96)',
    },
    {
      cmd: 'pytest backend/services/ats_engine.py',
      res: 'PASSED: TF-IDF + Jaccard similarity & 60%+ keyword boost verified',
    },
    {
      cmd: 'g++ -O3 dsa_ieeextreme.cpp -o solver && ./solver',
      res: 'Optimal solution converged in 14ms · 4th Place Collegiately (IEEEXtreme 18.0)',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % PERSONAL_INFO.rotatingTitles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const activeTab =
    HERO_WORKBENCH_TABS.find((t) => t.id === activeTabId) || HERO_WORKBENCH_TABS[0];

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden border-b border-zinc-900"
    >
      {/* Subtle Ambient Violet/Blue/Cyan Radial Glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 w-[540px] h-[540px] rounded-full bg-violet-600/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-20 right-10 w-[420px] h-[420px] rounded-full bg-cyan-500/8 blur-[120px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">
          {/* Left Column: Typography, Rotating Role, CTAs & Socials */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Small Introductory Label */}
              <div className="inline-flex items-center gap-2.5 text-xs font-mono tracking-widest text-violet-300/90">
                <span>{PERSONAL_INFO.introKicker}</span>
                <span aria-hidden="true" className="text-zinc-600">
                  ·
                </span>
                <span className="inline-flex items-center gap-1 text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  {PERSONAL_INFO.location}
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white leading-[1.08] text-balance">
                Building Intelligent{' '}
                <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Solutions Through Code.
                </span>
              </h1>

              {/* Rotating Professional Titles */}
              <div className="flex items-center gap-3 text-base sm:text-lg font-mono text-zinc-300">
                <span className="text-zinc-500">Role /</span>
                <span
                  key={PERSONAL_INFO.rotatingTitles[titleIndex]}
                  className="font-semibold text-cyan-300 transition-opacity duration-200"
                  aria-live="polite"
                >
                  {PERSONAL_INFO.rotatingTitles[titleIndex]}
                </span>
              </div>

              {/* Supporting Description */}
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
                {PERSONAL_INFO.heroDescription}
              </p>
            </div>

            {/* CTAs and Social Links */}
            <div className="space-y-7 pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  onClick={scrollToProjects}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 hover:from-violet-500 hover:via-blue-500 hover:to-cyan-500 rounded-xl shadow-lg shadow-violet-950/40 transition-all whitespace-nowrap shrink-0"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-zinc-200 hover:text-white bg-[#141419] hover:bg-zinc-800/90 border border-zinc-800 hover:border-zinc-700 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-violet-400" />
                  <span>Download Resume</span>
                </button>
              </div>

              {/* Secondary Social Links */}
              <div className="pt-2 border-t border-zinc-900 flex flex-wrap items-center gap-6 text-xs font-medium text-zinc-400">
                <a
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 text-zinc-300" />
                  <span>GitHub</span>
                </a>
                <span aria-hidden="true" className="text-zinc-700">
                  ·
                </span>
                <a
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
                <span aria-hidden="true" className="text-zinc-700">
                  ·
                </span>
                <a
                  href={PERSONAL_INFO.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Code2 className="w-4 h-4 text-amber-400" />
                  <span>LeetCode</span>
                </a>
                <span aria-hidden="true" className="text-zinc-700">
                  ·
                </span>
                <a
                  href={PERSONAL_INFO.links.email}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Code & Terminal Workbench */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            {/* Floating Stack Indicators */}
            <div className="flex flex-wrap items-center justify-between gap-2 px-1 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-md bg-[#141419] border border-zinc-800 text-cyan-300">
                React.js
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#141419] border border-zinc-800 text-violet-300">
                Python
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#141419] border border-zinc-800 text-blue-300">
                C++
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#141419] border border-zinc-800 text-emerald-300">
                FastAPI
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#141419] border border-zinc-800 text-amber-300">
                AI / RAG
              </span>
            </div>

            <div className="relative flex-1 rounded-2xl bg-[#141419] border border-zinc-800/90 shadow-2xl overflow-hidden flex flex-col justify-between">
              {/* Top Editor Window Header & Interactive File Tabs */}
              <div>
                <div className="px-4 py-3 bg-[#0D0D11] border-b border-zinc-800/80 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  </div>

                  {/* Interactive File Selector Tabs */}
                  <div
                    role="tablist"
                    aria-label="Hero Code Workbench Files"
                    className="flex items-center gap-1 overflow-x-auto"
                  >
                    {HERO_WORKBENCH_TABS.map((tab) => {
                      const active = tab.id === activeTabId;
                      return (
                        <button
                          key={tab.id}
                          role="tab"
                          type="button"
                          aria-selected={active}
                          onClick={() => setActiveTabId(tab.id)}
                          className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                            active
                              ? 'bg-violet-500/15 text-violet-200 border border-violet-500/30'
                              : 'text-zinc-400 hover:text-zinc-200'
                          }`}
                        >
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>

                  <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline">
                    {activeTab.language}
                  </span>
                </div>

                {/* Code Editor Pane */}
                <div className="p-5 font-mono text-xs sm:text-[12.5px] leading-relaxed overflow-x-auto text-zinc-200 bg-[#111116]">
                  <pre className="whitespace-pre-wrap break-words">
                    <code>{activeTab.code}</code>
                  </pre>
                </div>
              </div>

              {/* Interactive Terminal Output & Tech Stack Strip */}
              <div className="border-t border-zinc-800/80 bg-[#0B0B0E] p-4 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="inline-flex items-center gap-1.5 text-cyan-400">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>workbench-shell</span>
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setTerminalCommandIndex((prev) => (prev + 1) % terminalCommands.length)
                    }
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-800/90 hover:bg-zinc-700 text-zinc-200 transition-colors cursor-pointer"
                  >
                    <Play className="w-3 h-3 text-violet-400" />
                    <span>Run Next Check</span>
                  </button>
                </div>

                <div className="rounded-lg bg-[#141419] border border-zinc-800/80 p-3 font-mono text-xs space-y-1.5">
                  <div className="text-zinc-300 truncate">
                    <span className="text-violet-400">suchand@bmsce</span>
                    <span className="text-zinc-500">:~$ </span>
                    {terminalCommands[terminalCommandIndex].cmd}
                  </div>
                  <div className="text-emerald-400/95 flex items-start gap-1.5 text-[11.5px]">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>{terminalCommands[terminalCommandIndex].res}</span>
                  </div>
                </div>

                {/* Technology Architecture Strip */}
                <div className="pt-1 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-zinc-400">
                  <span>React · Python · C++ · FastAPI · AI/RAG</span>
                  <span className="text-violet-300">{activeTab.output.split('·')[0]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Key Proof Strip Below the Hero Split */}
        <div className="mt-14 pt-8 border-t border-zinc-900 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums text-white">
              8.25 <span className="text-base font-normal text-zinc-500">/ 10</span>
            </div>
            <div className="text-xs text-zinc-400">
              B.E. Information Science & Engineering · B.M.S. College of Engineering
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums text-white">
              400+
            </div>
            <div className="text-xs text-zinc-400">
              Algorithmic Problems Solved across LeetCode & GeeksforGeeks
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums text-white">
              4th Place
            </div>
            <div className="text-xs text-zinc-400">
              Collegiately in IEEEXtreme 18.0 Global Programming Competition
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums text-white">
              6 Systems
            </div>
            <div className="text-xs text-zinc-400">
              Production Full-Stack, Local-First RAG, 3D WebGL, Database & ML Projects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
