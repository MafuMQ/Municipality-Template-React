import { municipality } from '../config/municipalityConfig'

export default function TopBar() {
  const { contact, officeHours, address } = municipality
  return (
    <div className="top-bar">
      <ul className="contact-list">
        <li><i className="fas fa-phone"></i> {contact.phone1}</li>
        <li><i className="fas fa-clock"></i> {officeHours.short}</li>
        <li>
          <i className="fas fa-envelope"></i>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </li>
        <li><i className="fas fa-map-marker-alt"></i> {address.physicalShort}</li>
      </ul>
      <a href="#report-an-issue" className="btn">Report An Issue</a>
    </div>
  )
}
