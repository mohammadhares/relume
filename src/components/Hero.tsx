import React from 'react'
import astronaut from '../assets/astronaut.png'

const Hero: React.FC = () => {
  return (
    <main id="hero" className="mt-15 mb-15 max-w-7xl mx-auto px-6 lg:px-8 py-19 section-anchor">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <section>
     <h1 className="hero-heading font-extrabold leading-tight tracking-tight text-[var(--gold)]">
  <span className="block mb-2 text-[28px] md:text-4xl lg:text-3xl text-(--gold-warm)">Trading at the</span>
  <span className="block text-[44px] md:text-6xl lg:text-6xl">Speed of Machines</span>
</h1>

          <p className="mt-6 max-w-xl text-[#d6d2b0] text-lg">
            Rayleigh Research has engineered a highly scalable simulation and best execution architecture for Deep High-Frequency Trading (DHFT). Powered by AlgoStakes®, our platform reconstructs full-depth L3 MBO order books, resolves market signals at microsecond precision, and delivers execution where conventional systems reach their limit
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
