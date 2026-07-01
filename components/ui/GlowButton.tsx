'use client'
import Link from 'next/link'
import { ReactNode } from 'react'

interface GlowButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit'
}

export default function GlowButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
}: GlowButtonProps) {
  const base = 'inline-flex items-center justify-center font-display font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer'

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const variants = {
    primary: 'bg-[#39ff14] text-black hover:bg-[#2acc10] hover:shadow-[0_0_20px_#39ff14] active:scale-95',
    outline: 'border border-[#39ff14] text-[#39ff14] hover:bg-[#39ff1415] hover:shadow-[0_0_15px_#39ff1440] active:scale-95',
    ghost: 'text-[#39ff14] hover:text-white hover:underline active:scale-95',
  }

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (href) {
    return <Link href={href} className={cls}>{children}</Link>
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
