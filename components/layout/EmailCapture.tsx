'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) setJoined(true)
  }

  return (
    <div className="relative overflow-hidden border border-[#1f1f1f] rounded-lg bg-[#0C0C0C]">
      {/* green smoke atmosphere */}
      <div
        className="absolute inset-0 opacity-45 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: "url('/assets/03-smoke/smoke-ground.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* skull decoration (right) */}
      <div aria-hidden className="absolute -right-6 top-1/2 -translate-y-1/2 w-52 h-52 opacity-25 pointer-events-none hidden sm:block">
        <Image src="/assets/02-mascots/mascot-hero-center.png" alt="" fill sizes="208px" className="object-contain" />
      </div>

      <div className="relative flex flex-col md:flex-row items-center gap-6 px-6 py-8 md:px-10">
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-display text-2xl md:text-3xl text-[#7FAF16] tracking-wide uppercase glow-green">
            Stay Ahead of the Scammers.
          </h3>
          <p className="text-[#A6A6A6] text-sm mt-1">
            Join the newsletter — scam alerts, new videos, and safety tips. No spam.
          </p>
        </div>

        {joined ? (
          <p className="flex-shrink-0 font-display text-lg text-white tracking-wide">
            👻 You&apos;re in. Stay vigilant.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex-shrink-0 flex w-full md:w-auto gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-label="Email address"
              className="flex-1 md:w-64 bg-[#050505] border border-[#1f1f1f] rounded px-4 py-2.5 text-[#EDEDED] text-sm placeholder:text-[#555] focus:outline-none focus:border-[#547A0070] transition-colors"
            />
            <button
              type="submit"
              className="font-display text-base tracking-widest uppercase bg-[#547A00] text-white px-6 py-2.5 rounded-sm hover:bg-[#7FAF16] hover:shadow-[0_0_14px_rgba(166,204,29,0.45)] transition-all active:scale-95"
            >
              Join
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
