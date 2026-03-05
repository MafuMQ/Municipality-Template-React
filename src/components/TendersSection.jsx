import { useState } from 'react'
import { tenders } from '../data/tenders'

export default function TendersSection() {
  const [query, setQuery] = useState('')

  const filtered = tenders.filter(
    (t) =>
      t.title.toLowerCase().includes(query.toLowerCase()) ||
      t.updated.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <section className="tenders-section section-padding">
      <div className="container">
        <div className="tenders-header">
          <h2>Latest Tenders</h2>
          <div className="search-bar">
            <input
              type="search"
              placeholder="Search here..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
            <button type="button" className="btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>UPDATE DATE</th>
                <th>TITLE</th>
                <th>CLOSING DATE</th>
                <th>DOWNLOAD</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((t, i) => (
                <tr key={i}>
                  <td>{t.updated}</td>
                  <td>{t.title}</td>
                  <td>{t.closing}</td>
                  <td>
                    <a href={t.downloadHref} className="download-btn">DOWNLOAD</a>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={4} style={{ textAlign: 'center', padding: '20px' }}>
                    No results found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
