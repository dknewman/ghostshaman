interface SectionHeadingProps {
  title: string
  greenWord?: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeading({ title, greenWord, subtitle, centered = false }: SectionHeadingProps) {
  const align = centered ? 'text-center items-center' : 'text-left items-start'
  return (
    <div className={`flex flex-col gap-3 mb-10 ${align}`}>
      <h2 className="font-display text-4xl md:text-5xl tracking-wide text-white uppercase leading-none">
        {greenWord ? (
          <>
            <span className="text-[#7FAF16] glow-green">{greenWord}</span>{' '}
            {title}
          </>
        ) : title}
      </h2>
      <div className={`h-[2px] w-16 bg-[#547A00] shadow-[0_0_8px_rgba(166,204,29,0.5)] ${centered ? 'mx-auto' : ''}`} />
      {subtitle && <p className="text-[#A6A6A6] text-sm md:text-base max-w-xl">{subtitle}</p>}
    </div>
  )
}
