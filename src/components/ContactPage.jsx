import { useState } from 'react'
import { municipality } from '../config/municipalityConfig'

const { contact, address, officeHours, deptContacts, name: municipalityName } = municipality

const infoCards = [
  { icon: 'fas fa-phone',        label: 'Phone',        value: contact.phone1 },
  { icon: 'fas fa-fax',          label: 'Fax',          value: contact.fax },
  { icon: 'fas fa-envelope',     label: 'Email',        value: contact.email },
  { icon: 'fas fa-location-dot', label: 'Location',     value: address.physicalMedium },
  { icon: 'fas fa-clock',        label: 'Office Hours', value: officeHours.medium },
]

const SUBJECTS = [
  'General Enquiry',
  'Municipal Accounts',
  'Service Delivery',
  'Tenders & Procurement',
  'Vacancies',
  'Report an Issue',
  'Loadshedding',
  'Other',
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container" >
          <nav className="page-breadcrumb" aria-label="Breadcrumb">
            <a href="#">Home</a>
            <i className="fas fa-chevron-right" aria-hidden="true"></i>
            <span>Contact Us</span>
          </nav>
          <h1>Contact Us</h1>
          <p>We're here to serve you. Reach out to {municipalityName}.</p>
        </div>
      </section>

      {/* ── Quick Info Strip ── */}
      <div className="contact-info-strip">
        <div className="container">
          <div className="contact-info-strip-grid">
            {infoCards.map((c) => (
              <div className="contact-info-card" key={c.label}>
                <i className={c.icon} aria-hidden="true"></i>
                <div>
                  <h4>{c.label}</h4>
                  <p>{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Map + Form ── */}
      <section className="contact-main-section section-padding">
        <div className="container">
          <div className="contact-layout">

            {/* Left – Map & Address */}
            <div className="contact-map-col">
              <h2 className="contact-section-title">Find Us</h2>
              <div className="map-wrapper">
                <iframe
                  title="uMhlabuyalingana Municipality Location"
                  src={`https://maps.google.com/maps?q=${address.mapsQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="340"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="address-details">
                <div className="address-item">
                  <i className="fas fa-location-dot" aria-hidden="true"></i>
                  <div>
                    <strong>Physical Address</strong>
                    <p>{address.physicalFull}</p>
                  </div>
                </div>
                <div className="address-item">
                  <i className="fas fa-envelope-open-text" aria-hidden="true"></i>
                  <div>
                    <strong>Postal Address</strong>
                    <p>{address.postal}</p>
                  </div>
                </div>
                <div className="address-item">
                  <i className="fas fa-clock" aria-hidden="true"></i>
                  <div>
                    <strong>Office Hours</strong>
                    <p>{officeHours.long}</p>
                    <p>{officeHours.holidays}</p>
                  </div>
                </div>
                <div className="address-item">
                  <i className="fas fa-phone" aria-hidden="true"></i>
                  <div>
                    <strong>Switchboard</strong>
                    <p><a href={`tel:${contact.phone1Tel}`}>{contact.phone1}</a></p>
                  </div>
                </div>
                <div className="address-item">
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                  <div>
                    <strong>General Email</strong>
                    <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right – Contact Form */}
            <div className="contact-form-col">
              <h2 className="contact-section-title">Send Us a Message</h2>

              {submitted ? (
                <div className="form-success">
                  <i className="fas fa-check-circle" aria-hidden="true"></i>
                  <h3>Message Sent!</h3>
                  <p>
                    Thank you for contacting {municipalityName}. A member of our team
                    will respond to your enquiry as soon as possible.
                  </p>
                  <button className="btn" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="cf-name">Full Name <span aria-hidden="true">*</span></label>
                      <input
                        id="cf-name"
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
                      <label htmlFor="cf-email">Email Address <span aria-hidden="true">*</span></label>
                      <input
                        id="cf-email"
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
                      <label htmlFor="cf-phone">Phone Number</label>
                      <input
                        id="cf-phone"
                        name="phone"
                        type="tel"
                        placeholder="(000) 000 0000"
                        value={form.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cf-subject">Subject <span aria-hidden="true">*</span></label>
                      <select
                        id="cf-subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">— Select a subject —</option>
                        {SUBJECTS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="cf-message">Message <span aria-hidden="true">*</span></label>
                    <textarea
                      id="cf-message"
                      name="message"
                      rows="6"
                      placeholder="How can we help you?"
                      value={form.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn contact-submit-btn">
                    <i className="fas fa-paper-plane" aria-hidden="true"></i> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Department Contacts ── */}
      <section className="dept-contacts-section section-padding">
        <div className="container">
          <div className="dept-contacts-header">
            <h2>Department Contacts</h2>
            <p>Contact a specific department directly for faster assistance.</p>
          </div>
          <div className="dept-contacts-grid">
            {deptContacts.map((d) => (
              <div className="dept-contact-card" key={d.dept}>
                <div className="dept-contact-icon">
                  <i className={d.icon} aria-hidden="true"></i>
                </div>
                <div className="dept-contact-info">
                  <h4>{d.dept}</h4>
                  <p className="dept-role">{d.role}</p>
                  <p>
                    <i className="fas fa-phone" aria-hidden="true"></i>
                    <a href={`tel:${d.phone.replace(/[\s()]/g, '')}`}>{d.phone}</a>
                  </p>
                  <p>
                    <i className="fas fa-envelope" aria-hidden="true"></i>
                    <a href={`mailto:${d.email}`}>{d.email}</a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
