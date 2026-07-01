import Image from 'next/image'
import GlowButton from '@/components/ui/GlowButton'

const features = [
  { label: 'EXPOSE', desc: 'We call out scammers and their tactics.' },
  { label: 'PROTECT', desc: 'Tips, tools and info to keep you safe.' },
  { label: 'EDUCATE', desc: 'Knowledge is power. We share it.' },
  { label: 'ENTERTAIN', desc: 'Real calls. Real scams. No BS.' },
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
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-[#39ff14] opacity-[0.03] blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#39ff14] opacity-[0.02] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <h1 className="font-display font-black text-4xl md:text-5xl xl:text-6xl leading-tight uppercase tracking-wide">
                <span className="text-white block">Exposing Scams.</span>
                <span className="text-[#ffd700] block" style={{ textShadow: '0 0 30px #ffd70040' }}>
                  Protecting People.
                </span>
              </h1>
              <p className="mt-4 text-[#39ff14] font-display text-xs md:text-sm tracking-[0.3em] font-medium">
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
                  className="border border-[#1f1f1f] bg-[#111] rounded p-3 flex gap-3 items-start hover:border-[#39ff1430] transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-[#39ff14] mt-1.5 flex-shrink-0 shadow-[0_0_6px_#39ff14]" />
                  <div>
                    <p className="font-display text-xs text-[#39ff14] tracking-widest mb-0.5">{f.label}</p>
                    <p className="text-[#888] text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — skull mascot */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-80 md:w-96 md:h-[480px]">
              <div className="absolute inset-0 rounded-full bg-[#39ff14] opacity-[0.06] blur-2xl scale-75" />
              <Image
                src="/assets/skull-mascot.svg"
                alt="GhostShaman Mascot"
                fill
                className="object-contain drop-shadow-[0_0_40px_#39ff1430]"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-t border-[#1f1f1f] mt-12 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="font-display text-xl md:text-2xl font-black text-white">{s.value}</span>
              <span className="text-[#555] text-xs tracking-widest uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
