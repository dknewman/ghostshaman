import SectionHeading from '@/components/ui/SectionHeading'
import ProductGrid from '@/components/merch/ProductGrid'
import GlowButton from '@/components/ui/GlowButton'

export const metadata = {
  title: 'Merch — GhostShaman',
}

export default function MerchPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-10">
        <SectionHeading title="Official Merch" subtitle="Rep the tribe. Support the mission." centered />
      </div>
      <ProductGrid />
      <div className="mt-10 text-center">
        <GlowButton href="#" variant="outline" size="lg">View All Merch 🛒</GlowButton>
      </div>
    </div>
  )
}
