import React from 'react'
import astronaut from '../assets/astronaut.png'

const Hero: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <section>
          <h1 className="hero-heading text-[56px] md:text-7xl font-extrabold leading-tight tracking-tight text-[var(--gold)]">
            <span className="block">See what</span>
            <span className="block">others</span>
            <span className="block">cannot see</span>
          </h1>

          <p className="mt-6 max-w-xl text-[#d6d2b0] text-lg">
            Markets move at the speed of light. We see deeper. Rayleigh Research builds the technology that resolves signal from noise, revealing the true structure of modern markets.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="inline-flex items-center px-5 py-3 rounded-full bg-[var(--gold)] hover:bg-[var(--gold-bright)] text-sm font-semibold text-[var(--ink)] shadow-md shadow-black/30 transition-colors">
              Request access
            </button>

            <button className="inline-flex items-center px-5 py-3 rounded-full border border-[var(--gold-warm)]/70 text-sm font-medium text-[var(--gold)] bg-[var(--panel)] hover:bg-[var(--panel-strong)] transition-colors">
              Learn more
            </button>
          </div>
        </section>

        <aside>
          <div className="hero-astronaut">
            <span className="hero-orbit hero-orbit--outer" aria-hidden="true" />
            <span className="hero-orbit hero-orbit--inner" aria-hidden="true" />

            <div className="hero-astronaut-track hero-astronaut-float">
              <img
                src={astronaut}
                alt="Astronaut"
                className="hero-img"
              />
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}

export default Hero
