import { STATS } from '../../../data/stats'

export default function Stats() {
  return (
    <div className="stats">
      <div className="stats__grid">
        {STATS.map((s, i) => (
          <div key={i} className="stat">
            <div className="stat__number">{s.number}</div>
            <div className="stat__label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
