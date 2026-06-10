'use client';

import { motion } from 'framer-motion';
import { Download, CheckCircle, ArrowRight, ShieldAlert, Key } from 'lucide-react';
import Link from 'next/link';

const installSteps = [
  {
    step: 1,
    title: 'Download the Installer',
    description: 'Go to the Downloads page and click "Download VyronAI.exe". The executable is approximately ~350 MB.',
    tip: 'Ensure a stable connection. The download takes under a minute on average.',
    action: {
      label: 'Go to Downloads →',
      href: '/download',
      icon: Download
    }
  },
  {
    step: 2,
    title: 'Acquire a Free Gemini API Key',
    description: 'Visit aistudio.google.com, sign in with your Google account, and click "Create API Key" inside the console panel.',
    tip: 'The free tier is highly generous, giving you up to 1,500 daily requests completely free.',
    action: {
      label: 'Get Free API Key →',
      href: 'https://aistudio.google.com',
      icon: Key
    }
  },
  {
    step: 3,
    title: 'Run the Installer',
    description: 'Double-click VyronAI.exe. If Windows SmartScreen appears, click "More info" then "Run anyway". The build is digitally signed.',
    tip: 'If Windows complains about folder permissions, right-click the file and click "Run as Administrator".'
  },
  {
    step: 4,
    title: 'Configure Your API Key',
    description: 'On first startup, the VYRON GUI asks you to insert your Google Gemini key. Paste the key in the settings tab input.',
    tip: 'Your keys are kept completely local inside secure local storage buffers and are never sent to external servers.'
  },
  {
    step: 5,
    title: 'Authorize System Microphone',
    description: 'Allow Windows microphone permissions when requested by the app, enabling instant voice command parsing.',
    tip: 'Typing commands is also fully supported if you prefer a keyboard-native workflow.'
  },
  {
    step: 6,
    title: 'Speak Your First Command',
    description: 'Simply trigger the microphone button and state: "Hi VYRON, open Google Chrome and search for news". Watch it run instantly.',
    tip: 'Try voice commands like: "Open my downloads", "Take a screenshot", or "Run terminal build".'
  }
];

const troubleshooting = [
  {
    problem: 'Windows SmartScreen Warnings',
    solution: 'Click "More info" → "Run anyway". Since VYRON controls OS pipelines, Windows warns on first launch. The file is secure, signed, and virus-free.',
  },
  {
    problem: 'System Microphone Inactive',
    solution: 'Verify your Default Recording Device in Windows settings. Make sure microphone privacy access is enabled for desktop applications.',
  },
  {
    problem: 'API Key Authorization Errors',
    solution: 'Double check that the pasted key does not contain any extra spaces. Make sure it starts with the standard "AIza" characters.',
  },
  {
    problem: 'Agent Startup Failure',
    solution: 'Ensure you have the latest Windows Updates and stable graphic frameworks active. If crashes persist, check the local logs in the app data directory.',
  }
];

export default function HowToInstallPage() {
  return (
    <div className="relative bg-[#050505] min-h-screen text-white pt-36 pb-20 px-6 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.12)_0%,_transparent_60%)] pointer-events-none" />

      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest px-3 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/5 text-[#a78bfa] uppercase">
            system setup guide
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-white">
            How to <span className="text-[#a78bfa]" style={{ filter: 'drop-shadow(0 0 15px rgba(124,58,237,0.4))' }}>Install</span> VYRON AI
          </h1>
          <p className="text-zinc-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            A step-by-step setup overview. From downloading the agent executable to over-the-air system voice control in under 5 minutes.
          </p>
        </motion.div>
      </section>

      {/* Steps List */}
      <section className="max-w-3xl mx-auto mb-32 space-y-6 relative z-10">
        {installSteps.map((step, idx) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.5 }}
            className="rounded-2xl border border-zinc-800 bg-[#09090b]/80 backdrop-blur-md p-6 sm:p-8 flex gap-6 hover:border-[#7C3AED]/20 transition-all duration-300"
          >
            {/* Step badge */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] flex items-center justify-center text-white font-black text-sm shrink-0 shadow-lg shadow-[#7C3AED]/10">
              {step.step}
            </div>

            {/* Description */}
            <div className="flex-1 space-y-4">
              <h3 className="text-lg font-bold text-white tracking-tight leading-none">{step.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>

              {/* Action buttons if available */}
              {step.action && (
                <div>
                  {step.action.href.startsWith('http') ? (
                    <a
                      href={step.action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#7C3AED]/30 bg-[#7C3AED]/5 text-xs text-[#a78bfa] font-bold uppercase tracking-wider hover:bg-[#7C3AED]/10 transition-all"
                    >
                      <step.action.icon className="w-3.5 h-3.5" />
                      {step.action.label}
                    </a>
                  ) : (
                    <Link
                      href={step.action.href}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#7C3AED]/30 bg-[#7C3AED]/5 text-xs text-[#a78bfa] font-bold uppercase tracking-wider hover:bg-[#7C3AED]/10 transition-all"
                    >
                      <step.action.icon className="w-3.5 h-3.5" />
                      {step.action.label}
                    </Link>
                  )}
                </div>
              )}

              {/* Tips block */}
              <div className="flex items-start gap-2.5 rounded-xl border border-zinc-900 bg-[#060608] px-4 py-3 text-xs text-zinc-500">
                <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed">{step.tip}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Troubleshooting Board */}
      <section className="max-w-3xl mx-auto mb-32 relative z-10">
        <h2 className="text-2xl font-black text-white text-center mb-10">
          Troubleshooting <span className="text-[#a78bfa]">Board</span>
        </h2>
        <div className="rounded-3xl p-6 sm:p-8 border border-zinc-800 bg-[#09090b]/60 backdrop-blur-md space-y-6">
          {troubleshooting.map((item) => (
            <div key={item.problem} className="flex items-start gap-4 pb-6 border-b border-white/5 last:border-b-0 last:pb-0">
              <CheckCircle className="w-5 h-5 text-[#a78bfa] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-bold text-white text-base tracking-tight">{item.problem}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-3xl mx-auto text-center relative z-10">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">All Clear?</h3>
          <p className="text-zinc-500 text-sm">Download the desktop suite now and begin voice commands.</p>
          <Link
            href="/download"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] text-white font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 hover:scale-[1.02] transition-all"
          >
            Download VYRON AI <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
