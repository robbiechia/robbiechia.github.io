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
  tagline: 'I\'m a graduating Data Science & Analytics student with a passion for machine learning, statistical modelling, and turning data into clear, actionable insight.',

  // ── Education ──────────────────────────────────────────────
  education: [
    {
      degree:      'B.Sc. Data Science & Analytics',
      institution: 'National University of Singapore',
      period:      '2022 — Present',
      expected:    'Expected Graduation: 2026',
      details:     'Relevant coursework: Machine Learning, Statistical Computing, Database Systems, Data Mining, Data Visualisation, Linear Algebra, Probability & Statistics, Data Algorithms & Structures',
    },
    {
      degree:      'Exchange Semester',
      institution: 'University of Waterloo',
      period:      'Jan 2025 - May 2025',
      details:     'Relevant coursework: Algorithm Design & Data Abstraction, Advance Calculus & Discrete Mathematics, Applied Linear Models',
    }
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
    {
      role:    'Data Analyst Intern',
      company: 'Auristone Pte Ltd',
      period:  'May 2024 - Dec 2024',
      bullets: [
        'Designed and productionised an end-to-end RNA-seq ETL and statistical analysis pipeline in R, standardising preprocessing, normalisation, statistical analyses and differential expression workflows across experiments',
        'Formulated and tested statistical hypotheses on treatment–control gene expression differences using EDA, clustering and distributional analysis to identify biologically significant patterns',
        'Implemented quality control and concordance validation using correlation metrics and outlier detection to detect data inconsistencies and prevent propagation of experimental artefacts into downstream modelling',
        'Engineered scalable data extraction workflows using MinIO object storage to support repeated modelling experiments on shared high-volume datasets'
      ],
    },
    {
      role:    'Operations & Analytics Officer',
      company: 'Republic of Singapore Air Force (RSAF)',
      period:  'Apr 2021 — May 2022',
      bullets: [
        'Reduced reporting cycles by 60% by designing and automating Power BI dashboards tracking operational KPIs, enabling leadership to monitor trends, identify anomalies and support data-informed decision-making',
        'Analysed 1,000+ personnel records to identify compliance gaps and surface anomalies',
        'Led digitalisation of manpower tracking using NFC systems and AWS S3, reducing manual logging efforts and improving data reliability'
      ],
    }
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
      'Python', 'R', 'SQL', 'PostgreSQL', 'Familiar with Java and C',
    ],
    'Libraries & Frameworks': [
      'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'JAX', 'SciPy',
      'Matplotlib', 'Seaborn', 'Plotly', 'GGPlot2'
    ],
    'Tools & Platforms': [
      'Jupyter', 'Git & GitHub', 'Power BI', 'Docker'
    ],
    'Techniques': [
      'Machine Learning', 'Deep Learning', 'Natural Language Processing',
      'Time Series Analysis', 'Statistical Modelling',
      'Data Visualisation', 'Exploratory Data Analysis',
      'Data Cleaning & Preprocessing', 'Feature Engineering',
      'Model Evaluation & Validation', 'ETL Pipeline Design',
    ],
    'Spoken Languages': [
      'English', 'Mandarin'
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
