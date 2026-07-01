'use client'
import { useState } from 'react'
import { videos, categories } from '@/lib/data'
import VideoCard from './VideoCard'
import GlowButton from '@/components/ui/GlowButton'

export default function VideoGrid() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [visibleCount, setVisibleCount] = useState(6)

  const filtered = activeCategory === 'all'
    ? videos
    : videos.filter((v) => v.category === activeCategory)

  const visible = filtered.slice(0, visibleCount)

  return (
    <div>
      {/* Category tabs */}
      <div className="flex gap-2 flex-wrap mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => { setActiveCategory(cat.id); setVisibleCount(6) }}
            className={`font-display text-[10px] tracking-widest px-4 py-2 rounded border transition-all duration-150 ${
              activeCategory === cat.id
                ? 'border-[#39ff14] text-[#39ff14] bg-[#39ff1410]'
                : 'border-[#1f1f1f] text-[#666] hover:border-[#39ff1430] hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((v) => (
          <VideoCard key={v.id} video={v} />
        ))}
      </div>

      {/* Load more */}
      {visibleCount < filtered.length && (
        <div className="mt-10 text-center">
          <GlowButton variant="outline" onClick={() => setVisibleCount((c) => c + 3)}>
            Load More
          </GlowButton>
        </div>
      )}
    </div>
  )
}
