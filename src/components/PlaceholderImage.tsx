import React from 'react'

const PlaceholderImage: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`bg-[var(--panel)] border border-[var(--gold-warm)]/30 rounded-xl w-full h-80 md:h-[460px] flex items-center justify-center ${className}`}>
    <svg width="72" height="56" viewBox="0 0 72 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="72" height="56" rx="8" fill="#2a2f24" />
      <g transform="translate(12 10)">
        <rect width="48" height="36" rx="6" fill="#4a401f" />
        <circle cx="12" cy="12" r="4" fill="#ffe455" />
        <path d="M8 30L20 18L32 30H8Z" fill="#f5dd45" />
      </g>
    </svg>
  </div>
)

export default PlaceholderImage
