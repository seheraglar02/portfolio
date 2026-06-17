const projects = [
  {
    id: 1,
    title: "E-Learning & Prozessoptimierung",
    company: "Bosch Rexroth",
    color: "#2563EB",
    tags: ["E-Learning", "Prozessoptimierung", "Multimedia"],
    accentTag: "E-Learning",
    role: "E-Learning Entwicklerin & Content Designerin",
    summary: "Erstellung und Weiterentwicklung digitaler Lern- und Kommunikationsinhalte in der Medien-Abteilung, von der Konzeption multimedialer Inhalte bis zur Recherche von KI-Tools als Prozessoptimierung.",
    challenge: "Digitale Lern- und Kommunikationsinhalte für verschiedene Fachbereiche mussten geplant, erstellt, gepflegt und kontinuierlich weiterentwickelt werden, bei gleichzeitig enger Abstimmung mit unterschiedlichen Stakeholdern.",
    approach: [
      "Erstellung und Weiterentwicklung digitaler Lern- und Kommunikationsinhalte in der Medien-Abteilung",
      "Planung, Konzeption, Erstellung und Umsetzung multimedialer Inhalte",
      "Enge Zusammenarbeit mit verschiedenen Fachbereichen",
      "Analyse von Prozessen und Entwicklung von Lösungen zur Verbesserung der Content-Erstellung und Qualitätssicherung",
      "Pflege von Content auf verschiedenen Plattformen",
      "Recherche zu KI-Tools für die Content-Erstellung als Maßnahme zur Prozessoptimierung"
    ],
    result: "Kontinuierliche Weiterentwicklung digitaler Lernmaterialien. Effizientere Content-Produktion durch strukturierte Zusammenarbeit mit Fachbereichen. Identifizierung von KI-gestützten Optimierungspotenzialen in der Content-Erstellung.",
    tools: ["Articulate 360", "MS Office", "Adobe CC"]
  },
  {
    id: 2,
    title: "Standardisierung des E-Learning-Erstellungsprozesses",
    company: "Bachelorarbeit",
    color: "#7C3AED",
    tags: ["Prozessanalyse", "BPM", "Qualitätsmanagement"],
    accentTag: "BPM",
    role: "Alleinige Autorin & Prozessanalystin",
    summary: "Entwicklung eines standardisierten Workflows und Autorenleitfadens zur Effizienzsteigerung in der E-Learning-Produktion.",
    challenge: "Bestehende E-Learning-Erstellungsprozesse waren uneinheitlich, zeitaufwendig und schwer skalierbar. Es fehlte ein dokumentierter Standardprozess, der Qualität und Effizienz sichert.",
    approach: [
      "Systematische Analyse bestehender Prozesse (IST-Analyse)",
      "Identifikation von Engpässen und Verbesserungspotenzialen",
      "Aufzeichnung der Prozesse mit BPMN 2.0",
      "Entwicklung eines standardisierten SOLL-Prozesses mit klaren Phasen und Übergaben",
      "Erstellung von Styleguides und standardisierten Dokumenten",
      "Erstellung eines Autorenleitfadens als operative Prozessdokumentation"
    ],
    result: "Vollständig dokumentierter Standardprozess für die E-Learning-Produktion. Praktisch einsetzbarer Autorenleitfaden. Erstellte Styleguides und standardisierte Dokumente als dauerhaft nutzbare Grundlage.",
    tools: ["MS Office", "BPMN 2.0", "Prozessmodellierung"]
  },
  {
    id: 3,
    title: "KI PowerPoint Add-In",
    company: "Hochschulprojekt · Team",
    color: "#BE185D",
    tags: ["Produktentwicklung", "UX/UI", "KI"],
    accentTag: "Produktentwicklung",
    role: "Konzept · Design · Entwicklung",
    summary: "Entwicklung eines KI-gestützten PowerPoint Add-Ins für Schüler und Studierende, von der Planung über wöchentliche Team-Meetings bis zur finalen Umsetzung.",
    challenge: "Ein KI-Tool sollte direkt in PowerPoint integriert werden, um Schüler und Studierende bei der Präsentationserstellung zu unterstützen, mit klar definierten Anforderungen, regelmäßigen Updates und einer nutzerfreundlichen Umsetzung.",
    approach: [
      "Planung und Definition der Anforderungen im Team",
      "Wöchentliche Team-Meetings zur Abstimmung und Weiterentwicklung",
      "Größere Feature-Updates alle drei Monate",
      "Prototyping: Interaktiver Klick-Prototyp des Add-Ins",
      "Technische Umsetzung mit HTML, CSS und JavaScript sowie Verknüpfung der ChatGPT API",
      "Evaluation der Nutzerfreundlichkeit (UX/UI)"
    ],
    result: "Funktionsfähiges KI-Add-In direkt in PowerPoint integriert. Nutzerfreundliche Oberfläche nach UX/UI-Evaluation. Strukturierter Entwicklungsprozess mit regelmäßigen Releases.",
    tools: ["HTML", "CSS", "JavaScript", "PowerPoint API", "ChatGPT API", "Figma"]
  },
  {
    id: 4,
    title: "kaffeekohi",
    company: "Eigenprojekt · kaffeekohi.de",
    link: "https://kaffeekohi.de",
    color: "#92400E",
    tags: ["Web-Entwicklung", "Full-Stack", "CMS"],
    accentTag: "Web-Entwicklung",
    role: "Eigenständige Entwicklerin",
    summary: "Eigenständige Entwicklung eines Kaffeeblogs mit vollständigem Admin-Bereich zur Verwaltung und Veröffentlichung von Artikeln – von der Konzeption bis zum Live-Betrieb unter kaffeekohi.de.",
    challenge: "Eine vollständige Webanwendung sollte eigenständig konzipiert, entwickelt und deployed werden, inklusive eines funktionalen Admin-Bereichs, über den Artikel erstellt, bearbeitet und veröffentlicht werden können, ohne externe CMS-Abhängigkeit.",
    approach: [
      "Konzeption von Seitenstruktur, Nutzerführung und Content-Architektur des Blogs",
      "Entwicklung des Frontends mit HTML, CSS und JavaScript",
      "Implementierung eines passwortgeschützten Admin-Bereichs zur Artikelverwaltung",
      "Erstellung, Bearbeitung und Veröffentlichung von Artikeln über das Admin-Interface",
      "Deployment und Live-Betrieb der Website unter kaffeekohi.de"
    ],
    result: "Vollständig eigenständig entwickelter und live betriebener Kaffeeblog. Funktionaler Admin-Bereich ermöglicht die selbstständige Pflege und Veröffentlichung von Inhalten ohne externe Tools.",
    tools: ["HTML", "CSS", "JavaScript", "PHP", "Admin-Dashboard"]
  },
  {
    id: 5,
    title: "Website Redesign",
    company: "Hochschulprojekt · Adobe XD",
    color: "#D97706",
    tags: ["UX Design", "UI Design", "Redesign"],
    accentTag: "UX Design",
    role: "UX/UI Designerin",
    summary: "Vollständiges Redesign einer bestehenden Website mit Fokus auf Nutzerführung, visuelle Hierarchie und UI-Prinzipien.",
challenge: "Die bestehende Website wies mehrere Usability-Schwächen auf: eine unklare Navigation, eine inkonsistente visuelle Hierarchie und eine unzureichende Nutzerführung, insbesondere auf mobilen Endgeräten.",    approach: [
      "Heuristische Evaluation der bestehenden Website",
      "Analyse der Nutzerführung und Identifikation kritischer Schwachstellen",
      "Entwicklung eines neuen Informationsarchitektur-Konzepts",
      "Erstellung von Wireframes und High-Fidelity-Prototypen in Adobe XD",
      "Anwendung von UI/UX-Prinzipien: Gestaltgesetze, Kontrasthierarchie, Konsistenz"
    ],
    result: "Klar strukturiertes Redesign mit verbesserter Nutzerführung. Konsistentes visuelles System.",
    tools: ["Adobe XD", "Usability-Analyse", "Wireframing"]
  },
  {
    id: 6,
    title: "Interaktive Microsite mit D3.js",
    company: "Hochschulprojekt · Teamarbeit",
    color: "#0891B2",
    tags: ["Datenvisualisierung", "JavaScript", "Teamarbeit"],
    accentTag: "Datenvisualisierung",
    role: "Entwicklerin · Konzeption",
summary: "Entwicklung einer interaktiven Microsite zur verständlichen und zugänglichen Visualisierung komplexer Daten für Endnutzer.",    
challenge: "Komplexe Datensätze sollten für ein nicht-technisches Publikum verständlich gemacht werden, interaktiv, visuell ansprechend und ohne Vorwissen nutzbar.",
    approach: [
      "Konzeption einer nutzerorientierten Informationsarchitektur",
      "Auswahl und Strukturierung geeigneter Visualisierungsformen für die Daten",
      "Implementierung interaktiver Visualisierungen mit D3.js",
      "Iteratives Testen der Verständlichkeit mit Prototypen",
      "Teamkoordination und Aufgabenteilung im Entwicklungsprozess"
    ],
    result: "Funktionierende interaktive Microsite mit intuitiver Bedienung. Positive Nutzerfeedbacks zur Verständlichkeit der Daten.",
    tools: ["D3.js", "HTML", "CSS", "JavaScript"]
  },
  {
    id: 7,
    title: "Softwareprojekt: Autorennspiel & Client-Server-Spiel",
    company: "Hochschulprojekt · Teamarbeit",
    color: "#059669",
    tags: ["Projektmanagement", "QA", "Agile"],
    accentTag: "Agile",
    role: "Entwicklerin · Testerin · Anforderungsanalystin",
    summary: "Zwei Softwareprojekte mit agiler Arbeitsweise, vom Lasten-/Pflichtenheft bis zur systematischen Qualitätssicherung.",
    challenge: "Komplexe Softwareprojekte mit Teamkoordination, unklaren Anforderungen zu Beginn und dem Bedarf an strukturierter Qualitätssicherung über mehrere Entwicklungszyklen.",
    approach: [
      "Erstellung von Lasten- und Pflichtenheft zur Anforderungsdokumentation",
      "Einführung agiler Arbeitsweise mit Scrumban (Sprint-Planung, Backlog, Retrospektiven)",
      "Eigenständige Entwicklung eines Autorennspiel-Prototyps",
      "Mitarbeit am verteilten Client-Server-Spiel im Team",
      "Entwicklung systematischer Testfälle und Durchführung von QA-Zyklen"
    ],
    result: "Funktionierende Softwareprodukte innerhalb des Projektzeitraums. Vollständige Projektdokumentation. Nachvollziehbare Qualitätssicherung durch strukturierte Testfälle.",
    tools: ["Unity", "C#", "Scrumban", "MS Office", "Testing Tools"]
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const STAGGER = 0.13;
  const BASE_DELAY = 0.18;

  const animItems = document.querySelectorAll('[data-animate]');

  const dirClass = {
    up:    'anim-fadeup',
    down:  'anim-fadedown',
    left:  'anim-fadeleft',
    right: 'anim-faderight',
  };

  animItems.forEach((el) => {
    const index = Number.parseFloat(el.dataset.animate) || 0;
    const delay = BASE_DELAY + (index * STAGGER);
    const dir   = el.dataset.animateDir || 'up';

    el.style.animationDelay = `${delay}s`;
    el.classList.add(dirClass[dir] || 'anim-fadeup');
  });

  const nav = document.getElementById('nav');

  const updateNav = () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 30);
  };

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // Nav theme: switch between light/dark based on current section
  const navH = nav.offsetHeight;
  const themedSections = document.querySelectorAll('[data-nav-theme]');

  const navThemeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const theme = entry.target.dataset.navTheme;
      nav.classList.toggle('nav--light', theme === 'light');
    });
  }, {
    rootMargin: `-${navH}px 0px -${window.innerHeight - navH - 1}px 0px`,
    threshold: 0,
  });

  themedSections.forEach(s => navThemeObserver.observe(s));

  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuLinks = mobileMenu.querySelectorAll('.mobile-menu__link');

  const toggleMenu = (forceClose = false) => {
    const isCurrentlyOpen = menuBtn.classList.contains('open');
    const shouldOpen = forceClose ? false : !isCurrentlyOpen;

    menuBtn.classList.toggle('open', shouldOpen);
    mobileMenu.classList.toggle('open', shouldOpen);
    menuBtn.setAttribute('aria-expanded', String(shouldOpen));
    mobileMenu.setAttribute('aria-hidden', String(!shouldOpen));
    document.body.style.overflow = shouldOpen ? 'hidden' : '';
  };

  menuBtn.addEventListener('click', () => toggleMenu());

  menuLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(true));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuBtn.classList.contains('open')) {
      toggleMenu(true);
    }
  });

  // Scroll-activated quote
  const quoteSection = document.querySelector('.quote-section');
  const quoteEl = document.querySelector('[data-quote]');

  if (quoteSection && quoteEl) {
    const nodes = Array.from(quoteEl.childNodes);
    const spans = [];

    nodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent.trim().split(/\s+/).filter(Boolean).forEach(w => {
          spans.push(`<span class="quote-word">${w}</span>`);
        });
      } else if (node.nodeName === 'EM') {
        node.textContent.trim().split(/\s+/).filter(Boolean).forEach(w => {
          spans.push(`<span class="quote-word quote-word--em">${w}</span>`);
        });
      }
    });

    quoteEl.innerHTML = spans.join(' ');

    const words = quoteEl.querySelectorAll('.quote-word');
    const total = words.length;

    const paintWords = () => {
      const rect = quoteSection.getBoundingClientRect();
      const scrolled = -rect.top;
      const scrollable = quoteSection.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / scrollable));

      words.forEach((span, i) => {
        const start = i / total;
        const end = (i + 1.8) / total;
        const t = Math.min(1, Math.max(0, (progress - start) / (end - start)));
        const opacity = 0.07 + t * 0.93;
        span.style.color = `rgba(255,255,255,${opacity})`;
        span.style.textShadow = t > 0.85
          ? `0 0 40px rgba(255,255,255,${(t - 0.85) / 0.15 * 0.18})`
          : 'none';
      });
    };

    window.addEventListener('scroll', paintWords, { passive: true });
    paintWords();
  }

  // Projects
  const modalOverlay = document.getElementById('modalOverlay');
  const modalContent = document.getElementById('modalContent');
  const modalClose = document.getElementById('modalClose');
  let lastFocused = null;

  function openModal(project) {
    lastFocused = document.activeElement;
    modalOverlay.style.setProperty('--accent', project.color);

    const stepsHTML = project.approach
      .map(s => `<div class="cs-step">${s}</div>`)
      .join('');
    const toolsHTML = project.tools
      .map(t => `<span class="tag">${t}</span>`)
      .join('');

    const linkHTML = project.link
      ? `<a class="modal-live-link" href="${project.link}" target="_blank" rel="noopener noreferrer">Website besuchen ↗</a>`
      : '';

    modalContent.innerHTML = `
      <div class="modal-header">
        <p class="modal-eyebrow">${project.company}</p>
        <h2 class="modal-title" id="modalTitle">${project.title}</h2>
        ${linkHTML}
      </div>
      <div class="modal-role-badge">${project.role}</div>
      <div class="case-study-grid">
        <div class="cs-block">
          <p class="cs-block-label">Herausforderung</p>
          <p>${project.challenge}</p>
        </div>
        <div class="cs-block">
          <p class="cs-block-label">Mein Vorgehen</p>
          <div class="cs-steps">${stepsHTML}</div>
        </div>
        <div class="cs-block cs-result">
          <p class="cs-block-label">Ergebnis & Impact</p>
          <p>${project.result}</p>
        </div>
        <div class="cs-block">
          <p class="cs-block-label">Eingesetzte Tools</p>
          <div class="cs-tools">${toolsHTML}</div>
        </div>
      </div>
    `;

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    modalOverlay.querySelector('.modal').scrollTop = 0;
    setTimeout(() => modalClose.focus(), 50);
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);

  modalOverlay?.addEventListener('click', e => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal();
  });

  const grid = document.getElementById('projectsGrid');
  if (grid) {
    projects.forEach(project => {
      const li = document.createElement('li');
      li.className = 'project-card';
      li.style.setProperty('--accent', project.color);
      li.setAttribute('tabindex', '0');
      li.setAttribute('role', 'button');
      li.setAttribute('aria-label', `${project.title} öffnen`);

      const tagsHTML = project.tags
        .map(t => `<span class="tag${t === project.accentTag ? ' tag-accent' : ''}">${t}</span>`)
        .join('');

      const toolPills = (project.tools ?? []).map(t => `<span class="project-card-tool">${t}</span>`).join('');
      const toolsHTML = toolPills ? `<div class="project-card-tools">${toolPills}</div>` : '';

      li.innerHTML = `
        <div class="project-card-top"></div>
        <div class="project-card-body">
          <div class="project-tags">${tagsHTML}</div>
          <h3 class="project-card-title">${project.title}</h3>
          <p class="project-card-company">${project.company}</p>
          <p class="project-card-summary">${project.summary}</p>
          ${toolsHTML}
        </div>
        <div class="project-card-footer">
          <p class="project-role">${project.role}</p>
          <div class="project-arrow" aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 6h8M7 3l3 3-3 3"/>
            </svg>
          </div>
        </div>
      `;

      li.addEventListener('click', () => openModal(project));
      li.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(project); }
      });

      grid.appendChild(li);
    });
  }

  // ── Skills data ──────────────────────────────────────────────────
  const skillCategories = [
    {
      id: 'design', label: 'Design',
      color: '#a78bfa', glow: 'rgba(167, 139, 250, 0.45)',
      bg: 'linear-gradient(145deg, #c084fc 0%, #818cf8 100%)',
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 9.5-9.5z"/></svg>`,
      tools: ['Figma', 'Adobe XD', 'Illustrator', 'Photoshop', 'Canva'],
    },
    {
      id: 'entwicklung', label: 'Entwicklung',
      color: '#2dd4bf', glow: 'rgba(45, 212, 191, 0.45)',
      bg: 'linear-gradient(145deg, #34d399 0%, #06b6d4 100%)',
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      tools: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 'daten', label: 'Daten & Technik',
      color: '#4ade80', glow: 'rgba(74, 222, 128, 0.45)',
      bg: 'linear-gradient(145deg, #4ade80 0%, #2dd4bf 100%)',
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>`,
      tools: ['SQL', 'XML', 'JSON', 'D3.js'],
    },
    {
      id: 'elearning', label: 'E-Learning',
      color: '#fb923c', glow: 'rgba(251, 146, 60, 0.45)',
      bg: 'linear-gradient(145deg, #fbbf24 0%, #f97316 100%)',
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
      tools: ['Articulate 360', 'Instructional Design', 'Lokalisierung'],
    },
    {
      id: 'projektmanagement', label: 'Projektmanagement',
      color: '#38bdf8', glow: 'rgba(56, 189, 248, 0.45)',
      bg: 'linear-gradient(145deg, #38bdf8 0%, #6366f1 100%)',
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>`,
      tools: ['Scrum', 'Design Thinking', 'BPMN 2.0', 'Scrumban'],
    },
    {
      id: 'ki', label: 'KI & Prompting',
      color: '#e879f9', glow: 'rgba(232, 121, 249, 0.5)',
      bg: 'linear-gradient(145deg, #e879f9 0%, #f43f5e 100%)',
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z"/><path d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75z"/><path d="M5 17l.5 1.5L7 19l-1.5.5L5 21l-.5-1.5L3 19l1.5-.5z"/></svg>`,
      tools: ['ChatGPT API', 'Claude API', 'Prompt Engineering', 'KI-Workflows'],
    },
    {
      id: 'tools', label: 'Tools',
      color: '#94a3b8', glow: 'rgba(148, 163, 184, 0.4)',
      bg: 'linear-gradient(145deg, #94a3b8 0%, #475569 100%)',
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
      tools: ['MS Office', 'Framer'],
    },
  ];

  const methodData = [
    { num: '01', title: 'UX / UI Design',                desc: 'Nutzerzentrierte Gestaltung von Interfaces und digitalen Produkten — von der ersten Recherche bis zum interaktiven Prototyp.', tags: ['Nutzerforschung', 'Wireframing', 'Prototyping', 'Usability-Evaluation', 'Informationsarchitektur'] },
    { num: '02', title: 'Design Thinking',               desc: 'Kreativer Problemlösungsprozess in fünf Phasen — mit dem Fokus auf echte Nutzerbedürfnisse, rasches Testen und iterative Verbesserung.', tags: ['Verstehen', 'Beobachten', 'Ideen entwickeln', 'Prototypen bauen', 'Testen'] },
    { num: '03', title: 'Agile Methoden',                desc: 'Flexible Projektsteuerung mit kurzen Feedbackzyklen, transparentem Backlog und strukturierter Teamkoordination im Team.', tags: ['Scrumban', 'Iterative Sprints', 'Backlog-Management', 'Retrospektiven', 'Teamkoordination'] },
    { num: '04', title: 'Prozessanalyse & -optimierung', desc: 'Bestehende Abläufe verstehen, Engpässe erkennen und dokumentierte, skalierbare Prozesse mit klaren Übergaben entwickeln.', tags: ['Bestandsaufnahme', 'Engpassanalyse', 'Workflow-Standardisierung', 'Qualitätssicherung'] },
    { num: '05', title: 'Strukturierte Dokumentation',   desc: 'Komplexe Inhalte verständlich aufbereiten und dauerhaft nutzbar machen — als Leitfaden, Spezifikation oder Vorlage.', tags: ['Styleguides', 'Autorenleitfäden', 'Spezifikationen', 'Lasten- & Pflichtenhefte'] },
  ];

  // ── Skills: scroll-driven category display ──────────────────────
  (function initSkills() {
    const track   = document.getElementById('skillsScrollTrack');
    const bigNum  = document.getElementById('skillsBigNum');
    const catName = document.getElementById('skillsCatName');
    const rightEl = document.getElementById('skillsStageRight');
    const dotsEl  = document.getElementById('skillsProgDots');
    if (!track || !bigNum || !catName || !rightEl) return;

    const N = skillCategories.length;
    let activeIdx = -1;

    function setHeight() {
      track.style.height = `${(N + 0.5) * window.innerHeight}px`;
    }

    const dots = skillCategories.map((cat, i) => {
      const btn = document.createElement('button');
      btn.className = 'skills__prog-dot';
      btn.setAttribute('aria-label', `${cat.label} ansehen`);
      btn.addEventListener('click', () => {
        const top = track.getBoundingClientRect().top + window.scrollY + i * window.innerHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      });
      dotsEl.appendChild(btn);
      return btn;
    });

    function replayAnim(el) {
      el.style.animation = 'none';
      el.getBoundingClientRect();
      el.style.animation = '';
    }

    const accentLine = document.getElementById('skillsAccentLine');
    const stickyEl   = track.querySelector('.skills__sticky');

    function setCategory(i) {
      const cat = skillCategories[i];
      activeIdx = i;

      replayAnim(bigNum);
      replayAnim(catName);
      bigNum.textContent = String(i + 1).padStart(2, '0');
      bigNum.style.color = cat.color + '55';
      catName.textContent = cat.label;
      catName.style.color = cat.color;

      rightEl.innerHTML = cat.tools.map((t, j) => `
        <div class="skills__tool-item" style="animation-delay:${j * 0.09}s">
          <span class="skills__tool-dot" style="background:${cat.color}"></span>
          <span class="skills__tool-name">${t}</span>
        </div>`).join('');

      dots.forEach((d, j) => d.classList.toggle('is-active', j === i));

      // Sweep accent line
      if (accentLine) {
        accentLine.style.transition = 'none';
        accentLine.style.width = '0';
        accentLine.getBoundingClientRect();
        accentLine.style.transition = '';
        accentLine.style.backgroundColor = cat.color;
        accentLine.style.width = '80px';
      }

      // Background colour bloom
      if (stickyEl) {
        stickyEl.style.background = `radial-gradient(ellipse 80% 70% at 10% 50%, ${cat.glow} 0%, transparent 65%)`;
      }
    }

    function onScroll() {
      const scrolled = Math.max(0, -track.getBoundingClientRect().top);
      const idx = Math.min(Math.floor(scrolled / window.innerHeight), N - 1);
      if (idx !== activeIdx) setCategory(idx);
    }

    setHeight();
    setCategory(0);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', setHeight, { passive: true });
    onScroll();
  }());

(function initMethodsList() {
  const outer = document.querySelector('.skills__methods-outer');
  const wrap  = document.querySelector('.skills__methods-wrap');
  const list  = document.getElementById('methodsList');

  if (!outer || !wrap || !list) return;

  list.className = 'methods-track';

  // Step counter injected into section head
  const sectionHead = wrap.querySelector('.methods-section-head');
  const counterEl = document.createElement('p');
  counterEl.className = 'methods-counter';
  counterEl.textContent = `01 / 0${methodData.length}`;
  if (sectionHead) sectionHead.appendChild(counterEl);

  methodData.forEach((m, index) => {
    const card = document.createElement('div');
    card.className = 'method-card';
    if (index === 0) card.classList.add('is-open');
    card.innerHTML = `
      <div class="method-card__header">
        <span class="method-card__num">${m.num}</span>
      </div>
      <h3 class="method-card__title">${m.title}</h3>
      <div class="method-card__body">
        <p class="method-card__desc">${m.desc}</p>
        <div class="method-card__tags">
          ${m.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}
        </div>
      </div>
    `;
    list.appendChild(card);
  });

  const cards = Array.from(list.querySelectorAll('.method-card'));

  function getScrollRange() {
    if (!cards.length) return { start: 0, end: 0 };
    const first = cards[0];
    const last  = cards.at(-1);
    const halfWrap = wrap.clientWidth / 2;
    return {
      start: first.offsetLeft + first.offsetWidth / 2 - halfWrap,
      end:   last.offsetLeft  + last.offsetWidth  / 2 - halfWrap,
    };
  }

  function setOuterHeight() {
    const { start, end } = getScrollRange();
    outer.style.height = `${window.innerHeight + (end - start) + window.innerHeight * 0.8}px`;
  }

  function updateMethodsScroll() {
    const rect = outer.getBoundingClientRect();
    const { start, end } = getScrollRange();
    const scrollDistance = Math.max(1, outer.offsetHeight - window.innerHeight);
    const progress = Math.min(Math.max(-rect.top / scrollDistance, 0), 1);
    const offset = start + progress * (end - start);

    list.style.transform = `translate3d(${-offset}px, 0, 0)`;

    const viewportCenter = offset + wrap.clientWidth / 2;
    let activeIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - viewportCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        activeIndex = index;
      }
    });

    cards.forEach((card, index) => {
      card.classList.toggle('is-open', index === activeIndex);
    });

    if (counterEl) {
      counterEl.textContent = `${String(activeIndex + 1).padStart(2, '0')} / 0${methodData.length}`;
    }
  }

  requestAnimationFrame(() => {
    setOuterHeight();
    updateMethodsScroll();
  });

  window.addEventListener('scroll', updateMethodsScroll, { passive: true });
  window.addEventListener('resize', () => {
    setOuterHeight();
    updateMethodsScroll();
  });
}());


  // Scroll reveal
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = Number(el.dataset.reveal) * 0.18;
      el.style.transitionDelay = `${delay}s`;
      el.classList.add('is-visible');
      revealObserver.unobserve(el);
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

  // Facts toggle (mobile only)
  const factsToggle = document.getElementById('factsToggle');
  if (factsToggle) {
    factsToggle.addEventListener('click', () => {
      const section = factsToggle.closest('.facts');
      const isOpen = section.classList.toggle('facts--open');
      factsToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;

      e.preventDefault();
      const offset = nav.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    });
  });
});