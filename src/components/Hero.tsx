import React from 'react'
import PlaceholderImage from './PlaceholderImage'

const Hero: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <section>
          <h1 className="hero-heading text-[56px] md:text-7xl font-extrabold leading-tight tracking-tight text-black">
            <span className="block">See what</span>
            <span className="block">others</span>
            <span className="block">cannot see</span>
          </h1>

          <p className="mt-6 max-w-xl text-gray-700 text-lg">
            Markets move at the speed of light. We see deeper. Rayleigh Research builds the technology that resolves signal from noise, revealing the true structure of modern markets.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="inline-flex items-center px-5 py-3 rounded-full bg-[var(--brand-yellow)] text-sm font-medium text-black shadow-md">
              Request access
            </button>

            <button className="inline-flex items-center px-5 py-3 rounded-full border border-gray-300 text-sm font-medium text-gray-700 bg-white">
              Learn more
            </button>
          </div>
        </section>

        <aside>
          <PlaceholderImage />
        </aside>
      </div>
    </main>
  )
}

export default Hero
