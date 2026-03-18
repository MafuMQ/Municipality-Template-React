import { municipality } from '../config/municipalityConfig'

export default function LoadsheddingBanner() {
  return (
    <section className="loadshedding-banner">
      <div className="container loadshedding-content">
        <h3>Loadshedding Schedule</h3>
        <a
          href={municipality.loadshedding.scheduleUrl}
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          Click To View Daily Schedule
        </a>
      </div>
    </section>
  )
}
