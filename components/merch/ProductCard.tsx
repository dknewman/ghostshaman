import Image from 'next/image'

interface Product {
  id: string
  name: string
  price: number
  category: string
  image: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group border border-[#1f1f1f] rounded overflow-hidden bg-[#121212] hover:border-[#547A0055] transition-all duration-200 hover:shadow-[0_0_14px_rgba(84,122,0,0.35)]">
      {/* Product image */}
      <div className="aspect-square relative bg-[#0C0C0C] flex items-center justify-center overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-2 left-2 z-10 font-mono text-[9px] tracking-widest text-[#7FAF16] border border-[#547A0060] bg-[#050505]/80 px-2 py-0.5 rounded uppercase">
          {product.category}
        </span>
      </div>
      {/* Info */}
      <div className="p-3 flex items-center justify-between">
        <div>
          <h3 className="text-white text-sm font-semibold">{product.name}</h3>
          <p className="text-[#7FAF16] font-mono text-sm font-bold mt-0.5">${product.price.toFixed(2)}</p>
        </div>
        <button
          aria-label={`Add ${product.name} to cart`}
          className="w-9 h-9 rounded border border-[#1f1f1f] flex items-center justify-center text-[#666] hover:border-[#7FAF16] hover:text-[#7FAF16] transition-all"
        >
          🛒
        </button>
      </div>
    </div>
  )
}
