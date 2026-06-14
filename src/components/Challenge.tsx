import React, { useEffect, useRef, useState } from 'react'

const RayleighCriterion: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [separation, setSeparation] = useState(30)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const draw = () => {
      const dpr = window.devicePixelRatio || 1
      const width = canvas.offsetWidth
      const height = 260

      canvas.width = width * dpr
      canvas.height = height * dpr

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, width, height)

      const gaussian = (x: number, mu: number, sigma: number) =>
        Math.exp(-0.5 * Math.pow((x - mu) / sigma, 2))

      const sep = 20 + separation * 1.4
      const sigma = 38
      const centerX = width / 2
      const mu1 = centerX - sep / 2
      const mu2 = centerX + sep / 2
      const amplitude = height * 0.72
      const baseline = height * 0.88
      const resolved = separation > 40

      ctx.strokeStyle = 'rgba(245, 221, 69, 0.08)'
      ctx.lineWidth = 1

      for (let i = 1; i < 4; i++) {
        ctx.beginPath()
        ctx.moveTo(0, baseline - (amplitude * i) / 4)
        ctx.lineTo(width, baseline - (amplitude * i) / 4)
        ctx.stroke()
      }

      ctx.strokeStyle = 'rgba(245, 221, 69, 0.18)'
      ctx.beginPath()
      ctx.moveTo(20, baseline)
      ctx.lineTo(width - 20, baseline)
      ctx.stroke()

      const drawSignal = (mu: number, color: string) => {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.globalAlpha = 0.65
        ctx.lineWidth = 1.5

        for (let x = 20; x < width - 20; x++) {
          const y = baseline - amplitude * gaussian(x, mu, sigma)
          x === 20 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }

        ctx.stroke()
        ctx.globalAlpha = 1
      }

      drawSignal(mu1, '#ff7b7b')
      drawSignal(mu2, '#ffb0a0')

      ctx.beginPath()
      ctx.strokeStyle = 'rgba(214, 210, 176, 0.4)'
      ctx.lineWidth = 2
      ctx.setLineDash([6, 5])

      for (let x = 20; x < width - 20; x++) {
        const y =
          baseline -
          amplitude *
            Math.min(1, gaussian(x, mu1, sigma) + gaussian(x, mu2, sigma))

        x === 20 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }

      ctx.stroke()
      ctx.setLineDash([])

      ctx.beginPath()
      ctx.strokeStyle = '#f5dd45'
      ctx.lineWidth = 2.8
      ctx.shadowColor = 'rgba(245, 221, 69, 0.35)'
      ctx.shadowBlur = 12

      for (let x = 20; x < width - 20; x++) {
        const combined = resolved
          ? gaussian(x, mu1, sigma * 0.82) + gaussian(x, mu2, sigma * 0.82)
          : gaussian(x, mu1, sigma * 0.9) + gaussian(x, mu2, sigma * 0.9)

        const y = baseline - amplitude * Math.min(1, combined * 0.96)
        x === 20 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }

      ctx.stroke()
      ctx.shadowBlur = 0

      ctx.font = '500 10px JetBrains Mono, monospace'
      ctx.fillStyle = resolved ? '#f5dd45' : 'rgba(214, 210, 176, 0.65)'
      ctx.fillText(resolved ? '✓ RESOLVED' : 'UNRESOLVED', width - 105, 24)

      ctx.fillStyle = 'rgba(255, 123, 123, 0.75)'
      ctx.fillText('SIG A', mu1 - 18, 38)

      ctx.fillStyle = 'rgba(255, 176, 160, 0.75)'
      ctx.fillText('SIG B', mu2 - 18, 52)
    }

    draw()
    window.addEventListener('resize', draw)

    return () => window.removeEventListener('resize', draw)
  }, [separation])

  return (
    <section id="challenge" className="rayleigh-criterion-section section-anchor">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-sm text-(--gold-warm) font-semibold uppercase tracking-widest flex items-center justify-center gap-4">
            <span className="w-8 h-px bg-(--gold-warm)" />
            The Rayleigh Criterion
            <span className="w-8 h-px bg-(--gold-warm)" />
          </p>

          <h2 className="hero-heading mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-(--gold) leading-tight">
            Resolving Markets at the{' '}
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: '1px var(--gold)' }}
            >
              Limits of Precision
            </span>
          </h2>

          <p className="mt-6 text-[#d6d2b0] leading-relaxed">
            Lord Rayleigh&apos;s criterion defines the minimum angular separation
            at which two signals can be distinguished as distinct — the
            fundamental limit of resolution. Rayleigh Research applies this
            principle to market microstructure: resolving price signals, order
            flow, and execution opportunities at a granularity that standard
            systems cannot perceive.
          </p>
        </div>

        <div className="rayleigh-grid mt-16">
          <div className="rayleigh-card">
            <div className="rayleigh-card-label">
              <span className="rayleigh-live-dot" />
              Live signal resolution — Rayleigh criterion
            </div>

            <canvas ref={canvasRef} className="rayleigh-canvas" height={260} />

            <div className="rayleigh-legend">
              <span><i className="legend-standard" /> Standard</span>
              <span><i className="legend-dhft" /> DHFT resolved</span>
              <span><i className="legend-signal" /> Signal A · B</span>
            </div>

            <div className="rayleigh-slider-wrap">
              <div className="rayleigh-slider-label">Resolution slider</div>

              <div className="rayleigh-slider-row">
                <span>Unresolved</span>
                <input
                  type="range"
                  min="10"
                  max="90"
                  value={separation}
                  onChange={(e) => setSeparation(Number(e.target.value))}
                />
                <span className="text-(--gold)">Resolved</span>
              </div>

              <p>
                Drag to see how signal separation changes resolution — the
                moment two events become distinguishable.
              </p>
            </div>
          </div>

          <div className="rayleigh-info-stack">
            <div className="rayleigh-info-card">
              <span>What the visual shows</span>
              <p>
                The two red peaks are separate market signals — distinct price
                events or order flow patterns. A standard system sees only the
                blurred overlap. The DHFT engine resolves them as distinct,
                actionable opportunities.
              </p>
            </div>

            <div className="rayleigh-info-card">
              <span>Why this matters</span>
              <p>
                At ultra-high frequency, the gap between signals collapses to
                microseconds. Systems that cannot resolve this boundary treat
                separate events as one, misreading order flow, liquidity, and
                execution opportunity.
              </p>
            </div>
          </div>
        </div>

        <div className="rayleigh-exec-intro">
          <p className="text-sm text-(--gold-warm) font-semibold uppercase tracking-widest">
            Execution reality
          </p>
          <p>
            The same trade. The same market. The difference is resolution — and
            resolution is the product.
          </p>
        </div>

        <div className="rayleigh-exec-grid">
          <div className="rayleigh-exec-card">
            <span className="exec-tag-standard">Standard HFT</span>
            <h3>Blurred Execution</h3>
            <p>
              Signals arrive merged. The system acts on an aggregate reading,
              missing the distinction between two separate order flow events.
            </p>

            <strong className="metric-bad">8.4</strong>
            <small>bps avg slippage</small>
          </div>

          <div className="rayleigh-exec-card rayleigh-exec-card-featured">
            <span className="exec-tag-dhft">AlgoStakes® DHFT</span>
            <h3>Resolved Execution</h3>
            <p>
              Full-depth L3 MBO order-book reconstruction resolves each event
              independently, allowing the engine to act with microsecond-level
              precision.
            </p>

            <strong className="metric-good">0.3</strong>
            <small>bps avg slippage</small>
          </div>
        </div>

        <div className="rayleigh-formula-card">
          <div>θ = 1.22 · λ / D</div>
          <p>
            The Rayleigh criterion — originally defined for optical systems —
            describes the boundary where two signals become distinguishable.
            Rayleigh Research applies the same principle to market
            microstructure: resolving order flow, price signals, and liquidity
            events at the minimum possible separation.
          </p>
        </div>
      </div>
    </section>
  )
}

export default RayleighCriterion