import React from 'react'

const PlaceholderImage: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`bg-gray-200 rounded-xl w-full h-80 md:h-[460px] flex items-center justify-center ${className}`}>
    <svg width="72" height="56" viewBox="0 0 72 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="72" height="56" rx="8" fill="#d1d5db" />
      <g transform="translate(12 10)">
        <rect width="48" height="36" rx="6" fill="#9ca3af" />
        <circle cx="12" cy="12" r="4" fill="#e5e7eb" />
        <path d="M8 30L20 18L32 30H8Z" fill="#e5e7eb" />
      </g>
    </svg>
  </div>
)

export default PlaceholderImage
