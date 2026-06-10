import React from 'react'
import PlaceholderImage from './PlaceholderImage'

const Services: React.FC = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 5C7 5 3.3 8.1 2 12c1.3 3.9 5 7 10 7s8.7-3.1 10-7c-1.3-3.9-5-7-10-7z" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="3" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Market making with perfect information',
      body: 'Provide liquidity where others see only risk, using complete order-book visibility to quote with confidence.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 3v18" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 7l6 4 6-4" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 17l6-4 6 4" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Best execution through signal clarity',
      body: 'Route orders through the clearest path in the market, minimizing impact and capturing the true price of execution.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="#111827" strokeWidth="1.2" />
          <circle cx="12" cy="12" r="3" fill="#111827" />
        </svg>
      ),
      title: 'Dynamic fund optimization',
      body: 'Adjust portfolio positioning in real time as market structure shifts, staying ahead of the patterns others are still discovering.'
    }
  ]

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center">
          <p className="text-sm text-gray-500 font-medium">Services</p>
          <h2 className="hero-heading mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-black">Three ways to see deeper</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Each service operates at the intersection of signal resolution and execution precision. We don't just provide tools. We provide vision.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="text-center px-6">
              <div className="flex items-center justify-center">{f.icon}</div>
              <h3 className="mt-6 text-xl font-bold text-black">{f.title}</h3>
              <p className="mt-4 text-gray-600">{f.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 bg-white">Explore</button>
          <span className="ml-4 text-sm font-medium text-gray-700">Arrow &nbsp; &gt;</span>
        </div>
      </div>

      {/* Platform block */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <PlaceholderImage className="h-[420px] md:h-[520px]" />
          </div>

          <div className="py-12">
            <p className="text-sm text-gray-500 font-medium">Platform</p>
            <h3 className="hero-heading mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-black">
              AlgoStakes is where research becomes execution
            </h3>

            <p className="mt-6 text-gray-700 max-w-xl">
              The platform unifies quantitative research, market analysis, and live trading infrastructure into a single environment. Test hypotheses against real market data. Execute strategies with microsecond precision. Watch the patterns emerge.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <button className="px-4 py-2 rounded border border-gray-300 text-sm font-medium text-gray-700 bg-white">Request</button>
              <button className="text-sm font-medium text-gray-700">Arrow &nbsp; &gt;</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
