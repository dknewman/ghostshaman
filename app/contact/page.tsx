import SectionHeading from '@/components/ui/SectionHeading'
import ContactForm from '@/components/contact/ContactForm'

export const metadata = {
  title: 'Contact — GhostShaman',
}

const socials = [
  { label: 'YouTube', href: '#', color: '#ff0000' },
  { label: 'Discord', href: '#', color: '#5865F2' },
  { label: 'X / Twitter', href: '#', color: '#ffffff' },
  { label: 'Instagram', href: '#', color: '#e1306c' },
]

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <SectionHeading title="Get in Touch" subtitle="Questions, tips, or want to work together? Reach out." />
          <ContactForm />
        </div>

        {/* Info */}
        <div className="space-y-8">
          <div className="border border-[#1f1f1f] rounded bg-[#111] p-6 space-y-5">
            <h3 className="font-display text-xs text-[#7FAF16] tracking-widest">OTHER WAYS TO CONNECT</h3>
            {[
              { label: 'TIPS & LEADS', email: 'tips@ghostshaman.com', desc: 'Got info on a scammer? Send it in.' },
              { label: 'BUSINESS INQUIRIES', email: 'business@ghostshaman.com', desc: 'Partnerships, sponsorships, and collaborations.' },
              { label: 'GENERAL CONTACT', email: 'hello@ghostshaman.com', desc: "Anything else? We'll get back to you." },
            ].map((item) => (
              <div key={item.label} className="border-t border-[#1f1f1f] pt-4 first:border-0 first:pt-0">
                <p className="font-display text-[10px] tracking-widest text-[#7FAF16] mb-1">{item.label}</p>
                <a href={`mailto:${item.email}`} className="text-white text-sm hover:text-[#7FAF16] transition-colors">{item.email}</a>
                <p className="text-[#555] text-xs mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="border border-[#1f1f1f] rounded bg-[#111] p-6">
            <h3 className="font-display text-xs text-[#7FAF16] tracking-widest mb-4">FOLLOW THE HUNT</h3>
            <div className="grid grid-cols-2 gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="border border-[#1f1f1f] rounded p-3 text-center text-sm text-[#888] hover:text-white hover:border-[#333] transition-all"
                  style={{ '--hover-color': s.color } as React.CSSProperties}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
