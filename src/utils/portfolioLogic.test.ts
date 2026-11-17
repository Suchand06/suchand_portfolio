import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterProjects,
  filterSkillCategories,
  validateContactForm,
  buildMailtoUrl,
  generateResumeHtmlDocument,
} from './portfolioLogic';
import { FEATURED_PROJECTS, SKILL_CATEGORIES, PERSONAL_INFO } from '../data/portfolioData';

test('filterProjects returns all 5 projects when category is All', () => {
  const result = filterProjects(FEATURED_PROJECTS, 'All');
  assert.equal(result.length, 5);
});

test('filterProjects accurately filters by category and secondaryCategories', () => {
  const aiProjects = filterProjects(FEATURED_PROJECTS, 'AI/ML');
  const ids = aiProjects.map((p) => p.id);
  assert.ok(ids.includes('repolens'));
  assert.ok(ids.includes('traffic-flow'));
  assert.ok(ids.includes('resumeiq'));
  assert.ok(ids.includes('datascope'));

  const otherProjects = filterProjects(FEATURED_PROJECTS, 'Other');
  assert.equal(otherProjects.length, 1);
  assert.equal(otherProjects[0].id, 'spacehack');
});

test('filterProjects only includes verified liveUrl on spaceHack and ResumeIQ', () => {
  const withLiveDemo = FEATURED_PROJECTS.filter((p) => Boolean(p.liveUrl));
  assert.equal(withLiveDemo.length, 2);
  const liveIds = withLiveDemo.map((p) => p.id).sort();
  assert.deepEqual(liveIds, ['resumeiq', 'spacehack']);
  const spacehack = FEATURED_PROJECTS.find((p) => p.id === 'spacehack');
  assert.equal(spacehack?.liveUrl, 'https://spacehack404.vercel.app/');
});

test('filterSkillCategories filters properly by category id', () => {
  assert.equal(filterSkillCategories(SKILL_CATEGORIES, 'all').length, 6);
  const dbOnly = filterSkillCategories(SKILL_CATEGORIES, 'databases');
  assert.equal(dbOnly.length, 1);
  assert.equal(dbOnly[0].title, 'Databases');
});

test('validateContactForm rejects empty or invalid inputs and accepts valid data', () => {
  const emptyCheck = validateContactForm({
    name: '',
    email: 'invalid-email',
    subject: 'Hi',
    message: 'Too short',
  });
  assert.equal(emptyCheck.valid, false);
  assert.ok(emptyCheck.errors.name);
  assert.ok(emptyCheck.errors.email);
  assert.ok(emptyCheck.errors.subject);
  assert.ok(emptyCheck.errors.message);

  const validCheck = validateContactForm({
    name: 'Arjun Rao',
    email: 'arjun@example.com',
    subject: 'Software Engineering Role Inquiry',
    message: 'Hi Suchand, we loved your work on RepoLens and DataScope.',
  });
  assert.equal(validCheck.valid, true);
  assert.deepEqual(validCheck.errors, {});
});

test('buildMailtoUrl encodes recipient, subject, and sender metadata', () => {
  const url = buildMailtoUrl(PERSONAL_INFO.email, {
    name: 'Priya',
    email: 'priya@company.io',
    subject: 'Full-Stack Opportunity',
    message: 'Let us connect regarding a software engineering position.',
  });
  assert.ok(url.startsWith('mailto:suchandacharya6@gmail.com?'));
  assert.ok(url.includes('Full-Stack%20Opportunity'));
  assert.ok(url.includes('priya%40company.io'));
});

test('generateResumeHtmlDocument includes accurate academic scores and contact details', () => {
  const html = generateResumeHtmlDocument();
  assert.ok(html.includes('Suchand C Achar'));
  assert.ok(html.includes('8.25 / 10'));
  assert.ok(html.includes('91.66%'));
  assert.ok(html.includes('88.96%'));
  assert.ok(html.includes('IEEEXtreme 18.0'));
});
