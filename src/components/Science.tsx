import React from 'react'

const Science: React.FC = () => {
  const cards = [
    {
      title: 'Light resolves',
      body: 'In 1880, physicist John William Strutt discovered the minimum distance at which two objects become distinguishable. Below that threshold, they merge into one. Markets live in that threshold.'
    },
    {
      title: 'Noise obscures',
      body: 'Every trader sees the same public data. The crowd moves together, blind to what lies beneath the surface. Separation requires looking deeper than the instruments allow.'
    },
    {
      title: 'We separate',
      body: 'Our technology applies the Rayleigh Criterion to market microstructure, isolating the patterns that conventional systems miss. What appears as noise becomes signal when you have the right lens.'
    },
    {
      title: 'Clarity emerges',
      body: 'The full order book reveals itself. Hidden liquidity surfaces. The true structure of price becomes visible. This is what happens when you resolve the market at its deepest level.'
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-sm text-gray-500 font-medium uppercase">Science</p>
          <h3 className="hero-heading mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
            Two points of light become one
          </h3>

          <p className="mt-6 text-gray-700 max-w-xl">
            In 1880, physicist John William Strutt discovered a principle that would define the limits of human perception. The Rayleigh Criterion determines the minimum distance at which two objects can be distinguished as separate. Below that threshold, they blur into a single point. Markets operate in that blur. We resolve them.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <button className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 bg-white">Discover</button>
            <button className="text-sm font-medium text-gray-700">Arrow &nbsp; &gt;</button>
          </div>
        </div>

        <div className="space-y-6">
          {cards.map((card) => (
            <article key={card.title} className="border rounded-xl p-6 bg-white">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md border bg-gray-50 flex items-center justify-center text-gray-700">
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <rect x="0.5" y="0.5" width="17" height="13" rx="2" stroke="#CBD5E1"/>
                    <path d="M3 4H15" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round"/>
                    <path d="M3 9H9" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-black">{card.title}</h4>
                  <p className="mt-2 text-sm text-gray-600">{card.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Science
