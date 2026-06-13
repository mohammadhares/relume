import React, { useState, useEffect } from 'react'
import light from '../assets/light.svg'

const Science: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<'up' | 'down'>('down')
  
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
    },
    {
      icon: light,
      title: 'Precision matters',
      body: 'Every microsecond counts in modern markets. Our algorithms process order flow with nanosecond precision, revealing patterns invisible to standard analysis.'
    },
    {
      icon: light,
      title: 'Edge detection',
      body: 'Like optical resolution, our system identifies the exact moment when market structure shifts from chaos to order.'
    }
  ]

  const itemsPerPage = 3
  const maxStartIndex = Math.max(0, cards.length - itemsPerPage)

  const handleNext = () => {
    if (isAnimating || startIndex === maxStartIndex) return
    setIsAnimating(true)
    setDirection('down')
    setTimeout(() => {
      setStartIndex((prev) => Math.min(prev + 1, maxStartIndex))
      setTimeout(() => setIsAnimating(false), 300)
    }, 150)
  }

  const handlePrev = () => {
    if (isAnimating || startIndex === 0) return
    setIsAnimating(true)
    setDirection('up')
    setTimeout(() => {
      setStartIndex((prev) => Math.max(prev - 1, 0))
      setTimeout(() => setIsAnimating(false), 300)
    }, 150)
  }

  const visibleCards = cards.slice(startIndex, startIndex + itemsPerPage)

  return (
    <section id="science" className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Static Content */}
        <div>
          <p className="text-sm text-[var(--gold-warm)] font-semibold uppercase tracking-widest">Science</p>
          <h3 className="hero-heading mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--gold)] leading-tight">
            Two points of light become one
          </h3>

          <p className="mt-6 text-[#d6d2b0] max-w-xl">
            In 1880, physicist John William Strutt discovered a principle that would define the limits of human perception. The Rayleigh Criterion determines the minimum distance at which two objects can be distinguished as separate. Below that threshold, they blur into a single point. Markets operate in that blur. We resolve them.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <button className="px-4 py-2 cursor-pointer rounded-full border border-[var(--gold-warm)]/70 text-sm font-medium text-[var(--gold)] bg-[var(--panel)] hover:bg-[var(--panel-strong)] transition-colors">
              Discover
            </button>
          </div>
        </div>

        {/* Right Column - Vertical Carousel with Animation */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className={`space-y-6 transition-all duration-500 ease-in-out ${
                isAnimating 
                  ? direction === 'down' 
                    ? '-translate-y-12 opacity-0' 
                    : 'translate-y-12 opacity-0'
                  : 'translate-y-0 opacity-100'
              }`}
            >
              {visibleCards.map((card, idx) => (
                <article 
                  key={`${startIndex}-${card.title}`} 
                  className="border border-[var(--gold-warm)]/35 rounded-xl p-6 bg-[var(--panel)] backdrop-blur-sm hover:border-[var(--gold-warm)]/70 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src={card.icon}
                        alt={card.title}
                        className="h-8 w-8 icon-yellow"
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

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-6">
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                disabled={startIndex === 0 || isAnimating}
                className={`group p-2 rounded-full border transition-all duration-300 ${
                  startIndex === 0 || isAnimating
                    ? 'border-[var(--gold-warm)]/20 text-[var(--gold-warm)]/20 cursor-not-allowed'
                    : 'border-[var(--gold-warm)]/70 text-[var(--gold)] hover:bg-[var(--panel-strong)] hover:border-[var(--gold-warm)] hover:scale-110 active:scale-95'
                }`}
                aria-label="Previous cards"
              >
                <svg className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={handleNext}
                disabled={startIndex === maxStartIndex || isAnimating}
                className={`group p-2 rounded-full border transition-all duration-300 ${
                  startIndex === maxStartIndex || isAnimating
                    ? 'border-[var(--gold-warm)]/20 text-[var(--gold-warm)]/20 cursor-not-allowed'
                    : 'border-[var(--gold-warm)]/70 text-[var(--gold)] hover:bg-[var(--panel-strong)] hover:border-[var(--gold-warm)] hover:scale-110 active:scale-95'
                }`}
                aria-label="Next cards"
              >
                <svg className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Progress Info */}
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {Array.from({ length: maxStartIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => !isAnimating && setStartIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      startIndex === idx
                        ? 'w-6 bg-[var(--gold)]'
                        : 'w-1.5 bg-[var(--gold-warm)]/30 hover:bg-[var(--gold-warm)]/60'
                    }`}
                    aria-label={`Go to slide set ${idx + 1}`}
                  />
                ))}
              </div>
              <span className="text-xs text-[var(--gold-warm)]/70 font-mono">
                {String(startIndex + 1).padStart(2, '0')} / {String(maxStartIndex + 1).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Science