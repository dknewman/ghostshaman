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

function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"/>
    </svg>
  )
}

function DiscordIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.3 4.4A19.2 19.2 0 0 0 15.5 3c-.2.4-.5.9-.7 1.3a17.8 17.8 0 0 0-5.6 0C9 3.9 8.7 3.4 8.5 3A19.3 19.3 0 0 0 3.7 4.4C.5 9.3-.3 14 .1 18.6a19.4 19.4 0 0 0 5.9 3c.5-.7.9-1.4 1.3-2.2a12.6 12.6 0 0 1-2-.9l.5-.4a13.8 13.8 0 0 0 11.8 0l.5.4a12.6 12.6 0 0 1-2 1c.4.8.8 1.5 1.3 2.1a19.3 19.3 0 0 0 5.9-3c.5-5.2-.9-9.8-3.9-14.2zM8 15.5c-1.2 0-2.2-1.1-2.2-2.5s1-2.5 2.2-2.5 2.2 1.1 2.2 2.5-1 2.5-2.2 2.5zm8 0c-1.2 0-2.2-1.1-2.2-2.5s1-2.5 2.2-2.5 2.2 1.1 2.2 2.5-1 2.5-2.2 2.5z"/>
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.2 2h3.4l-7.4 8.5L23 22h-6.8l-5.3-7-6.1 7H1.5l7.9-9L1 2h7l4.8 6.3zm-1.2 18h1.9L7.1 4H5.1z"/>
    </svg>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-[#1f1f1f] bg-[#080808]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src="/assets/logo.svg" alt="GhostShaman" width={220} height={38} priority />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`font-display text-xs tracking-widest transition-colors duration-150 pb-0.5 ${
                  active
                    ? 'text-[#39ff14] border-b border-[#39ff14]'
                    : 'text-[#888] hover:text-white'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>

        {/* Social icons */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-[#666] hover:text-[#ff0000] transition-colors"><YoutubeIcon /></a>
          <a href="#" className="text-[#666] hover:text-[#5865F2] transition-colors"><DiscordIcon /></a>
          <a href="#" className="text-[#666] hover:text-white transition-colors"><XIcon /></a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#888] hover:text-white p-2"
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
        <div className="md:hidden border-t border-[#1f1f1f] bg-[#0d0d0d] px-4 py-4 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`font-display text-sm tracking-widest ${pathname === href ? 'text-[#39ff14]' : 'text-[#888]'}`}
            >
              {label}
            </Link>
          ))}
          <div className="flex gap-4 pt-2">
            <a href="#" className="text-[#666] hover:text-[#ff0000]"><YoutubeIcon /></a>
            <a href="#" className="text-[#666] hover:text-[#5865F2]"><DiscordIcon /></a>
            <a href="#" className="text-[#666] hover:text-white"><XIcon /></a>
          </div>
        </div>
      )}
    </nav>
  )
}
