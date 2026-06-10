import React from 'react'

const Cta: React.FC = () => {
  return (
    <section className="bg-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
        <h2 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">Request access now</h2>
        <p className="mt-4 text-gray-100 max-w-2xl mx-auto">See what the market reveals when you look deep enough.</p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="px-5 py-3 rounded-full bg-black text-white text-sm font-medium shadow">Demo</button>
          <button className="px-5 py-3 rounded-full border border-gray-200 bg-transparent text-white text-sm font-medium">Contact</button>
        </div>
      </div>
    </section>
  )
}

export default Cta
