import Image from 'next/image'

interface Tool {
  id: string
  title: string
  description: string
  cta: string
  icon: string
}

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="border border-[#1f1f1f] rounded bg-[#121212] p-5 flex flex-col gap-4 hover:border-[#547A0055] hover:shadow-[0_0_14px_rgba(84,122,0,0.35)] transition-all duration-200 group">
      <div className="relative w-12 h-12 flex-shrink-0">
        <Image
          src={tool.icon}
          alt=""
          fill
          sizes="48px"
          className="object-contain mix-blend-screen group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-display text-lg text-white tracking-wide mb-1.5">{tool.title}</h3>
        <p className="text-[#A6A6A6] text-xs leading-relaxed">{tool.description}</p>
      </div>
      <button className="self-start font-display text-sm tracking-widest text-[#7FAF16] border border-[#547A0060] px-3 py-1 rounded hover:bg-[#7FAF16]/10 hover:border-[#7FAF16] transition-colors">
        {tool.cta}
      </button>
    </div>
  )
}
