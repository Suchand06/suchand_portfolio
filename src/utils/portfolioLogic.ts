import {
  FEATURED_PROJECTS,
  PERSONAL_INFO,
  EDUCATION_TIMELINE,
  SKILL_CATEGORIES,
  CERTIFICATIONS,
  ACHIEVEMENTS,
  BEYOND_TECHNOLOGY,
  ProjectCategory,
  ProjectItem,
  SkillCategory,
} from '../data/portfolioData';

export interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormInput, string>>;
}

export function filterProjects(
  projects: ProjectItem[],
  category: ProjectCategory,
  searchQuery = ''
): ProjectItem[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory =
      category === 'All' ||
      project.category === category ||
      project.secondaryCategories.includes(category);

    if (!matchesCategory) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const haystack = [
      project.title,
      project.subtitle,
      project.shortDescription,
      project.problemSolved,
      ...project.techStack,
      ...project.features,
    ]
      .join(' ')
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
}

export function filterSkillCategories(
  categories: SkillCategory[],
  activeCategoryId: string
): SkillCategory[] {
  if (!activeCategoryId || activeCategoryId === 'all') {
    return categories;
  }
  return categories.filter((c) => c.id === activeCategoryId);
}

export function validateContactForm(input: ContactFormInput): ContactValidationResult {
  const errors: Partial<Record<keyof ContactFormInput, string>> = {};

  const name = input.name.trim();
  const email = input.email.trim();
  const subject = input.subject.trim();
  const message = input.message.trim();

  if (!name) {
    errors.name = 'Please enter your name.';
  } else if (name.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    errors.email = 'Please enter your email address.';
  } else if (!emailRegex.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!subject) {
    errors.subject = 'Please provide a subject for your message.';
  } else if (subject.length < 3) {
    errors.subject = 'Subject must be at least 3 characters.';
  }

  if (!message) {
    errors.message = 'Please enter a message.';
  } else if (message.length < 10) {
    errors.message = 'Message should be at least 10 characters long.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildMailtoUrl(
  recipientEmail: string,
  input: ContactFormInput
): string {
  const subject = `[Portfolio Inquiry] ${input.subject.trim()} — from ${input.name.trim()}`;
  const bodyLines = [
    `Hello Suchand,`,
    ``,
    input.message.trim(),
    ``,
    `---`,
    `Sender Name: ${input.name.trim()}`,
    `Sender Email: ${input.email.trim()}`,
  ];
  const params = new URLSearchParams({
    subject,
    body: bodyLines.join('\n'),
  });
  // URLSearchParams encodes spaces as '+', convert to '%20' for standard mailto compatibility
  return `mailto:${recipientEmail}?${params.toString().replace(/\+/g, '%20')}`;
}

export function generateResumeHtmlDocument(): string {
  const skillsHtml = SKILL_CATEGORIES.map(
    (cat) =>
      `<div><strong>${cat.title}:</strong> ${cat.skills.map((s) => s.name).join(', ')}</div>`
  ).join('\n');

  const educationHtml = EDUCATION_TIMELINE.map(
    (ed) => `
      <div style="margin-bottom: 10px;">
        <div style="display:flex; justify-content:space-between; font-weight:600;">
          <span>${ed.institution} — ${ed.location}</span>
          <span>${ed.year}</span>
        </div>
        <div>${ed.degree} | <strong>${ed.primaryScoreLabel}: ${ed.primaryScoreValue}</strong>${
          ed.secondaryScore ? ` (${ed.secondaryScore})` : ''
        }</div>
        ${
          ed.coursework
            ? `<div style="font-size:12px; color:#444;">Relevant Coursework: ${ed.coursework.join(', ')}</div>`
            : ''
        }
      </div>`
  ).join('\n');

  const projectsHtml = FEATURED_PROJECTS.map(
    (p) => `
      <div style="margin-bottom: 12px;">
        <div style="display:flex; justify-content:space-between; font-weight:600;">
          <span>${p.title}</span>
          <span style="font-size:12px;">${p.githubUrl}${p.liveUrl ? ` | ${p.liveUrl}` : ''}</span>
        </div>
        <div style="font-size:12px; color:#333; margin: 2px 0;"><em>Stack:</em> ${p.techStack.join(', ')}</div>
        <div style="font-size:13px;">${p.shortDescription}</div>
      </div>`
  ).join('\n');

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${PERSONAL_INFO.fullName} — Resume</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #111; max-width: 800px; margin: 32px auto; padding: 0 24px; line-height: 1.45; font-size: 13.5px; }
    h1 { margin: 0 0 4px 0; font-size: 24px; letter-spacing: -0.02em; }
    h2 { font-size: 14px; text-transform: uppercase; letter-spacing: 0.06em; border-bottom: 1px solid #ccc; padding-bottom: 3px; margin-top: 18px; margin-bottom: 8px; }
    .meta { color: #444; font-size: 12.5px; margin-bottom: 14px; }
    a { color: #111; text-decoration: none; }
  </style>
</head>
<body>
  <h1>${PERSONAL_INFO.fullName}</h1>
  <div class="meta">
    ${PERSONAL_INFO.location} · ${PERSONAL_INFO.email} · GitHub: ${PERSONAL_INFO.links.github} · LinkedIn: ${PERSONAL_INFO.links.linkedin} · LeetCode: ${PERSONAL_INFO.links.leetcode}
  </div>
  <h2>Summary</h2>
  <p>${PERSONAL_INFO.resumeSummary}</p>
  <h2>Education</h2>
  ${educationHtml}
  <h2>Technical Skills</h2>
  ${skillsHtml}
  <h2>Featured Projects</h2>
  ${projectsHtml}
  <h2>Certifications & Achievements</h2>
  <ul>
    ${ACHIEVEMENTS.map((a) => `<li><strong>${a.metric} ${a.title}:</strong> ${a.description}</li>`).join('')}
    ${CERTIFICATIONS.map((c) => `<li><strong>${c.title}</strong> — ${c.instructor} (${c.platform})</li>`).join('')}
  </ul>
  <h2>Additional Experience</h2>
  <p><strong>${BEYOND_TECHNOLOGY.organization} — ${BEYOND_TECHNOLOGY.role}</strong></p>
  <ul>
    ${BEYOND_TECHNOLOGY.milestones.map((m) => `<li>${m.description}</li>`).join('')}
  </ul>
</body>
</html>`;
}
