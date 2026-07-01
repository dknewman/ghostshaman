import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'
import GlowButton from '@/components/ui/GlowButton'

export const metadata = {
  title: 'About — GhostShaman',
}

const stats = [
  { value: '1000+', label: 'Scams Exposed' },
  { value: '500K+', label: 'Followers' },
  { value: '5+', label: 'Years Online' },
  { value: '24/7', label: 'On the Hunt' },
]

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Text */}
        <div>
          <SectionHeading title="GhostShaman?" greenWord="Who is" />
          <div className="space-y-4 text-[#888] leading-relaxed">
            <p>
              I expose scammers, share security knowledge, and build tools to help people stay one step ahead. This channel is about awareness, entertainment, and making the internet a safer place.
            </p>
            <p>
              Whether it&apos;s IRS impostors, tech support fraudsters, romance scammers, or crypto grifters — they all get the same treatment here: full exposure, real consequences, and a community that fights back.
            </p>
            <p>
              After 5+ years on the hunt, 1000+ scammers exposed, and 500K+ people reached, the mission hasn&apos;t changed. We keep going until the internet is a little safer for everyone.
            </p>
            <p className="text-[#e0e0e0] italic border-l-2 border-[#7FAF16] pl-4">
              &mdash; GhostShaman
            </p>
          </div>
          <div className="mt-8 flex gap-4 flex-wrap">
            <GlowButton href="/videos">Watch Videos</GlowButton>
            <GlowButton href="/contact" variant="outline">Get in Touch</GlowButton>
          </div>
        </div>

        {/* Mascot */}
        <div className="relative flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-[#547A00] opacity-[0.06] blur-2xl" />
            <Image
              src="/assets/02-mascots/mascot-hero-side.png"
              alt="GhostShaman"
              fill
              sizes="(max-width: 768px) 288px, 384px"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border border-[#1f1f1f] rounded bg-[#0d0d0d] p-8 mb-16">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-2xl md:text-3xl font-black text-white">{s.value}</p>
            <p className="text-[#555] text-xs tracking-widest uppercase mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Mission */}
      <div className="border border-[#1f1f1f] rounded bg-[#111] p-8 md:p-10">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded bg-[#1a1a1a] border border-[#547A0055] flex items-center justify-center flex-shrink-0">
            <span className="text-[#7FAF16] text-lg">👻</span>
          </div>
          <div>
            <h3 className="font-display text-sm text-[#7FAF16] tracking-widest mb-1">THE MISSION</h3>
            <p className="text-[#888] leading-relaxed">
              Expose the bad guys. Protect the good people. Educate and entertain along the way. Together, we make the internet a harder place for scammers to thrive.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {[
            { title: 'EXPOSE', desc: 'Every scammer exposed is one less predator online. We document, record, and publish.' },
            { title: 'PROTECT', desc: 'Tools, tips, and guides to harden yourself against modern scams and threats.' },
            { title: 'EDUCATE', desc: 'An informed community is a protected community. Knowledge is the best defense.' },
          ].map((item) => (
            <div key={item.title} className="border border-[#1f1f1f] rounded p-4">
              <p className="font-display text-xs text-[#7FAF16] tracking-widest mb-2">{item.title}</p>
              <p className="text-[#666] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
