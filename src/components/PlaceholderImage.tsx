import React from 'react'

const AlgoVis: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`algo-vis ${className}`}>
      <div className="algo-ring ring1">
        <div className="orbit-dot dot-top" />
      </div>

      <div className="algo-ring ring2">
        <div className="orbit-dot dot-bottom" />
      </div>

      <div className="algo-ring ring3" />

      <div className="algo-center">
        <div className="algo-center-name">AlgoStakes®</div>
        <div className="algo-center-sub">DHFT Platform</div>
      </div>
    </div>
  )
}

export default AlgoVis