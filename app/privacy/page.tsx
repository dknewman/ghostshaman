import SectionHeading from '@/components/ui/SectionHeading'
import Watermark from '@/components/ui/Watermark'

export const metadata = { title: 'Privacy Policy — GhostShaman' }

export default function PrivacyPage() {
  return (
    <div className="relative overflow-hidden">
      <Watermark src="/assets/08-merch/sticker-lock.png" className="top-12 right-4 w-52 h-52 md:w-72 md:h-72" />
      <div className="relative max-w-3xl mx-auto px-4 md:px-6 py-12">
        <SectionHeading title="Privacy Policy" />
      <p className="text-[#555] text-sm mb-8">Last updated: May 20, 2024</p>
      <div className="space-y-6 text-[#888] text-sm leading-relaxed">
        <p>Your privacy matters. This policy explains how we collect, use, and protect your information.</p>
        {[
          { title: '1. INFORMATION WE COLLECT', body: 'We may collect basic information you provide (like email) and anonymous usage data through cookies and analytics.' },
          { title: '2. HOW WE USE IT', body: 'We use your information to improve our content, respond to inquiries, and send updates (if you opt in).' },
          { title: '3. COOKIES', body: 'We use cookies to understand site visitors and enhance your experience.' },
          { title: '4. YOUR CHOICES', body: 'You can opt out of emails at any time. You can also disable cookies in your browser.' },
          { title: '5. CONTACT', body: 'For any questions, contact us at hello@ghostshaman.com.' },
        ].map((section) => (
          <div key={section.title}>
            <h3 className="font-display text-xs text-[#7FAF16] tracking-widest mb-2">{section.title}</h3>
            <p>{section.body}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}
