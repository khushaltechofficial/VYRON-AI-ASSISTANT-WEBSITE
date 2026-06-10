'use client';

import { motion } from 'framer-motion';
import { Key, ShieldCheck, HelpCircle, ExternalLink } from 'lucide-react';

const API_KEYS = [
  {
    name: 'Google Gemini API',
    envKey: 'GEMINI_API_KEY',
    badge: 'Required',
    badgeColor: 'red',
    desc: 'The primary operational reasoning and vision engine for VYRON AI.',
    steps: [
      'Navigate to aistudio.google.com',
      'Sign in with your standard Google Account',
      "Select 'Get API Key' in the sidebar options",
      "Generate a key in a new project and copy it"
    ],
    link: 'https://aistudio.google.com',
    linkText: 'Get Gemini API Key'
  },
  {
    name: 'Groq API Key',
    envKey: 'GROQ_API_KEY',
    badge: 'Optional',
    badgeColor: 'gray',
    desc: 'Ultra-fast LPU inference for instant split-second agent responses.',
    steps: [
      'Access console.groq.com panel',
      'Log in or register a free account',
      "Navigate to the 'API Keys' tab",
      "Click 'Create API Key' and store it securely"
    ],
    link: 'https://console.groq.com',
    linkText: 'Get Groq API Key'
  },
  {
    name: 'Hugging Face Token',
    envKey: 'HUGGINGFACE_API_KEY',
    badge: 'Optional',
    badgeColor: 'gray',
    desc: 'Required only for retrieving local model pipelines and model inference.',
    steps: [
      'Access huggingface.co settings page',
      'Click on Settings → Access Tokens',
      "Generate a token with standard 'Read' permissions"
    ],
    link: 'https://huggingface.co',
    linkText: 'Get HF Access Token'
  }
];

export default function GuidePage() {
  return (
    <div className="relative bg-[#050505] min-h-screen text-white pt-36 pb-20 px-6 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.12)_0%,_transparent_60%)] pointer-events-none" />

      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest px-3 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/5 text-[#a78bfa] uppercase">
            operational keys
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-white">
            System <span className="text-[#a78bfa]" style={{ filter: 'drop-shadow(0 0 15px rgba(124,58,237,0.4))' }}>Configuration</span>
          </h1>
          <p className="text-zinc-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            VYRON executes commands locally but relies on API endpoints to route complex thoughts. Configure your keys directly in the settings tab.
          </p>
        </motion.div>
      </section>

      {/* API Keys grid layout */}
      <section className="max-w-4xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {API_KEYS.map((k) => (
          <motion.div
            key={k.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-zinc-800 bg-[#09090b]/80 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-[#7C3AED]/20 transition-colors"
          >
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="text-lg font-black text-white tracking-tight">{k.name}</h3>
                  <span className="text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400 select-none">
                    .env: {k.envKey}
                  </span>
                </div>
                <span
                  className={`text-[9px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                    k.badge === 'Required'
                      ? 'border-[#f43f5e]/30 bg-[#f43f5e]/10 text-rose-400'
                      : 'border-zinc-800 bg-zinc-900/50 text-zinc-500'
                  }`}
                >
                  {k.badge}
                </span>
              </div>

              <p className="text-zinc-550 text-sm leading-relaxed">{k.desc}</p>

              <div className="space-y-2">
                <h4 className="text-[9px] font-mono font-bold tracking-widest text-white uppercase">Setup Steps:</h4>
                <ul className="space-y-2">
                  {k.steps.map((s, idx) => (
                    <li key={idx} className="flex gap-2.5 text-zinc-550 text-sm">
                      <span className="text-[#a78bfa] font-black shrink-0">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <a
                href={k.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-[#7C3AED]/30 bg-[#7C3AED]/5 text-xs text-[#a78bfa] font-bold uppercase tracking-wider hover:bg-[#7C3AED]/10 transition-all"
              >
                {k.linkText} <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Security Notices */}
      <section className="max-w-2xl mx-auto mb-20 relative z-10">
        <div className="rounded-3xl p-6 sm:p-8 border border-zinc-800 bg-[#09090b]/60 backdrop-blur-md flex flex-col sm:flex-row items-start gap-5">
          <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center shrink-0 border border-white/5">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-white text-base">Key Storage Security</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              API Keys pasted inside the settings tab are kept completely local inside secure local storage buffers and are never sent to external servers. If you are developing locally inside our repo, you can also set them up using a standard `.env` file at the root.
            </p>
          </div>
        </div>
      </section>

      {/* Help links */}
      <section className="max-w-2xl mx-auto text-center relative z-10">
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white">Have questions?</h3>
          <p className="text-zinc-500 text-sm">Check our troubleshooting and install path guidelines.</p>
          <a
            href="mailto:smartkhushal2007@gmail.com"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/10 hover:border-white/20 text-zinc-300 font-bold text-xs uppercase tracking-widest transition-all"
          >
            <HelpCircle className="w-4 h-4 text-[#a78bfa]" /> Contact Support
          </a>
        </div>
      </section>
    </div>
  );
}
