import React from 'react';
import {
  FileCode2,
  CheckCircle2,
  Database,
  GitBranch,
  BarChart3,
  Navigation,
  Sparkles,
  Gamepad2,
} from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectMockupProps {
  project: ProjectItem;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ project }) => {
  switch (project.id) {
    case 'repolens':
      return (
        <div className="w-full h-56 sm:h-64 bg-[#0B0B0F] border-b border-zinc-800/80 p-4 flex flex-col justify-between font-mono text-xs overflow-hidden relative">
          <div className="flex items-center justify-between text-[11px] text-zinc-400 pb-2.5 border-b border-zinc-800/80">
            <span className="inline-flex items-center gap-1.5 text-violet-300 font-semibold">
              <GitBranch className="w-3.5 h-3.5" />
              RepoLens · Tree-sitter AST + LanceDB Hybrid RAG
            </span>
            <span className="text-emerald-400">Grounding Score: 0.96</span>
          </div>

          <div className="grid grid-cols-12 gap-3 my-auto py-2">
            {/* Repo Explorer Column */}
            <div className="col-span-4 bg-[#121218] border border-zinc-800/80 rounded-lg p-2.5 space-y-1.5 text-[11px] text-zinc-400">
              <div className="text-zinc-200 font-semibold">src/retriever/</div>
              <div className="pl-2 text-violet-300">├─ hybrid_bm25.py</div>
              <div className="pl-2 text-cyan-300">├─ ast_chunker.py</div>
              <div className="pl-2 text-zinc-400">└─ drift_check.py</div>
              <div className="pt-1 text-[10px] text-zinc-500">LanceDB · 1,420 AST nodes</div>
            </div>

            {/* Grounded Answer + Citation Span */}
            <div className="col-span-8 bg-[#121218] border border-zinc-800/80 rounded-lg p-3 space-y-2">
              <div className="text-[11px] text-zinc-200 leading-snug font-sans">
                Retrieval merges dense vector embeddings with lexical BM25 and expands caller/callee
                graphs before verifying spans on disk.
              </div>
              <div className="p-2 rounded bg-violet-950/30 border border-violet-500/30 text-[10.5px] text-violet-200 flex items-center justify-between">
                <span>Citation: src/retriever/hybrid_bm25.py:42-68</span>
                <span className="text-emerald-400 inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Verified on disk
                </span>
              </div>
              <div className="text-[10px] text-amber-300/90">
                Doc-Drift Check: 0 contradictions detected in README.md
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-1">
            <span>Tree-sitter · Hybrid Dense + BM25</span>
            <span>CitationCard.tsx · DriftFinding.tsx</span>
          </div>
        </div>
      );

    case 'resumeiq':
      return (
        <div className="w-full h-56 sm:h-64 bg-[#0B0B0F] border-b border-zinc-800/80 p-4 flex flex-col justify-between font-mono text-xs overflow-hidden">
          <div className="flex items-center justify-between text-[11px] text-zinc-400 pb-2 border-b border-zinc-800/80">
            <span className="inline-flex items-center gap-1.5 text-cyan-300 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              ResumeIQ · ATS & Semantic JD Analyzer
            </span>
            <span className="text-emerald-400">Groq LLM + LaTeX Export</span>
          </div>

          <div className="grid grid-cols-12 gap-3 my-auto py-2">
            {/* ATS Score Box */}
            <div className="col-span-5 bg-[#121218] border border-zinc-800/80 rounded-lg p-3 flex flex-col justify-between">
              <div className="text-[10px] text-zinc-400">ATS Compatibility</div>
              <div className="text-2xl font-extrabold text-white tabular-nums">
                88<span className="text-xs text-zinc-500">/100</span>
              </div>
              <div className="text-[10px] text-emerald-400">60%+ Keyword Match Boost</div>
            </div>

            {/* Keyword & Similarity Metrics */}
            <div className="col-span-7 bg-[#121218] border border-zinc-800/80 rounded-lg p-3 space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-zinc-400">TF-IDF Similarity</span>
                <span className="text-cyan-300 font-semibold">0.84</span>
              </div>
              <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <div className="w-4/5 h-full bg-gradient-to-r from-violet-500 to-cyan-400" />
              </div>
              <div className="text-[10px] text-zinc-300 pt-1">
                Matched: <span className="text-emerald-400">FastAPI · React · System Design</span>
              </div>
              <div className="text-[10px] text-amber-300">
                Gap Identified: <span className="text-zinc-300">Add quantified latency metrics</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500">
            <span>ats_engine.py · latex_service.py</span>
            <span>Supabase · FastAPI · React</span>
          </div>
        </div>
      );

    case 'datascope':
      return (
        <div className="w-full h-56 sm:h-64 bg-[#0B0B0F] border-b border-zinc-800/80 p-4 flex flex-col justify-between font-mono text-xs overflow-hidden">
          <div className="flex items-center justify-between text-[11px] text-zinc-400 pb-2 border-b border-zinc-800/80">
            <span className="inline-flex items-center gap-1.5 text-blue-300 font-semibold">
              <Database className="w-3.5 h-3.5" />
              DataScope · SQLite Workspace + Gemini NL→SQL
            </span>
            <span className="text-violet-300">Monaco · Mermaid ER</span>
          </div>

          <div className="grid grid-cols-12 gap-3 my-auto py-2">
            {/* Schema Explorer */}
            <div className="col-span-4 bg-[#121218] border border-zinc-800/80 rounded-lg p-2.5 space-y-1 text-[10.5px]">
              <div className="text-zinc-200 font-semibold">tables (3)</div>
              <div className="text-cyan-300">▸ users (id PK, spend)</div>
              <div className="text-zinc-400">▸ orders (id PK, user_id)</div>
              <div className="text-zinc-400">▸ events (ts, payload)</div>
            </div>

            {/* Monaco SQL + Query Plan */}
            <div className="col-span-8 bg-[#121218] border border-zinc-800/80 rounded-lg p-2.5 space-y-1.5 text-[10.5px]">
              <div className="text-zinc-400">
                <span className="text-violet-400">SELECT</span> u.name,{' '}
                <span className="text-cyan-300">SUM</span>(o.total) <span className="text-violet-400">FROM</span>{' '}
                users u <span className="text-violet-400">JOIN</span> orders o...
              </div>
              <div className="p-1.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-emerald-400">
                EXPLAIN QUERY PLAN: SEARCH o USING INDEX idx_user_id (0.4ms)
              </div>
              <div className="text-[10px] text-zinc-400">
                Profile: 0% missing values · Mermaid ER & Recharts active
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500">
            <span>SQLite3 · Pandas · NumPy</span>
            <span>QueryPlanView.tsx · SchemaDiagram.tsx</span>
          </div>
        </div>
      );

    case 'spacehack':
      return (
        <div className="w-full h-56 sm:h-64 bg-[#0B0B0F] border-b border-zinc-800/80 relative overflow-hidden group">
          {project.previewImage && (
            <img
              src={project.previewImage}
              alt="spaceHack — SPACE STRIKE 2D arcade game preview"
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover object-center opacity-85 group-hover:scale-[1.02] transition-transform duration-300"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141419] via-[#09090B]/40 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-zinc-200">
            <span className="inline-flex items-center gap-1.5 text-cyan-300 font-semibold">
              <Gamepad2 className="w-3.5 h-3.5" />
              HTML5 Canvas · Web Audio API Synthesizer
            </span>
            <span className="text-zinc-300">LocalStorage High Scores</span>
          </div>
        </div>
      );

    case 'traffic-flow':
    default:
      return (
        <div className="w-full h-56 sm:h-64 bg-[#0B0B0F] border-b border-zinc-800/80 p-4 flex flex-col justify-between font-mono text-xs overflow-hidden">
          <div className="flex items-center justify-between text-[11px] text-zinc-400 pb-2 border-b border-zinc-800/80">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
              <BarChart3 className="w-3.5 h-3.5" />
              Bengaluru Traffic Flow Benchmark (8,936 Records · 14 Features)
            </span>
            <span className="text-cyan-300 inline-flex items-center gap-1">
              <Navigation className="w-3 h-3" /> Folium + OSRM Routing
            </span>
          </div>

          <div className="grid grid-cols-12 gap-3 my-auto py-2">
            {/* Model Comparison Bars */}
            <div className="col-span-7 bg-[#121218] border border-zinc-800/80 rounded-lg p-3 space-y-2 text-[10.5px]">
              <div className="space-y-1">
                <div className="flex justify-between text-zinc-200">
                  <span>1D CNN (Conv1D 32→64)</span>
                  <span className="text-emerald-400 font-semibold">R² = 0.9957 · MAE 640.2</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full">
                  <div className="w-[99%] h-full bg-emerald-400 rounded-full" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-zinc-300">
                  <span>Tuned LSTM (50 epochs)</span>
                  <span className="text-cyan-300 font-semibold">R² = 0.9400 · MAE 2,505.1</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full">
                  <div className="w-[94%] h-full bg-cyan-400 rounded-full" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-zinc-400">
                  <span>HA + LSTM Ensemble</span>
                  <span className="text-violet-300">R² = 0.8272 · MAE 4,213.2</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full">
                  <div className="w-[83%] h-full bg-violet-400 rounded-full" />
                </div>
              </div>
            </div>

            {/* Geospatial Corridor Status */}
            <div className="col-span-5 bg-[#121218] border border-zinc-800/80 rounded-lg p-3 flex flex-col justify-between text-[10.5px]">
              <div className="text-zinc-400">Corridor: Whitefield, Bengaluru</div>
              <div className="space-y-1">
                <div className="text-zinc-200 font-semibold">Score: 27,986.67</div>
                <div className="text-[10px] text-zinc-500">Threshold: 30,000 vol</div>
              </div>
              <div className="text-emerald-400 font-semibold">Route Decision: Normal Corridor</div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500">
            <span>StandardScaler · LabelEncoder · 80/20 Split</span>
            <span>SVR (R² 0.028) · HA (R² 0.344)</span>
          </div>
        </div>
      );
  }
};
