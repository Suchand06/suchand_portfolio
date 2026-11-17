import React from 'react';
import {
  Trophy,
  Award,
  Code2,
  Compass,
  Palette,
  Languages,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import {
  ACHIEVEMENTS,
  CERTIFICATIONS,
  BEYOND_THE_CODE,
  BEYOND_TECHNOLOGY,
} from '../data/portfolioData';

export const CredentialsAndBeyond: React.FC = () => {
  return (
    <>
      {/* SECTION 9 & 10: ACHIEVEMENTS & CERTIFICATIONS */}
      <section id="achievements" className="py-24 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {/* Achievements & Milestones */}
          <div className="space-y-10">
            <div className="max-w-2xl space-y-3">
              <div className="text-xs font-mono tracking-wider text-violet-400">
                05. COMPETITIVE & ALGORITHMIC TRACK RECORD
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Achievements & Milestones
              </h2>
              <p className="text-sm sm:text-base text-zinc-400">
                Demonstrated consistency in algorithmic problem-solving and international collegiate
                programming competitions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ACHIEVEMENTS.map((ach, idx) => (
                <article
                  key={ach.id}
                  className="rounded-2xl bg-[#141419] border border-zinc-800/90 hover:border-zinc-700 p-7 sm:p-8 flex flex-col justify-between transition-all duration-200"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-zinc-400">{ach.contextTag}</span>
                      <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                        {idx === 0 ? (
                          <Code2 className="w-5 h-5 text-violet-400" />
                        ) : (
                          <Trophy className="w-5 h-5 text-cyan-400" />
                        )}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-4xl sm:text-5xl font-extrabold font-mono tabular-nums bg-gradient-to-r from-white via-violet-200 to-cyan-300 bg-clip-text text-transparent">
                        {ach.metric}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white pt-1">
                        {ach.title}
                      </h3>
                      <div className="text-xs font-mono text-violet-300">{ach.subtitle}</div>
                    </div>

                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Certifications & Learning */}
          <div className="space-y-10">
            <div className="max-w-2xl space-y-3">
              <div className="text-xs font-mono tracking-wider text-cyan-400">
                06. CONTINUOUS LEARNING
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Certifications & Learning
              </h2>
              <p className="text-sm sm:text-base text-zinc-400">
                Structured technical coursework reinforcing full-stack web engineering and advanced
                Data Structures & Algorithms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CERTIFICATIONS.map((cert) => (
                <article
                  key={cert.id}
                  className="rounded-2xl bg-[#141419] border border-zinc-800/90 hover:border-zinc-700 p-7 flex flex-col justify-between transition-colors"
                >
                  <div className="space-y-5">
                    <div className="flex items-start justify-between gap-4 pb-4 border-b border-zinc-800/80">
                      <div className="space-y-1">
                        <div className="text-xs font-mono text-cyan-300">
                          Platform: {cert.platform} · Instructor: {cert.instructor}
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">{cert.title}</h3>
                      </div>
                      <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 shrink-0">
                        <Award className="w-5 h-5 text-violet-400" />
                      </div>
                    </div>

                    <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                      {cert.focusAreas.map((area, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 & 12: BEYOND THE CODE & BEYOND TECHNOLOGY */}
      <section className="py-24 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {/* Section 11: Beyond the Code */}
          <div className="space-y-10">
            <div className="max-w-2xl space-y-3">
              <div className="text-xs font-mono tracking-wider text-violet-400">
                07. PERSONAL DIMENSIONS
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Beyond the Code
              </h2>
              <p className="text-sm sm:text-base text-zinc-400">
                Technical curiosities, visual arts, and multilingual communication.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Interests Card */}
              <div className="rounded-2xl bg-[#141419] border border-zinc-800/90 p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                  <h3 className="text-lg font-bold text-white">Interests</h3>
                  <Compass className="w-5 h-5 text-violet-400" />
                </div>
                <div className="space-y-3.5">
                  {BEYOND_THE_CODE.interests.map((item) => (
                    <div key={item.name} className="space-y-0.5">
                      <div className="text-sm font-semibold text-zinc-100">{item.name}</div>
                      <div className="text-xs text-zinc-400">{item.detail}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hobbies Card */}
              <div className="rounded-2xl bg-[#141419] border border-zinc-800/90 p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                  <h3 className="text-lg font-bold text-white">Creative Hobbies</h3>
                  <Palette className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="space-y-3.5">
                  {BEYOND_THE_CODE.hobbies.map((item) => (
                    <div key={item.name} className="space-y-0.5">
                      <div className="text-sm font-semibold text-zinc-100">{item.name}</div>
                      <div className="text-xs text-zinc-400">{item.detail}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages Card */}
              <div className="rounded-2xl bg-[#141419] border border-zinc-800/90 p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                  <h3 className="text-lg font-bold text-white">Languages Spoken</h3>
                  <Languages className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="space-y-3">
                  {BEYOND_THE_CODE.languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#0D0D11] border border-zinc-800/70"
                    >
                      <span className="text-sm font-semibold text-zinc-100">{lang.name}</span>
                      <span className="text-xs font-mono text-zinc-400">{lang.proficiency}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 12: Beyond Technology (Danz Addix) */}
          <div className="space-y-8">
            <div className="max-w-2xl space-y-2">
              <div className="text-xs font-mono tracking-wider text-cyan-400">
                08. EXTRACURRICULAR LEADERSHIP & STAGE PERFORMANCE
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Beyond Technology
              </h2>
            </div>

            <div className="rounded-2xl bg-[#141419] border border-zinc-800/90 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
              {/* Visual Stage Column */}
              <div className="lg:col-span-5 relative min-h-[260px] bg-[#0B0B0F] overflow-hidden">
                <img
                  src={BEYOND_TECHNOLOGY.imageUrl}
                  alt="Danz Addix collegiate performance crew on stage"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover object-center opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141419] via-[#09090B]/35 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-violet-300">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{BEYOND_TECHNOLOGY.organization}</span>
                  </div>
                  <div className="text-lg font-bold text-white">{BEYOND_TECHNOLOGY.role}</div>
                </div>
              </div>

              {/* Experience Highlights Column */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="text-xs font-mono text-zinc-400">
                    {BEYOND_TECHNOLOGY.organization} · {BEYOND_TECHNOLOGY.role}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Teamwork, Stage Presence & Cultural Representation
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {BEYOND_TECHNOLOGY.summary}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {BEYOND_TECHNOLOGY.milestones.map((ms) => (
                    <div
                      key={ms.id}
                      className="p-4 rounded-xl bg-[#0D0D11] border border-zinc-800/80 space-y-1.5"
                    >
                      <div className="text-[11px] font-mono text-cyan-300">{ms.highlight}</div>
                      <div className="text-sm font-bold text-white">{ms.title}</div>
                      <p className="text-xs text-zinc-400 leading-relaxed">{ms.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
