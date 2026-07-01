import SectionHeading from '@/components/ui/SectionHeading'
import Watermark from '@/components/ui/Watermark'

export const metadata = { title: 'Terms of Service — GhostShaman' }

export default function TermsPage() {
  return (
    <div className="relative overflow-hidden">
      <Watermark src="/assets/08-merch/sticker-lock.png" className="top-12 right-4 w-52 h-52 md:w-72 md:h-72" />
      <div className="relative max-w-3xl mx-auto px-4 md:px-6 py-12">
        <SectionHeading title="Terms of Service" />
      <p className="text-[#555] text-sm mb-8">Last updated: May 20, 2024</p>
      <div className="prose prose-invert max-w-none space-y-6 text-[#888] text-sm leading-relaxed">
        <p>Welcome to GhostShaman. By accessing this website and our content, you agree to the following terms and conditions.</p>
        {[
          { title: '1. CONTENT', body: 'All content is for entertainment and informational purposes only. We do not condone or encourage illegal activity.' },
          { title: '2. USER CONDUCT', body: 'Be respectful. No hate speech, threats, or harassment. We reserve the right to block users who violate these guidelines.' },
          { title: '3. THIRD-PARTY LINKS', body: 'We are not responsible for the content or practices of third-party websites linked from our platform.' },
          { title: '4. CHANGES', body: 'We may update these terms at any time. Continued use of the site means you accept the updated terms.' },
          { title: '5. CONTACT', body: 'If you have any questions, contact us at hello@ghostshaman.com.' },
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
