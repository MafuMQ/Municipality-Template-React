import { municipality } from '../config/municipalityConfig'

const cards = [
  {
    icon: 'fas fa-bullseye',
    heading: 'Vision',
    text: municipality.vision,
  },
  {
    icon: 'fas fa-rocket',
    heading: 'Mission',
    text: municipality.mission,
  },
]

export default function MissionVision() {
  return (
    <section id="mission-vision" className="container section-padding mission-vision">
      {cards.map((c) => (
        <div className="mv-card" key={c.heading}>
          <div className="mv-header">
            <i className={c.icon}></i>
            <div>
              <h4>{municipality.abbreviation}</h4>
              <p>LOCAL MUNICIPALITY</p>
            </div>
          </div>
          <h2>{c.heading}</h2>
          <p>{c.text}</p>
        </div>
      ))}
    </section>
  )
}
