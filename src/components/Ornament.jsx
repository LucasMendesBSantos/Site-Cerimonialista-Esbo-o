export default function Ornament({ center = false }) {
  return (
    <div className={`ornament${center ? ' ornament--center' : ''}`}>
      <span className="ornament__line" />
      <span className="ornament__diamond" />
      <span className="ornament__line" />
    </div>
  )
}
