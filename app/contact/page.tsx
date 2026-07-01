import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'
import ContactForm from '@/components/contact/ContactForm'
import Watermark from '@/components/ui/Watermark'

export const metadata = {
  title: 'Contact — GhostShaman',
}

const socials = [
  { label: 'YouTube', href: '#', src: '/assets/04-icons/icon-youtube.png' },
  { label: 'Discord', href: '#', src: '/assets/04-icons/icon-discord.png' },
  { label: 'X', href: '#', src: '/assets/04-icons/icon-x.png' },
  { label: 'Instagram', href: '#', src: '/assets/04-icons/icon-instagram.png' },
]

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <Watermark src="/assets/02-mascots/mascot-hero-side.png" className="top-10 right-0 w-72 h-72 md:w-[420px] md:h-[420px] mr-0" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <SectionHeading title="Get in Touch" subtitle="Questions, tips, or want to work together? Reach out." />
            <ContactForm />
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="border border-[#1f1f1f] rounded bg-[#121212] p-6 space-y-5">
              <h3 className="font-display text-lg text-[#7FAF16] tracking-widest">OTHER WAYS TO CONNECT</h3>
              {[
                { label: 'TIPS & LEADS', email: 'tips@ghostshaman.com', desc: 'Got info on a scammer? Send it in.' },
                { label: 'BUSINESS INQUIRIES', email: 'business@ghostshaman.com', desc: 'Partnerships, sponsorships, and collaborations.' },
                { label: 'GENERAL CONTACT', email: 'hello@ghostshaman.com', desc: "Anything else? We'll get back to you." },
              ].map((item) => (
                <div key={item.label} className="border-t border-[#1f1f1f] pt-4 first:border-0 first:pt-0">
                  <p className="font-display text-sm tracking-widest text-[#7FAF16] mb-1">{item.label}</p>
                  <a href={`mailto:${item.email}`} className="text-white text-sm hover:text-[#7FAF16] transition-colors">{item.email}</a>
                  <p className="text-[#666] text-xs mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="border border-[#1f1f1f] rounded bg-[#121212] p-6">
              <h3 className="font-display text-lg text-[#7FAF16] tracking-widest mb-4">FOLLOW THE HUNT</h3>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label} className="relative block w-11 h-11 opacity-75 hover:opacity-100 transition-opacity">
                    <Image src={s.src} alt={s.label} fill sizes="44px" className="object-contain mix-blend-screen" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
