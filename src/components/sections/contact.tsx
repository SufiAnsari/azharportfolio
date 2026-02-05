'use client';

import { Container, Section } from '@/components/ui';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { HyperText } from '@/components/ui/hyper-text';
import { useState, FormEvent } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, message } = formData;

    // Construct Mailto Link
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:azarhakim55@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Section
      id="contact"
      padding="xl"
      className="pb-32"
      ariaLabelledby="contact-heading"
    >
      <Container size="md">
        <div className="text-center mb-12">
          <HyperText
            text="Contact"
            className="text-4xl font-bold mx-auto"
            id="contact-heading"
            as="h2"
          />
        </div>

        <div className="relative glass-panel p-8 md:p-10 rounded-2xl max-w-2xl mx-auto shadow-2xl">
          <GlowingEffect
            spread={50}
            glow={true}
            disabled={false}
            proximity={80}
            inactiveZone={0.01}
            borderWidth={2}
            movementDuration={0.5}
          />
          <form onSubmit={handleSubmit} className="relative space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground-muted ml-1">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                placeholder="Your Name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground-muted ml-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                autoComplete="off"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="What's on your mind?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-primary py-4 rounded-xl font-bold text-white shadow-lg shadow-accent/25 hover:opacity-90 transition-opacity transform active:scale-95 duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </Section>
  );
}
