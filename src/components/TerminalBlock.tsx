'use client'
import { useEffect, useState } from 'react';

const LINES = [
  { text: '$ pip install vyron-ai', color: '#10B981', delay: 300 },
  { text: 'Resolving dependencies...', color: '#6B7280', delay: 1000 },
  { text: '[████████████████████] 100%', color: '#6B7280', delay: 1800 },
  { text: '✓ VYRON AI v1.2.1 installed successfully', color: '#F59E0B', delay: 2600 },
  { text: '$ python main.py', color: '#10B981', delay: 3400 },
  { text: '⚡ VYRON AI Online. Awaiting your command...', color: '#A855F7', delay: 4200 },
];

export default function TerminalBlock() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [cursor, setCursor] = useState(true);
  useEffect(() => {
    LINES.forEach((line, i) => {
      setTimeout(() => setVisibleLines(v => [...v, i]), line.delay);
    });
    const cursorInterval = setInterval(() => setCursor(c => !c), 500);
    return () => clearInterval(cursorInterval);
  }, []);
  return (
    <div className="rounded-xl border border-violet-900/40 overflow-hidden
      bg-[#0A0A18] font-mono text-sm max-w-2xl mx-auto">
      {/* Terminal chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#13132B]
        border-b border-violet-900/30">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-xs text-gray-500">vyron-ai — terminal</span>
      </div>
      {/* Lines */}
      <div className="p-5 space-y-1.5 min-h-[160px]">
        {LINES.map((line, i) => (
          visibleLines.includes(i) && (
            <p key={i} style={{ color: line.color }}>{line.text}</p>
          )
        ))}
        {visibleLines.length === LINES.length && (
          <span className="text-violet-400">{cursor ? '█' : ' '}</span>
        )}
      </div>
    </div>
  );
}
