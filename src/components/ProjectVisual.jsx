import { Brain, Code2, Eye, LineChart, Mic, ScanFace } from 'lucide-react';

const visualMap = {
  interview: {
    icon: Mic,
    title: 'AI Interview Console',
    rows: ['Resume scan: ready', 'Question engine: active', 'Simulation: live'],
  },
  vision: {
    icon: ScanFace,
    title: 'Vision Recognition',
    rows: ['Face vectors', 'Attendance match', 'Review queue'],
  },
  ml: {
    icon: Brain,
    title: 'Model Notebook',
    rows: ['Dataset loaded', 'Training cells', 'Evaluation notes'],
  },
  web: {
    icon: Code2,
    title: 'Interactive Web App',
    rows: ['Routes', 'Questions', 'User flow'],
  },
};

export default function ProjectVisual({ type = 'web', title }) {
  const visual = visualMap[type] ?? visualMap.web;
  const Icon = visual.icon;

  return (
    <div className="project-visual" role="img" aria-label={`${title} visual concept`}>
      <div className="visual-toolbar">
        <span />
        <span />
        <span />
      </div>
      <div className="grid gap-4 p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-cyan/80">{visual.title}</p>
            <p className="mt-1 text-lg font-semibold text-white">{title}</p>
          </div>
          <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan/30 bg-cyan/10 text-cyan">
            <Icon size={24} aria-hidden="true" />
          </div>
        </div>
        <div className="grid gap-2">
          {visual.rows.map((row) => (
            <div key={row} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
              <span className="text-sm text-slate-300">{row}</span>
              <span className="h-2 w-16 rounded-full bg-gradient-to-r from-cyan to-violet opacity-70" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <Eye size={16} className="mb-3 text-cyan" />
            <span className="block h-2 rounded-full bg-white/20" />
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <LineChart size={16} className="mb-3 text-violet" />
            <span className="block h-2 rounded-full bg-white/20" />
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <Code2 size={16} className="mb-3 text-cyan" />
            <span className="block h-2 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    </div>
  );
}
