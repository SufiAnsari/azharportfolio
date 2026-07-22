'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight, Code2, Cpu, Workflow, Play } from 'lucide-react';
import { WordsPullUpMultiStyle } from '@/components/ui/words-pull-up-multi-style';

const HEADER_SEGMENTS = [
  {
    text: 'Core technical capabilities.',
    className: 'text-primary font-light',
  },
  {
    text: ' Engineered for enterprise stability.',
    className: 'text-white/40 font-light',
  },
];

export function FeaturesSection() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative min-h-screen bg-[#08080a] py-20 sm:py-28 px-4 sm:px-6">
      <div className="bg-noise absolute inset-0 opacity-[0.12] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto" ref={containerRef}>
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-widest text-primary/70 mb-4 font-medium">
            <span>Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight">
            <WordsPullUpMultiStyle
              segments={HEADER_SEGMENTS}
              containerClassName="flex-col sm:flex-row gap-x-2"
            />
          </h2>
        </div>

        {/* Asymmetric Bento Grid (2x2 Matrix) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Bento Card 1: Development & Software Engineering (7 cols) */}
          <motion.div
            className="md:col-span-7 glass-card rounded-2xl md:rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-widest uppercase text-white/40 block font-mono">01 / STACK</span>
                    <h3 className="text-xl font-semibold text-white">Software Development</h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-white/30">C# · .NET · SQL</span>
              </div>

              <p className="text-sm text-primary/75 mb-6 leading-relaxed">
                Building and maintaining enterprise .NET applications, automating operational workflows with PowerShell scripts, and querying SQL databases.
              </p>

              {/* Code Snippet Highlight */}
              <div className="rounded-xl bg-black/60 border border-white/10 p-4 font-mono text-xs text-primary/80 overflow-x-auto shadow-inner mb-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3 text-[11px] text-white/40">
                  <span>EndpointAutomation.cs</span>
                  <span className="text-emerald-400">● C# .NET Core</span>
                </div>
                <pre className="leading-relaxed">
                  <span className="text-purple-300">public class</span> <span className="text-amber-200">EndpointService</span> {'{\n'}
                  {'  '}<span className="text-purple-300">public async</span> Task&lt;<span className="text-emerald-300">IncidentResult</span>&gt; <span className="text-blue-300">ResolveHealthCheck</span>() {'{\n'}
                  {'    '}<span className="text-purple-300">var</span> status = <span className="text-purple-300">await</span> _diagnostics.<span className="text-blue-300">VerifyServicesAsync</span>();{'\n'}
                  {'    '}<span className="text-purple-300">return</span> status.IsHealthy ? IncidentResult.<span className="text-emerald-300">OK</span> : IncidentResult.<span className="text-amber-300">Patched</span>;{'\n'}
                  {'  }'}{'\n'}
                  {'}'}
                </pre>
              </div>

              {/* Skill Checklist */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  'C# & .NET Framework',
                  'SQL Data Querying',
                  'PowerShell Scripting',
                  'TypeScript & Next.js',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-primary/85">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0" strokeWidth={2.5} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href="#experience"
                className="group inline-flex items-center gap-2 text-xs font-medium text-primary/70 hover:text-white transition-colors"
              >
                <span>View development background</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Bento Card 2: Windows Infrastructure (5 cols) */}
          <motion.div
            className="md:col-span-5 glass-card rounded-2xl md:rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-white/40 block font-mono">02 / INFRA</span>
                  <h3 className="text-xl font-semibold text-white">Infrastructure & Endpoint</h3>
                </div>
              </div>

              <p className="text-sm text-primary/75 mb-6 leading-relaxed">
                Hands-on diagnostic and configuration support for enterprise Windows Server environments and client endpoints.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  'Windows Server Support',
                  'DNS & DHCP Config',
                  'Active Directory',
                  'Endpoint Diagnostics',
                  'Network Troubleshooting',
                  'Hardware Lifecycle',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-primary/90 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/40 font-mono">
              <span>System Uptime & Stability</span>
              <span className="text-emerald-400">● 99.8% Resolution</span>
            </div>
          </motion.div>

          {/* Bento Card 3: Enterprise Process & ITSM (5 cols) */}
          <motion.div
            className="md:col-span-5 glass-card rounded-2xl md:rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Workflow className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-white/40 block font-mono">03 / PROCESS</span>
                  <h3 className="text-xl font-semibold text-white">ITSM & Incident Resolution</h3>
                </div>
              </div>

              <p className="text-sm text-primary/75 mb-6 leading-relaxed">
                Managing incident queues through ITSM ticketing workflows, documenting root causes, and coordinating cross-functional priority fixes.
              </p>

              <div className="space-y-3">
                {[
                  'ITSM Ticketing & Incident Lifecycle',
                  'Root-Cause Analysis & Knowledge Base',
                  'Cross-Team Incident Coordination',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-primary/85">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/40 font-mono">
              <span>SLA Target Adherence</span>
              <span className="text-primary font-medium">Enterprise Standards</span>
            </div>
          </motion.div>

          {/* Bento Card 4: Video Spotlight (7 cols) */}
          <motion.div
            className="md:col-span-7 relative rounded-2xl md:rounded-3xl overflow-hidden min-h-[280px] border border-white/10 group"
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                console.warn(
                  JSON.stringify({ ts: new Date().toISOString(), level: 'WARN', message: 'Features section video failed to load' }),
                );
                (e.currentTarget as HTMLVideoElement).style.display = 'none';
              }}
            />
            <img
              src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
              alt="Feature card preview"
              className="sr-only"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
            <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white/90 flex items-center gap-2">
              <Play className="w-3 h-3 text-emerald-400 fill-emerald-400" />
              <span>Infrastructure Spotlight</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-1">
                Solving Real-World IT Challenges
              </h4>
              <p className="text-xs sm:text-sm text-primary/80 max-w-lg">
                Delivering reliable infrastructure services and fast incident response for enterprise operations.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
