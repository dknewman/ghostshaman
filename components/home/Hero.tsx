import Image from 'next/image'
import GlowButton from '@/components/ui/GlowButton'

const features = [
  { label: 'EXPOSE', desc: 'We call out scammers and their tactics.', icon: '/assets/04-icons/icon-expose.png' },
  { label: 'PROTECT', desc: 'Tips, tools and info to keep you safe.', icon: '/assets/04-icons/icon-protect.png' },
  { label: 'EDUCATE', desc: 'Knowledge is power. We share it.', icon: '/assets/04-icons/icon-educate.png' },
  { label: 'ENTERTAIN', desc: 'Real calls. Real scams. No BS.', icon: '/assets/04-icons/icon-entertain.png' },
]

const stats = [
  { value: '1000+', label: 'Scams Exposed' },
  { value: '500K+', label: 'Followers' },
  { value: '5+', label: 'Years Online' },
  { value: '24/7', label: 'On the Hunt' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background texture + glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{ backgroundImage: "url('/assets/05-backgrounds/bg-grunge-dark.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-[#547A00] opacity-[0.05] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <h1 className="font-display text-5xl md:text-6xl xl:text-7xl leading-[0.95] uppercase">
                <span className="text-white block">Exposing Scams.</span>
                <span className="text-[#7FAF16] block glow-green">Protecting People.</span>
              </h1>
              <p className="mt-4 text-[#A6A6A6] font-mono text-xs md:text-sm tracking-[0.25em]">
                SCAM BAITING • TECH • PRIVACY • SECURITY
              </p>
            </div>

            <GlowButton href="/videos" size="lg">
              ▶ Watch Latest Videos
            </GlowButton>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="border border-[#1f1f1f] bg-[#121212] rounded p-3 flex gap-3 items-center hover:border-[#547A0055] transition-colors"
                >
                  <span className="relative block w-9 h-9 flex-shrink-0">
                    <Image src={f.icon} alt="" fill sizes="36px" className="object-contain mix-blend-screen" />
                  </span>
                  <div>
                    <p className="font-display text-base text-[#7FAF16] tracking-wider leading-none mb-1">{f.label}</p>
                    <p className="text-[#A6A6A6] text-xs leading-snug">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — mascot */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-[440px] md:h-[440px]">
              <div className="absolute inset-0 rounded-full bg-[#547A00] opacity-[0.07] blur-2xl scale-90" />
              <Image
                src="/assets/02-mascots/mascot-hero-center.png"
                alt="GhostShaman"
                fill
                sizes="(max-width: 768px) 288px, 440px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative border-t border-[#1f1f1f] mt-12 bg-[#0C0C0C]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="font-display text-3xl md:text-4xl text-white leading-none">{s.value}</span>
              <span className="text-[#666] font-mono text-[10px] tracking-widest uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
