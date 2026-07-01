import Image from 'next/image'
import GlowButton from '@/components/ui/GlowButton'

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 relative overflow-hidden">
      {/* faint skull watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.05]">
        <div className="relative w-[420px] h-[420px]">
          <Image src="/assets/02-mascots/mascot-404-ghost.png" alt="" fill sizes="420px" className="object-contain" />
        </div>
      </div>

      <h1 className="sr-only">404 — Page Not Found</h1>

      {/* Brush 404 graphic */}
      <div className="relative w-[320px] h-[195px] md:w-[440px] md:h-[268px] mb-4">
        <Image
          src="/assets/09-page-graphics/error-404-graphic.png"
          alt="404 — Page Not Found"
          fill
          sizes="(max-width: 768px) 320px, 440px"
          className="object-contain mix-blend-screen"
          priority
        />
      </div>

      <p className="relative text-[#A6A6A6] text-sm max-w-sm mb-8">
        Looks like this page disappeared...<br />Maybe the scammers took it.
      </p>
      <GlowButton href="/" size="lg">Go Home</GlowButton>
    </div>
  )
}
