'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/videos', label: 'VIDEOS' },
  { href: '/about', label: 'ABOUT' },
  { href: '/merch', label: 'MERCH' },
  { href: '/tools', label: 'TOOLS' },
  { href: '/contact', label: 'CONTACT' },
]

const socials = [
  { href: '#', src: '/assets/04-icons/icon-youtube.png', label: 'YouTube' },
  { href: '#', src: '/assets/04-icons/icon-discord.png', label: 'Discord' },
  { href: '#', src: '/assets/04-icons/icon-x.png', label: 'X' },
]

function SocialIcon({ src, label }: { src: string; label: string }) {
  return (
    <span className="relative block w-7 h-7 opacity-70 hover:opacity-100 transition-opacity">
      <Image src={src} alt={label} fill sizes="28px" className="object-contain mix-blend-screen" />
    </span>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-[#1f1f1f] bg-[#050505]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/assets/01-brand/ghostshaman-wordmark.png"
            alt="GhostShaman"
            width={180}
            height={54}
            priority
            className="w-[140px] md:w-[168px] h-auto mix-blend-screen"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`font-body font-semibold text-sm tracking-[0.15em] transition-colors duration-150 pb-0.5 ${
                  active
                    ? 'text-[#7FAF16] border-b-2 border-[#7FAF16]'
                    : 'text-[#A6A6A6] hover:text-white'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>

        {/* Social icons */}
        <div className="hidden md:flex items-center gap-2">
          {socials.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label}>
              <SocialIcon src={s.src} label={s.label} />
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#A6A6A6] hover:text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-5 space-y-1">
            <span className={`block h-0.5 bg-current transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#1f1f1f] bg-[#0C0C0C] px-4 py-4 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`font-body font-semibold text-sm tracking-[0.15em] ${pathname === href ? 'text-[#7FAF16]' : 'text-[#A6A6A6]'}`}
            >
              {label}
            </Link>
          ))}
          <div className="flex gap-3 pt-2">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}>
                <SocialIcon src={s.src} label={s.label} />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
