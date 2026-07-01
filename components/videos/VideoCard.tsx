import Link from 'next/link'

interface Video {
  id: string
  title: string
  category: string
  views: string
  timeAgo: string
  duration: string
  color: string
}

export default function VideoCard({ video }: { video: Video }) {
  const categoryLabel: Record<string, string> = {
    'scam-baiting': 'SCAM BAITING',
    'tech-tips': 'TECH TIPS',
    'privacy-security': 'PRIVACY & SECURITY',
    'live-calls': 'LIVE CALLS',
  }

  return (
    <Link href={`/videos/${video.id}`} className="group block">
      <div className="border border-[#1f1f1f] rounded overflow-hidden bg-[#111] hover:border-[#39ff1430] transition-all duration-200 hover:shadow-[0_0_15px_#39ff1415]">
        {/* Thumbnail */}
        <div
          className="relative aspect-video flex items-center justify-center"
          style={{ background: `radial-gradient(ellipse at center, ${video.color} 0%, #0a0a0a 100%)` }}
        >
          {/* Category badge */}
          <span className="absolute top-2 left-2 font-display text-[9px] tracking-widest text-[#39ff14] border border-[#39ff1450] bg-[#080808]/80 px-2 py-0.5 rounded">
            {categoryLabel[video.category] || video.category.toUpperCase()}
          </span>
          {/* Duration */}
          <span className="absolute bottom-2 right-2 font-display text-xs text-white bg-black/70 px-1.5 py-0.5 rounded">
            {video.duration}
          </span>
          {/* Play icon */}
          <div className="w-12 h-12 rounded-full border-2 border-[#39ff14] flex items-center justify-center group-hover:bg-[#39ff1420] transition-colors">
            <span className="text-[#39ff14] text-lg ml-1">▶</span>
          </div>
        </div>
        {/* Info */}
        <div className="p-3">
          <h3 className="text-white text-sm font-medium leading-snug line-clamp-2 group-hover:text-[#39ff14] transition-colors">
            {video.title}
          </h3>
          <p className="text-[#555] text-xs mt-1.5">
            {video.views} views · {video.timeAgo}
          </p>
        </div>
      </div>
    </Link>
  )
}
