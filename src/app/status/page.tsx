'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, CheckCircle, AlertTriangle, XCircle, RefreshCw, Clock, Zap, Globe, Cpu, Server } from 'lucide-react';

interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'down';
  latency: string;
  uptime: string;
  icon: React.ElementType;
  description: string;
}

const initialServices: ServiceStatus[] = [
  {
    name: 'VYRON Live Session',
    status: 'operational',
    latency: '80ms',
    uptime: '99.99%',
    icon: Activity,
    description: 'Active streaming server routing client command contexts.',
  },
  {
    name: 'Google Gemini Pro Gateway',
    status: 'operational',
    latency: '310ms',
    uptime: '99.95%',
    icon: Zap,
    description: 'Primary vision and system command orchestration engine.',
  },
  {
    name: 'Groq Instant LPU',
    status: 'operational',
    latency: '135ms',
    uptime: '99.98%',
    icon: Cpu,
    description: 'Ultra-fast inference routing split-second voice intent loops.',
  },
  {
    name: 'Tavily Crawler API',
    status: 'operational',
    latency: '190ms',
    uptime: '99.91%',
    icon: Globe,
    description: 'Web crawls and synthetic internet research integration.',
  },
  {
    name: 'Licensing & Updates',
    status: 'operational',
    uptime: '100%',
    latency: '45ms',
    icon: Server,
    description: 'Manages updates and Pro Nexus license verification.',
  },
];

const recentIncidents = [
  {
    date: 'May 12, 2026',
    title: 'Minor Gemini API Latency Spike',
    status: 'resolved',
    description: 'Brief spike in latency due to upstream server routine maintenance. Core functionalities remained active. Resolved in 8 minutes.',
  },
  {
    date: 'Apr 24, 2026',
    title: 'Voice Synthesizer Tuning',
    status: 'resolved',
    description: 'Scheduled backend audio model upgrades were deployed, resulting in 5 minutes of brief voice channel reconnections.',
  }
];

function StatusBadge({ status }: { status: string }) {
  const styles = {
    operational: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    degraded: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    down: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  };

  const labels = {
    operational: 'Operational',
    degraded: 'Degraded',
    down: 'Down',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase border ${styles[status as keyof typeof styles]}`}>
      {labels[status as keyof typeof labels]}
    </span>
  );
}

export default function StatusPage() {
  const [services, setServices] = useState(initialServices);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    setLastUpdated(new Date().toLocaleTimeString());
  }, []);

  const handleRefresh = () => {
    setLastUpdated(new Date().toLocaleTimeString());
  };

  return (
    <div className="relative bg-[#050505] min-h-screen text-white pt-36 pb-20 px-6 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.12)_0%,_transparent_60%)] pointer-events-none" />

      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 animate-float"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest px-3 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/5 text-[#a78bfa] uppercase">
            operational systems status
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-white">
            System <span className="text-[#a78bfa]" style={{ filter: 'drop-shadow(0 0 15px rgba(124,58,237,0.4))' }}>Operational</span>
          </h1>

          {/* Global Alert Bar */}
          <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-md select-none mt-6">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-dot" />
            <span className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
              All Systems Operational
            </span>
          </div>
        </motion.div>
      </section>

      {/* Services status board */}
      <section className="max-w-3xl mx-auto mb-20 relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-black text-white tracking-tight">Active Services</h2>
          <button
            onClick={handleRefresh}
            className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Refresh status
          </button>
        </div>

        {/* Services List */}
        <div className="space-y-4">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-2xl border border-zinc-800 bg-[#09090b]/80 backdrop-blur-md p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#7C3AED]/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-[#a78bfa] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-white text-base leading-none">{s.name}</h3>
                    <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">{s.description}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6">
                  <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#a78bfa]" /> {s.latency}
                    </span>
                    <span>{s.uptime} uptime</span>
                  </div>
                  <StatusBadge status={s.status} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {lastUpdated && (
          <p className="text-[10px] font-mono text-zinc-600 mt-4 text-right select-none">
            Last checked: {lastUpdated}
          </p>
        )}
      </section>

      {/* Uptime Chart Simulation */}
      <section className="max-w-3xl mx-auto mb-20 relative z-10">
        <h2 className="text-lg font-black text-white tracking-tight mb-6">30-Day Network Load</h2>
        <div className="rounded-3xl border border-zinc-800 bg-[#09090b]/60 backdrop-blur-md p-6 sm:p-8 space-y-4">
          <div className="flex items-end gap-1.5 h-20 select-none">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-emerald-500/50 hover:bg-emerald-400 hover:shadow-[0_0_10px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
                style={{ height: `${75 + Math.random() * 25}%` }}
                title={`Day ${i + 1}: 99.98%`}
              />
            ))}
          </div>
          <div className="flex justify-between text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            <span>30 days ago</span>
            <span>Live today</span>
          </div>
        </div>
      </section>

      {/* Incidents Board */}
      <section className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-lg font-black text-white tracking-tight mb-6">Incident History</h2>
        <div className="space-y-4">
          {recentIncidents.map((incident) => (
            <div
              key={incident.title}
              className="rounded-3xl border border-zinc-850 bg-[#09090b]/50 p-6 space-y-3 hover:border-zinc-800 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-bold text-white text-base tracking-tight leading-none">{incident.title}</h3>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider shrink-0">{incident.date}</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed">{incident.description}</p>
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold uppercase font-mono">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> Resolved
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
