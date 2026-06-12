import React from 'react'
import PlaceholderImage from './PlaceholderImage'
import visibility from '../assets/visibility.svg'
import Execu from '../assets/Execu.svg'
import dynamic from '../assets/dynamic.svg'

const Services: React.FC = () => {
  const features = [
    {
      icon: visibility,
      title: 'Market making with perfect information',
      body: 'Provide liquidity where others see only risk, using complete order-book visibility to quote with confidence.'
    },
    {
      icon: Execu,
      title: 'Best execution through signal clarity',
      body: 'Route orders through the clearest path in the market, minimizing impact and capturing the true price of execution.'
    },
    {
      icon: dynamic,
      title: 'Dynamic fund optimization',
      body: 'Adjust portfolio positioning in real time as market structure shifts, staying ahead of the patterns others are still discovering.'
    }
  ]

  return (
    <section className="bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center">
          <p className="text-sm text-[var(--gold-warm)] font-semibold uppercase tracking-widest">Services</p>
          <h2 className="hero-heading mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--gold)]">Three ways to see deeper</h2>
          <p className="mt-4 text-[#d6d2b0] max-w-2xl mx-auto">
            Each service operates at the intersection of signal resolution and execution precision. We don't just provide tools. We provide vision.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="text-center px-6 rounded-xl border border-[var(--gold-warm)]/30 bg-[var(--panel)] py-8">
              <div className="flex items-center justify-center">
                 <img
    src={f.icon}
    alt={f.title}
    className="h-10 w-12"
  />
              </div>
              <h3 className="mt-6 text-xl font-bold text-[var(--gold)]">{f.title}</h3>
              <p className="mt-4 text-[#d6d2b0]">{f.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="px-4 py-2 rounded-full border border-[var(--gold-warm)]/70 text-sm font-medium text-[var(--gold)] bg-[var(--panel)] hover:bg-[var(--panel-strong)] transition-colors">Explore</button>
          <span className="ml-4 text-sm font-medium text-[var(--gold)]">Arrow &nbsp; &gt;</span>
        </div>
      </div>

      {/* Platform block */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <PlaceholderImage className="h-[420px] md:h-[520px]" />
          </div>

          <div className="py-12">
            <p className="text-sm text-[var(--gold-warm)] font-semibold uppercase tracking-widest">Platform</p>
            <h3 className="hero-heading mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--gold)]">
              AlgoStakes is where research becomes execution
            </h3>

            <p className="mt-6 text-[#d6d2b0] max-w-xl">
              The platform unifies quantitative research, market analysis, and live trading infrastructure into a single environment. Test hypotheses against real market data. Execute strategies with microsecond precision. Watch the patterns emerge.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <button className="px-4 py-2 rounded border border-[var(--gold-warm)]/70 text-sm font-medium text-[var(--gold)] bg-[var(--panel)] hover:bg-[var(--panel-strong)] transition-colors">Request</button>
              <button className="text-sm font-medium text-[var(--gold)]">Arrow &nbsp; &gt;</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
