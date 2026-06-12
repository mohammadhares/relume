import React from 'react'

const Cta: React.FC = () => {
  return (
    <section className="bg-[var(--panel-strong)] border-y border-[var(--gold-warm)]/35">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
        <h2 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--gold)]">Request access now</h2>
        <p className="mt-4 text-[#e2ddb8] max-w-2xl mx-auto">See what the market reveals when you look deep enough.</p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="px-5 py-3 rounded-full bg-[var(--gold)] hover:bg-[var(--gold-bright)] text-[var(--ink)] text-sm font-semibold shadow-md shadow-black/30 transition-colors">Demo</button>
          <button className="px-5 py-3 rounded-full border border-[var(--gold-warm)]/70 bg-transparent text-[var(--gold)] text-sm font-medium hover:bg-[var(--panel)] transition-colors">Contact</button>
        </div>
      </div>
    </section>
  )
}

export default Cta
