import { documentCategories } from '../data/documentCategories'

export default function DocumentsPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container">
          <nav className="page-breadcrumb" aria-label="Breadcrumb">
            <a href="#">Home</a>
            <i className="fas fa-chevron-right" aria-hidden="true"></i>
            <span>Documents</span>
          </nav>
          <h1>Documents & Reports</h1>
          <p>Browse all municipal documents, reports, policies, and more.</p>
        </div>
      </section>

      {/* ── Documents Grid ── */}
      <section className="documents-page section-padding">
        <div className="container">
          <div className="documents-grid">
            {documentCategories.map((doc) => (
              <a className="documents-card" href={`#doc/${doc.slug}`} key={doc.slug}>
                <div className="documents-icon">
                  <i className={doc.icon} aria-hidden="true"></i>
                </div>
                <div className="documents-label">{doc.label}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
