import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Challenge from './components/Challenge'
import Science from './components/Science'
import Services from './components/Services'
import Architecture from './components/Architecture'
import Team from './components/Team'
import Cta from './components/Cta'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <>
      <div className="matrix-rain" aria-hidden="true">
        <span className="matrix-stream">SIGNAL{`\n`}DEPTH{`\n`}VECTOR{`\n`}L3{`\n`}BOOK{`\n`}LOCK</span>
        <span className="matrix-stream">01010111{`\n`}01100101{`\n`}00100000{`\n`}01110011{`\n`}01100101{`\n`}01100101</span>
        <span className="matrix-stream">TRACE{`\n`}ROUTE{`\n`}EXEC{`\n`}ALPHA{`\n`}MODEL{`\n`}SYNC</span>
        <span className="matrix-stream">0x7fa9{`\n`}0x34c1{`\n`}0xa221{`\n`}0x19de{`\n`}0xbe77{`\n`}0x00af</span>
        <span className="matrix-stream">SCAN{`\n`}ORBIT{`\n`}LOCK{`\n`}EXECUTE{`\n`}VERIFY{`\n`}REPEAT</span>
        <span className="matrix-stream">NOISE{`\n`}SIGNAL{`\n`}FILTER{`\n`}RESOLVE{`\n`}SHARPEN{`\n`}CONFIRM</span>
        <span className="matrix-stream">MARKET{`\n`}MICRO{`\n`}STRUCTURE{`\n`}RAYLEIGH{`\n`}DHFT{`\n`}CORE</span>
        <span className="matrix-stream">CLOCK{`\n`}03:14:07{`\n`}UTC{`\n`}DELAY{`\n`}0.84MS{`\n`}STABLE</span>
        <span className="matrix-stream">LATENCY{`\n`}0.84MS{`\n`}DEPTH{`\n`}100%{`\n`}SPREAD{`\n`}0.02</span>
        <span className="matrix-stream">ALPHA{`\n`}VECTOR{`\n`}NORMALIZE{`\n`}IMBALANCE{`\n`}WEIGHT{`\n`}UPDATE</span>
        <span className="matrix-stream">11100010{`\n`}10011100{`\n`}10101000{`\n`}01010010{`\n`}01010010{`\n`}00011100</span>
        <span className="matrix-stream">HIDDEN{`\n`}LIQUIDITY{`\n`}VISIBLE{`\n`}STRUCTURE{`\n`}MAPPED{`\n`}READY</span>
      </div>

      <div className="app-shell min-h-screen bg-transparent text-[#f4f2d8]">
      <Nav />

      <Hero />

      {/* Divider between hero and challenge */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <hr className="border-t border-[var(--gold-warm)]/30 my-12" />
      </div>

      <Challenge />

      {/* Divider between challenge and science */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <hr className="border-t border-[var(--gold-warm)]/30 my-12" />
      </div>

      <Science />

      {/* Divider between science and services */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <hr className="border-t border-[var(--gold-warm)]/30 my-12" />
      </div>

      <Architecture />



      {/* Divider between services and architecture */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <hr className="border-t border-[var(--gold-warm)]/30 my-12" />
      </div>

      <Services />


      {/* Divider between architecture and team */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <hr className="border-t border-[var(--gold-warm)]/30 my-12" />
      </div>

      <Team />

      {/* Divider before CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <hr className="border-t border-[var(--gold-warm)]/30 my-12" />
      </div>

      <Cta />

      {/* Footer */}
      <Footer />


    </div>
    </>
  )
}

export default App