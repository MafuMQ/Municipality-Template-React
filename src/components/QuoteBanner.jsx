import { municipality } from '../config/municipalityConfig'

export default function QuoteBanner() {
  return (
    <section className="quote-banner">
      <div className="container">
        <p>
          “{municipality.slogan}”
        </p>
      </div>
    </section>
  )
}
