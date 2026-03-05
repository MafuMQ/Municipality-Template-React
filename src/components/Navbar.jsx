import { navLinks } from '../data/navLinks'

export default function Navbar() {
  return (
    <div className="header-inner">
      <a href="https://richmond.gov.za/" className="logo">
        <img
          src="https://richmond.gov.za/wp-content/uploads/2025/01/richmond-official-logo.svg"
          alt="Richmond Municipality Logo"
        />
      </a>

      <div className="nav-bar">
        <nav aria-label="Main navigation">
          <ul className="primary-nav">
            {navLinks.map((item) =>
              item.children ? (
                <li key={item.label} className="has-dropdown">
                  {item.href !== '#' ? (
                    <a href={item.href}>
                      {item.label} <i className="fas fa-chevron-down"></i>
                    </a>
                  ) : (
                    <span>
                      {item.label} <i className="fas fa-chevron-down"></i>
                    </span>
                  )}
                  <ul className={`dropdown${item.twoCol ? ' two-col' : ''}`}>
                    {item.children.map((child) =>
                      child.subdropdown ? (
                        <li key={child.label} className="has-subdropdown">
                          <a href={child.href}>
                            <i className={child.icon}></i> {child.label}
                          </a>
                          <ul className="subdropdown">
                            {child.subdropdown.map((sub) => (
                              <li key={sub.label}>
                                <a href={sub.href}>{sub.label}</a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ) : (
                        <li key={child.label}>
                          <a href={child.href}>
                            <i className={child.icon}></i> {child.label}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </li>
              ) : (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </div>
  )
}
