import React from 'react'
import PlaceholderImage from './PlaceholderImage'

const Challenge: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-sm text-gray-500 font-medium uppercase">Challenge</p>
          <h2 className="hero-heading mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
            Markets have become a blur of noise
          </h2>
        </div>

        <div className="text-gray-700 space-y-6">
          <p>
            Modern markets generate more data than human perception can process. Microseconds matter. A trader who sees the same signals as everyone else sees nothing at all. The real advantage lies in cutting through the static, in isolating the patterns that move price before the crowd recognizes them.
          </p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-gray-500 mt-1" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9" stroke="#CBD5E1" strokeWidth="1.5" />
                <path d="M6 10L9 13L14 7" stroke="#64748B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Microseconds decide winners and losers</span>
            </li>

            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-gray-500 mt-1" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9" stroke="#CBD5E1" strokeWidth="1.5" />
                <path d="M7.5 10.5H12.5" stroke="#64748B" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <span>Information decays faster than thought</span>
            </li>

            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-gray-500 mt-1" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9" stroke="#CBD5E1" strokeWidth="1.5" />
                <path d="M6.5 9.5L9.5 12.5L13.5 8.5" stroke="#64748B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Depth separates signal from illusion</span>
            </li>
          </ul>

          <div className="mt-6 flex items-center gap-4">
            <button className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 bg-white">Explore</button>
            <button className="text-sm font-medium text-gray-700">Arrow &nbsp; &gt;</button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <PlaceholderImage />
      </div>
    </section>
  )
}

export default Challenge
