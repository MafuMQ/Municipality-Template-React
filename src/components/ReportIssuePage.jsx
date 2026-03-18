import { useState } from 'react'
import { municipality } from '../config/municipalityConfig'

const { contact } = municipality

const CATEGORIES = [
  { value: 'roads',        label: 'Roads & Potholes',       icon: 'fas fa-road' },
  { value: 'water',        label: 'Water & Sanitation',     icon: 'fas fa-faucet' },
  { value: 'electricity',  label: 'Electricity',            icon: 'fas fa-bolt' },
  { value: 'waste',        label: 'Waste & Refuse Removal', icon: 'fas fa-trash' },
  { value: 'street-lights','label': 'Street Lights',        icon: 'fas fa-lightbulb' },
  { value: 'parks',        label: 'Parks & Open Spaces',    icon: 'fas fa-tree' },
  { value: 'stormwater',   label: 'Stormwater & Flooding',  icon: 'fas fa-cloud-rain' },
  { value: 'other',        label: 'Other',                  icon: 'fas fa-ellipsis-h' },
]

const URGENCY = [
  { value: 'low',      label: 'Low – Not urgent'          },
  { value: 'medium',   label: 'Medium – Needs attention'  },
  { value: 'high',     label: 'High – Urgent'             },
  { value: 'critical', label: 'Critical – Immediate risk' },
]

const EMPTY = {
  name: '', email: '', phone: '',
  category: '', urgency: '', ward: '',
  address: '', description: '',
}

export default function ReportIssuePage() {
  const [form, setForm]         = useState(EMPTY)
  const [submitted, setSubmitted] = useState(false)
  const [selected, setSelected] = useState(null)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const selectCategory = (value) => {
    setSelected(value)
    setForm((prev) => ({ ...prev, category: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm(EMPTY)
    setSelected(null)
  }

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container">
          <nav className="page-breadcrumb" aria-label="Breadcrumb">
            <a href="#">Home</a>
            <i className="fas fa-chevron-right" aria-hidden="true"></i>
            <span>Report an Issue</span>
          </nav>
          <h1>Report an Issue</h1>
          <p>Help us serve you better by reporting service delivery issues in your area.</p>
        </div>
      </section>

      {/* ── Intro strip ── */}
      <div className="contact-info-strip">
        <div className="container">
          <div className="contact-info-strip-grid">
            <div className="contact-info-card">
              <i className="fas fa-clock" aria-hidden="true"></i>
              <div><h4>Response Time</h4><p>2 – 5 working days</p></div>
            </div>
            <div className="contact-info-card">
              <i className="fas fa-phone" aria-hidden="true"></i>
              <div><h4>Emergency Line</h4><p><a href={`tel:${contact.phone1Tel}`}>{contact.phone1}</a></p></div>
            </div>
            <div className="contact-info-card">
              <i className="fas fa-envelope" aria-hidden="true"></i>
              <div>
                <h4>Email</h4>
                <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
              </div>
            </div>
            <div className="contact-info-card">
              <i className="fas fa-circle-info" aria-hidden="true"></i>
              <div><h4>Reference Number</h4><p>Provided on submission</p></div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <section className="contact-main-section section-padding">
        <div className="container">
          <div className="contact-layout">

            {/* Left – tips */}
            <div className="contact-map-col">
              <h2 className="contact-section-title">Before You Submit</h2>

              <div className="address-details">
                <div className="address-item">
                  <i className="fas fa-triangle-exclamation" aria-hidden="true"></i>
                  <div>
                    <strong>Life-threatening emergency?</strong>
                    <p>Call <a href="tel:10177">10177</a> (ambulance / fire) or <a href="tel:10111">10111</a> (police) immediately.</p>
                  </div>
                </div>
                <div className="address-item">
                  <i className="fas fa-map-pin" aria-hidden="true"></i>
                  <div>
                    <strong>Be specific about location</strong>
                    <p>Include a street name, nearest landmark, or ward number so our teams can find the issue quickly.</p>
                  </div>
                </div>
                <div className="address-item">
                  <i className="fas fa-camera" aria-hidden="true"></i>
                  <div>
                    <strong>Photos help</strong>
                    <p>Describe the issue as clearly as possible. Our team may follow up for photos if needed.</p>
                  </div>
                </div>
                <div className="address-item">
                  <i className="fas fa-rotate" aria-hidden="true"></i>
                  <div>
                    <strong>Already reported?</strong>
                    <p>If you have a reference number, contact us via email or phone so we can update your ticket.</p>
                  </div>
                </div>
              </div>

              <div className="address-details" style={{ marginTop: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.75rem', fontSize: '1rem', fontWeight: 600 }}>Emergency Contacts</h3>
                <div className="address-item">
                  <i className="fas fa-bolt" aria-hidden="true"></i>
                  <div><strong>Electrical Faults</strong><p><a href={`tel:${contact.phone1Tel}`}>{contact.phone1}</a></p></div>
                </div>
                <div className="address-item">
                  <i className="fas fa-faucet" aria-hidden="true"></i>
                  <div><strong>Water Bursts</strong><p><a href={`tel:${contact.phone1Tel}`}>{contact.phone1}</a></p></div>
                </div>
                <div className="address-item">
                  <i className="fas fa-road" aria-hidden="true"></i>
                  <div><strong>Road Hazards</strong><p><a href={`tel:${contact.phone1Tel}`}>{contact.phone1}</a></p></div>
                </div>
              </div>
            </div>

            {/* Right – form */}
            <div className="contact-form-col">
              <h2 className="contact-section-title">Submit a Report</h2>

              {submitted ? (
                <div className="form-success">
                  <i className="fas fa-check-circle" aria-hidden="true"></i>
                  <h3>Report Submitted!</h3>
                  <p>
                    Thank you for your report. Your reference number will be sent to your email address.
                    Our team will investigate and respond within 2 – 5 working days.
                  </p>
                  <button className="btn" onClick={() => setSubmitted(false)}>
                    Submit Another Report
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>

                  {/* Category tiles */}
                  <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                    <label>Issue Category <span aria-hidden="true">*</span></label>
                    <div className="issue-category-grid">
                      {CATEGORIES.map((cat) => (
                        <button
                          key={cat.value}
                          type="button"
                          className={`issue-category-tile${selected === cat.value ? ' active' : ''}`}
                          onClick={() => selectCategory(cat.value)}
                          aria-pressed={selected === cat.value}
                        >
                          <i className={cat.icon} aria-hidden="true"></i>
                          <span>{cat.label}</span>
                        </button>
                      ))}
                    </div>
                    {/* hidden input so required validation works */}
                    <input
                      type="text"
                      name="category"
                      value={form.category}
                      onChange={() => {}}
                      required
                      tabIndex={-1}
                      style={{ opacity: 0, height: 0, padding: 0, border: 'none', position: 'absolute' }}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="ri-name">Full Name <span aria-hidden="true">*</span></label>
                      <input
                        id="ri-name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ri-email">Email Address <span aria-hidden="true">*</span></label>
                      <input
                        id="ri-email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="ri-phone">Phone Number</label>
                      <input
                        id="ri-phone"
                        name="phone"
                        type="tel"
                        placeholder="(000) 000 0000"
                        value={form.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ri-ward">Ward Number</label>
                      <input
                        id="ri-ward"
                        name="ward"
                        type="text"
                        placeholder="e.g. Ward 3"
                        value={form.ward}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="ri-address">Street Address / Location <span aria-hidden="true">*</span></label>
                    <input
                      id="ri-address"
                      name="address"
                      type="text"
                      placeholder="Street name, area or nearest landmark"
                      value={form.address}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="ri-urgency">Urgency Level <span aria-hidden="true">*</span></label>
                    <select
                      id="ri-urgency"
                      name="urgency"
                      value={form.urgency}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select urgency…</option>
                      {URGENCY.map((u) => (
                        <option key={u.value} value={u.value}>{u.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="ri-description">Description <span aria-hidden="true">*</span></label>
                    <textarea
                      id="ri-description"
                      name="description"
                      rows={5}
                      placeholder="Describe the issue in detail…"
                      value={form.description}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-full">
                    <i className="fas fa-paper-plane" aria-hidden="true"></i> Submit Report
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
