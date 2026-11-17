import React from 'react';
import { GraduationCap, Cpu, Code2, Sparkles, BookOpen } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_PILLARS, EDUCATION_TIMELINE } from '../data/portfolioData';

export const AboutAndEducation: React.FC = () => {
  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'problem-solving':
        return <Code2 className="w-5 h-5 text-violet-400" />;
      case 'software-engineering':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <>
      {/* SECTION 4: SUMMARY / ABOUT ME */}
      <section id="about" className="py-24 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono tracking-wider text-violet-400">
                01. PROFILE & ENGINEERING PHILOSOPHY
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
                A Little About Me
              </h2>
              <p className="text-sm font-mono text-zinc-400">
                Information Science & Engineering · B.M.S. College of Engineering
              </p>
            </div>

            <div className="lg:col-span-7 space-y-5">
              {/* Exact Resume Quote */}
              <blockquote className="p-6 rounded-2xl bg-[#141419] border border-zinc-800/90 text-base sm:text-lg text-zinc-100 leading-relaxed font-medium">
                &ldquo;{PERSONAL_INFO.resumeSummary}&rdquo;
              </blockquote>

              {/* Personal Human Introduction */}
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                {PERSONAL_INFO.personalNarrative}
              </p>
            </div>
          </div>

          {/* Three Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ABOUT_PILLARS.map((pillar) => (
              <article
                key={pillar.id}
                className="rounded-2xl bg-[#141419] border border-zinc-800/80 hover:border-zinc-700 p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-500">{pillar.index}.</span>
                    <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                      {getPillarIcon(pillar.id)}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                    <p className="text-xs font-mono text-zinc-400">{pillar.subtitle}</p>
                  </div>

                  <ul className="space-y-2.5 text-sm text-zinc-300 leading-relaxed">
                    {pillar.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-violet-400 font-mono text-xs mt-1">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80 text-xs font-mono text-cyan-300/90">
                  {pillar.metricLabel}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: EDUCATION TIMELINE */}
      <section id="education" className="py-24 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 space-y-14">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono tracking-wider text-violet-400">
              02. ACADEMIC FOUNDATION
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Education & Coursework
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              A consistent academic track record across engineering and foundational sciences in
              Karnataka.
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative pl-6 sm:pl-10 border-l border-zinc-800 space-y-10">
            {EDUCATION_TIMELINE.map((item, index) => (
              <div key={item.id} className="relative group">
                {/* Timeline Node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                    index === 0
                      ? 'bg-violet-500 border-violet-300 shadow-[0_0_12px_rgba(139,92,246,0.7)]'
                      : 'bg-[#141419] border-zinc-600 group-hover:border-cyan-400'
                  } transition-colors`}
                  aria-hidden="true"
                />

                <div className="rounded-2xl bg-[#141419] border border-zinc-800/80 hover:border-zinc-700 p-6 sm:p-8 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-zinc-800/80">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
                        <GraduationCap className="w-4 h-4 text-violet-400" />
                        <span>{item.location}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-cyan-300">Class of {item.year}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {item.institution}
                      </h3>
                      <p className="text-sm sm:text-base text-zinc-300 font-medium">
                        {item.degree}
                      </p>
                    </div>

                    {/* Highlighted Academic Score */}
                    <div className="shrink-0 flex flex-col sm:items-end">
                      <div className="text-xs font-mono text-zinc-400">{item.primaryScoreLabel}</div>
                      <div className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
                        {item.primaryScoreValue}
                      </div>
                      {item.secondaryScore && (
                        <div className="text-xs font-mono text-emerald-400 mt-0.5">
                          {item.secondaryScore}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-5 space-y-4">
                    <ul className="space-y-2 text-sm text-zinc-300">
                      {item.highlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-zinc-500 font-mono">·</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>

                    {item.coursework && item.coursework.length > 0 && (
                      <div className="pt-2">
                        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
                          <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Relevant Coursework:</span>
                        </div>
                        <p className="text-xs sm:text-sm font-mono text-zinc-200 leading-relaxed">
                          {item.coursework.join('  ·  ')}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
