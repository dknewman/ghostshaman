import GlowButton from '@/components/ui/GlowButton'

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24">
      <div className="relative mb-6">
        <div className="absolute inset-0 blur-3xl bg-[#39ff14] opacity-[0.05] rounded-full scale-150" />
        <h1
          className="font-display text-[120px] md:text-[180px] font-black leading-none"
          style={{ color: '#ffd700', textShadow: '0 0 40px #ffd70030' }}
        >
          404
        </h1>
      </div>
      <p className="font-display text-xl md:text-2xl text-[#39ff14] tracking-widest mb-3 uppercase">
        Page Not Found
      </p>
      <p className="text-[#555] text-sm max-w-sm mb-8">
        Looks like this page disappeared...<br />Maybe the scammers took it.
      </p>
      <GlowButton href="/" size="lg">Go Home</GlowButton>
    </div>
  )
}
