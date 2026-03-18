import { newsItems } from '../data/news'
import { municipality } from '../config/municipalityConfig'

const { name: municipalityName, departments } = municipality

export default function DeptsNews() {
  return (
    <section className="depts-news-section">
      <div className="container depts-news-layout">
        <div className="departments-panel">
          <h6>{municipalityName}</h6>
          <h2>Departments</h2>
          {departments.map((d) => (
            <a href={d.href} key={d.label}>
              <i className="fas fa-plus"></i> {d.label}
            </a>
          ))}
        </div>

        <div className="news-panel">
          <div className="news-header">
            <div>
              <h6>{municipalityName}</h6>
              <h2>Recent News</h2>
            </div>
            <a href="/news/" className="btn">Read All News</a>
          </div>

          {newsItems.map((item) => (
            <div className="news-item" key={item.href}>
              <img src={item.image} alt={item.alt} />
              <div className="news-content">
                <h4>{item.date}</h4>
                <h3><a href={item.href}>{item.title}</a></h3>
                <p>{item.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
