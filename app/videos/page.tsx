import SectionHeading from '@/components/ui/SectionHeading'
import VideoGrid from '@/components/videos/VideoGrid'

export const metadata = {
  title: 'Videos — GhostShaman',
  description: 'Scam baiting, tech tips, and everything in between.',
}

export default function VideosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <SectionHeading
        title="Videos"
        subtitle="Scam baiting, tech tips, and everything in between."
      />
      <VideoGrid />
    </div>
  )
}
