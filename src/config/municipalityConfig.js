/**
 * Central configuration for uMhlabuyalingana Local Municipality.
 * All municipality-specific data lives here — update once, reflected everywhere.
 */
export const municipality = {
  // ── Identity ──────────────────────────────────────────────────────────────
  name:         'uMhlabuyalingana Local Municipality',
  shortName:    'uMhlabuyalingana Municipality',
  abbreviation: 'UMHLABUYALINGANA',

  // ── Contact ───────────────────────────────────────────────────────────────
  contact: {
    phone1:               '(035) 592 0680',
    phone1Tel:            '0355920680',
    phone1International:  '+27 35 592 0680',
    phone1InternationalTel: '+27355920680',
    phone2:               '(035) 592 9628',
    fax:                  '(035) 592 0672',
    email:                'info@mhlabuyalingana.gov.za',
  },

  // ── Address ───────────────────────────────────────────────────────────────
  address: {
    physicalShort:  'Main Road R22, KwaNgwanase',
    physicalMedium: 'Main Road R22, KwaNgwanase, 3973',
    physicalFull:   'Main Road R22, KwaNgwanase, KwaZulu-Natal, 3973',
    postal:         'Private Bag X901, KwaNgwanase, 3973',
    mapsQuery:      'KwaNgwanase+Municipality+Main+Road+R22+KwaNgwanase+KwaZulu-Natal',
  },

  // ── Office Hours ──────────────────────────────────────────────────────────
  officeHours: {
    short:    'Mon–Fri: 07:30am – 16:00pm',
    medium:   'Mon – Fri: 07:30 – 16:00',
    long:     'Monday to Friday: 07:30 – 16:00',
    holidays: 'Public Holidays: Closed',
  },

  // ── Geographic / Weather ──────────────────────────────────────────────────
  location: {
    city:      'KwaNgwanase',
    latitude:  -26.98,
    longitude: 32.73,
  },

  // ── Leadership ────────────────────────────────────────────────────────────
  mayor: {
    title: 'His Worship the Executive Mayor',
    name:  'Cllr Thembinkosi Khumalo',
  },

  // ── Vision & Mission ──────────────────────────────────────────────────────
  vision:  'To develop uMhlabuyalingana Local Municipality as a viable and sustainable local government that improves the quality of life and creates a pleasant living and working environment for all citizens.',
  mission: 'uMhlabuyalingana Municipality will improve the livelihood of citizens by delivering services efficiently and effectively, promoting investment and economic growth, and involving local communities and stakeholders in municipal affairs in a structured manner.',
  slogan:  'Access to quality social infrastructural development and sustainable economic opportunities.',

  // ── Social Media ──────────────────────────────────────────────────────────
  social: {
    facebook:  '#',
    twitter:   '#',
    instagram: '#',
    youtube:   '#',
  },

  // ── Hero Section ──────────────────────────────────────────────────────────
  hero: {
    backgroundImage: 'https://lh3.googleusercontent.com/d/1x3DKfagMo7R3L5qWIdSwksOzqEeay70g=w1600',
  },

  // ── Loadshedding ──────────────────────────────────────────────────────────
  loadshedding: {
    scheduleUrl: 'https://www.ourpower.co.za/areas/manguzi',
  },

  // ── Departments (home-page panel + nav links) ─────────────────────────────
  departments: [
    { href: '/municipal-managers-office/', label: 'Office of the MM' },
    { href: '/community-services/',        label: 'Community Services' },
    { href: '/technical-services/',        label: 'Technical Services' },
    { href: '/financial-services/',        label: 'Financial Services' },
    { href: '/corporate-services/',        label: 'Corporate Services' },
  ],

  // ── Department Contacts ───────────────────────────────────────────────────
  deptContacts: [
    { dept: 'Municipal Manager',  role: 'Office of the Municipal Manager', phone: '(035) 592 0680', email: 'mm@mhlabuyalingana.gov.za',         icon: 'fas fa-user-tie' },
    { dept: 'Finance',            role: 'Chief Financial Officer',         phone: '(035) 592 0680', email: 'finance@mhlabuyalingana.gov.za',    icon: 'fas fa-chart-pie' },
    { dept: 'Human Resources',    role: 'HR Department',                   phone: '(035) 592 0680', email: 'hr@mhlabuyalingana.gov.za',         icon: 'fas fa-users' },
    { dept: 'Technical Services', role: 'Technical Department',            phone: '(035) 592 0680', email: 'technical@mhlabuyalingana.gov.za',  icon: 'fas fa-tools' },
    { dept: 'Community Services', role: 'Community Services',              phone: '(035) 592 0680', email: 'community@mhlabuyalingana.gov.za',  icon: 'fas fa-hands-helping' },
    { dept: 'Corporate Services', role: 'Corporate Services',              phone: '(035) 592 0680', email: 'corporate@mhlabuyalingana.gov.za',  icon: 'fas fa-building' },
  ],
}
