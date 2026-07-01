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
  const base = 'inline-flex items-center justify-center font-display tracking-[0.12em] uppercase transition-all duration-200 cursor-pointer rounded-sm'

  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-base',
    lg: 'px-9 py-3.5 text-lg',
  }

  const variants = {
    primary: 'bg-[#547A00] text-white hover:bg-[#7FAF16] hover:shadow-[0_0_14px_rgba(166,204,29,0.45)] active:scale-95',
    outline: 'border border-[#547A00] text-[#7FAF16] hover:border-[#7FAF16] hover:bg-[#7FAF16]/10 hover:shadow-[0_0_12px_rgba(84,122,0,0.4)] active:scale-95',
    ghost: 'text-[#7FAF16] hover:text-white hover:underline active:scale-95',
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
