import React from 'react'
import light from '../assets/light.svg'

const Science: React.FC = () => {
  const cards = [
    {
      icon: light,
      title: 'Light resolves',
      body: 'In 1880, physicist John William Strutt discovered the minimum distance at which two objects become distinguishable. Below that threshold, they merge into one. Markets live in that threshold.'
    },
    {
      icon: light,
      title: 'Noise obscures',
      body: 'Every trader sees the same public data. The crowd moves together, blind to what lies beneath the surface. Separation requires looking deeper than the instruments allow.'
    },
    {
      icon: light,
      title: 'We separate',
      body: 'Our technology applies the Rayleigh Criterion to market microstructure, isolating the patterns that conventional systems miss. What appears as noise becomes signal when you have the right lens.'
    },
    {
      icon: light,
      title: 'Clarity emerges',
      body: 'The full order book reveals itself. Hidden liquidity surfaces. The true structure of price becomes visible. This is what happens when you resolve the market at its deepest level.'
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-sm text-[var(--gold-warm)] font-semibold uppercase tracking-widest">Science</p>
          <h3 className="hero-heading mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--gold)] leading-tight">
            Two points of light become one
          </h3>

          <p className="mt-6 text-[#d6d2b0] max-w-xl">
            In 1880, physicist John William Strutt discovered a principle that would define the limits of human perception. The Rayleigh Criterion determines the minimum distance at which two objects can be distinguished as separate. Below that threshold, they blur into a single point. Markets operate in that blur. We resolve them.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <button className="px-4 py-2 rounded-full border border-[var(--gold-warm)]/70 text-sm font-medium text-[var(--gold)] bg-[var(--panel)] hover:bg-[var(--panel-strong)] transition-colors">Discover</button>
            <button className="text-sm font-medium text-[var(--gold)]">Arrow &nbsp; &gt;</button>
          </div>
        </div>

        <div className="space-y-6">
          {cards.map((card) => (
            <article key={card.title} className="border border-[var(--gold-warm)]/35 rounded-xl p-6 bg-[var(--panel)] backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                 <img
                 src={card.icon}
                  alt={card.title}
                  className="h-8 w-8"
                  />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[var(--gold)]">{card.title}</h4>
                  <p className="mt-2 text-sm text-[#d8d4b6]">{card.body}</p>
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
