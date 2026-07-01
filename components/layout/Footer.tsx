import Link from 'next/link'
import Image from 'next/image'
import EmailCapture from './EmailCapture'

export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] bg-[#050505] mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-10 pb-4">
        <EmailCapture />
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-10 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Image src="/assets/01-brand/ghostshaman-wordmark.png" alt="GhostShaman" width={200} height={60} className="mb-4 w-[180px] h-auto mix-blend-screen" />
            <p className="text-[#666] text-sm leading-relaxed max-w-xs">
              Exposing scams. Protecting people. Educating and entertaining along the way. Together, we make the internet a harder place for scammers to thrive.
            </p>
          </div>
          <div>
            <h4 className="font-display text-xs text-[#7FAF16] tracking-widest mb-4">NAVIGATE</h4>
            <ul className="space-y-2">
              {[['/', 'Home'], ['/videos', 'Videos'], ['/about', 'About'], ['/merch', 'Merch'], ['/tools', 'Tools'], ['/contact', 'Contact']].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-[#666] text-sm hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xs text-[#7FAF16] tracking-widest mb-4">LEGAL</h4>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-[#666] text-sm hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-[#666] text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
            <h4 className="font-display text-xs text-[#7FAF16] tracking-widest mt-6 mb-4">CONTACT</h4>
            <p className="text-[#666] text-sm">hello@ghostshaman.com</p>
          </div>
        </div>
        <div className="border-t border-[#1f1f1f] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#444] text-xs">© {new Date().getFullYear()} GhostShaman. All rights reserved.</p>
          <p className="text-[#444] text-xs font-display tracking-widest">EXPOSING SCAMS. PROTECTING PEOPLE.</p>
        </div>
      </div>
    </footer>
  )
}
