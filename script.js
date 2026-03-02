// =============================================================
//  PORTFOLIO SCRIPT
//  Depends on: projects.js (PROJECTS array) and cv.js (CV object)
// =============================================================

// ── Formatting helpers ────────────────────────────────────────

// Converts **text** → <strong>text</strong>
function formatBold(str) {
  return str.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

// Converts a prose string with \n\n paragraph breaks into <p> tags.
// Also supports raw HTML blocks (e.g. <figure>) inside the string.
function formatProse(str) {
  return str
    .trim()
    .split(/\n\n+/)
    .map(p => {
      const trimmed = p.trim();
      // Pass through raw HTML blocks (e.g. <figure>, <img>) unchanged
      if (trimmed.startsWith('<')) return trimmed;
      return `<p>${formatBold(trimmed)}</p>`;
    })
    .join('');
}

// ── Tab switching ─────────────────────────────────────────────

const navTabs  = document.querySelectorAll('.nav-tab');
const sections = document.querySelectorAll('.tab-content');

function switchTab(name) {
  navTabs.forEach(t => t.classList.toggle('active', t.dataset.tab === name));
  sections.forEach(s => s.classList.toggle('active', s.id === name));

  // Always reset to the grid view when navigating away from projects
  if (name !== 'projects') resetProjectsView();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navTabs.forEach(tab => tab.addEventListener('click', () => switchTab(tab.dataset.tab)));

document.querySelector('.nav-brand').addEventListener('click', () => switchTab('home'));

// In-page CTA buttons (hero "View Projects", "About Me", etc.)
document.querySelectorAll('[data-tab]').forEach(el => {
  if (el.classList.contains('nav-tab') || el.classList.contains('nav-brand')) return;
  el.addEventListener('click', () => switchTab(el.dataset.tab));
});

// ── Project card builder ──────────────────────────────────────

/**
 * Builds a project card element.
 *
 * @param {object}        project  - project data object from PROJECTS
 * @param {function|null} onClick  - called with project.id when the card is clicked.
 *                                   Pass null for a non-interactive card.
 */
function buildProjectCard(project, onClick) {
  const card = document.createElement('div');
  card.className = 'project-card';

  // ── Card image (full-bleed top strip) ─────────────────────
  const imgHtml = project.image
    ? `<div class="card-img">
         <img src="${project.image}" alt="${project.title}" loading="lazy" />
       </div>`
    : `<div class="card-img">
         <div class="card-img-placeholder">&#9674; &#9674; &#9674;</div>
       </div>`;

  // ── GitHub link ───────────────────────────────────────────
  const ghLink = project.github
    ? `<a href="${project.github}" target="_blank" rel="noopener"
          class="project-link" aria-label="View on GitHub"
          onclick="event.stopPropagation()">&#8599;</a>`
    : '';

  // ── "Read writeup" CTA (only when card is clickable) ─────
  const ctaHtml = onClick
    ? '<p class="card-cta">Read writeup &#8594;</p>'
    : '';

  card.innerHTML = `
    ${imgHtml}
    <div class="project-card-header">
      <span class="project-icon">&#9674;</span>
      ${ghLink}
    </div>
    <h3>${project.title}</h3>
    <p>${project.summary}</p>
    <div class="project-tags">
      ${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}
    </div>
    ${ctaHtml}
  `;

  if (onClick) {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => onClick(project.id));
  }

  return card;
}

// ── Render project grids ──────────────────────────────────────

function renderHomeProjects() {
  const grid = document.getElementById('home-projects-grid');
  PROJECTS.forEach(p => {
    // Home cards navigate to the Projects tab and open the detail view
    const card = buildProjectCard(p, id => {
      switchTab('projects');
      openProjectDetail(id);
    });
    grid.appendChild(card);
  });
}

function renderProjectsGrid() {
  const grid = document.getElementById('projects-grid');
  PROJECTS.forEach(p => {
    const card = buildProjectCard(p, id => openProjectDetail(id));
    grid.appendChild(card);
  });
}

// ── Project detail view ───────────────────────────────────────

function resetProjectsView() {
  document.getElementById('projects-list').classList.remove('hidden');
  document.getElementById('project-detail').classList.add('hidden');
}

function openProjectDetail(id) {
  const project = PROJECTS.find(p => p.id === id);
  if (!project) return;

  // ── Featured image (shown if project.image is set) ────────
  const featuredImgHtml = project.image
    ? `<div class="detail-featured-img">
         <img src="${project.image}" alt="${project.title}" />
       </div>`
    : '';

  // ── GitHub button ─────────────────────────────────────────
  const ghButton = project.github
    ? `<a href="${project.github}" target="_blank" rel="noopener"
          class="btn-secondary detail-github">View on GitHub &#8599;</a>`
    : '';

  // ── Writeup sections ──────────────────────────────────────
  const objectivesHtml = `<ol>
    ${project.objectives.map(obj => `<li>${formatBold(obj)}</li>`).join('')}
  </ol>`;

  const howItWorksHtml = `<ol>
    ${project.howItWorks.map(step => `<li>${formatBold(step)}</li>`).join('')}
  </ol>`;

  const toolsHtml = `<div class="project-tags">
    ${project.tools.map(t => `<span class="skill-tag">${t}</span>`).join('')}
  </div>`;

  document.getElementById('project-detail').innerHTML = `
    <button class="back-btn" id="back-btn">&#8592; Back to Projects</button>

    <div class="detail-header">
      <div>
        <h1>${project.title}</h1>
        <div class="project-tags detail-tags">
          ${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
      ${ghButton}
    </div>

    ${featuredImgHtml}

    <div class="detail-body">
      <div class="detail-section">
        <h2>Overview</h2>
        ${formatProse(project.overview)}
      </div>

      <div class="detail-section">
        <h2>Objectives</h2>
        ${objectivesHtml}
      </div>

      <div class="detail-section">
        <h2>Thought Process</h2>
        ${formatProse(project.thoughtProcess)}
      </div>

      <div class="detail-section">
        <h2>How It Works</h2>
        ${howItWorksHtml}
      </div>

      <div class="detail-section">
        <h2>Challenges Faced</h2>
        ${formatProse(project.challenges)}
      </div>

      <div class="detail-section">
        <h2>Reflections</h2>
        ${formatProse(project.reflections)}
      </div>

      <div class="detail-section">
        <h2>Technical Tools</h2>
        ${toolsHtml}
      </div>
    </div>
  `;

  document.getElementById('projects-list').classList.add('hidden');
  document.getElementById('project-detail').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  document.getElementById('back-btn').addEventListener('click', resetProjectsView);
}

// ── CV rendering ──────────────────────────────────────────────

function renderCV() {
  const educationHtml = CV.education.map(edu => `
    <div class="cv-entry">
      <div class="cv-entry-header">
        <div>
          <strong>${edu.degree}</strong>
          <span class="cv-company">${edu.institution}</span>
        </div>
        <span class="cv-period">${edu.period}</span>
      </div>
      ${edu.expected ? `<p class="cv-sub">${edu.expected}</p>` : ''}
      ${edu.details  ? `<p class="cv-sub">${edu.details}</p>`  : ''}
    </div>
  `).join('');

  const experienceBlock = CV.experience.length > 0 ? `
    <div class="cv-block">
      <h2 class="cv-block-title">Experience</h2>
      ${CV.experience.map(exp => `
        <div class="cv-entry">
          <div class="cv-entry-header">
            <div>
              <strong>${exp.role}</strong>
              <span class="cv-company">${exp.company}</span>
            </div>
            <span class="cv-period">${exp.period}</span>
          </div>
          <ul>${exp.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
        </div>
      `).join('')}
    </div>
  ` : '';

  const skillsHtml = Object.entries(CV.skills).map(([category, skills]) => `
    <div class="cv-skill-group">
      <h4>${category}</h4>
      <div class="skill-tags">
        ${skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');

  const certsBlock = CV.certifications.length > 0 ? `
    <div class="cv-block">
      <h2 class="cv-block-title">Certifications</h2>
      ${CV.certifications.map(c => `
        <div class="cv-entry">
          <div class="cv-entry-header">
            <strong>${c.name}</strong>
            <span class="cv-period">${c.year}</span>
          </div>
          <p class="cv-sub">${c.issuer}</p>
        </div>
      `).join('')}
    </div>
  ` : '';

  document.getElementById('cv-content').innerHTML = `
    <div class="cv-page-header">
      <div>
        <h1>Background &amp; Capabilities</h1>
        <p class="cv-tagline">${CV.tagline}</p>
      </div>
      <a href="${CV.resumeUrl}" download class="btn-primary cv-download-btn">&#8595;&nbsp; Download Resume</a>
    </div>

    <div class="cv-block">
      <h2 class="cv-block-title">Education</h2>
      ${educationHtml}
    </div>

    ${experienceBlock}

    <div class="cv-block">
      <h2 class="cv-block-title">Skills &amp; Capabilities</h2>
      ${skillsHtml}
    </div>

    ${certsBlock}
  `;
}

// ── Initialise ────────────────────────────────────────────────

renderHomeProjects();
renderProjectsGrid();
renderCV();
