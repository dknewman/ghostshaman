import { ReactElement } from 'react'

interface Tool {
  id: string
  title: string
  description: string
  cta: string
  icon: string
}

function ToolIcon({ icon }: { icon: string }) {
  const icons: Record<string, ReactElement> = {
    checklist: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    shield: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    lock: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    link: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
    database: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    flag: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
      </svg>
    ),
  }
  return icons[icon] || icons.link
}

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="border border-[#1f1f1f] rounded bg-[#111] p-5 flex flex-col gap-4 hover:border-[#39ff1430] hover:shadow-[0_0_15px_#39ff1415] transition-all duration-200 group">
      <div className="w-10 h-10 rounded bg-[#1a1a1a] border border-[#1f1f1f] flex items-center justify-center text-[#39ff14] group-hover:border-[#39ff1430] transition-colors">
        <ToolIcon icon={tool.icon} />
      </div>
      <div className="flex-1">
        <h3 className="font-display text-sm text-white tracking-wider mb-2">{tool.title}</h3>
        <p className="text-[#666] text-xs leading-relaxed">{tool.description}</p>
      </div>
      <button className="self-start font-display text-[10px] tracking-widest text-[#39ff14] border border-[#39ff1450] px-3 py-1.5 rounded hover:bg-[#39ff1415] transition-colors">
        {tool.cta}
      </button>
    </div>
  )
}
