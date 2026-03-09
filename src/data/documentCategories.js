// ─────────────────────────────────────────────────────────────────────────────
// Document Categories
//
// folderId: The Google Drive folder ID for each category.
//   1. Make each folder "Anyone with the link → Viewer".
//   2. Copy the ID from the share URL:
//        https://drive.google.com/drive/folders/FOLDER_ID_HERE
//   3. Paste it as the folderId below.
//
// GOOGLE_DRIVE_API_KEY is read from the env variable VITE_GDRIVE_API_KEY.
//   Create a .env file in the project root:
//     VITE_GDRIVE_API_KEY=your_api_key_here
// ─────────────────────────────────────────────────────────────────────────────

export const GDRIVE_API_KEY = import.meta.env.VITE_GDRIVE_API_KEY || ''

export const documentCategories = [
  {
    slug: 'annual-reports',
    label: 'Annual Reports',
    icon: 'fas fa-folder',
    description: 'Annual performance and financial reports published by Richmond Local Municipality.',
    folderId: '1liKkroX9XxHWROQNgU4aNr8bEks4Gv6F',
  },
  {
    slug: 'budgets',
    label: 'Budgets',
    icon: 'fas fa-chart-pie',
    description: 'Approved municipal budgets and budget-related reporting documents.',
    folderId: '1yDSoHrlLQtFWVsPrp0SbOaAADmdAHfmH',
  },
  {
    slug: 'by-laws',
    label: 'By-Laws',
    icon: 'fas fa-gavel',
    description: 'Enacted by-laws governing conduct and services within the Richmond municipal area.',
    folderId: '1QGvdVxeD-rPqhdoAWNiu0FHAsuKbvhd0',
  },
  {
    slug: 'financial-statements',
    label: 'Financial Statements',
    icon: 'fas fa-file-invoice-dollar',
    description: 'Audited annual financial statements in accordance with GRAP standards.',
    folderId: '',
  },
  {
    slug: 'idp',
    label: 'IDP',
    icon: 'fas fa-sitemap',
    description: 'Integrated Development Plans outlining the municipality\'s five-year development strategy.',
    folderId: '1y9nH_vJZT0OGwLc5e3IUW6TkI3AtIvnO',
  },
  {
    slug: 'performance-agreements',
    label: 'Performance Agreements',
    icon: 'fas fa-file-contract',
    description: 'Signed performance agreements for municipal managers and senior staff.',
    folderId: '',
  },
  {
    slug: 'performance-reports',
    label: 'Performance Reports',
    icon: 'fas fa-chart-line',
    description: 'Quarterly and annual performance reports against agreed KPIs.',
    folderId: '',
  },
  {
    slug: 'policies',
    label: 'Policies',
    icon: 'fas fa-clipboard-list',
    description: 'Adopted council policies covering all municipal functions and operations.',
    folderId: '',
  },
  {
    slug: 'sdbip',
    label: 'SDBIP',
    icon: 'fas fa-tasks',
    description: 'Service Delivery and Budget Implementation Plans for each financial year.',
    folderId: '',
  },
  {
    slug: 'in-year-reporting',
    label: 'In-Year Reporting',
    icon: 'fas fa-calendar-check',
    description: 'Monthly and quarterly in-year financial and service delivery reports.',
    folderId: '',
  },
]
