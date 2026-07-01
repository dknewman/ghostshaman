'use client'
import { useState } from 'react'
import { products, merchCategories } from '@/lib/data'
import ProductCard from './ProductCard'

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory)

  return (
    <div>
      <div className="flex gap-2 flex-wrap mb-8">
        {merchCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
