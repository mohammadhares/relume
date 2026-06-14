import React from 'react'

const ArchitectureVisual: React.FC = () => {
  const layers = [
    'Market Data',
    'L3 MBO Reconstruction',
    'DHFT Engine',
    'Best Execution',
    'Market Making',
    'Fund Optimization'
  ]

  return (
    <div className="relative rounded-2xl border border-[var(--gold-warm)]/30 bg-[var(--panel)] p-6 overflow-hidden min-h-[460px] flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--gold-rgb),0.12),transparent_55%)]" />

      <div className="relative z-10 w-full max-w-md space-y-4">
        {layers.map((layer, index) => (
          <div key={layer} className="relative">
            <div className="rounded-xl border border-[var(--gold-warm)]/40 bg-black/50 px-5 py-4 text-center shadow-[0_0_30px_rgba(var(--gold-rgb),0.08)]">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold-warm)]">
                Layer {String(index + 1).padStart(2, '0')}
              </p>
              <h4 className="mt-1 text-sm md:text-base font-semibold text-[#f4f2d8]">
                {layer}
              </h4>
            </div>

            {index !== layers.length - 1 && (
              <div className="mx-auto h-6 w-px bg-gradient-to-b from-[var(--gold)] to-transparent" />
            )}
          </div>
        ))}
      </div>

    
    </div>
  )
}

const Architecture: React.FC = () => {
  return (
    <section className="mx-auto bg-[#000000]">
      <section id="architecture" className="pt-50 pb-50 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm text-[var(--gold-warm)] font-semibold uppercase tracking-widest">Architecture</p>

            <h3 className="hero-heading mt-4 text-4xl md:text-5xl lg:text-5xl font-extrabold text-[var(--gold)] leading-tight">
              Built for depth, designed for speed
            </h3>

            <p className="mt-6 text-[#d6d2b0] max-w-xl">
              Our DHFT engine reconstructs the full L3 market microstructure in real time, revealing order-book dynamics invisible to conventional systems. Every layer adds precision. Every microsecond counts.
            </p>

            <ul className="mt-6 list-disc pl-5 text-[#d6d2b0] space-y-3 marker:text-[var(--gold)]">
              <li>Full-depth order-book reconstruction</li>
              <li>Real-time market microstructure analysis</li>
              <li>Latency-optimized execution infrastructure</li>
            </ul>

            <div className="mt-6 flex items-center gap-4">
              <button className="px-4 py-2 rounded-full border border-[var(--gold-warm)]/70 text-sm font-medium text-[var(--gold)] bg-[var(--panel)] hover:bg-[var(--panel-strong)] transition-colors">
                Learn More
              </button>
            </div>
          </div>

          <ArchitectureVisual />
        </div>
      </section>
    </section>
  )
}

export default Architecture