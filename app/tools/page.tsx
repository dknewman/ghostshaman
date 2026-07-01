import SectionHeading from '@/components/ui/SectionHeading'
import ToolCard from '@/components/tools/ToolCard'
import GlowButton from '@/components/ui/GlowButton'
import { tools } from '@/lib/data'

export const metadata = {
  title: 'Tools & Resources — GhostShaman',
}

export default function ToolsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <SectionHeading
        title="Tools & Resources"
        subtitle="Handpicked tools and resources to help you stay secure and informed."
        centered
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {tools.map((t) => (
          <ToolCard key={t.id} tool={t} />
        ))}
      </div>

      {/* Submit a tool CTA */}
      <div className="border border-[#1f1f1f] rounded bg-[#0d0d0d] p-8 text-center">
        <div className="w-12 h-12 rounded-full border border-[#39ff1430] flex items-center justify-center mx-auto mb-4">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#39ff14" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
          </svg>
        </div>
        <h3 className="font-display text-base text-white tracking-wider mb-2">Have a Tool to Recommend?</h3>
        <p className="text-[#666] text-sm mb-6 max-w-sm mx-auto">
          Send it our way! We&apos;re always looking for resources that help the community stay safe.
        </p>
        <GlowButton href="/contact" variant="outline">Submit a Tool</GlowButton>
      </div>
    </div>
  )
}
