'use client'
import { useState } from 'react'
import GlowButton from '@/components/ui/GlowButton'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="border border-[#39ff1430] rounded bg-[#001a00]/30 p-8 text-center">
        <div className="text-4xl mb-4">👻</div>
        <h3 className="font-display text-lg text-[#39ff14] tracking-wider mb-2">Message Received</h3>
        <p className="text-[#888] text-sm">We&apos;ll get back to you soon. Stay vigilant out there.</p>
        <button
          onClick={() => { setForm({ name: '', email: '', subject: '', message: '' }); setSubmitted(false) }}
          className="mt-6 font-display text-xs tracking-widest text-[#555] hover:text-white transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  const inputCls = 'w-full bg-[#111] border border-[#1f1f1f] rounded px-4 py-3 text-[#e0e0e0] text-sm placeholder:text-[#444] focus:outline-none focus:border-[#39ff1460] transition-colors'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="font-display text-[10px] tracking-widest text-[#555] mb-1.5 block">NAME</label>
          <input
            type="text"
            required
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputCls}
          />
        </div>
        <div>
          <label className="font-display text-[10px] tracking-widest text-[#555] mb-1.5 block">EMAIL</label>
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputCls}
          />
        </div>
      </div>
      <div>
        <label className="font-display text-[10px] tracking-widest text-[#555] mb-1.5 block">SUBJECT</label>
        <input
          type="text"
          required
          placeholder="What's this about?"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className={inputCls}
        />
      </div>
      <div>
        <label className="font-display text-[10px] tracking-widest text-[#555] mb-1.5 block">MESSAGE</label>
        <textarea
          required
          rows={5}
          placeholder="Tell us everything..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputCls} resize-none`}
        />
      </div>
      <GlowButton type="submit" size="lg" className="w-full">
        Send Message →
      </GlowButton>
    </form>
  )
}
