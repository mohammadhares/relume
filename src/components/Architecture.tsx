import React from 'react'
import PlaceholderImage from './PlaceholderImage'

const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm text-[var(--gold-warm)] font-semibold uppercase tracking-widest">Architecture</p>
          <h3 className="hero-heading mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--gold)] leading-tight">
            Built for depth,
            <br />
            designed for
            <br />
            speed
          </h3>

          <p className="mt-6 text-[#d6d2b0] max-w-xl">
            Our DHFT engine reconstructs the full L3 market microstructure in real time, revealing order-book dynamics invisible to conventional systems. Every layer adds precision. Every microsecond counts.
          </p>

          <ul className="mt-6 list-disc pl-5 text-[#d6d2b0] space-y-3 marker:text-[var(--gold)]">
            <li>Full-depth order-book reconstruction</li>
            <li>Real-time market microstructure analysis</li>
            <li>Latency-optimized execution infrastructure</li>
          </ul>

          <div className="mt-6 flex items-center gap-4">
            <button className="px-4 py-2 rounded-full border border-[var(--gold-warm)]/70 text-sm font-medium text-[var(--gold)] bg-[var(--panel)] hover:bg-[var(--panel-strong)] transition-colors">Learn</button>
            <button className="text-sm font-medium text-[var(--gold)]">Arrow &nbsp; &gt;</button>
          </div>
        </div>

        <div>
          <img className='w-100' src="https://img.magnific.com/free-photo/recession-banking-statistics-bad-street_1150-1720.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
          {/* <PlaceholderImage /> */}
        </div>
      </div>
    </section>
  )
}

export default Architecture
