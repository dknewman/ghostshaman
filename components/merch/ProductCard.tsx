interface Product {
  id: string
  name: string
  price: number
  category: string
  color: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group border border-[#1f1f1f] rounded overflow-hidden bg-[#111] hover:border-[#39ff1430] transition-all duration-200 hover:shadow-[0_0_15px_#39ff1415]">
      {/* Product image mock */}
      <div
        className="aspect-square flex items-center justify-center relative"
        style={{ background: `radial-gradient(ellipse at center, ${product.color} 0%, #0a0a0a 100%)` }}
      >
        {/* Skull watermark */}
        <svg viewBox="0 0 100 100" className="w-20 h-20 opacity-20">
          <ellipse cx="50" cy="42" rx="28" ry="30" fill="#e0e0e0"/>
          <ellipse cx="38" cy="38" rx="8" ry="7" fill="#080808"/>
          <ellipse cx="62" cy="38" rx="8" ry="7" fill="#080808"/>
          <ellipse cx="38" cy="38" rx="4" ry="3.5" fill="#39ff14"/>
          <ellipse cx="62" cy="38" rx="4" ry="3.5" fill="#39ff14"/>
          <path d="M38 58 L42 70 L50 72 L58 70 L62 58" fill="#1a1a1a"/>
          <rect x="40" y="62" width="5" height="8" rx="1" fill="#e0e0e0" opacity="0.8"/>
          <rect x="47" y="62" width="5" height="8" rx="1" fill="#e0e0e0" opacity="0.8"/>
          <rect x="54" y="62" width="5" height="8" rx="1" fill="#e0e0e0" opacity="0.8"/>
        </svg>
        <span className="absolute top-2 left-2 font-display text-[9px] tracking-widest text-[#39ff14] border border-[#39ff1450] bg-[#080808]/80 px-2 py-0.5 rounded uppercase">
          {product.category}
        </span>
      </div>
      {/* Info */}
      <div className="p-3 flex items-center justify-between">
        <div>
          <h3 className="text-white text-sm font-medium">{product.name}</h3>
          <p className="text-[#39ff14] font-display text-sm font-bold mt-0.5">${product.price.toFixed(2)}</p>
        </div>
        <button className="w-9 h-9 rounded border border-[#1f1f1f] flex items-center justify-center text-[#555] hover:border-[#39ff14] hover:text-[#39ff14] transition-all">
          🛒
        </button>
      </div>
    </div>
  )
}
