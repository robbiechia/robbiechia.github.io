// =============================================================
//  CV / BACKGROUND DATA
//  Edit this file to update your CV page.
//
//  - education:      add/edit degree entries
//  - experience:     uncomment and fill in when you have roles
//  - skills:         add/remove skills per category
//  - certifications: add entries as you earn them
// =============================================================

const CV = {

  // URL of your resume PDF (place the file in the same folder as index.html)
  resumeUrl: 'Robbie_Chia_Yuan_Ee_Resume.pdf',

  // Short professional tagline shown at the top of the CV page
  tagline: 'Data Science & Analytics student with a passion for machine learning, statistical modelling, and turning data into clear, actionable insight.',

  // ── Education ──────────────────────────────────────────────
  education: [
    {
      degree:      'B.Sc. Data Science & Analytics',
      institution: 'Your University',
      period:      '2023 — Present',
      expected:    'Expected Graduation: 2026',
      details:     'Relevant coursework: Machine Learning, Statistical Computing, Database Systems, Data Mining, Data Visualisation, Linear Algebra, Probability & Statistics',
    },
    // Add more entries as needed:
    // {
    //   degree:      'Prior Qualification / A-Levels',
    //   institution: 'School Name',
    //   period:      '2021 — 2023',
    //   expected:    '',
    //   details:     'Subjects: Mathematics, Further Mathematics, Computer Science',
    // },
  ],

  // ── Work Experience ────────────────────────────────────────
  // Leave as an empty array [] if you have no experience yet.
  // The section will be hidden automatically.
  experience: [
    // {
    //   role:    'Data Analyst Intern',
    //   company: 'Company Name',
    //   period:  'Jun 2025 — Aug 2025',
    //   bullets: [
    //     'Built automated reporting dashboards in Power BI, reducing manual reporting time by 40%',
    //     'Analysed customer transaction data to surface upsell opportunities worth $X',
    //   ],
    // },
  ],

  // ── Skills & Capabilities ──────────────────────────────────
  // Each key is a category heading; each value is an array of skill tags.
  skills: {
    'Languages': [
      'Python', 'R', 'SQL',
    ],
    'Libraries & Frameworks': [
      'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch',
      'HuggingFace Transformers', 'Matplotlib', 'Seaborn', 'Plotly', 'Dash',
    ],
    'Tools & Platforms': [
      'Jupyter', 'Git & GitHub', 'Tableau', 'Power BI',
    ],
    'Techniques': [
      'Machine Learning', 'Deep Learning', 'Natural Language Processing',
      'Time Series Analysis', 'Statistical Modelling',
      'Data Visualisation', 'Exploratory Data Analysis',
    ],
  },

  // ── Certifications ─────────────────────────────────────────
  // Leave as an empty array [] if none yet.
  certifications: [
    // {
    //   name:   'Google Data Analytics Professional Certificate',
    //   issuer: 'Google / Coursera',
    //   year:   '2024',
    // },
  ],

};
