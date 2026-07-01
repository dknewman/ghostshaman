import Link from 'next/link'
import Image from 'next/image'

interface Video {
  id: string
  title: string
  category: string
  views: string
  timeAgo: string
  duration: string
  color: string
}

const categoryLabel: Record<string, string> = {
  'scam-baiting': 'SCAM BAITING',
  'tech-tips': 'TECH TIPS',
  'privacy-security': 'PRIVACY & SECURITY',
  'live-calls': 'LIVE CALLS',
}

// Map each category to a status badge from the asset pack
const categoryBadge: Record<string, string> = {
  'scam-baiting': '/assets/07-video/badge-fail.png',
  'tech-tips': '/assets/07-video/badge-tip.png',
  'privacy-security': '/assets/07-video/badge-alert.png',
  'live-calls': '/assets/07-video/badge-live.png',
}

export default function VideoCard({ video }: { video: Video }) {
  const badge = categoryBadge[video.category]

  return (
    <Link href={`/videos/${video.id}`} className="group block">
      <div className="border border-[#1f1f1f] rounded overflow-hidden bg-[#121212] hover:border-[#547A0055] transition-all duration-200 hover:shadow-[0_0_14px_rgba(84,122,0,0.35)]">
        {/* Composed thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          {/* base texture */}
          <div
            className="absolute inset-0"
            style={{ backgroundImage: "url('/assets/05-backgrounds/bg-tech-grid.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          {/* color tint */}
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center, ${video.color}cc 0%, #050505ee 100%)` }} />
          {/* green energy frame */}
          <div className="absolute inset-0 opacity-60 mix-blend-screen" style={{ backgroundImage: "url('/assets/07-video/thumbnail-overlay.png')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
          {/* status badge */}
          <div className="absolute inset-0 flex items-center justify-center p-2">
            <div className="relative w-[62%] h-[62%] transition-transform duration-300 group-hover:scale-105">
              <Image src={badge} alt="" fill sizes="200px" className="object-contain mix-blend-screen drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]" />
            </div>
          </div>
          {/* category badge */}
          <span className="absolute top-2 left-2 z-10 font-mono text-[9px] tracking-widest text-[#7FAF16] border border-[#547A0060] bg-[#050505]/80 px-2 py-0.5 rounded">
            {categoryLabel[video.category] || video.category.toUpperCase()}
          </span>
          {/* duration */}
          <span className="absolute bottom-2 right-2 z-10 font-mono text-xs text-white bg-black/75 px-1.5 py-0.5 rounded">
            {video.duration}
          </span>
        </div>
        {/* Info */}
        <div className="p-3">
          <h3 className="text-white text-sm font-semibold leading-snug line-clamp-2 group-hover:text-[#7FAF16] transition-colors">
            {video.title}
          </h3>
          <p className="text-[#666] text-xs mt-1.5 font-mono">
            {video.views} views · {video.timeAgo}
          </p>
        </div>
      </div>
    </Link>
  )
}
