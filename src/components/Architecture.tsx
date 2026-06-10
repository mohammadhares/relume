import React from 'react'
import PlaceholderImage from './PlaceholderImage'

const Architecture: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm text-gray-500 font-medium uppercase">Architecture</p>
          <h3 className="hero-heading mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
            Built for depth,
            <br />
            designed for
            <br />
            speed
          </h3>

          <p className="mt-6 text-gray-700 max-w-xl">
            Our DHFT engine reconstructs the full L3 market microstructure in real time, revealing order-book dynamics invisible to conventional systems. Every layer adds precision. Every microsecond counts.
          </p>

          <ul className="mt-6 list-disc pl-5 text-gray-700 space-y-3">
            <li>Full-depth order-book reconstruction</li>
            <li>Real-time market microstructure analysis</li>
            <li>Latency-optimized execution infrastructure</li>
          </ul>

          <div className="mt-6 flex items-center gap-4">
            <button className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 bg-white">Learn</button>
            <button className="text-sm font-medium text-gray-700">Arrow &nbsp; &gt;</button>
          </div>
        </div>

        <div>
          <PlaceholderImage />
        </div>
      </div>
    </section>
  )
}

export default Architecture
