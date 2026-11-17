import React, { useState } from 'react';
import {
  Terminal,
  Layout,
  Server,
  Database,
  BrainCircuit,
  Wrench,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { filterSkillCategories } from '../utils/portfolioLogic';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const visibleCategories = filterSkillCategories(SKILL_CATEGORIES, selectedCategory);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'languages':
        return <Terminal className="w-5 h-5 text-violet-400" />;
      case 'frontend':
        return <Layout className="w-5 h-5 text-blue-400" />;
      case 'backend':
        return <Server className="w-5 h-5 text-cyan-400" />;
      case 'databases':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'ai-ml':
        return <BrainCircuit className="w-5 h-5 text-violet-300" />;
      default:
        return <Wrench className="w-5 h-5 text-amber-400" />;
    }
  };

  const getSkillMonogram = (name: string) => {
    const map: Record<string, string> = {
      'C++': 'C++',
      C: 'C',
      Python: 'PY',
      Java: 'JV',
      JavaScript: 'JS',
      SQL: 'SQL',
      'React.js': 'TSX',
      HTML: 'HTML',
      CSS: 'CSS',
      'Tailwind CSS': 'TW',
      Vite: 'VT',
      'Node.js': 'NODE',
      'Express.js': 'EXP',
      FastAPI: 'API',
      'REST APIs': 'REST',
      MySQL: 'MY',
      MongoDB: 'MGO',
      Supabase: 'SB',
      SQLite: 'LITE',
      'Large Language Models (LLMs)': 'LLM',
      'AI Agents': 'AGT',
      Embeddings: 'VEC',
      Pandas: 'PD',
      NumPy: 'NP',
      Git: 'GIT',
      GitHub: 'GH',
      Postman: 'PM',
      Mongoose: 'ODM',
    };
    return map[name] || name.slice(0, 3).toUpperCase();
  };

  return (
    <section id="skills" className="py-24 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header & Interactive Category Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-mono tracking-wider text-violet-400">
              03. TECHNICAL ARSENAL
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Technologies I Work With
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Organized across systems languages, modern web frameworks, backend APIs, relational
              and document stores, and applied AI stacks.
            </p>
          </div>

          {/* Interactive Segmented Category Selector */}
          <div
            role="tablist"
            aria-label="Filter skill categories"
            className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#141419] border border-zinc-800/90"
          >
            <button
              role="tab"
              type="button"
              aria-selected={selectedCategory === 'all'}
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              All Domains ({SKILL_CATEGORIES.length})
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                type="button"
                aria-selected={selectedCategory === cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-violet-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCategories.map((category) => (
            <article
              key={category.id}
              className="rounded-2xl bg-[#141419] border border-zinc-800/80 hover:border-zinc-700 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200"
            >
              <div className="space-y-5">
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-zinc-800/80">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white">{category.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">{category.description}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 shrink-0">
                    {getCategoryIcon(category.id)}
                  </div>
                </div>

                {/* Technology Items */}
                <div className="grid grid-cols-1 gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center justify-between gap-3 p-2.5 rounded-xl bg-[#0D0D11] border border-zinc-800/60 hover:border-violet-500/40 transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="w-9 h-7 rounded-md bg-zinc-900 border border-zinc-800 group-hover:border-violet-500/40 flex items-center justify-center text-[10px] font-mono font-semibold text-violet-300 shrink-0">
                          {getSkillMonogram(skill.name)}
                        </span>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-zinc-100">
                            {skill.name}
                          </div>
                          <div className="text-[11px] text-zinc-400 leading-snug">{skill.context}</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-zinc-500 group-hover:text-cyan-300 shrink-0">
                        {skill.codeTag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
