import Image from 'next/image'
import GlowButton from '@/components/ui/GlowButton'

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
      {/* 404 mascot */}
      <div className="relative w-56 h-56 md:w-64 md:h-64 mb-4">
        <div className="absolute inset-0 rounded-full bg-[#547A00] opacity-[0.08] blur-2xl" />
        <Image
          src="/assets/02-mascots/mascot-404-ghost.png"
          alt=""
          fill
          sizes="256px"
          className="object-contain"
        />
      </div>

      <h1
        className="font-display text-[110px] md:text-[170px] leading-none text-white"
        style={{ textShadow: '0 0 40px rgba(166,204,29,0.25)' }}
      >
        404
      </h1>
      <p className="font-display text-2xl md:text-3xl text-[#7FAF16] tracking-widest mb-3 uppercase glow-green">
        Page Not Found
      </p>
      <p className="text-[#A6A6A6] text-sm max-w-sm mb-8">
        Looks like this page disappeared...<br />Maybe the scammers took it.
      </p>
      <GlowButton href="/" size="lg">Go Home</GlowButton>
    </div>
  )
}
