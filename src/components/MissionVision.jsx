const cards = [
  {
    icon: 'fas fa-bullseye',
    heading: 'Vision',
    text: 'By 2042 Richmond Municipality will be an economically vibrant smart town and agricultural hub offering its citizens a healthy and social environment.',
  },
  {
    icon: 'fas fa-rocket',
    heading: 'Mission',
    text: 'Richmond Municipality will improve the livelihood of citizens by continuously providing affordable and sustainable service delivery through innovation stakeholder relations and good governance.',
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
              <h4>RICHMOND</h4>
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
