'use client';

import { useState, FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { WordsPullUpMultiStyle } from '@/components/ui/words-pull-up-multi-style';

const HEADER_SEGMENTS = [
  { text: "Let's work together.", className: 'text-primary' },
  { text: ' Send a message below.', className: 'text-gray-500' },
];

/**
 * ContactSection — Azhar Hakim Portfolio
 * Prisma-inspired contact card with mailto form.
 */
export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:azarhakim55@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative bg-black py-16 sm:py-20 px-4 sm:px-6 pb-24 sm:pb-32">
      <div className="bg-noise absolute inset-0 opacity-[0.08] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight">
            <WordsPullUpMultiStyle
              segments={HEADER_SEGMENTS}
              containerClassName="flex-col sm:flex-row gap-x-2"
            />
          </h2>
        </div>

        {/* Contact Card */}
        <motion.div
          ref={ref}
          className="max-w-2xl mx-auto rounded-2xl p-6 sm:p-8 md:p-10"
          style={{ backgroundColor: '#101010' }}
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-[10px] sm:text-xs tracking-widest uppercase"
                style={{ color: 'rgba(222,219,200,0.5)' }}
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
                style={{
                  backgroundColor: '#1a1a1a',
                  border: '1px solid rgba(222,219,200,0.1)',
                  color: '#E1E0CC',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(222,219,200,0.35)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(222,219,200,0.1)';
                }}
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-[10px] sm:text-xs tracking-widest uppercase"
                style={{ color: 'rgba(222,219,200,0.5)' }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                autoComplete="off"
                value={formData.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none"
                style={{
                  backgroundColor: '#1a1a1a',
                  border: '1px solid rgba(222,219,200,0.1)',
                  color: '#E1E0CC',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(222,219,200,0.35)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(222,219,200,0.1)';
                }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group w-full inline-flex items-center justify-between bg-primary rounded-full pl-6 pr-2 py-2 transition-all duration-300"
              style={{ color: '#000000' }}
            >
              <span className="font-medium text-sm sm:text-base">Send message</span>
              <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                <ArrowRight size={16} style={{ color: '#E1E0CC' }} strokeWidth={2} />
              </span>
            </button>
          </form>

          {/* Direct email link */}
          <p className="text-center mt-6 text-[10px] sm:text-xs" style={{ color: 'rgba(222,219,200,0.35)' }}>
            or email directly at{' '}
            <a
              href="mailto:azarhakim55@gmail.com"
              className="underline underline-offset-2 transition-colors duration-200"
              style={{ color: 'rgba(222,219,200,0.6)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#E1E0CC'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(222,219,200,0.6)'; }}
            >
              azarhakim55@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
