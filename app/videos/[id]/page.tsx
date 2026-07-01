import { videos } from '@/lib/data'
import VideoCard from '@/components/videos/VideoCard'
import GlowButton from '@/components/ui/GlowButton'
import { notFound } from 'next/navigation'

export default async function VideoDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const video = videos.find((v) => v.id === id)
  if (!video) notFound()

  const upNext = videos.filter((v) => v.id !== id).slice(0, 5)

  const categoryLabel: Record<string, string> = {
    'scam-baiting': 'SCAM BAITING',
    'tech-tips': 'TECH TIPS',
    'privacy-security': 'PRIVACY & SECURITY',
    'live-calls': 'LIVE CALLS',
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main player */}
        <div className="lg:col-span-2">
          {/* Video player mock */}
          <div
            className="relative aspect-video rounded overflow-hidden flex items-center justify-center"
            style={{ background: `radial-gradient(ellipse at center, ${video.color} 0%, #050505 100%)` }}
          >
            <div className="w-20 h-20 rounded-full border-2 border-[#39ff14] flex items-center justify-center bg-[#39ff1410]">
              <span className="text-[#39ff14] text-3xl ml-1">▶</span>
            </div>
            <span className="absolute bottom-3 right-3 font-display text-sm text-white bg-black/70 px-2 py-1 rounded">
              {video.duration}
            </span>
            <span className="absolute top-3 left-3 font-display text-[10px] tracking-widest text-[#39ff14] border border-[#39ff1450] bg-[#080808]/80 px-2 py-0.5 rounded">
              {categoryLabel[video.category]}
            </span>
          </div>

          {/* Video info */}
          <div className="mt-4">
            <h1 className="font-display text-lg md:text-xl font-bold text-white leading-snug">{video.title}</h1>
            <p className="text-[#555] text-sm mt-1">{video.views} views · {video.timeAgo}</p>

            <div className="flex items-center justify-between mt-4 pb-4 border-b border-[#1f1f1f]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#39ff1430] flex items-center justify-center text-[#39ff14] font-display text-xs font-bold">
                  GS
                </div>
                <div>
                  <p className="text-white text-sm font-medium">GhostShaman</p>
                  <p className="text-[#555] text-xs">500K+ subscribers</p>
                </div>
              </div>
              <GlowButton size="sm">Subscribe</GlowButton>
            </div>

            <div className="mt-4 bg-[#111] rounded p-4">
              <p className="text-[#888] text-sm leading-relaxed">
                Watch as GhostShaman takes on another scammer in this episode. Full exposure, real reactions, and the tactics they use to steal from innocent people — all laid bare. Stay vigilant, stay safe.
              </p>
              <p className="text-[#555] text-xs mt-3">
                #scambaiting #scammerbewareaware #ghostshaman
              </p>
            </div>
          </div>
        </div>

        {/* Up Next sidebar */}
        <div>
          <h3 className="font-display text-xs text-[#39ff14] tracking-widest mb-4">UP NEXT</h3>
          <div className="flex flex-col gap-3">
            {upNext.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
