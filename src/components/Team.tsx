import React from 'react'
import search from '../assets/search.svg'
import stra from '../assets/stra.svg'
import system from '../assets/system.svg'

const Team: React.FC = () => {
  const roles = [
    {
      icon: search,
      title: 'Research that moves markets',
      body: 'Develop quantitative models that reveal patterns in market microstructure and execution dynamics.'
    },
    {
      icon: stra,
      title: 'Business development and strategy',
      body: 'Build relationships with institutions that need to see deeper into their own trading operations.'
    },
    {
      icon: system,
      title: 'Frontend and systems engineering',
      body: 'Create interfaces that make the invisible visible, turning raw market data into actionable intelligence.'
    },
    {
      icon: search,
      title: 'Quantitative research that sees beyond consensus',
      body: 'Build models that isolate the patterns markets hide from ordinary instruments.'
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div>
          <p className="text-sm text-[var(--gold-warm)] font-semibold uppercase tracking-widest">Talent</p>
          <h2 className="hero-heading mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--gold)]">Join the Team</h2>
        </div>

        <div className="text-[#d6d2b0]">
          <p>
            The work demands precision and imagination. We're looking for people who understand that markets are puzzles to be solved, not systems to be exploited.
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {roles.map((r) => (
          <div key={r.title} className="px-2">
            <div className="flex items-start gap-4">
             <div className="flex-shrink-0 mt-1">
  <img
    src={r.icon}
    alt={r.title}
    className="h-8 w-8"
  />
</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--gold)]">{r.title}</h3>
                <p className="mt-2 text-[#d6d2b0] text-sm">{r.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button className="px-4 py-2 rounded-full border border-[var(--gold-warm)]/70 text-sm font-medium text-[var(--gold)] bg-[var(--panel)] hover:bg-[var(--panel-strong)] transition-colors">Explore</button>
        <span className="ml-4 text-sm font-medium text-[var(--gold)]">Arrow &nbsp; &gt;</span>
      </div>
    </section>
  )
}

export default Team
