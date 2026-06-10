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
    <div className="min-h-screen bg-white text-[var(--brand-black)]">
      <Nav />

      <Hero />

      {/* Divider between hero and challenge */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <hr className="border-t border-gray-200 my-12" />
      </div>

      <Challenge />

      {/* Divider between challenge and science */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <hr className="border-t border-gray-200 my-12" />
      </div>

      <Science />

      {/* Divider between science and services */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <hr className="border-t border-gray-200 my-12" />
      </div>

      <Architecture />



      {/* Divider between services and architecture */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <hr className="border-t border-gray-200 my-12" />
      </div>

      <Services />


      {/* Divider between architecture and team */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <hr className="border-t border-gray-200 my-12" />
      </div>

      <Team />

      {/* Divider before CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <hr className="border-t border-gray-200 my-12" />
      </div>

      <Cta />

      {/* Footer */}
      <Footer />


    </div>
  )
}

export default App