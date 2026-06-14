import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import light from '../assets/light.svg'

gsap.registerPlugin(ScrollTrigger)

const Science: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initially hide all cards
      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.set(card, { 
            autoAlpha: 0,
            y: 30
          })
        }
      })

      // Create scroll triggers for each card with bidirectional behavior
      cardsRef.current.forEach((card, index) => {
        if (!card) return

        // For first card, trigger when section enters
        if (index === 0) {
          ScrollTrigger.create({
            trigger: card,
            start: 'top bottom-=100',
            end: 'bottom top+=100',
            onEnter: () => {
              gsap.to(card, {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out'
              })
            },
            onLeaveBack: () => {
              gsap.to(card, {
                autoAlpha: 0,
                y: 30,
                duration: 0.4,
                ease: 'power2.in'
              })
            },
            toggleActions: 'play none none reverse'
          })
        } else {
          // For subsequent cards, trigger based on previous card
          const previousCard = cardsRef.current[index - 1]
          
          ScrollTrigger.create({
            trigger: previousCard,
            start: 'top center+=100',
            end: 'top center-=50',
            onEnter: () => {
              gsap.to(card, {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
                ease: 'back.out(0.3)'
              })
            },
            onLeaveBack: () => {
              gsap.to(card, {
                autoAlpha: 0,
                y: 30,
                duration: 0.4,
                ease: 'power2.in'
              })
            },
            toggleActions: 'play none none reverse'
          })
        }
      })

      // Add a master ScrollTrigger to ensure smooth transitions
      ScrollTrigger.refresh()
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      id="science" 
      ref={containerRef}
      className="mt-30 mb-15 max-w-7xl mx-auto px-6 lg:px-8 py-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Static Content */}
        <div className="lg:sticky lg:top-32">
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

        {/* Right Column - Stacked Cards */}
        <div className="space-y-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              ref={(el) => { cardsRef.current[idx] = el }}
              className="border border-[var(--gold-warm)]/35 rounded-xl p-6 bg-[var(--panel)] backdrop-blur-sm hover:border-[var(--gold-warm)]/70 transition-all duration-300 hover:shadow-lg"
              style={{
                opacity: 0,
                visibility: 'hidden'
              }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Science