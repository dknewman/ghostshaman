interface StatCardProps {
  value: string
  label: string
  icon?: string
}

export default function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      {icon && <span className="text-[#39ff14] text-xl mb-1">{icon}</span>}
      <span className="font-display text-2xl md:text-3xl font-black text-white">{value}</span>
      <span className="text-[#888] text-xs tracking-widest uppercase">{label}</span>
    </div>
  )
}
