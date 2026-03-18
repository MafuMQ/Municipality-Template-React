import { useState, useEffect } from 'react'
import { GDRIVE_API_KEY } from '../data/documentCategories'

// ── helpers ──────────────────────────────────────────────────────────────────

function formatBytes(bytes) {
  if (!bytes) return '—'
  const b = Number(bytes)
  if (b < 1024) return `${b} B`
  if (b < 1024 * 1024) return `${(b / 1024).toFixed(1)} KB`
  return `${(b / (1024 * 1024)).toFixed(1)} MB`
}

function formatDate(isoString) {
  if (!isoString) return '—'
  return new Date(isoString).toLocaleDateString('en-ZA', {
    day: '2-digit', month: 'short', year: 'numeric',
  })
}

function fileTypeLabel(mimeType = '') {
  if (mimeType.includes('pdf')) return 'PDF'
  if (mimeType.includes('wordprocessingml') || mimeType.includes('msword')) return 'DOC'
  if (mimeType.includes('spreadsheetml') || mimeType.includes('excel')) return 'XLS'
  if (mimeType.includes('presentationml') || mimeType.includes('powerpoint')) return 'PPT'
  if (mimeType.includes('zip') || mimeType.includes('compressed')) return 'ZIP'
  if (mimeType.includes('google-apps.document')) return 'Google Doc'
  if (mimeType.includes('google-apps.spreadsheet')) return 'Google Sheet'
  return 'FILE'
}

// ── component ─────────────────────────────────────────────────────────────────

export default function DocumentCategoryPage({ category }) {
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (!category.folderId) {
      setFiles([])
      setLoading(false)
      return
    }

    if (!GDRIVE_API_KEY) {
      setError('Google Drive API key is not configured. Set VITE_GDRIVE_API_KEY in your .env file.')
      return
    }

    setLoading(true)
    setError(null)
    setFiles([])

    const params = new URLSearchParams({
      q: `'${category.folderId}' in parents and trashed = false`,
      key: GDRIVE_API_KEY,
      fields: 'files(id,name,modifiedTime,size,mimeType,webViewLink,webContentLink)',
      orderBy: 'name',
      pageSize: '100',
    })

    fetch(`https://www.googleapis.com/drive/v3/files?${params}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Drive API error: ${res.status} ${res.statusText}`)
        return res.json()
      })
      .then((data) => {
        setFiles(data.files || [])
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [category.slug, category.folderId])

  const filtered = files.filter((f) =>
    f.name.toLowerCase().includes(query.toLowerCase())
  )

  const noFolderId = !category.folderId

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container">
          <nav className="page-breadcrumb" aria-label="Breadcrumb">
            <a href="#">Home</a>
            <i className="fas fa-chevron-right" aria-hidden="true"></i>
            <a href="#documents">Documents</a>
            <i className="fas fa-chevron-right" aria-hidden="true"></i>
            <span>{category.label}</span>
          </nav>
          <h1>
            <i className={category.icon} aria-hidden="true" style={{ marginRight: '14px', opacity: 0.75 }}></i>
            {category.label}
          </h1>
          <p>{category.description}</p>
        </div>
      </section>

      {/* ── Files Table ── */}
      <section className="doc-category-section section-padding">
        <div className="container">

          {/* Search bar */}
          <div className="tenders-header">
            <h2>{category.label}</h2>
            <div className="search-bar">
              <input
                type="search"
                placeholder="Search files…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoComplete="off"
                disabled={noFolderId || loading}
              />
              <button type="button" className="btn">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>

          {/* States */}
          {noFolderId && (
            <div className="doc-state-box doc-state-empty">
              <i className="fas fa-folder-open" aria-hidden="true"></i>
              <p>No Google Drive folder has been linked to this category yet.</p>
              <p className="doc-state-hint">
                {/* Set the <code>folderId</code> for <strong>{category.label}</strong> in{' '} 
                <code>src/data/documentCategories.js</code>.*/}
              </p>
            </div>
          )}

          {!noFolderId && loading && (
            <div className="doc-state-box doc-state-loading">
              <i className="fas fa-circle-notch fa-spin" aria-hidden="true"></i>
              <p>Loading files…</p>
            </div>
          )}

          {!noFolderId && error && (
            <div className="doc-state-box doc-state-error">
              <i className="fas fa-exclamation-triangle" aria-hidden="true"></i>
              <p>{error}</p>
            </div>
          )}

          {!noFolderId && !loading && !error && (
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>DATE MODIFIED</th>
                    <th>FILE NAME</th>
                    <th>TYPE</th>
                    <th>SIZE</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((f) => (
                    <tr key={f.id}>
                      <td>{formatDate(f.modifiedTime)}</td>
                      <td>{f.name}</td>
                      <td>
                        <span className="file-type-badge">{fileTypeLabel(f.mimeType)}</span>
                      </td>
                      <td>{formatBytes(f.size)}</td>
                      <td>
                        <div className="table-actions">
                          <a
                            href={f.webViewLink}
                            target="_blank"
                            rel="noreferrer"
                            className="view-btn"
                          >
                            <i className="fas fa-eye" aria-hidden="true"></i> VIEW
                          </a>
                          <a
                            href={f.webContentLink || f.webViewLink}
                            target="_blank"
                            rel="noreferrer"
                            className="download-btn"
                          >
                            <i className="fas fa-download" aria-hidden="true"></i> DOWNLOAD
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={5} style={{ textAlign: 'center', padding: '24px', color: '#42505d' }}>
                        {query ? 'No files match your search.' : 'This folder is empty.'}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </section>
    </>
  )
}
