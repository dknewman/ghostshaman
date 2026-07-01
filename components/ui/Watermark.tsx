import Image from 'next/image'

// Faint decorative watermark anchored to a page-header corner (matches mock).
export default function Watermark({
  src = '/assets/02-mascots/mascot-hooded.png',
  className = '',
}: {
  src?: string
  className?: string
}) {
  return (
    <div
      aria-hidden
      className={`absolute pointer-events-none select-none opacity-[0.06] ${className}`}
    >
      <Image src={src} alt="" fill sizes="320px" className="object-contain" />
    </div>
  )
}
