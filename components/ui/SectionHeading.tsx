interface SectionHeadingProps {
  title: string
  goldWord?: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeading({ title, goldWord, subtitle, centered = false }: SectionHeadingProps) {
  const align = centered ? 'text-center items-center' : 'text-left items-start'
  return (
    <div className={`flex flex-col gap-3 mb-10 ${align}`}>
      <h2 className="font-display text-3xl md:text-4xl font-black tracking-wider text-white uppercase">
        {goldWord ? (
          <>
            <span className="text-[#ffd700]">{goldWord}</span>{' '}
            {title}
          </>
        ) : title}
      </h2>
      <div className={`h-[2px] w-16 bg-[#39ff14] shadow-[0_0_8px_#39ff14] ${centered ? 'mx-auto' : ''}`} />
      {subtitle && <p className="text-[#888] text-sm md:text-base max-w-xl">{subtitle}</p>}
    </div>
  )
}
