import React from 'react'
import PlaceholderImage from './PlaceholderImage'
import timer from '../assets/timer.svg'
import blur_on from '../assets/blur_on.svg'
import info_i from '../assets/info_i.svg'

const Challenge: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-sm text-gray-500 font-medium uppercase">Challenge</p>
          <h2 className="hero-heading mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
            Markets have become a blur of noise
          </h2>
        </div>

        <div className="text-gray-700 space-y-6">
          <p>
            Modern markets generate more data than human perception can process. Microseconds matter. A trader who sees the same signals as everyone else sees nothing at all. The real advantage lies in cutting through the static, in isolating the patterns that move price before the crowd recognizes them.
          </p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3">
                <img
      src={timer}
      alt="timer"
      className="h-5 w-auto"
    />
              <span>Microseconds decide winners and losers</span>
            </li>

            <li className="flex items-start gap-3">
                  <img
      src={info_i}
      alt="information"
      className="h-5 w-auto"
    />
              <span>Information decays faster than thought</span>
            </li>

            <li className="flex items-start gap-3">
                  <img
      src={blur_on}
      alt="timer"
      className="h-5 w-auto"
    />
              <span>Depth separates signal from illusion</span>
            </li>
          </ul>

          <div className="mt-6 flex items-center gap-4">
            <button className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 bg-white">Explore</button>
            <button className="text-sm font-medium text-gray-700">Arrow &nbsp; &gt;</button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <PlaceholderImage />
      </div>
    </section>
  )
}

export default Challenge
