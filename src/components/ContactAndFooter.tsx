import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Code2,
  Send,
  Copy,
  Check,
  ArrowUp,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  ContactFormInput,
  validateContactForm,
  buildMailtoUrl,
} from '../utils/portfolioLogic';

export const ContactAndFooter: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormInput, string>>>({});
  const [preparedMailto, setPreparedMailto] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormInput]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);
    if (!validation.valid) {
      setErrors(validation.errors);
      setPreparedMailto(null);
      return;
    }

    setErrors({});
    const mailtoLink = buildMailtoUrl(PERSONAL_INFO.email, formData);
    setPreparedMailto(mailtoLink);
    window.location.href = mailtoLink;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* SECTION 13: CONTACT SECTION */}
      <section id="contact" className="py-24 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <div className="text-xs font-mono tracking-wider text-violet-400">
                  09. GET IN TOUCH
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
                  Let&apos;s Build Something Together.
                </h2>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                  I&apos;m always interested in connecting with developers, exploring new
                  technologies, and working on meaningful software projects.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email Card */}
                <div className="p-4 rounded-xl bg-[#141419] border border-zinc-800/90 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-violet-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-mono text-zinc-400">Direct Email</div>
                      <a
                        href={PERSONAL_INFO.links.email}
                        className="text-sm font-semibold text-white hover:text-violet-300 truncate block"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-colors shrink-0 cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-xl bg-[#141419] border border-zinc-800/90 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-400">Location</div>
                    <div className="text-sm font-semibold text-white">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Profiles List */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono text-zinc-400">Developer Profiles</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a
                    href={PERSONAL_INFO.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-[#141419] hover:bg-zinc-800/80 border border-zinc-800/90 flex items-center justify-between text-xs font-semibold text-zinc-200 hover:text-white transition-colors"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Github className="w-4 h-4 text-zinc-300" />
                      GitHub
                    </span>
                    <ExternalLink className="w-3 h-3 text-zinc-500" />
                  </a>

                  <a
                    href={PERSONAL_INFO.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-[#141419] hover:bg-zinc-800/80 border border-zinc-800/90 flex items-center justify-between text-xs font-semibold text-zinc-200 hover:text-white transition-colors"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-blue-400" />
                      LinkedIn
                    </span>
                    <ExternalLink className="w-3 h-3 text-zinc-500" />
                  </a>

                  <a
                    href={PERSONAL_INFO.links.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-[#141419] hover:bg-zinc-800/80 border border-zinc-800/90 flex items-center justify-between text-xs font-semibold text-zinc-200 hover:text-white transition-colors"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-amber-400" />
                      LeetCode
                    </span>
                    <ExternalLink className="w-3 h-3 text-zinc-500" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Validated Mailto Composer Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl bg-[#141419] border border-zinc-800/90 p-6 sm:p-8 space-y-5"
              >
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                  <div>
                    <h3 className="text-lg font-bold text-white">Send a Direct Message</h3>
                    <p className="text-xs text-zinc-400">
                      Validates your details and opens your mail client addressed to{' '}
                      <span className="font-mono text-zinc-300">{PERSONAL_INFO.email}</span>.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono text-zinc-300"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D0D11] border border-zinc-800 focus:border-violet-500 focus:outline-none text-sm text-white placeholder:text-zinc-600"
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono text-zinc-300"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D0D11] border border-zinc-800 focus:border-violet-500 focus:outline-none text-sm text-white placeholder:text-zinc-600"
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono text-zinc-300"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Software Engineering Opportunity / Project Collaboration"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D0D11] border border-zinc-800 focus:border-violet-500 focus:outline-none text-sm text-white placeholder:text-zinc-600"
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono text-zinc-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your team, project, or question..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D0D11] border border-zinc-800 focus:border-violet-500 focus:outline-none text-sm text-white placeholder:text-zinc-600 resize-y"
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                  {preparedMailto && (
                    <div
                      role="status"
                      className="text-xs text-emerald-400 font-mono flex items-center gap-2"
                    >
                      <span>✓ Mail draft prepared.</span>
                      <a
                        href={preparedMailto}
                        className="underline text-cyan-300 hover:text-white"
                      >
                        Click here if your mail client did not open
                      </a>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: FOOTER */}
      <footer className="py-12 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-zinc-900">
            <div className="space-y-1.5">
              <div className="text-xl font-extrabold tracking-tight text-white">
                {PERSONAL_INFO.brand}
              </div>
              <p className="text-xs font-mono text-zinc-400">{PERSONAL_INFO.footerTagline}</p>
            </div>

            {/* Quick Navigation Links */}
            <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-zinc-400">
              <a href="#home" className="hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
              <a href="#education" className="hover:text-white transition-colors">
                Education
              </a>
              <a href="#skills" className="hover:text-white transition-colors">
                Skills
              </a>
              <a href="#projects" className="hover:text-white transition-colors">
                Projects
              </a>
              <a href="#achievements" className="hover:text-white transition-colors">
                Achievements
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>

            {/* Social Icons & Back to Top */}
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-[#141419] border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-[#141419] border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="p-2 rounded-lg bg-[#141419] border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <Code2 className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.links.email}
                aria-label="Email"
                className="p-2 rounded-lg bg-[#141419] border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="ml-2 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#141419] hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5 text-violet-400" />
                <span>Top</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-zinc-500">
            <div>
              © {currentYear} {PERSONAL_INFO.fullName}. All rights reserved.
            </div>
            <div className="font-mono">
              {PERSONAL_INFO.location} · {PERSONAL_INFO.email}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
