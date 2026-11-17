/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutAndEducation } from './components/AboutAndEducation';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { CredentialsAndBeyond } from './components/CredentialsAndBeyond';
import { ContactAndFooter } from './components/ContactAndFooter';
import { ResumeModal } from './components/ResumeModal';
import { ProjectItem } from './data/portfolioData';

const OBSERVED_SECTIONS = [
  'home',
  'about',
  'education',
  'skills',
  'projects',
  'achievements',
  'contact',
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (let i = OBSERVED_SECTIONS.length - 1; i >= 0; i--) {
        const id = OBSERVED_SECTIONS[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-100 selection:bg-violet-500/30 selection:text-violet-100">
      <Navbar
        activeSection={activeSection}
        onOpenResume={() => setResumeOpen(true)}
      />

      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <AboutAndEducation />
        <SkillsSection />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <CredentialsAndBeyond />
        <ContactAndFooter />
      </main>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
