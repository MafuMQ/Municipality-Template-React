export default function TopBar() {
  return (
    <div className="top-bar">
      <ul className="contact-list">
        <li><i className="fas fa-phone"></i> (033) 212 2155</li>
        <li><i className="fas fa-clock"></i> Mon–Fri: 08:00am – 16:00pm</li>
        <li>
          <i className="fas fa-envelope"></i>
          <a href="mailto:communications@richmond.gov.za">communications@richmond.gov.za</a>
        </li>
        <li><i className="fas fa-map-marker-alt"></i> 57 Shepstone Street, Richmond</li>
      </ul>
      <a href="https://richmond.gov.za/report-an-issue/" className="btn">Report An Issue</a>
    </div>
  )
}
