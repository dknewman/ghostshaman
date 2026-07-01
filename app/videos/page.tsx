import SectionHeading from '@/components/ui/SectionHeading'
import VideoGrid from '@/components/videos/VideoGrid'
import Watermark from '@/components/ui/Watermark'

export const metadata = {
  title: 'Videos — GhostShaman',
  description: 'Scam baiting, tech tips, and everything in between.',
}

export default function VideosPage() {
  return (
    <div className="relative overflow-hidden">
      <Watermark className="top-0 right-0 w-64 h-64 md:w-80 md:h-80 -mt-4 mr-2" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-12">
        <SectionHeading
          title="Videos"
          subtitle="Scam baiting, tech tips, and everything in between."
        />
        <VideoGrid />
      </div>
    </div>
  )
}
