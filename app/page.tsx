import Hero from '@/components/home/Hero'
import { videos } from '@/lib/data'
import VideoCard from '@/components/videos/VideoCard'
import SectionHeading from '@/components/ui/SectionHeading'
import GlowButton from '@/components/ui/GlowButton'

export default function Home() {
  const featured = videos.slice(0, 3)

  return (
    <>
      <Hero />

      {/* Latest Videos teaser */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <SectionHeading title="Latest Videos" subtitle="The freshest scam busts, tech tips, and live call carnage." />
          <GlowButton href="/videos" variant="outline" size="sm" className="hidden md:inline-flex">
            View All
          </GlowButton>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
        <div className="mt-8 flex justify-center md:hidden">
          <GlowButton href="/videos" variant="outline">View All Videos</GlowButton>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="border-t border-b border-[#1f1f1f] bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 text-center">
          <p className="font-display text-xs text-[#39ff14] tracking-[0.4em] mb-4">GOT A TIP?</p>
          <h2 className="font-display text-2xl md:text-3xl font-black text-white uppercase mb-4">
            Send Us a Scammer
          </h2>
          <p className="text-[#666] mb-8 max-w-md mx-auto">
            Spotted a scam? Have a number we should call? Send it in — we want it.
          </p>
          <GlowButton href="/contact" size="lg">Submit a Tip</GlowButton>
        </div>
      </section>
    </>
  )
}
