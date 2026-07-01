import SectionHeading from '@/components/ui/SectionHeading'
import ProductGrid from '@/components/merch/ProductGrid'
import GlowButton from '@/components/ui/GlowButton'
import Watermark from '@/components/ui/Watermark'

export const metadata = {
  title: 'Merch — GhostShaman',
}

export default function MerchPage() {
  return (
    <div className="relative overflow-hidden">
      <Watermark src="/assets/08-merch/sticker-skull.png" className="top-0 right-0 w-56 h-56 md:w-72 md:h-72 -mt-2 mr-4" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-10">
          <SectionHeading title="Official Merch" subtitle="Rep the tribe. Support the mission." centered />
        </div>
        <ProductGrid />
        <div className="mt-10 text-center">
          <GlowButton href="#" variant="outline" size="lg">View All Merch 🛒</GlowButton>
        </div>
      </div>
    </div>
  )
}
