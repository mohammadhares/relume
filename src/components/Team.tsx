import React from 'react'

const Team: React.FC = () => {
  const roles = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 12a5 5 0 100-10 5 5 0 000 10z" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 21a9 9 0 0118 0" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Research that moves markets',
      body: 'Develop quantitative models that reveal patterns in market microstructure and execution dynamics.'
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M3 12h18" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 6h18" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Business development and strategy',
      body: 'Build relationships with institutions that need to see deeper into their own trading operations.'
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M4 7h16v10H4z" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 11h8" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Frontend and systems engineering',
      body: 'Create interfaces that make the invisible visible, turning raw market data into actionable intelligence.'
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="#111827" strokeWidth="1.2" />
          <path d="M8 12h8" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      ),
      title: 'Quantitative research that sees beyond consensus',
      body: 'Build models that isolate the patterns markets hide from ordinary instruments.'
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div>
          <p className="text-sm text-gray-500 font-medium">Talent</p>
          <h2 className="hero-heading mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-black">Join the Team</h2>
        </div>

        <div className="text-gray-700">
          <p>
            The work demands precision and imagination. We're looking for people who understand that markets are puzzles to be solved, not systems to be exploited.
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {roles.map((r) => (
          <div key={r.title} className="px-2">
            <div className="flex items-start gap-4">
              <div className="text-gray-700 mt-1">{r.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-black">{r.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{r.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 bg-white">Explore</button>
        <span className="ml-4 text-sm font-medium text-gray-700">Arrow &nbsp; &gt;</span>
      </div>
    </section>
  )
}

export default Team
