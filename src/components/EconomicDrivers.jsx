const drivers = [
  { className: 'driver-card agri', value: '50%', label: 'Agriculture' },
  { className: 'driver-card community', value: '30%', label: 'Community Services' },
  { className: 'driver-card trade', value: '10%', label: 'Trade' },
  { className: 'driver-card finance', value: '10%', label: 'Finance' },
]

const links = [
  { href: '/tenders/', icon: 'fas fa-print', label: 'Tenders' },
  { href: '/rfqs-bids-below-r300-000/', icon: 'fas fa-pencil-alt', label: 'Quotations' },
  { href: '/documents/', icon: 'fas fa-mobile-alt', label: 'Documents' },
  { href: '/news/', icon: 'fas fa-bullhorn', label: 'News & Public Notices' },
]

export default function EconomicDrivers() {
  return (
    <section className="section-economic">
      <div className="economic-inner">
        <h2 className="economic-title">Our Economic Drivers</h2>
        <div className="drivers-grid">
          {drivers.map((d) => (
            <div className={d.className} key={d.label}>
              <h2>{d.value}</h2>
              <p>{d.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="quick-links">
        {links.map((l) => (
          <a href={l.href} key={l.label}>
            <i className={l.icon}></i> {l.label}
          </a>
        ))}
      </div>
    </section>
  )
}
