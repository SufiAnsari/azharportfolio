'use client';

import { useState, FormEvent, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Copy, Check, Mail, Send } from 'lucide-react';
import { WordsPullUpMultiStyle } from '@/components/ui/words-pull-up-multi-style';

const HEADER_SEGMENTS = [
  { text: "Let's work together.", className: 'text-primary font-light' },
  { text: ' Send a message or get in touch.', className: 'text-white/40 font-light' },
];

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const directEmail = 'azarhakim55@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(false);

    if (!formData.name.trim() || !formData.message.trim()) {
      setSubmitError(true);
      return;
    }

    try {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email || 'N/A'}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${directEmail}?subject=${subject}&body=${body}`;
    } catch {
      setSubmitError(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative bg-[#08080a] py-20 sm:py-28 px-4 sm:px-6 pb-28 sm:pb-36">
      <div className="ambient-glow absolute inset-0 pointer-events-none" />
      <div className="bg-noise absolute inset-0 opacity-[0.08] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-widest text-primary/70 mb-4 font-medium">
            <span>Contact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight">
            <WordsPullUpMultiStyle
              segments={HEADER_SEGMENTS}
              containerClassName="flex-col sm:flex-row gap-x-2"
            />
          </h2>
        </div>

        {/* Quick Email Action Pill */}
        <div className="flex justify-center mb-10">
          <div className="glass-card rounded-full p-1.5 pl-5 pr-2 flex items-center gap-3 border border-white/10 shadow-lg">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-mono text-white/90">{directEmail}</span>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-all duration-200 flex items-center gap-1.5 active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Glassmorphic Contact Form */}
        <motion.div
          ref={ref}
          className="glass-card rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-12 border border-white/10 shadow-2xl"
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-xs font-mono tracking-wider uppercase text-primary/70 block"
                >
                  Your Name <span className="text-emerald-400">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full rounded-xl px-4 py-3.5 text-sm bg-black/60 border border-white/10 text-white placeholder-white/20 outline-none transition-all duration-200 focus:border-primary focus:ring-1 focus:ring-primary/50"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs font-mono tracking-wider uppercase text-primary/70 block"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. rahul@company.com"
                  className="w-full rounded-xl px-4 py-3.5 text-sm bg-black/60 border border-white/10 text-white placeholder-white/20 outline-none transition-all duration-200 focus:border-primary focus:ring-1 focus:ring-primary/50"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-xs font-mono tracking-wider uppercase text-primary/70 block"
              >
                Message <span className="text-emerald-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your project, role, or incident inquiry..."
                className="w-full rounded-xl px-4 py-3.5 text-sm bg-black/60 border border-white/10 text-white placeholder-white/20 outline-none transition-all duration-200 resize-none focus:border-primary focus:ring-1 focus:ring-primary/50"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group w-full inline-flex items-center justify-between bg-primary text-black font-semibold text-sm sm:text-base rounded-full pl-6 pr-2 py-2.5 transition-all duration-300 hover:bg-white hover:shadow-[0_0_25px_rgba(222,219,200,0.4)] active:scale-[0.98]"
            >
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                <span>Send Message via Email</span>
              </span>
              <span className="bg-black text-primary rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0">
                <ArrowRight size={16} strokeWidth={2.5} />
              </span>
            </button>

            {submitError && (
              <p className="text-center text-xs text-rose-400 pt-2 font-mono">
                Please enter a valid name and message before submitting.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
