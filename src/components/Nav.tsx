import React, { useState } from 'react'
import RayleighLogo from '../assets/Rayleighlogo.svg'

const Logo: React.FC = () => (
  <div className="flex items-center justify-center ">
     <img
      src={RayleighLogo}
      alt="Rayleigh"
      className="h-15 w-auto"
    />
  </div>
)

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Mobile header: hamburger (left) - centered logo - access (right) */}
        <div className="flex items-center h-16 md:hidden">
          <div className="flex items-center md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M3 10H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M3 15H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
            <Logo />
          </div>

          <div className="ml-auto">
            <button className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--brand-yellow)] text-sm font-medium text-black shadow-md">
              Access
            </button>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center h-20">
          <div className="flex-1">
            <ul className="flex gap-8 text-sm text-gray-700">
              <li className="cursor-pointer">Platform</li>
              <li className="cursor-pointer">Services</li>
              <li className="cursor-pointer">Technology</li>
              <li className="cursor-pointer">Careers ▾</li>
            </ul>
          </div>

          <div className="flex-none">
            <Logo />
          </div>

          <div className="flex-1 text-right">
            <button className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--brand-yellow)] text-sm font-medium text-black shadow-md">
              Access
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`md:hidden ${open ? 'block' : 'hidden'} bg-white border-t border-gray-100`}>
        <div className="px-6 py-4">
          <ul className="flex flex-col gap-3 text-gray-700">
            <li className="py-2">Platform</li>
            <li className="py-2">Services</li>
            <li className="py-2">Technology</li>
            <li className="py-2">Careers</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
