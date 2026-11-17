export type ProjectCategory = 'All' | 'Full Stack' | 'AI/ML' | 'Backend' | 'Other';

export interface ProjectMetric {
  label: string;
  value: string;
  detail: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, 'All'>;
  secondaryCategories: Exclude<ProjectCategory, 'All'>[];
  featuredSpan: 'wide' | 'standard';
  ownershipNote: string;
  shortDescription: string;
  problemSolved: string;
  architectureSummary: string;
  features: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  previewImage?: string;
  metrics?: ProjectMetric[];
  workflowSteps: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    context: string;
    codeTag: string;
  }[];
}

export interface EducationItem {
  id: string;
  institution: string;
  location: string;
  year: string;
  degree: string;
  primaryScoreLabel: string;
  primaryScoreValue: string;
  secondaryScore?: string;
  coursework?: string[];
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  instructor: string;
  platform: string;
  focusAreas: string[];
}

export interface AchievementItem {
  id: string;
  metric: string;
  title: string;
  subtitle: string;
  description: string;
  contextTag: string;
}

export const PERSONAL_INFO = {
  brand: 'SCA.',
  fullName: 'Suchand C Achar',
  introKicker: "HELLO, I'M SUCHAND C ACHAR",
  heroHeading: 'Building Intelligent Solutions Through Code.',
  heroDescription:
    "I'm an Information Science and Engineering student passionate about software engineering, AI-driven applications, full-stack development, and solving complex problems through technology.",
  rotatingTitles: [
    'Software Engineer',
    'Full-Stack Developer',
    'AI/ML Enthusiast',
    'Competitive Programmer',
  ],
  resumeSummary:
    'Dynamic Information Science & Engineering student focused on Data Structures and Algorithms. Proficient in C++, C, and scalable full-stack development. Passionate about leveraging computational logic and modern frameworks to engineer high-performance solutions.',
  personalNarrative:
    'Rooted in Thirthahalli and currently pursuing my engineering degree in Bengaluru at B.M.S. College of Engineering, I approach software development as a craft of clarity and precision. Whether I am optimizing an algorithmic solution in C++, architecting a local-first RAG pipeline in FastAPI, or designing an interactive browser workspace in React, I focus on building software that is verifiable, responsive, and genuinely useful.',
  email: 'suchandacharya6@gmail.com',
  location: 'Bengaluru, Karnataka, India',
  links: {
    github: 'https://github.com/Suchand06',
    linkedin: 'https://linkedin.com/in/suchand-c-achar',
    leetcode: 'https://leetcode.com/u/uZggT8ZDkd',
    email: 'mailto:suchandacharya6@gmail.com',
  },
  footerTagline: 'Building, Learning, and Solving.',
};

export const HERO_WORKBENCH_TABS = [
  {
    id: 'profile.ts',
    label: 'profile.ts',
    language: 'TypeScript',
    code: `export const engineer = {
  name: "Suchand C Achar",
  degree: "B.E. Information Science & Engineering",
  institute: "B.M.S. College of Engineering (2027)",
  cgpa: 8.25,
  coreFocus: [
    "Data Structures & Algorithms (400+ solved)",
    "Full-Stack Systems (React, FastAPI, Node.js)",
    "Applied AI & Local-First RAG Pipelines"
  ],
  location: "Bengaluru, IN"
} as const;`,
    output: '✓ Type check passed · 0 errors · Ready for production deployment',
  },
  {
    id: 'rag_engine.py',
    label: 'rag_engine.py',
    language: 'Python',
    code: `async def query_repository(question: str, repo_index: LanceDBIndex):
    # Hybrid Dense + BM25 retrieval over Tree-sitter AST chunks
    candidates = await repo_index.hybrid_search(question, top_k=12)
    reranked = expand_call_graph(candidates)
    
    response = await synthesize_grounded_answer(question, reranked)
    # Verify every file:line-range citation against disk source
    verified = verify_source_spans(response.citations)
    return GroundedAnswer(text=response.text, score=verified.grounding_score)`,
    output: '✓ Citations verified against disk · Grounding score: 0.96 (file:line spans)',
  },
  {
    id: 'traffic_cnn.py',
    label: 'traffic_cnn.py',
    language: 'Python',
    code: `# Bengaluru Traffic Flow Prediction — 1D CNN Architecture
cnn_model = Sequential([
    Conv1D(filters=32, kernel_size=3, activation="relu", input_shape=(14, 1)),
    MaxPooling1D(pool_size=2),
    Conv1D(filters=64, kernel_size=3, activation="relu"),
    MaxPooling1D(pool_size=2),
    Flatten(),
    Dense(64, activation="relu"),
    Dense(32, activation="relu"),
    Dense(1)  # Traffic Volume regression target
])`,
    output: '✓ Test Set (1,788 samples): R² = 0.9957 · RMSE = 853.09 · MAE = 640.21',
  },
];

export const ABOUT_PILLARS = [
  {
    id: 'problem-solving',
    index: '01',
    title: 'Problem Solving',
    subtitle: 'Algorithmic Rigor & Computational Logic',
    highlights: [
      '400+ problems solved across LeetCode and GeeksforGeeks.',
      'Strong interest in Data Structures and Algorithms.',
      '4th place collegiately in the IEEEXtreme 18.0 Global Programming Competition.',
    ],
    metricLabel: '400+ Solved · IEEEXtreme 18.0',
  },
  {
    id: 'software-engineering',
    index: '02',
    title: 'Software Engineering',
    subtitle: 'End-to-End Application Architecture',
    highlights: [
      'Full-stack application development with React.js, TypeScript, and Vite.',
      'Backend development and REST API integration using FastAPI, Node.js, and Express.js.',
      'Database design and management across MySQL, MongoDB, Supabase, and SQLite.',
    ],
    metricLabel: 'React · FastAPI · Node.js · SQL',
  },
  {
    id: 'ai-systems',
    index: '03',
    title: 'AI & Intelligent Systems',
    subtitle: 'Evidence-Grounded LLM & ML Workflows',
    highlights: [
      'LLM-based applications powered by Gemini API, Groq, and local inference.',
      'Retrieval-Augmented Generation (RAG) with Tree-sitter AST parsing and hybrid search.',
      'AI-assisted automation, natural-language-to-SQL generation, and predictive modeling.',
    ],
    metricLabel: 'RAG · LLMs · Embeddings · Deep Learning',
  },
];

export const EDUCATION_TIMELINE: EducationItem[] = [
  {
    id: 'bmsce',
    institution: 'B.M.S College of Engineering',
    location: 'Bengaluru, Karnataka',
    year: '2027',
    degree: 'Bachelor of Engineering in Information Science and Engineering',
    primaryScoreLabel: 'CGPA',
    primaryScoreValue: '8.25 / 10',
    coursework: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Computer Networks',
    ],
    highlights: [
      'Focusing on algorithmic problem solving, scalable backend engineering, and applied AI architectures.',
      'Active participant in collegiate competitive programming and cultural representation.',
    ],
  },
  {
    id: 'gpu-thirthahalli',
    institution: 'Government Pre-University College',
    location: 'Thirthahalli, Karnataka',
    year: '2022',
    degree: 'Pre-University Education (12th Grade)',
    primaryScoreLabel: 'Overall Percentage',
    primaryScoreValue: '91.66%',
    secondaryScore: 'PCMCS: 96%',
    highlights: [
      'Completed Pre-University curriculum in Physics, Chemistry, Mathematics, and Computer Science (PCMCS).',
      'Achieved 96% across core science and computer science subjects.',
    ],
  },
  {
    id: 'gjc-thirthahalli',
    institution: 'Government Junior College',
    location: 'Thirthahalli, Karnataka',
    year: '2020',
    degree: 'Secondary School Leaving Certificate (10th Grade)',
    primaryScoreLabel: 'Percentage',
    primaryScoreValue: '88.96%',
    highlights: [
      'Built a strong academic foundation in mathematics, analytical reasoning, and foundational sciences.',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    description: 'Core languages for algorithmic problem solving, systems programming, and application logic.',
    skills: [
      { name: 'C++', context: 'Competitive programming & DSA', codeTag: 'std::vector' },
      { name: 'C', context: 'Systems & memory fundamentals', codeTag: 'POSIX / ptr' },
      { name: 'Python', context: 'FastAPI backends, RAG & ML pipelines', codeTag: '3.11+ async' },
      { name: 'Java', context: 'Object-oriented programming', codeTag: 'JVM / OOP' },
      { name: 'JavaScript', context: 'Interactive web applications & ES2022+', codeTag: 'ESNext' },
      { name: 'SQL', context: 'Relational queries & query plan optimization', codeTag: 'DDL / DQL' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Component-driven interfaces, responsive layouts, and interactive browser workspaces.',
    skills: [
      { name: 'React.js', context: 'SPA architecture, custom hooks & state', codeTag: 'JSX / Hooks' },
      { name: 'HTML', context: 'Semantic, accessible document structure', codeTag: 'HTML5 / Canvas' },
      { name: 'CSS', context: 'Responsive layouts & fluid typography', codeTag: 'Grid / Flex' },
      { name: 'Tailwind CSS', context: 'Design-token styling & dark UI systems', codeTag: 'Utility-first' },
      { name: 'Vite', context: 'Fast ES module bundling & dev tooling', codeTag: 'HMR / Build' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'High-throughput API layers, asynchronous services, and structured data pipelines.',
    skills: [
      { name: 'Node.js', context: 'Event-driven server runtime', codeTag: 'V8 Runtime' },
      { name: 'Express.js', context: 'RESTful routing & middleware pipelines', codeTag: 'HTTP / REST' },
      { name: 'FastAPI', context: 'Typed Python APIs for AI & data apps', codeTag: 'Pydantic / ASGI' },
      { name: 'REST APIs', context: 'Schema validation, auth & rate limiting', codeTag: 'JSON / OpenAPI' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    description: 'Relational, document, and embedded persistence engines.',
    skills: [
      { name: 'MySQL', context: 'Relational schema design & indexing', codeTag: 'InnoDB / ACID' },
      { name: 'MongoDB', context: 'Document collections & aggregation pipelines', codeTag: 'BSON / NoSQL' },
      { name: 'Supabase', context: 'Postgres backend, auth & cloud storage', codeTag: 'BaaS / Auth' },
      { name: 'SQLite', context: 'Embedded relational analysis & introspection', codeTag: 'EXPLAIN PLAN' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI / ML & Emerging Technologies',
    description: 'Applied language models, retrieval engines, vector embeddings, and data analysis.',
    skills: [
      { name: 'Large Language Models (LLMs)', context: 'Prompt engineering, Gemini & Groq APIs', codeTag: 'Inference' },
      { name: 'AI Agents', context: 'Grounded reasoning & multi-step workflows', codeTag: 'Tool-use' },
      { name: 'Embeddings', context: 'Semantic vector search & TF-IDF similarity', codeTag: 'Dense + BM25' },
      { name: 'Pandas', context: 'DataFrame profiling, cleaning & aggregation', codeTag: 'DataFrames' },
      { name: 'NumPy', context: 'Vectorized numerical & matrix operations', codeTag: 'ndarrays' },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    description: 'Version control, API verification, and ODM data modeling.',
    skills: [
      { name: 'Git', context: 'Branching workflows & version history', codeTag: 'VCS' },
      { name: 'GitHub', context: 'Collaborative repositories & code review', codeTag: 'CI / Repos' },
      { name: 'Postman', context: 'Endpoint testing & request collections', codeTag: 'API Testing' },
      { name: 'Mongoose', context: 'Schema validation & ODM for MongoDB', codeTag: 'Schemas' },
    ],
  },
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'repolens',
    title: 'RepoLens — Local-First RAG Engine',
    subtitle: 'Evidence-grounded code repository intelligence with verifiable citations',
    category: 'AI/ML',
    secondaryCategories: ['Full Stack', 'Backend'],
    featuredSpan: 'wide',
    ownershipNote: 'Collaborative Open-Source Repository (Forked / Team Engineering Project)',
    shortDescription:
      'A local-first Retrieval-Augmented Generation engine that helps developers understand code repositories through evidence-grounded answers.',
    problemSolved:
      'Standard LLM code assistants frequently hallucinate function signatures or outdated documentation. RepoLens parses actual repository AST units via Tree-sitter, retrieves context using hybrid dense + BM25 search, and verifies every file:line-range citation against the checked-out files on disk.',
    architectureSummary:
      'Built with a Python 3.11+ and FastAPI backend paired with a React + Vite frontend (ChatMessage, CitationCard, DriftFinding, GroundingBadge). Code is parsed with Tree-sitter into semantic units, indexed in LanceDB, and retrieved via hybrid dense embeddings + BM25 search with caller/callee graph expansion.',
    features: [
      'Repository-aware question answering grounded strictly in checked-out source code',
      'Verifiable file and line-range citations (file:line-range) re-checked against disk',
      'Per-answer grounding score quantifying evidence support',
      'Tree-sitter-based structural code parsing into semantic AST units',
      'Hybrid dense and BM25 retrieval with reranking and caller/callee graph expansion',
      'Documentation drift detection flagging doc claims contradicted by current code',
      'Validation of citations against source files with interactive React inspection UI',
    ],
    techStack: ['Python', 'FastAPI', 'React', 'LanceDB', 'LLMs', 'Tree-sitter', 'RAG'],
    githubUrl: 'https://github.com/Suchand06/RepoLens',
    metrics: [
      { label: 'Retrieval Engine', value: 'Dense + BM25', detail: 'Hybrid search with call-graph expansion' },
      { label: 'AST Parser', value: 'Tree-sitter', detail: 'Semantic function & class chunking' },
      { label: 'Verification', value: 'file:line', detail: 'Disk-validated citation spans & drift detection' },
    ],
    workflowSteps: [
      'Ingest repository & parse source files with Tree-sitter into semantic AST symbols.',
      'Store vector embeddings in LanceDB alongside a BM25 lexical index.',
      'Execute hybrid search + caller/callee graph expansion for user queries.',
      'Verify generated file:line citations against disk and compute grounding score.',
    ],
  },
  {
    id: 'resumeiq',
    title: 'ResumeIQ — AI Resume Optimizer',
    subtitle: 'ATS compatibility scoring, semantic matching & recruiter simulation platform',
    category: 'Full Stack',
    secondaryCategories: ['AI/ML', 'Backend'],
    featuredSpan: 'standard',
    ownershipNote: 'Collaborative Team Project (Forked Repository · Deployed on Vercel)',
    shortDescription:
      'An AI-powered resume analysis and optimization platform designed to improve resume compatibility with job descriptions and recruiter expectations.',
    problemSolved:
      'Job seekers often struggle to understand how Applicant Tracking Systems (ATS) and technical recruiters evaluate resumes against specific job descriptions. ResumeIQ provides transparent TF-IDF/Jaccard semantic matching, multi-strategy keyword gap analysis, and automated LaTeX resume generation.',
    architectureSummary:
      'Full-stack architecture featuring a React frontend and a modular FastAPI backend (ats_engine.py, embeddings.py, latex_service.py, llm_service.py, parser.py) backed by Supabase authentication/storage and Groq LLM inference with rate limiting.',
    features: [
      'ATS compatibility scoring with boost mechanisms for strong keyword coverage (60%+ match)',
      'Multi-strategy job description keyword extraction and density analysis',
      'Semantic job matching using TF-IDF similarity and Jaccard keyword overlap',
      'Missing skill identification with actionable gap recommendations',
      'AI-powered resume content improvement and automated editor workflows',
      'Recruiter persona simulation providing realistic screening feedback',
      'Automated resume tailoring and compiled LaTeX document generation',
    ],
    techStack: ['React', 'JavaScript', 'FastAPI', 'Supabase', 'Groq', 'AI/LLMs'],
    githubUrl: 'https://github.com/Suchand06/resume-optimizer',
    liveUrl: 'https://resume-optimizer-seven-omega.vercel.app/',
    metrics: [
      { label: 'Similarity Engine', value: 'TF-IDF + Jaccard', detail: 'Dual lexical & semantic JD coverage' },
      { label: 'Backend Services', value: 'FastAPI + Groq', detail: 'Low-latency LLM rewrite & recruiter simulation' },
      { label: 'Output Pipeline', value: 'LaTeX + PDF', detail: 'Automated structured document generation' },
    ],
    workflowSteps: [
      'Upload resume document & target job description through the React workspace.',
      'Compute ATS compatibility score, keyword density, and TF-IDF / Jaccard similarity.',
      'Run Groq-powered recruiter simulation and targeted bullet-point optimization.',
      'Export tailored resume via the backend LaTeX document generator.',
    ],
  },
  {
    id: 'datascope',
    title: 'DataScope — AI-Powered Database Visualizer',
    subtitle: 'Interactive SQLite workspace with Monaco SQL editor, Gemini NL-to-SQL & ER diagrams',
    category: 'Full Stack',
    secondaryCategories: ['AI/ML', 'Backend'],
    featuredSpan: 'standard',
    ownershipNote: 'Collaborative Repository (Forked Full-Stack Engineering Project)',
    shortDescription:
      'An AI-powered SQLite database visualizer and editor that helps developers explore, query, analyze, and understand database structures through an interactive interface.',
    problemSolved:
      'Inspecting local .sqlite or .db files typically requires switching between CLI tools, static schema viewers, and separate plotting scripts. DataScope unifies schema exploration, Monaco SQL editing, Gemini natural-language-to-SQL translation, data profiling, and EXPLAIN QUERY PLAN visualization in a single dark-mode browser workspace.',
    architectureSummary:
      'Built with a React + TypeScript + Vite + Tailwind CSS frontend (SchemaViewer, QueryRunner, AIAssist, InsightsDashboard, SchemaDiagram, QueryPlanView) connected to a Python FastAPI backend utilizing SQLite3, Pandas, NumPy, and the Google Gemini API.',
    features: [
      'Drag-and-drop .sqlite and .db database uploads with instant schema parsing',
      'Interactive database schema explorer displaying tables, columns, types, and primary keys',
      'Full-featured SQL editor powered by Monaco Editor with syntax highlighting and shortcuts',
      'Natural-language-to-SQL generation using Google Gemini (AIAssist component)',
      'Automatic data profiling using Pandas and NumPy',
      'Missing-value and unique-value cardinality analysis per table column',
      'Interactive distribution charts and visualizations built with Recharts',
      'Automatic Entity Relationship (ER) diagrams rendered via Mermaid.js',
      'Visual EXPLAIN QUERY PLAN breakdown for debugging SQL query performance',
    ],
    techStack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'FastAPI',
      'Python',
      'SQLite',
      'Pandas',
      'NumPy',
      'Gemini API',
      'Monaco Editor',
      'Mermaid.js',
      'Recharts',
    ],
    githubUrl: 'https://github.com/Suchand06/DataScope',
    metrics: [
      { label: 'Code Editor', value: 'Monaco SQL', detail: 'Syntax highlighting & execution shortcuts' },
      { label: 'AI Copilot', value: 'Gemini NL→SQL', detail: 'Schema-aware natural language query synthesis' },
      { label: 'Visual Engines', value: 'Mermaid + Recharts', detail: 'Auto ER diagrams & EXPLAIN QUERY PLAN tree' },
    ],
    workflowSteps: [
      'Drag and drop any .sqlite or .db file into the browser upload zone.',
      'Inspect table schemas and auto-generated Mermaid.js Entity-Relationship diagrams.',
      'Write SQL in Monaco or ask natural-language questions via Gemini AI Assist.',
      'Profile column distributions in Recharts and inspect EXPLAIN QUERY PLAN nodes.',
    ],
  },
  {
    id: 'spacehack',
    title: 'spaceHack — SPACE STRIKE',
    subtitle: '60fps browser-based 2D arcade space shooter built with HTML5 Canvas & Web Audio API',
    category: 'Other',
    secondaryCategories: ['Full Stack'],
    featuredSpan: 'standard',
    ownershipNote: 'Independently Developed by Suchand C Achar (Deployed on Vercel)',
    shortDescription:
      'A browser-based 2D arcade space shooter developed using React, Vite, Tailwind CSS, and HTML5 Canvas.',
    problemSolved:
      'Delivers a zero-install, low-latency arcade game loop directly in the browser with custom 2D physics, particle explosions, synthesized Web Audio API sound effects, and responsive desktop/mobile controls.',
    architectureSummary:
      'Engineered with React.js and Vite wrapping a high-frequency HTML5 Canvas rendering loop, synthesized audio via the browser Web Audio API, Tailwind CSS HUD overlays, and LocalStorage persistence for high scores.',
    features: [
      'Interactive spaceship movement with smooth velocity and boundary handling',
      'Progressive enemy waves and multi-phase boss battles',
      'Real-time projectile shooting and bounding-box collision detection',
      'Collectible power-ups including protective shields and hull health restoration',
      'Live score tracking and dynamically scaling wave difficulty',
      'Synthesized sound effects via Web Audio API and animated particle visual effects',
      'Responsive controls supporting both desktop keyboard and mobile touch inputs',
      'Persistent high scores stored across sessions using browser LocalStorage',
    ],
    techStack: ['React.js', 'Vite', 'JavaScript', 'Tailwind CSS', 'HTML5 Canvas', 'Web Audio API'],
    githubUrl: 'https://github.com/Suchand06/spaceHack',
    liveUrl: 'https://spacehack404.vercel.app/',
    previewImage: '/src/assets/images/spacehack_arcade_preview_1794928453352.jpg',
    metrics: [
      { label: 'Render Engine', value: 'HTML5 Canvas', detail: 'Real-time 2D sprite, particle & collision loop' },
      { label: 'Audio Synthesis', value: 'Web Audio API', detail: 'Procedural sound effects without external bloat' },
      { label: 'Persistence', value: 'LocalStorage', detail: 'Instant high-score tracking across sessions' },
    ],
    workflowSteps: [
      'Initialize HTML5 Canvas game loop and responsive keyboard/touch input listeners.',
      'Spawn progressive enemy formations and boss entities with dynamic difficulty scaling.',
      'Process projectile-entity collision detection, shield/health power-ups, and Web Audio cues.',
      'Persist top arcade scores in browser LocalStorage.',
    ],
  },
  {
    id: 'traffic-flow',
    title: 'Traffic Flow Prediction',
    subtitle: 'Comparative deep learning & ensemble modeling on Bengaluru road corridors',
    category: 'AI/ML',
    secondaryCategories: ['Backend'],
    featuredSpan: 'wide',
    ownershipNote: 'Collaborative ML Research Notebook Repository (Bengaluru Traffic Dataset)',
    shortDescription:
      'A machine learning project focused on predicting traffic flow across Bengaluru road intersections using 1D CNN, Tuned LSTM, SVR, Historical Averages, and hybrid ensembles.',
    problemSolved:
      'Urban congestion across Bengaluru intersections requires accurate traffic volume estimation to support proactive route decisions. This project benchmarks standalone models (1D CNN, LSTM, RBF-SVR, Historical Average) and multi-model ensembles on 8,936 Bengaluru traffic observations, coupling predictions with Folium/OSRM route classification.',
    architectureSummary:
      'Implemented in Python using TensorFlow/Keras, Scikit-Learn, Pandas, NumPy, Folium, and Geopy (notebooks/traffic-flow-predication.ipynb). Categorical columns (Area Name, Road/Intersection Name, Weather Conditions, Roadwork and Construction Activity) are encoded with LabelEncoder, scaled across 14 input features via StandardScaler, and split 80/20 (7,148 train / 1,788 test samples).',
    features: [
      'Preprocessing pipeline on Banglore_traffic_Dataset (1).csv (8,936 rows, 14 scaled input features, 80/20 train-test split)',
      '1D CNN architecture (Conv1D 32→64 + MaxPooling1D + Dense 64→32→1, Adam lr=0.001, 50 epochs) achieving R² = 0.9957, RMSE = 853.09, MAE = 640.21',
      'Tuned LSTM sequence model with Dropout and Dense layers (50 epochs) achieving R² = 0.9400, RMSE = 3,173.90, MAE = 2,505.09',
      'Baseline comparisons against Support Vector Regression (RBF-SVR: R² = 0.0278, RMSE = 12,772.51) and grouped Historical Averages (HA: R² = 0.3437, RMSE = 10,494.22)',
      'Multi-model ensemble evaluation: HA + LSTM (R² = 0.8272, MAE = 4,213.15), SVR + LSTM (R² = 0.7406, MAE = 4,931.26), SVR + LSTM + HA (R² = 0.6728), and SVR + HA (R² = 0.2738)',
      'Geospatial route classification using Folium, Geopy (Nominatim), and OSRM polyline rendering with a 30,000 traffic volume threshold to flag normal vs. alternative routes (e.g., Whitefield corridor)',
    ],
    techStack: [
      'Python',
      'TensorFlow / Keras',
      'Scikit-Learn',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Folium',
      'Geopy',
    ],
    githubUrl: 'https://github.com/Suchand06/Traffic-Flow-Prediction',
    metrics: [
      { label: '1D CNN (Best)', value: 'R² 0.9957', detail: 'RMSE: 853.09 · MAE: 640.21 (50 epochs)' },
      { label: 'Tuned LSTM', value: 'R² 0.9400', detail: 'RMSE: 3,173.90 · MAE: 2,505.09' },
      { label: 'HA + LSTM Ensemble', value: 'R² 0.8272', detail: 'RMSE: 5,385.43 · MAE: 4,213.15' },
    ],
    workflowSteps: [
      'Load Banglore_traffic_Dataset (1).csv (8,936 records), apply LabelEncoder to 4 categorical columns, drop Date, and standardize 14 features with StandardScaler.',
      'Split dataset 80/20 (7,148 train / 1,788 test) and train 1D CNN, Tuned LSTM, RBF-SVR, and grouped Historical Average (Area + Road/Intersection) models.',
      'Evaluate standalone models and 4 ensemble combinations (SVR+HA, SVR+LSTM, HA+LSTM, SVR+LSTM+HA) using RMSE, MAE, and R².',
      'Geocode Bengaluru corridors via Nominatim and render Folium route maps switching between normal and alternative routes at the 30,000 traffic volume threshold.',
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'udemy-web-bootcamp',
    title: 'The Complete 2024 Web Development Bootcamp',
    instructor: 'Dr. Angela Yu',
    platform: 'Udemy',
    focusAreas: [
      'Full-Stack JavaScript & DOM Architecture',
      'React.js Component Patterns & State Management',
      'Node.js, Express.js & RESTful API Construction',
      'Relational & Document Database Integration',
    ],
  },
  {
    id: 'codehelp-dsa-supreme',
    title: 'Data Structures and Algorithms (Supreme Batch)',
    instructor: 'Love Babbar',
    platform: 'CodeHelp',
    focusAreas: [
      'Advanced Data Structures in C++ (Trees, Graphs, Heaps, Tries)',
      'Dynamic Programming, Backtracking & Greedy Algorithms',
      'Time & Space Complexity Analysis',
      'Competitive Problem-Solving Patterns',
    ],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'competitive-programming',
    metric: '400+',
    title: 'Problems Solved',
    subtitle: 'Competitive Programming & Algorithmic Practice',
    description:
      'Solved over 400 problems across LeetCode and GeeksforGeeks, building strong fluency in graph algorithms, dynamic programming, trees, and C++ STL optimization.',
    contextTag: 'LeetCode · GeeksforGeeks',
  },
  {
    id: 'ieeextreme-18',
    metric: '4th Place',
    title: 'Collegiately in IEEEXtreme 18.0',
    subtitle: 'IEEEXtreme 18.0 Global Programming Competition',
    description:
      'Secured 4th place collegiately among global teams in the IEEEXtreme 18.0 Global Programming Competition through optimal solutions to algorithmic challenges.',
    contextTag: 'Collegiate Standing · 24-Hour Algorithmic Marathon',
  },
];

export const BEYOND_THE_CODE = {
  interests: [
    { name: 'Competitive Programming', detail: 'Algorithmic contests & time-complexity optimization' },
    { name: 'DSA Problem Solving', detail: 'Graph theory, dynamic programming & data structures' },
    { name: 'Full-Stack Architecture', detail: 'End-to-end typed interfaces and API orchestration' },
    { name: 'Micro-projects', detail: 'Focused developer utilities and interactive browser tools' },
  ],
  hobbies: [
    { name: 'Pencil Sketching', detail: 'Observational shading, portraiture & fine-line form study' },
    { name: 'Digital Drawing', detail: 'Concept illustration, composition & visual storytelling' },
    { name: 'Photography', detail: 'Framing everyday perspectives, lighting & street scenes' },
  ],
  languages: [
    { name: 'English', proficiency: 'Professional' },
    { name: 'Kannada', proficiency: 'Native' },
    { name: 'Tulu', proficiency: 'Conversational / Regional' },
    { name: 'Hindi', proficiency: 'Conversational' },
  ],
};

export const BEYOND_TECHNOLOGY = {
  organization: 'Danz Addix (Dance Crew)',
  role: 'Performing Artist & Cultural Representative',
  imageUrl: '/src/assets/images/danz_addix_stage_performance_1794928453428.jpg',
  summary:
    'Active member and cultural representative of the collegiate dance crew, balancing high-energy stage choreography, synchronization, and competitive teamwork alongside academic engineering pursuits.',
  milestones: [
    {
      id: 'rcb-unbox',
      title: 'Official RCB Unbox Event',
      highlight: 'Stage Representation',
      description: 'Represented the dance crew at the official RCB Unbox Event.',
    },
    {
      id: 'nift-bengaluru',
      title: "NIFT Bengaluru's National Competition",
      highlight: '1st Place National Winner',
      description:
        "Showcased teamwork and performance skills while securing 1st place at NIFT Bengaluru's national competition.",
    },
    {
      id: 'iim-bengaluru',
      title: 'IIM Bengaluru Cultural Showcase',
      highlight: 'Collegiate Representation',
      description: 'Represented the college at IIM Bengaluru.',
    },
  ],
};
