import { navLinks } from '../data/navLinks'

import { useState, useRef } from 'react'

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const hideTimeout = useRef(null)

  const handleDropdownEnter = (label) => {
    clearTimeout(hideTimeout.current)
    setOpenDropdown(label)
  }
  const handleDropdownLeave = () => {
    hideTimeout.current = setTimeout(() => setOpenDropdown(null), 220)
  }

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
                <li
                  key={item.label}
                  className="has-dropdown"
                  onMouseEnter={() => handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {item.href !== '#' ? (
                    <a href={item.href}>
                      {item.label} <i className="fas fa-chevron-down"></i>
                    </a>
                  ) : (
                    <span>
                      {item.label} <i className="fas fa-chevron-down"></i>
                    </span>
                  )}
                  <ul
                    className={`dropdown${item.twoCol ? ' two-col' : ''}`}
                    style={{ display: openDropdown === item.label ? (item.twoCol ? 'flex' : 'block') : 'none' }}
                  >
                    {item.children.map((child) =>
                      child.subdropdown ? (
                        <li
                          key={child.label}
                          className="has-subdropdown"
                          onMouseEnter={e => e.stopPropagation()}
                        >
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
