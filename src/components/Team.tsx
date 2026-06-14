import React from 'react'
import search from '../assets/search.svg'
import stra from '../assets/stra.svg'
import system from '../assets/system.svg'

const Team: React.FC = () => {
  const roles = [
   {
  icon: search,
  title: 'Quantitative Researcher',
  body: 'Develop trading models and execution strategies using the AlgoStakes® platform.'
},
{
  icon: stra,
  title: 'Business Growth & BD Lead',
  body: 'Drive partnerships, platform adoption, and strategic growth initiatives.'
},
{
  icon: system,
  title: 'Frontend Engineer',
  body: 'Build high-performance interfaces that transform complex market data into actionable insights.'
},
{
  icon: search,
  title: 'Research Engineer',
  body: 'Bridge quantitative research and production systems to accelerate strategy development.'
}
  ]

  return (
    <section className='mx-auto bg-[#000000] '>
      <section id="talent" className="pt-50 max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div>
          <p className="text-sm text-(--gold-warm) font-semibold uppercase tracking-widest">Talent</p>
          <h2 className="hero-heading mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-(--gold)">Join the Team</h2>
        </div>

        <div className="text-[#d6d2b0]">
          <p>
            The work demands precision and imagination. We're looking for people who understand that markets are puzzles to be solved, not systems to be exploited.
          </p>
        </div>
      </div>

   <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
  {roles.map((r) => (
    <div
      key={r.title}
      className="
        flex flex-col
        rounded-2xl
        border border-[var(--gold-warm)]/20
        bg-[var(--panel)]
        p-6
        transition-all duration-300
        hover:border-[var(--gold)]/50
        hover:bg-[var(--panel-strong)]
        hover:-translate-y-1
      "
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-xl border border-[var(--gold-warm)]/20 bg-black/20">
        <img
          src={r.icon}
          alt={r.title}
          className="h-8 w-8 icon-yellow"
        />
      </div>

      <h3 className="mt-5 text-xl font-bold text-[var(--gold)]">
        {r.title}
      </h3>

      <p className="mt-3 text-[#d6d2b0] text-sm leading-relaxed flex-grow">
        {r.body}
      </p>

      <button
        className="
          mt-6
          self-start
          px-4 py-2
          rounded-full
          border border-[var(--gold-warm)]/60
          text-sm
          font-medium
          text-[var(--gold)]
          hover:bg-[var(--panel-strong)]
          transition-all
        "
      >
        Read More →
      </button>
    </div>
  ))}
</div>
    </section>
    </section>
  )
}

export default Team
