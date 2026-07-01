import Image from 'next/image'
import GlowButton from '@/components/ui/GlowButton'

const features = [
  { label: 'EXPOSE', desc: 'We call out scammers and their tactics.', icon: '/assets/04-icons/icon-expose.png' },
  { label: 'PROTECT', desc: 'Tips, tools and info to keep you safe.', icon: '/assets/04-icons/icon-protect.png' },
  { label: 'EDUCATE', desc: 'Knowledge is power. We share it.', icon: '/assets/04-icons/icon-educate.png' },
  { label: 'ENTERTAIN', desc: 'Real calls. Real scams. No BS.', icon: '/assets/04-icons/icon-entertain.png' },
]

const stats = [
  { value: '1000+', label: 'Scams Exposed', icon: 'skull' },
  { value: '500K+', label: 'Followers', icon: 'users' },
  { value: '5+', label: 'Years Online', icon: 'star' },
  { value: '24/7', label: 'On the Hunt', icon: 'clock' },
]

function StatIcon({ name }: { name: string }) {
  const p = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  switch (name) {
    case 'users':
      return <svg {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    case 'star':
      return <svg {...p}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
    case 'clock':
      return <svg {...p}><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" /></svg>
    default: // skull
      return <svg {...p}><path d="M12 2a8 8 0 0 0-8 8c0 2.5 1 4 2 5v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3c1-1 2-2.5 2-5a8 8 0 0 0-8-8Z" /><circle cx="9" cy="10" r="1.4" fill="currentColor" /><circle cx="15" cy="10" r="1.4" fill="currentColor" /><path d="M10 17v2M14 17v2" /></svg>
  }
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#1f1f1f]">
      {/* Background texture + smoke + glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{ backgroundImage: "url('/assets/05-backgrounds/bg-grunge-dark.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-y-0 right-0 w-2/3 opacity-40 mix-blend-screen"
          style={{ backgroundImage: "url('/assets/03-smoke/smoke-swirl.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute top-1/4 right-1/3 w-[520px] h-[520px] rounded-full bg-[#547A00] opacity-[0.06] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 pt-14 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left — headline + CTA */}
          <div className="lg:col-span-5 space-y-7 order-2 lg:order-1">
            <div>
              {/* Accessible heading (visually hidden) */}
              <h1 className="sr-only">Exposing Scams. Protecting People.</h1>
              <Image
                src="/assets/09-page-graphics/hero-headline.png"
                alt="Exposing Scams. Protecting People."
                width={530}
                height={200}
                priority
                aria-hidden
                className="w-full max-w-[520px] h-auto mix-blend-screen"
              />
              <p className="mt-3 text-[#A6A6A6] font-mono text-[11px] md:text-xs tracking-[0.22em]">
                SCAM BAITING • TECH • PRIVACY • SECURITY
              </p>
            </div>

            <GlowButton href="/videos" size="lg">
              ▶ Watch Latest Videos
            </GlowButton>
          </div>

          {/* Center — mascot */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px]">
              <div className="absolute inset-0 rounded-full bg-[#547A00] opacity-[0.10] blur-2xl scale-90" />
              <Image
                src="/assets/02-mascots/mascot-hero-center.png"
                alt="GhostShaman"
                fill
                sizes="(max-width: 1024px) 320px, 380px"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right — feature column */}
          <div className="lg:col-span-3 order-3 space-y-3">
            {features.map((f) => (
              <div key={f.label} className="flex gap-3 items-start group">
                <span className="relative block w-10 h-10 flex-shrink-0">
                  <Image src={f.icon} alt="" fill sizes="40px" className="object-contain mix-blend-screen" />
                </span>
                <div className="pt-0.5">
                  <p className="font-display text-lg text-[#7FAF16] tracking-wide leading-none">{f.label}</p>
                  <p className="text-[#A6A6A6] text-xs leading-snug mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative border-t border-[#1f1f1f] bg-[#0C0C0C]/80">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3 justify-center md:justify-start">
              <span className="text-[#547A00]"><StatIcon name={s.icon} /></span>
              <div>
                <div className="font-display text-2xl md:text-3xl text-white leading-none">{s.value}</div>
                <div className="text-[#666] font-mono text-[10px] tracking-widest uppercase mt-0.5">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
