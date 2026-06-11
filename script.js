/* ============================================================
   PORTFOLIO SCRIPT — DATA + RENDER ENGINE

   HOW TO ADD NEW CONTENT:
   ━━━━━━━━━━━━━━━━━━━━━━━━
   • New Experience: Copy any object from EXPERIENCES array, paste
     inside the array, change the values. Done.
   • New Project:    Copy any object from PROJECTS array, paste,
     change values. The grid renders it automatically.
   • New Gallery:    Copy any object from GALLERY_ITEMS, paste,
     change category/title. Filter buttons update automatically.
   • New Cert:       Copy any cert object from CERTIFICATIONS.
   ============================================================ */

/* ============================================================
   DATA — EXPERIENCES
   ============================================================ */
const EXPERIENCES = [
  {
    id: 'exp-1',
    tabLabel: 'Graphic Design',
    role: 'Graphic Design Intern',
    company: 'The Truth Marketing Company',
    period: 'May 2024 – Aug 2024',
    type: 'Internship',
    responsibilities: [
      'Created targeted social media marketing posts that drove engagement across client accounts.',
      'Produced high-converting psychological marketing posts for various clients using persuasion-led design principles.',
      'Developed premium perfume bottle labeling and full packaging designs for the brand "Mush Fragrance."',
      'Designed comprehensive social media marketing campaigns for "Xlusive Auto Repair," covering content calendars, post templates, and brand assets.',
    ],
  },
  {
    id: 'exp-2',
    tabLabel: 'Web Developer',
    role: 'Frontend Web Developer Intern',
    company: 'Software Productivity Strategists, Inc',
    period: 'Jul 2025 – Sep 2025',
    type: 'Internship',
    responsibilities: [
      'Engineered the complete UI implementation and frontend architecture for the "Vita Website" — a corporate platform project.',
      'Built reusable component systems that reduced development time and increased codebase maintainability.',
      'Collaborated directly with stakeholders to translate design mockups into pixel-perfect, accessible interfaces.',
    ],
  },
  {
    id: 'exp-3',
    tabLabel: 'UI Design',
    role: 'Frontend & UI Design Intern',
    company: 'Software Productivity Strategists, Inc',
    period: 'Oct 2025 – Dec 2025',
    type: 'Internship',
    responsibilities: [
      'Formulated responsive interface layouts, visual assets, wireframes, and custom web prototypes for multiple client briefs.',
      'Created an early-stage personal portfolio home page design framework that established a reusable structural baseline.',
      'Contributed to cross-functional design reviews, aligning visual output with technical implementation constraints.',
    ],
  },
];

/* ============================================================
   DATA — WEB PROJECTS
   Add screenshot: 'assets/screenshots/filename.png' to each project.
   Set live: '#' to hide the Live Demo button.
   ============================================================ */
const PROJECTS = [
  {
    id: 'proj-1',
    title: 'Mini-Netflix Clone',
    description: 'A full-stack streaming application with backend database integration, secure user authentication pipeline, and a responsive frontend UI inspired by modern streaming interfaces.',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT', 'CSS Grid'],
    github: 'https://github.com/',
    live: '#',
    screenshot: 'assets/screenshots/1.png',
    features: [
      'JWT-based secure user authentication and session management',
      'MongoDB-backed movie/show data with dynamic search filtering',
      'Responsive grid layout adapting across all screen sizes',
      'Custom video player UI with playback controls',
    ],
    longDescription: 'A full-featured streaming platform built to explore full-stack architecture patterns. The frontend mirrors the familiar card-grid UX of modern streaming services while the Node.js/MongoDB backend handles auth, content storage, and user preferences.',
  },
  {
    id: 'proj-2',
    title: 'Galaxy Visualizer',
    description: 'A high-end interactive cosmic visualizer utilizing modern WebGL rendering to let users manipulate and explore procedurally generated galaxy structures in real time.',
    tags: ['Three.js', 'WebGL', 'GLSL', 'JavaScript', 'Canvas'],
    github: 'https://github.com/',
    live: '#',
    screenshot: 'assets/screenshots/2.png',
    features: [
      'Real-time procedural galaxy generation with configurable parameters',
      'Custom GLSL shaders for star glow and nebula cloud rendering',
      'Drag-to-rotate and scroll-to-zoom camera controls',
      'Particle count up to 100k stars with stable 60fps performance',
    ],
    longDescription: 'An immersive 3D space explorer powered by Three.js and custom GLSL shaders. Users can drag, zoom, and interact with a procedurally generated galaxy rendered entirely on the GPU — no physics engine required.',
  },
  {
    id: 'proj-3',
    title: 'Vita Corporate Platform',
    description: 'The fully realized frontend website built directly during my web development internship. Focused on performance, accessibility, and clean component architecture.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive', 'GSAP'],
    github: 'https://github.com/',
    live: '#',
    screenshot: 'assets/screenshots/3.png',
    features: [
      'GSAP-powered scroll animations and section transitions',
      'Fully accessible markup with ARIA roles and keyboard navigation',
      'Performance-optimized asset pipeline for fast Time-to-Interactive',
      'Reusable component architecture for scalable content updates',
    ],
    longDescription: 'Built end-to-end during my internship at Software Productivity Strategists, this corporate web platform set a high bar for accessibility and component reuse — translating stakeholder mockups into a production-grade frontend.',
  },
  {
    id: 'proj-4',
    title: 'The Perfume Bar — E-Commerce UI',
    description: 'A premium frontend retail interface designed specifically for high-end fragrance brands, featuring immersive product showcases, smooth animations, and conversion-optimized flows.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'UI/UX'],
    github: 'https://github.com/',
    live: '#',
    screenshot: 'assets/screenshots/4.png',
    features: [
      'Framer Motion page transitions and staggered product reveal',
      'Conversion-optimized product detail layout with scent profiling',
      'Cart state managed with React Context and localStorage persistence',
      'Tailwind-driven responsive grid scaling from mobile to ultrawide',
    ],
    longDescription: 'A luxury e-commerce frontend crafted to match the premium positioning of high-end fragrance brands. Every interaction — from product hover states to cart micro-animations — was designed to reinforce brand prestige and drive conversion.',
  },
];

/* ============================================================
   DATA — MINI PROJECTS
   ============================================================ */
const MINI_PROJECTS = [
  {
    id: 'mini-1',
    title: 'CSS Animations Playground',
    description: 'Collection of reusable keyframe animations and micro-interactions.',
    link: 'https://github.com/',
  },
  {
    id: 'mini-2',
    title: 'Countdown Timer Widget',
    description: 'Lightweight vanilla JS countdown with custom theming support.',
    link: 'https://github.com/',
  },
  {
    id: 'mini-3',
    title: 'Color Palette Generator',
    description: 'Generates harmonious palettes from a single seed color using HSL math.',
    link: 'https://github.com/',
  },
  {
    id: 'mini-4',
    title: 'Typing Speed Tester',
    description: 'Real-time WPM and accuracy calculator with dynamic text prompts.',
    link: 'https://github.com/',
  },
];

/* ============================================================
   DATA — GALLERY ITEMS
   Available categories: 'Social Media', 'Branding', 'UI Designs'
   ============================================================ */
const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    title: 'Xlusive Auto Repair — Campaign Post Series',
    category: 'Social Media',
    height: 260,
    color: 'linear-gradient(135deg, #3C096C, #240046)',
    icon: '🔧',
    image: 'assets/designs/exlusive/x4.jpg',
    images: [
      'assets/designs/exlusive/x1.jpg',
      'assets/designs/exlusive/x2.jpg',
      'assets/designs/exlusive/x3.jpg',
      'assets/designs/exlusive/x4.jpg',
      'assets/designs/exlusive/x5.jpg',
      'assets/designs/exlusive/x6.jpg',
    ],
    description: 'A comprehensive social media campaign crafted for Xlusive Auto Repair — combining bold typography, high-contrast visuals, and persuasion-led design principles to drive local engagement and brand recognition across platforms.',
    details: [
      'Designed 6-piece campaign post series for Instagram & Facebook',
      'Applied psychological marketing principles to drive call-to-action clicks',
      'Developed brand-consistent color palette and typographic system',
      'Optimized compositions for both feed posts and story formats',
    ],
    client: 'Xlusive Auto Repair',
    tools: 'Adobe Photoshop, Illustrator',
    year: '2024',
    format: 'Digital Social Media',
  },
  {
    id: 'gal-2',
    title: 'Mush Fragrance — Bottle Label Artwork',
    category: 'Branding',
    height: 320,
    color: 'linear-gradient(135deg, #780000, #3C096C)',
    icon: '🌸',
    image: 'assets/designs/mush/MYSTIQUE.jpg',
    images: [
      'assets/designs/mush/ANMA.jpg',
      'assets/designs/mush/AQUA.jpg',
      'assets/designs/mush/ARABIAN NIGHT.jpg',
      'assets/designs/mush/CARLOS.jpg',
      'assets/designs/mush/GREED.jpg',
      'assets/designs/mush/IMMORTAL.jpg',
      'assets/designs/mush/INFINITE.jpg',
      'assets/designs/mush/MACHO.jpg',
      'assets/designs/mush/MYSTIQUE.jpg',
      'assets/designs/mush/OASIS.jpg',
    ],
    description: 'Premium fragrance bottle label and packaging system for Mush Fragrance. Each label was individually conceptualized to embody its scent personality — from dark and brooding to fresh and ethereal — while maintaining brand cohesion across the full product line.',
    details: [
      'Designed 10+ individual bottle label artworks, each with a unique visual personality',
      'Maintained consistent brand identity system across the entire fragrance line',
      'Produced print-ready files with bleed and CMYK color profiles',
      'Collaborated with client to align visual tone with each scent descriptor',
    ],
    client: 'Mush Fragrance',
    tools: 'Adobe Photoshop, Illustrator',
    year: '2024',
    format: 'Print / Packaging',
  },
  {
    id: 'gal-3',
    title: 'The Truth Marketing Company',
    category: 'Social Media',
    height: 220,
    color: 'linear-gradient(135deg, #5A189A, #003049)',
    icon: '🧠',
    image: 'assets/designs/truth/4.jpg',
    images: [
      'assets/designs/truth/1.1.jpg',
      'assets/designs/truth/2.jpg',
      'assets/designs/truth/3.jpg',
      'assets/designs/truth/4.jpg',
      'assets/designs/truth/5.jpg',
      'assets/designs/truth/14.jpg',
    ],
    description: 'A series of high-impact digital marketing posts designed for The Truth Marketing Company, leveraging proven psychological triggers — social proof, urgency, authority — to maximize engagement and conversion rates for client campaigns.',
    details: [
      'Applied persuasion frameworks including scarcity, authority, and reciprocity',
      'Designed for maximum thumb-stopping impact in crowded social feeds',
      
      'Delivered across multiple client verticals with adapted messaging',
    ],
    client: 'The Truth Marketing Company',
    tools: 'Adobe Photoshop',
    year: '2024',
    format: 'Digital Social Media',
  },
  {
    id: 'gal-4',
    title: 'Perfume Brand Web Layout — UI Mockup',
    category: 'UI Designs',
    height: 300,
    color: 'linear-gradient(135deg, #10002B, #5A189A)',
    icon: '✨',
    image: 'assets/screenshots/1.png',
    images: [
      'assets/screenshots/1.png',
      'assets/screenshots/2.png',
      'assets/screenshots/3.png',
      'assets/screenshots/4.png',
      
    ],
    description: 'A full UI mockup for a premium fragrance e-commerce brand. The design language draws from luxury editorial aesthetics — dark backgrounds, large product photography, and refined typographic hierarchy — to position the brand at the high-end of the market.',
    details: [
      'Designed desktop and mobile breakpoint layouts for all core pages',
      'Created editorial-style hero sections with oversized product imagery',
      'Developed reusable component library for product cards and navigation',
      'Specified interaction patterns for cart, wishlist, and product detail flows',
    ],
    client: 'Personal / Internship Project',
    tools: 'Adobe Photoshop, Figma',
    year: '2025',
    format: 'UI Mockup / Digital',
  },
  {
    id: 'gal-5',
    title: 'Red Rocks',
    category: 'UI Designs',
    height: 280,
    color: 'linear-gradient(135deg, #003049, #3C096C)',
    icon: '🖥️',
    image: 'assets/designs/red/2.jpg',
    images: [
      'assets/designs/red/2.jpg',
      'assets/designs/red/3 a.jpg',
      'assets/designs/red/4.jpg',
    ],
    description: 'A series of high-impact digital marketing posts designed for The RED ROCKS Company, leveraging proven psychological triggers — social proof, urgency, authority — to maximize engagement and conversion rates for client campaigns.',
    details: [
      'Designed wireframes and high-fidelity mockups for corporate web platform',
      'Established typographic scale and spacing system for implementation team',
      'Produced component specifications for developer handoff',
      'Iterated designs based on stakeholder review sessions',
    ],
    client: 'RED ROCKS',
    tools: 'Adobe Photoshop',
    year: '2024',
    format: 'UI Mockup / Digital',
  },
  {
    id: 'gal-6',
    title: 'Mush Fragrance — Standee & Banner System',
    category: 'Branding',
    height: 240,
    color: 'linear-gradient(135deg, #C1121F, #240046)',
    icon: '📦',
    image: 'assets/designs/mush/banner 48 w x36 h inches.jpg',
    images: [
      'assets/designs/mush/banner 48 w x36 h inches.jpg',
      'assets/designs/mush/standee 24 w x 60 h inches.jpg',
      'assets/designs/mush/BALTIC ABMER.jpg',
      'assets/designs/mush/MOLTEN DELIGHT.jpg',
      'assets/designs/mush/MYSTIQUE 2.jpg',
    ],
    description: 'Large-format print assets for the Mush Fragrance brand, including a 48×36" display banner and a 24×60" standee for retail and event activations. Designed to command attention at scale while remaining on-brand.',
    details: [
      'Produced 48"×36" banner and 24"×60" standee at full print resolution',
      'Designed for large-format output with CMYK color management',
      'Coordinated visual elements to work cohesively across different display sizes',
      'Adapted digital brand assets for high-DPI print reproduction',
    ],
    client: 'Mush Fragrance',
    tools: 'Adobe Photoshop, Illustrator',
    year: '2024',
    format: 'Print / Large Format',
  },
  {
    id: 'gal-7',
    title: 'UK Campaign — Multi-Post Social Series',
    category: 'Social Media',
    height: 260,
    color: 'linear-gradient(135deg, #240046, #669BBC)',
    icon: '🚗',
    image: 'assets/designs/uk/5.jpg',
    images: [
      'assets/designs/uk/1.jpg',
      'assets/designs/uk/2.jpg',
      'assets/designs/uk/3.jpg',
      'assets/designs/uk/4 M.jpg',
      'assets/designs/uk/5.jpg',
      'assets/designs/uk/6.jpg',
      'assets/designs/uk/7.jpg',
      'assets/designs/uk/11.jpg',
      'assets/designs/uk/12.jpg',
       'assets/designs/uk/13.jpg',
        'assets/designs/uk/14.jpg',
         'assets/designs/uk/16.jpg',
          'assets/designs/uk/17.jpg',
           'assets/designs/uk/18.jpg',
            'assets/designs/uk/20.jpg',
             'assets/designs/uk/21.jpg',
    ],

    description: 'A large-volume social media campaign series produced for a UK-based client. The project involved designing a cohesive visual language that could sustain a multi-week content calendar without losing brand consistency.',
    details: [
      'Produced 15+ campaign posts for a sustained multi-week social calendar',
      'Developed a modular design template system for efficient production',
      'Ensured brand tone consistency across all content pieces',
      'Adapted designs for both square and portrait social formats',
    ],
    client: 'UK Client (NDA)',
    tools: 'Adobe Photoshop',
    year: '2024',
    format: 'Digital Social Media',
  },
  {
    id: 'gal-8',
    title: 'Equinox — Visual Identity Campaign',
    category: 'Branding',
    height: 310,
    color: 'linear-gradient(135deg, #3C096C, #C1121F)',
    icon: '🎨',
    image: 'assets/designs/equinox/equinox1.jpg',
    images: [
      'assets/designs/equinox/equinox1.jpg',
      'assets/designs/equinox/equinox2.jpg',
      'assets/designs/equinox/equinox3.jpg',
      'assets/designs/equinox/equinox4.jpg',
    ],
    description: 'Brand identity and campaign design for the Equinox project — exploring bold geometric forms and high-contrast color relationships to create a visual system that is immediately recognizable and memorable.',
    details: [
      'Developed full visual identity system including logo, color palette, and type',
      'Designed 4-piece campaign post series anchored by the brand identity',
      'Created scalable design system applicable across print and digital',
      'Documented brand guidelines for consistent future application',
    ],
    client: 'Equinox (Personal Project)',
    tools: 'Adobe Photoshop, Illustrator',
    year: '2024',
    format: 'Branding / Digital',
  },


{
  id: 'gal-9',
  title: 'Horizon — Brand Campaign',
  category: 'Branding',
  height: 280,
  color: 'linear-gradient(135deg, #003049, #5A189A)',
  icon: '🌅',
  image: 'assets/designs/horizon/DRAFT 2.jpg',
  images: [
    'assets/designs/horizon/DRAFT.jpg',
    'assets/designs/horizon/DRAFT 2.jpg',
  ],
  description: 'Brand campaign design for Horizon — built around a clean, forward-looking visual identity that balances bold structure with open space to communicate ambition and clarity.',
  details: [
    'Designed two campaign draft directions for client review',
    'Developed color language and typographic tone for the brand',
    'Produced print-ready compositions with structured layout systems',
    'Iterated based on client feedback across both draft rounds',
  ],
  client: 'Horizon',
  tools: 'Adobe Photoshop',
  year: '2024',
  format: 'Branding / Print',
},
{
  id: 'gal-10',
  title: 'Kharidar — Social Media Campaign',
  category: 'Social Media',
  height: 300,
  color: 'linear-gradient(135deg, #240046, #C1121F)',
  icon: '🏪',
  image: 'assets/designs/kharidar/1.jpg',
  images: [
    'assets/designs/kharidar/1.jpg',
    'assets/designs/kharidar/2.jpg',
    'assets/designs/kharidar/3.jpg',
    'assets/designs/kharidar/4.jpg',
  ],
  description: 'A social media campaign series for Kharidar — crafted to establish a strong visual presence and drive audience engagement through consistent, brand-aligned post design across platforms.',
  details: [
    'Designed 4-piece social media post series for Instagram and Facebook',
    'Established a cohesive color and typography system for the brand',
    'Optimized compositions for feed and story formats',
    'Delivered campaign-ready files sized for each platform specification',
  ],
  client: 'Kharidar',
  tools: 'Adobe Photoshop',
  year: '2024',
  format: 'Digital Social Media',
},
{
  id: 'gal-11',
  title: 'Psychological Marketing Posts — Client Series',
  category: 'Social Media',
  height: 260,
  color: 'linear-gradient(135deg, #780000, #3C096C)',
  icon: '🧠',
  image: 'assets/designs/p/4 o.jpg',
  images: [
    'assets/designs/p/1.jpg',
    'assets/designs/p/2.jpg',
    'assets/designs/p/3.jpg',
    'assets/designs/p/4 o.jpg',
    'assets/designs/p/5.jpg',
    'assets/designs/p/6 o.jpg',
    'assets/designs/p/8.jpg',
  ],
  description: 'A client-facing series of psychological marketing posts designed to maximize engagement and drive action — each piece built around proven persuasion frameworks including authority, urgency, and social proof.',
  details: [
    'Produced 7 high-impact posts using psychological persuasion principles',
    'Designed for thumb-stopping visual impact in competitive social feeds',
    'Applied scarcity, authority, and reciprocity triggers in layout and copy',
    'Delivered across multiple content formats for cross-platform deployment',
  ],
  client: 'Client (NDA)',
  tools: 'Adobe Photoshop',
  year: '2024',
  format: 'Digital Social Media',
},


{
  id: 'gal-12',
  title: 'Personal Design Work — Portfolio, Vita & Projects',
  category: 'UI Designs',
  height: 290,
  color: 'linear-gradient(135deg, #10002B, #C1121F)',
  icon: '🖥️',
  image: 'assets/screenshots/10.png',
  images: [
    'assets/screenshots/7.png',
    'assets/screenshots/6.png',
    'assets/screenshots/8.png',
       'assets/screenshots/9.png',
          'assets/screenshots/10.png',
             'assets/screenshots/11.png',
                'assets/screenshots/5.png',
  ],

  description: 'A collection of personal UI design work spanning portfolio concepts, the Vita corporate platform, and various project interface mockups — each piece representing a stage in developing a refined, production-ready design process.',
  details: [
    'Designed portfolio layout frameworks and visual identity concepts',
    'Produced UI mockups for the Vita corporate platform during internship',
    'Created project interface designs across branding and web contexts',
    'Built a personal design system used as a baseline for future client work',
  ],
  client: 'Personal',
  tools: 'Adobe Photoshop, Figma',
  year: '2024–2025',
  format: 'UI Design / Digital',
},
  
];

/* ============================================================
   DATA — CERTIFICATIONS
   ============================================================ */
const CERTIFICATIONS = [
  {
    id: 'cert-1',
    name: 'Responsive Web Design Certification',
    issuer: 'freeCodeCamp',
    date: '2024',
    field: 'web',
    emoji: '🌐',
  },
  {
    id: 'cert-2',
    name: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    date: '2024',
    field: 'web',
    emoji: '⚡',
  },
  {
    id: 'cert-3',
    name: 'Frontend Web Development Bootcamp',
    issuer: 'Udemy',
    date: '2023',
    field: 'web',
    emoji: '💻',
  },
  {
    id: 'cert-4',
    name: 'Advanced CSS & Sass — Flexbox, Grid & Animations',
    issuer: 'Udemy',
    date: '2023',
    field: 'web',
    emoji: '🎨',
  },
  {
    id: 'cert-5',
    name: 'Graphic Design Masterclass',
    issuer: 'Udemy',
    date: '2023',
    field: 'design',
    emoji: '🖌️',
  },
  {
    id: 'cert-6',
    name: 'Adobe Photoshop & Illustrator — Complete Course',
    issuer: 'Udemy',
    date: '2023',
    field: 'design',
    emoji: '🔷',
  },
];

/* ============================================================
   RENDER ENGINE — EXPERIENCES (Tabbed Layout)
   ============================================================ */
function renderExperiences() {
  const tabsEl   = document.getElementById('expTabs');
  const panelsEl = document.getElementById('expPanels');
  if (!tabsEl || !panelsEl) return;

  EXPERIENCES.forEach((exp, index) => {
    const tab = document.createElement('button');
    tab.className = `exp-tab${index === 0 ? ' active' : ''}`;
    tab.textContent = exp.tabLabel;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
    tab.dataset.target = exp.id;
    tab.addEventListener('click', () => switchExpTab(exp.id));
    tabsEl.appendChild(tab);

    const panel = document.createElement('div');
    panel.id = exp.id;
    panel.className = `exp-panel${index === 0 ? ' active' : ''}`;
    panel.setAttribute('role', 'tabpanel');

    panel.innerHTML = `
      <div class="exp-meta">
        <h3 class="exp-role">${exp.role}</h3>
        <p class="exp-company">${exp.company}</p>
        <p class="exp-period">${exp.period}</p>
        <span class="exp-type">● ${exp.type}</span>
      </div>
      <div class="exp-responsibilities">
        <p class="exp-resp-title">Key Responsibilities</p>
        <ul class="exp-list">
          ${exp.responsibilities.map(r => `<li class="exp-list-item">${r}</li>`).join('')}
        </ul>
      </div>
    `;
    panelsEl.appendChild(panel);
  });
}

function switchExpTab(targetId) {
  document.querySelectorAll('.exp-tab').forEach(t => {
    const isActive = t.dataset.target === targetId;
    t.classList.toggle('active', isActive);
    t.setAttribute('aria-selected', isActive);
  });
  document.querySelectorAll('.exp-panel').forEach(p => {
    p.classList.toggle('active', p.id === targetId);
  });
}

/* ============================================================
   RENDER ENGINE — WEB PROJECTS
   ============================================================ */
function renderProjects() {
  const gridEl = document.getElementById('projectsGrid');
  if (!gridEl) return;

  PROJECTS.forEach((proj, index) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-reveal', '');
    card.style.cursor = 'pointer';

    // Only show Live Demo button if a real URL is provided
    const liveBtnHtml = (proj.live && proj.live !== '#')
      ? `<a href="${proj.live}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" onclick="event.stopPropagation()">Live Demo →</a>`
      : '';

    // Show screenshot image if available, fallback to nothing
    const screenshotHtml = proj.screenshot
      ? `<div class="project-screenshot"><img src="${proj.screenshot}" alt="${proj.title} screenshot" loading="lazy" /></div>`
      : '';

    card.innerHTML = `
      ${screenshotHtml}
      <p class="project-num">${String(index + 1).padStart(2, '0')}</p>
      <h3 class="project-title">${proj.title}</h3>
      <p class="project-desc">${proj.description}</p>
      <div class="project-tags">
        ${proj.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
      </div>
      <div class="project-links">
        <a href="${proj.github}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm" onclick="event.stopPropagation()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
          GitHub
        </a>
        ${liveBtnHtml}
        <button class="btn btn-ghost btn-sm detail-btn" data-id="${proj.id}">
          View Details →
        </button>
      </div>
    `;

    // Click card → navigate to detail page
    card.addEventListener('click', () => {
      window.location.href = `project-detail.html?id=${proj.id}`;
    });

    gridEl.appendChild(card);
  });
}

/* ============================================================
   RENDER ENGINE — MINI PROJECTS
   ============================================================ */
function renderMiniProjects() {
  const gridEl = document.getElementById('miniProjectsGrid');
  if (!gridEl) return;

  MINI_PROJECTS.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'mini-card';
    card.setAttribute('data-reveal', '');
    card.innerHTML = `
      <p class="mini-card-title">${proj.title}</p>
      <p class="mini-card-desc">${proj.description}</p>
      <a href="${proj.link}" target="_blank" rel="noopener" class="mini-card-link">View on GitHub →</a>
    `;
    gridEl.appendChild(card);
  });
}

/* ============================================================
   RENDER ENGINE — GALLERY (Filterable Masonry)
   ============================================================ */
function renderGallery() {
  const filtersEl = document.getElementById('galleryFilters');
  const masonryEl = document.getElementById('galleryMasonry');
  if (!filtersEl || !masonryEl) return;

  const categories = ['All', ...new Set(GALLERY_ITEMS.map(g => g.category))];

  categories.forEach((cat, i) => {
    const btn = document.createElement('button');
    btn.className = `filter-btn${i === 0 ? ' active' : ''}`;
    btn.textContent = cat;
    btn.dataset.filter = cat;
    btn.addEventListener('click', () => filterGallery(cat));
    filtersEl.appendChild(btn);
  });

  GALLERY_ITEMS.forEach(item => {
    const el = document.createElement('div');
    el.className = 'gallery-item';
    el.dataset.category = item.category;
    el.dataset.id = item.id;
    el.setAttribute('data-reveal', '');

    // Use real image if available, else show gradient placeholder
    const imageContent = item.image
      ? `<img src="${item.image}" alt="${item.title}" loading="lazy" style="width:100%;height:${item.height}px;object-fit:cover;display:block;" onerror="this.parentElement.innerHTML=fallbackGalleryCard('${item.icon}','${item.category}','${item.title}',${item.height},'${item.color}')" />`
      : `<div class="gallery-placeholder" style="min-height:${item.height}px; background:${item.color}">
           <div class="gallery-placeholder-inner">
             <span style="font-size:2.5rem;display:block;margin-bottom:0.75rem;">${item.icon}</span>
             <span class="gallery-category-badge">${item.category}</span>
             <p class="gallery-item-title">${item.title}</p>
           </div>
         </div>`;

    el.innerHTML = `
      <div class="gallery-card-wrap" style="position:relative;">
        ${imageContent}
        <div class="gallery-overlay">
          <span class="gallery-overlay-text">View Project ↗</span>
        </div>
        <div class="gallery-card-meta">
          <span class="gallery-category-badge">${item.category}</span>
          <p class="gallery-item-title">${item.title}</p>
        </div>
      </div>
    `;

    // Click → navigate to gallery detail page
    el.addEventListener('click', () => {
      window.location.href = `gallery-detail.html?id=${item.id}`;
    });

    masonryEl.appendChild(el);
  });
}

// Fallback inner HTML for broken gallery images
function fallbackGalleryCard(icon, category, title, height, color) {
  return `<div class="gallery-placeholder" style="min-height:${height}px;background:${color}">
    <div class="gallery-placeholder-inner">
      <span style="font-size:2.5rem;display:block;margin-bottom:0.75rem;">${icon}</span>
      <span class="gallery-category-badge">${category}</span>
      <p class="gallery-item-title">${title}</p>
    </div>
  </div>`;
}

function filterGallery(category) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === category);
  });
  document.querySelectorAll('.gallery-item').forEach(item => {
    const match = category === 'All' || item.dataset.category === category;
    item.classList.toggle('hidden', !match);
  });
}

/* ============================================================
   RENDER ENGINE — CERTIFICATIONS
   ============================================================ */
function renderCertifications() {
  const gridEl = document.getElementById('certsGrid');
  if (!gridEl) return;

  CERTIFICATIONS.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'cert-card';
    card.setAttribute('data-reveal', '');

    card.innerHTML = `
      <div class="cert-badge">${cert.emoji}</div>
      <div class="cert-info">
        <p class="cert-name">${cert.name}</p>
        <p class="cert-issuer">${cert.issuer}</p>
        <p class="cert-date">${cert.date}</p>
        <span class="cert-field ${cert.field}">${cert.field === 'web' ? 'Web Dev' : 'Design'}</span>
      </div>
    `;
    gridEl.appendChild(card);
  });
}

/* ============================================================
   SCROLL PROGRESS INDICATOR
   ============================================================ */
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrollTop  = window.scrollY;
    const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    const progress   = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width  = `${progress}%`;
  }, { passive: true });
}

/* ============================================================
   NAVBAR — Active Link Highlight + Sticky Shadow
   ============================================================ */
function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const navLinks  = document.querySelectorAll('.nav-link');
  const sections  = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 10
      ? '0 4px 30px rgba(0,0,0,0.4)'
      : 'none';

    let currentId = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) currentId = sec.id;
    });

    navLinks.forEach(link => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === `#${currentId}`
      );
    });
  }, { passive: true });
}

/* ============================================================
   MOBILE HAMBURGER MENU
   ============================================================ */
function initHamburger() {
  const btn    = document.getElementById('hamburger');
  const drawer = document.getElementById('mobileDrawer');
  if (!btn || !drawer) return;

  btn.addEventListener('click', () => {
    const open = drawer.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });

  drawer.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      btn.classList.remove('open');
    });
  });
}

/* ============================================================
   SCROLL REVEAL — Intersection Observer
   ============================================================ */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const siblings = entry.target.parentElement
            ? [...entry.target.parentElement.children].filter(el => el.hasAttribute('data-reveal'))
            : [];
          const delay = siblings.indexOf(entry.target) * 60;
          setTimeout(() => entry.target.classList.add('visible'), delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
}

/* ============================================================
   CONTACT FORM
   ============================================================ */
function initContactForm() {
  const form       = document.getElementById('contactForm');
  const label      = document.getElementById('submitLabel');
  const successMsg = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    label.textContent = 'Sending…';
    setTimeout(() => {
      label.textContent = 'Send Message';
      successMsg.classList.add('visible');
      form.reset();
      setTimeout(() => successMsg.classList.remove('visible'), 5000);
    }, 1200);
  });
}

/* ============================================================
   MAGNETIC BUTTON EFFECT
   ============================================================ */
function initMagneticButtons() {
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x    = e.clientX - rect.left - rect.width  / 2;
      const y    = e.clientY - rect.top  - rect.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/* ============================================================
   FOOTER YEAR
   ============================================================ */
function setFooterYear() {
  const el = document.getElementById('footerYear');
  if (el) el.textContent = new Date().getFullYear();
}

/* ============================================================
   EXPORT DATA for detail pages
   ============================================================ */
window.PORTFOLIO_DATA = { PROJECTS, GALLERY_ITEMS };

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderExperiences();
  renderProjects();
  renderMiniProjects();
  renderGallery();
  renderCertifications();

  initScrollProgress();
  initNavbar();
  initHamburger();
  initContactForm();
  setFooterYear();

  requestAnimationFrame(() => {
    initScrollReveal();
    initMagneticButtons();
  });
});
