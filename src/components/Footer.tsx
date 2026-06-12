import React from 'react'
import RayleighLogo from '../assets/Rayleighlogo.png'

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--ink)] border-t border-[var(--gold-warm)]/35">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Subscribe / Logo */}
          <div className="col-span-1">
            <div className="flex items-center mb-6">
              <img
      src={RayleighLogo}
      alt="Rayleigh"
      className="h-17 w-auto"
    />
            </div>

            <p className="text-[#d8d3b2]">Stay informed on market intelligence and research updates.</p>

            <form className="mt-6 flex items-center gap-4 w-full">
              <input aria-label="Email" type="email" placeholder="Your email" className="flex-1 min-w-0 px-4 py-3 border border-[var(--gold-warm)]/50 rounded-full bg-[var(--panel)] text-[#f6f3da] placeholder:text-[#b9b386] focus:outline-none" />
              <button className="px-4 py-2 rounded-full bg-[var(--gold)] hover:bg-[var(--gold-bright)] text-[var(--ink)] text-sm font-semibold whitespace-nowrap transition-colors">Subscribe</button>
            </form>

            <p className="mt-3 text-xs text-[#a19b74] max-w-sm">
              By subscribing you agree to our Privacy Policy and consent to receive updates from Rayleigh Research.
            </p>
          </div>

          {/* Platform links */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--gold)]">Platform</h4>
            <ul className="mt-4 space-y-3 text-sm text-[#d8d3b2]">
              <li>AlgoStakes</li>
              <li>Technology</li>
              <li>Research</li>
              <li>Services</li>
              <li>Company</li>
            </ul>
          </div>

          {/* About links */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--gold)]">About</h4>
            <ul className="mt-4 space-y-3 text-sm text-[#d8d3b2]">
              <li>Careers</li>
              <li>Team</li>
              <li>Contact</li>
              <li>Press</li>
              <li>Follow us</li>
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--gold)]">LinkedIn</h4>
            <div className="mt-4 space-y-3 text-sm text-[#d8d3b2]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--gold)] text-[var(--ink)] flex items-center justify-center">f</div>
                <span>X</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--gold)] text-[var(--ink)] flex items-center justify-center">in</div>
                <span>GitHub</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--gold)] text-[var(--ink)] flex items-center justify-center">✉</div>
                <span>Research</span>
              </div>

              <div className="mt-4 text-xs text-[#a19b74]">© {new Date().getFullYear()} Rayleigh Research. All rights reserved.</div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--gold-warm)]/25 pt-6 text-sm text-[#c8c29a] flex flex-col md:flex-row md:justify-between items-start">
          <div className="mb-4 md:mb-0">Privacy Policy</div>

          <div className="flex gap-6">
            <a className="underline">Terms of Service</a>
            <a className="underline">Cookies Settings</a>
            <a className="underline">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
