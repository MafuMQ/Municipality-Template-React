const contacts = [
  { icon: 'fas fa-building', label: 'Municipality', number: '+27 33 212 2155' },
  { icon: 'fas fa-id-card', label: 'Police', number: '10111' },
  { icon: 'fas fa-heartbeat', label: 'Ambulance / Fire', number: '10177' },
  { icon: 'fas fa-hand-paper', label: 'Fraud Line', number: '+27 80 070 1701' },
]

export default function EmergencySection() {
  return (
    <section className="emergency-section">
      <div className="container emergency-grid">
        {contacts.map((c) => (
          <div className="emergency-card" key={c.label}>
            <i className={c.icon}></i>
            <div>
              <h4>{c.label}</h4>
              <p>{c.number}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
