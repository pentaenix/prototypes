const SVG_NS = 'http://www.w3.org/2000/svg';
const LOOP = { cx: 540, cy: 370, r: 160 };

const STATIONS = [
  {
    id: 'breadmaker',
    title: 'BREADMAKER',
    short: 'Local-first authoring application',
    kicker: 'AUTHORING / TOOLS',
    description: 'Breadmaker is a local-first writing application for long-form projects. It combines manuscript editing, visual planning, maps, review workflows, and project storage in one workspace.',
    detailText: 'Breadmaker is an ongoing authoring application built around the workflow of writing a large manuscript. The editor handles chapters and scenes, while separate views cover visual planning, maps, review sessions, checkpoints, and project recovery.',
    station: { x: 785, y: 175 },
    join: { x: 653, y: 256, angle: -0.79 },
    branchPoints: [[653,256],[718,208],[785,208],[785,175]],
    label: { x: 785, y: 124, anchor: 'middle', rotate: -1.4 },
    tooltipSide: 'top',
    previewAsset: { type: 'video', badge: 'VIDEO', label: 'BREADMAKER — WEBSITE HERO', src: './assets/breadmaker-site.mp4' },
    projects: [
      {
        id: 'breadmaker-app',
        title: 'BREADMAKER',
        kicker: 'AUTHORING APPLICATION',
        summary: 'A local-first writing application for long-form projects, with manuscript editing, planning, maps, review workflows, backups, and recovery.',
        description: 'Breadmaker is an authoring application I have been building for writers working on large projects. The manuscript is split into chapters and scenes, while separate tools handle planning, visual maps, review sessions, checkpoints, and project recovery. The interface is designed around keeping those systems connected without turning the writing view into a dashboard. The video shown here is the hero section of the Breadmaker website; application footage and editor screenshots will be added separately.',
        media: [
          { type: 'video', label: 'Breadmaker website hero', src: './assets/breadmaker-site.mp4' }
        ]
      }
    ]
  },
  {
    id: 'online-stores',
    title: 'ONLINE STORES',
    short: 'Storefronts + playtesting tooling',
    kicker: 'ECOMMERCE / INTERNAL TOOLS',
    description: 'Two live ecommerce sites and Cairon, an internal playtesting tool I built for the development of a board game.',
    detailText: 'This section contains two live ecommerce sites and Cairon, an internal browser tool I built to support playtesting for a board game. Open a project to see its media and, where available, the live site.',
    station: { x: 890, y: 355 },
    join: { x: 700, y: 384, angle: 0.09 },
    branchPoints: [[700,384],[812,384],[836,355],[890,355]],
    label: { x: 890, y: 307, anchor: 'middle', rotate: -1 },
    tooltipSide: 'top',
    previewAsset: { type: 'image', badge: 'LIVE SITE', label: 'AVOKIND — NUTRITION STOREFRONT', src: './assets/avokind-home.png', href: 'https://avokind.com/' },
    projects: [
      {
        id: 'cairon',
        title: 'CAIRON',
        kicker: 'BOARD GAME / INTERNAL TOOL',
        summary: 'Internal playtesting software I built for the development of a board game.',
        description: 'Cairon is a board game project for which I built an internal browser-based playtesting tool. The tool was used to register play sessions and review the results afterward, making it easier to compare what happened across different tests. The main image shows the testing interface; the other two images are reports from individual play sessions.',
        media: [
          { type: 'image', label: 'Cairon — playtesting interface', src: './assets/cairon-tooling.png' },
          { type: 'image', label: 'Cairon — play session report 01', src: './assets/cairon-report-01.png' },
          { type: 'image', label: 'Cairon — play session report 02', src: './assets/cairon-report-02.png' }
        ]
      },
      {
        id: 'avokind',
        title: 'AVOKIND',
        kicker: 'SHOPIFY / PRODUCT EXPERIENCE',
        summary: 'A Shopify product experience for a nutrition brand, built around explaining an unfamiliar product clearly before asking for the purchase.',
        description: 'AvoKind is a consumer nutrition storefront built on Shopify. My work focused on the product experience: restructuring the page hierarchy, presenting ingredients and product information clearly, improving the purchase flow, and building interactions that help explain the product without burying the user in copy.',
        href: 'https://avokind.com/',
        linkLabel: 'OPEN LIVE SITE',
        media: [
          { type: 'image', label: 'AvoKind — live storefront', src: './assets/avokind-home.png' }
        ]
      },
      {
        id: 'corazon',
        title: 'CORAZÓN DE TERCIOPELO',
        kicker: 'ECOMMERCE',
        summary: 'A live ecommerce site for a jewelry brand.',
        description: 'Corazón de Terciopelo is a live jewelry storefront. The work centered on presenting the catalog cleanly, keeping the product photography dominant, and making the path from browsing to purchase straightforward across desktop and mobile.',
        href: 'https://corazondeterciopelo.com/',
        linkLabel: 'OPEN LIVE SITE',
        media: [
          { type: 'image', label: 'Corazón de Terciopelo — live storefront', src: './assets/corazon-home.png' }
        ]
      }
    ]
  },
  {
    id: 'interactive-experiences',
    title: 'INTERACTIVE EXPERIENCES',
    short: 'Event browser games',
    kicker: 'EVENTS / EXPERIENCES',
    description: 'Browser games built for Citrex for different live events, each with its own event format, visual identity, and interaction model.',
    detailText: 'These are browser-based games built for Citrex for different events. Open either project to see the actual event material and playable-build footage we currently have.',
    station: { x: 810, y: 610 },
    join: { x: 639, y: 496, angle: 0.89 },
    branchPoints: [[639,496],[714,555],[810,555],[810,610]],
    label: { x: 810, y: 670, anchor: 'middle', rotate: -1.3 },
    tooltipSide: 'bottom',
    previewAsset: { type: 'image', badge: 'LIVE EVENT', label: 'CITREX — TOUCH GAME RUNNING AT A LIVE ACTIVATION', src: './assets/citrex-event.png' },
    projects: [
      {
        id: 'citrex-event-game',
        title: 'CITREX',
        kicker: 'LIVE EVENT / TOUCH GAME',
        summary: 'A browser game built for one of Citrex’s live events and deployed on a large vertical touch display.',
        description: 'This game was built for a Citrex live event and ran on a large vertical touch display. It was designed for attendees to walk up and start playing with very little explanation. The photograph shows the game running on the actual event installation.',
        media: [
          { type: 'image', label: 'Citrex touch game running at the event', src: './assets/citrex-event.png' },
          { type: 'image', label: 'Citrex event game branding', src: './assets/citrex-logo.png' }
        ]
      },
      {
        id: 'loteria-del-limon',
        title: 'LOTERÍA DEL LIMÓN',
        kicker: 'CITREX / EVENT GAME',
        summary: 'A second browser game built for Citrex for a different event, using the structure and visual language of Mexican lotería.',
        description: 'Lotería del Limón was built for Citrex for a separate event. It adapts the structure and visual language of Mexican lotería into a branded digital game. The title screen shows the final visual direction, while the video shows the playable build. We do not currently have photographs or recordings from the event itself.',
        media: [
          { type: 'image', label: 'Lotería del Limón — title screen', src: './assets/loteria-del-limon.png' },
          { type: 'video', label: 'Lotería del Limón — playable build', src: './assets/loteria-del-limon.mp4' }
        ]
      }
    ]
  },
  {
    id: 'videogames',
    title: 'VIDEOGAMES',
    short: 'Games + interactive tools',
    kicker: 'GAME DEVELOPMENT',
    description: 'A multiplayer game currently in development, a Pokémon fan project, and an open-source aquarium design tool with simulation-oriented spatial systems.',
    detailText: 'This section collects game-focused work from different projects. Open a project to see the current build, project page, or tool interface.',
    station: { x: 178, y: 610 },
    join: { x: 428, y: 484, angle: 2.31 },
    branchPoints: [[428,484],[338,555],[235,555],[235,610],[178,610]],
    label: { x: 178, y: 670, anchor: 'middle', rotate: 1 },
    tooltipSide: 'bottom',
    previewAsset: { type: 'video', badge: 'VIDEO', label: 'PLEASE STOP HELPING — GAME FOOTAGE', src: './assets/psh.mp4' },
    projects: [
      {
        id: 'please-stop-helping',
        title: 'PLEASE STOP HELPING',
        kicker: 'MULTIPLAYER GAME / IN DEVELOPMENT',
        summary: 'A multiplayer game currently in development.',
        description: 'Please Stop Helping is a multiplayer game currently in development. The video shows the current playable build. As development continues, this project view can expand with gameplay systems, multiplayer mechanics, and a clearer breakdown of the parts I worked on.',
        media: [
          { type: 'video', label: 'Please Stop Helping — current playable build', src: './assets/psh.mp4' }
        ]
      },
      {
        id: 'pokemon-resort',
        title: 'POKÉMON RESORT',
        kicker: 'FAN PROJECT',
        summary: 'A Pokémon fan project with its own project page and development material.',
        description: 'Pokémon Resort is a Pokémon fan project I worked on as a game-development exercise. The separate project page documents the concept and development work in more detail.',
        href: 'https://pentaenix.github.io/pokemon-resort-page/#/',
        linkLabel: 'OPEN PROJECT PAGE',
        media: [
          { type: 'image', label: 'Pokémon Resort — project documentation site', src: './assets/pokemon-resort-page.png' }
        ]
      },
      {
        id: 'aquarium-maker',
        title: 'AQUARIUM MAKER',
        kicker: 'OPEN SOURCE / 3D TOOL',
        summary: 'An open-source tool for designing aquarium environments, including swimming volumes used by animals.',
        description: 'Aquarium Maker is an open-source tool for creating aquarium environments. Along with the visible layout of the aquarium, it lets you define swimming volumes and other spatial regions used by animals inside the simulation. The screenshot shows the editor and the 3D aquarium layout being built.',
        media: [
          { type: 'image', label: 'Aquarium Maker — 3D aquarium editor', src: './assets/aquarium-maker.png' }
        ]
      }
    ]
  }
];

const PASSIVE_LOOP_ANGLES = [3.95, 2.95];
const stationMap = new Map(STATIONS.map(s => [s.id, s]));

const els = {
  svg: document.querySelector('.metro-map__svg'),
  mapStage: document.getElementById('map-stage'),
  base: document.getElementById('metro-base'),
  selection: document.getElementById('metro-selection'),
  train: document.getElementById('metro-train-layer'),
  masks: document.getElementById('metro-masks'),
  rings: document.getElementById('metro-rings'),
  labels: document.getElementById('metro-labels'),
  hotspots: document.getElementById('metro-hotspots'),
  tooltip: document.getElementById('metro-tooltip'),
  ttTitle: document.getElementById('tooltip-title'),
  ttSub: document.getElementById('tooltip-subtitle'),
  workbench: document.getElementById('work-map'),
  preview: document.getElementById('preview-panel'),
  previewClose: document.getElementById('preview-close'),
  previewKicker: document.getElementById('preview-kicker'),
  previewTitle: document.getElementById('preview-title'),
  previewImage: document.getElementById('preview-image'),
  previewDescription: document.getElementById('preview-description'),
  previewEnter: document.getElementById('preview-enter'),
  detailView: document.getElementById('detail-view'),
  detailTitle: document.getElementById('detail-title'),
  detailStatement: document.getElementById('detail-statement'),
  detailGallery: document.getElementById('detail-gallery'),
  returnDetail: document.getElementById('return-detail'),
  strike: document.getElementById('strike'),
  strikeFill: document.querySelector('.strike__fill'),
  strikeTop: document.querySelector('.strike__block--top'),
  strikeBottom: document.querySelector('.strike__block--bottom'),
  strikeTopAccent: document.querySelector('.strike__block--top-accent'),
  strikeBottomAccent: document.querySelector('.strike__block--bottom-accent'),
  strikeTitle: document.getElementById('strike-title'),
  shell: document.getElementById('shell'),
  navWork: document.getElementById('nav-work'),
  navProfile: document.getElementById('nav-profile'),
  profileOverlay: document.getElementById('profile-overlay'),
  profileBackdrop: document.getElementById('profile-backdrop'),
  profileClose: document.getElementById('profile-close'),
  projectOverlay: document.getElementById('project-overlay'),
  projectBackdrop: document.getElementById('project-backdrop'),
  projectClose: document.getElementById('project-close'),
  projectKicker: document.getElementById('project-kicker'),
  projectTitle: document.getElementById('project-title'),
  projectSummary: document.getElementById('project-summary'),
  projectMedia: document.getElementById('project-media'),
  projectActions: document.getElementById('project-actions')
};

let selectedId = null;
let currentActivePath = null;
let selectionSequence = 0;
let tooltipTimer = null;
let transitionBusy = false;
let activeProjectId = null;
const stationHitNodes = new Map();
const labelNodes = new Map();

function svg(tag, attrs = {}) {
  const node = document.createElementNS(SVG_NS, tag);
  for (const [key, value] of Object.entries(attrs)) node.setAttribute(key, value);
  return node;
}

function linePath(points) {
  return 'M' + points.map(([x, y], i) => `${i ? 'L' : ''}${x} ${y}`).join(' ');
}

function polar(angle) {
  return { x: LOOP.cx + Math.cos(angle) * LOOP.r, y: LOOP.cy + Math.sin(angle) * LOOP.r };
}

function buildTravelPathVariant(fromId, toId, takeLongRoute = false) {
  const from = stationMap.get(fromId);
  const to = stationMap.get(toId);
  const fromRev = [...from.branchPoints].reverse();
  const toFwd = to.branchPoints.slice(1);
  const path = svg('path');
  let d = linePath(fromRev);
  let diff = to.join.angle - from.join.angle;
  while (diff <= -Math.PI) diff += Math.PI * 2;
  while (diff > Math.PI) diff -= Math.PI * 2;
  const shortSweep = diff >= 0 ? 1 : 0;
  const sweep = takeLongRoute ? (shortSweep ? 0 : 1) : shortSweep;
  d += ` A${LOOP.r} ${LOOP.r} 0 ${takeLongRoute ? 1 : 0} ${sweep} ${to.join.x} ${to.join.y}`;
  d += ' ' + toFwd.map(([x, y]) => `L${x} ${y}`).join(' ');
  path.setAttribute('d', d);
  return path;
}

function buildSelectionPath(station) {
  return `M${LOOP.cx} ${LOOP.cy} L${station.join.x} ${station.join.y} ${station.branchPoints.slice(1).map(([x,y]) => `L${x} ${y}`).join(' ')}`;
}

function stationScreenPosition(id) {
  const hit = stationHitNodes.get(id);
  if (!hit) return { x: 0, y: 0 };
  const hitRect = hit.getBoundingClientRect();
  const stageRect = els.mapStage.getBoundingClientRect();
  return {
    x: hitRect.left + hitRect.width / 2 - stageRect.left,
    y: hitRect.top + hitRect.height / 2 - stageRect.top
  };
}

function pulseLabel(stationId) {
  const label = labelNodes.get(stationId);
  if (!label) return;
  label.classList.remove('is-arriving');
  label.getBoundingClientRect();
  label.classList.add('is-arriving');
  const charCount = label.querySelectorAll('.label-char').length;
  setTimeout(() => label.classList.remove('is-arriving'), 300 + charCount * 18);
}

function renderMap() {
  els.base.appendChild(svg('circle', { cx: LOOP.cx, cy: LOOP.cy, r: LOOP.r, class: 'metro-loop' }));

  for (const station of STATIONS) {
    els.base.appendChild(svg('path', { d: linePath(station.branchPoints), class: 'metro-branch' }));

    els.masks.appendChild(svg('circle', { cx: station.join.x, cy: station.join.y, r: 13, class: 'node-mask' }));
    els.rings.appendChild(svg('circle', { cx: station.join.x, cy: station.join.y, r: 13, class: 'node-ring' }));

    els.masks.appendChild(svg('circle', { cx: station.station.x, cy: station.station.y, r: 19, class: 'station-mask' }));
    const stationGroup = svg('g', { class: 'station-node', 'data-station': station.id });
    stationGroup.appendChild(svg('circle', { cx: station.station.x, cy: station.station.y, r: 19, class: 'station-ring' }));
    els.rings.appendChild(stationGroup);

    const label = svg('foreignObject', {
      x: station.label.x - 180,
      y: station.label.y - 30,
      width: 360,
      height: 66,
      class: 'metro-label',
      'data-label': station.id,
      tabindex: '0',
      role: 'button',
      'aria-label': `${station.title} — open project preview`,
      transform: `rotate(${station.label.rotate} ${station.label.x} ${station.label.y})`
    });
    const labelDiv = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
    labelDiv.className = 'metro-label-html';
    [...station.title].forEach((char, index) => {
      const span = document.createElementNS('http://www.w3.org/1999/xhtml', 'span');
      span.className = 'label-char';
      span.style.setProperty('--i', index);
      span.textContent = char === ' ' ? String.fromCharCode(160) : char;
      labelDiv.appendChild(span);
    });
    label.appendChild(labelDiv);
    label.addEventListener('mouseenter', () => queueTooltip(station.id));
    label.addEventListener('mouseleave', hideTooltip);
    label.addEventListener('focus', () => queueTooltip(station.id));
    label.addEventListener('blur', hideTooltip);
    label.addEventListener('click', (event) => {
      event.stopPropagation();
      selectStation(station.id);
    });
    label.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        selectStation(station.id);
      }
    });
    labelNodes.set(station.id, label);
    els.labels.appendChild(label);

    const hit = svg('circle', {
      cx: station.station.x,
      cy: station.station.y,
      r: 34,
      class: 'station-hit-svg',
      tabindex: '0',
      role: 'button',
      'aria-label': station.title,
      'data-hit': station.id
    });
    hit.addEventListener('mouseenter', () => queueTooltip(station.id));
    hit.addEventListener('mouseleave', hideTooltip);
    hit.addEventListener('focus', () => queueTooltip(station.id));
    hit.addEventListener('blur', hideTooltip);
    hit.addEventListener('click', (event) => {
      event.stopPropagation();
      selectStation(station.id);
    });
    hit.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        selectStation(station.id);
      }
    });
    stationHitNodes.set(station.id, hit);
    els.rings.appendChild(hit);
  }

  for (const angle of PASSIVE_LOOP_ANGLES) {
    const point = polar(angle);
    els.masks.appendChild(svg('circle', { cx: point.x, cy: point.y, r: 13, class: 'node-mask' }));
    els.rings.appendChild(svg('circle', { cx: point.x, cy: point.y, r: 13, class: 'node-ring' }));
  }

  els.masks.appendChild(svg('circle', { cx: LOOP.cx, cy: LOOP.cy, r: 23, class: 'hub-mask' }));
  const hub = svg('g', { class: 'hub-node' });
  hub.append(
    svg('circle', { cx: LOOP.cx, cy: LOOP.cy, r: 23, class: 'hub-ring' }),
    svg('circle', { cx: LOOP.cx, cy: LOOP.cy, r: 11, class: 'hub-inner-ring' })
  );
  els.rings.appendChild(hub);
}

function queueTooltip(id) {
  clearTimeout(tooltipTimer);
  tooltipTimer = setTimeout(() => showTooltip(id), 200);
}

function showTooltip(id) {
  const station = stationMap.get(id);
  if (!station) return;
  const pos = stationScreenPosition(id);
  els.ttTitle.textContent = station.title;
  els.ttSub.textContent = station.short;
  els.tooltip.dataset.side = station.tooltipSide;
  els.tooltip.style.left = `${pos.x}px`;
  els.tooltip.style.top = `${pos.y}px`;
  els.tooltip.classList.add('is-visible');
  els.tooltip.setAttribute('aria-hidden', 'false');
  labelNodes.get(id)?.classList.add('is-hover');
}

function hideTooltip() {
  clearTimeout(tooltipTimer);
  els.tooltip.classList.remove('is-visible');
  els.tooltip.setAttribute('aria-hidden', 'true');
  labelNodes.forEach(node => node.classList.remove('is-hover'));
}

function previewMarkup(asset) {
  if (asset.type === 'video') {
    return `<div class="preview-visual preview-visual--video"><video src="${asset.src}" autoplay muted loop playsinline aria-label="${asset.label}"></video></div>`;
  }
  if (asset.type === 'image') {
    return `<div class="preview-visual preview-visual--image"><img src="${asset.src}" alt="${asset.label}"></div>`;
  }
  return `<div class="preview-visual preview-visual--placeholder"><span class="preview-visual__badge">${asset.badge}</span><strong>${asset.label}</strong></div>`;
}

function projectPreviewMedia(project) {
  const media = project.media?.[0];
  if (!media) return '';
  if (media.type === 'video') {
    return `<video src="${media.src}" autoplay muted loop playsinline aria-label="${media.label}"></video>`;
  }
  return `<img src="${media.src}" alt="${media.label}">`;
}

function projectCardMarkup(project) {
  return `<button class="project-card" type="button" data-project="${project.id}">
    <div class="project-card__media">${projectPreviewMedia(project)}</div>
    <div class="project-card__body">
      <span class="project-card__kicker">${project.kicker}</span>
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
      <span class="project-card__open">OPEN PROJECT <b aria-hidden="true">↗</b></span>
    </div>
  </button>`;
}

function projectMediaMarkup(media) {
  if (media.type === 'video') {
    return `<figure class="project-media-item project-media-item--video">
      <div class="project-media-item__frame"><video src="${media.src}" controls muted loop playsinline></video></div>
      <figcaption>${media.label}</figcaption>
    </figure>`;
  }
  return `<figure class="project-media-item project-media-item--image">
    <div class="project-media-item__frame"><img src="${media.src}" alt="${media.label}"></div>
    <figcaption>${media.label}</figcaption>
  </figure>`;
}

function getProject(projectId) {
  const station = stationMap.get(selectedId);
  return station?.projects?.find(project => project.id === projectId) || null;
}

function openProject(projectId) {
  const project = getProject(projectId);
  if (!project) return;
  activeProjectId = project.id;
  els.projectKicker.textContent = project.kicker;
  els.projectTitle.textContent = project.title;
  els.projectSummary.textContent = project.description;
  els.projectMedia.innerHTML = project.media.map(projectMediaMarkup).join('');
  els.projectActions.innerHTML = project.href
    ? `<a href="${project.href}" target="_blank" rel="noreferrer">${project.linkLabel || 'OPEN LINK'} <span aria-hidden="true">↗</span></a>`
    : '';
  els.projectOverlay.classList.remove('is-closing');
  els.projectOverlay.classList.add('is-open');
  els.projectOverlay.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(() => els.projectClose.focus());
}

function closeProject() {
  if (!els.projectOverlay.classList.contains('is-open')) return;
  els.projectOverlay.classList.remove('is-open');
  els.projectOverlay.classList.add('is-closing');
  activeProjectId = null;
  els.projectMedia.querySelectorAll('video').forEach(video => video.pause());
  setTimeout(() => {
    if (els.projectOverlay.classList.contains('is-open')) return;
    els.projectOverlay.classList.remove('is-closing');
    els.projectOverlay.setAttribute('aria-hidden', 'true');
  }, 250);
}

function openPreview() {
  const station = stationMap.get(selectedId);
  if (!station) return;
  els.previewKicker.textContent = station.kicker;
  els.previewTitle.textContent = station.title;
  els.previewImage.innerHTML = previewMarkup(station.previewAsset);
  els.previewDescription.textContent = station.description;
  els.preview.hidden = false;
  els.preview.classList.remove('is-closing');
  els.preview.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(() => els.workbench.classList.add('has-preview'));
}

function retractSelection() {
  selectionSequence += 1;
  selectedId = null;
  setLabelSelection();

  if (!currentActivePath) return;
  const path = currentActivePath;
  currentActivePath = null;
  animatePath(path, 'out', () => path.remove());
}

function closePreview() {
  retractSelection();

  if (!els.workbench.classList.contains('has-preview')) {
    els.preview.setAttribute('aria-hidden', 'true');
    els.preview.hidden = true;
    return;
  }

  els.workbench.classList.remove('has-preview');
  els.preview.classList.add('is-closing');
  els.preview.setAttribute('aria-hidden', 'true');
  setTimeout(() => {
    if (els.workbench.classList.contains('has-preview')) return;
    els.preview.classList.remove('is-closing');
    els.preview.hidden = true;
  }, 250);
}

function animatePath(pathEl, mode = 'in', done) {
  const length = pathEl.getTotalLength();
  pathEl.style.strokeDasharray = `${length} ${length}`;
  pathEl.style.strokeDashoffset = mode === 'in' ? `${length}` : '0';
  pathEl.getBoundingClientRect();
  pathEl.style.transition = 'stroke-dashoffset 280ms cubic-bezier(.2,.9,.12,1)';
  pathEl.style.strokeDashoffset = mode === 'in' ? '0' : `${length}`;
  pathEl.addEventListener('transitionend', () => done?.(), { once: true });
}

function setLabelSelection() {
  document.querySelectorAll('.station-node, .metro-label').forEach(el => el.classList.remove('is-selected'));
  if (!selectedId) return;
  document.querySelector(`[data-station="${selectedId}"]`)?.classList.add('is-selected');
  labelNodes.get(selectedId)?.classList.add('is-selected');
}

function renderSelectionPath(id) {
  const station = stationMap.get(id);
  const path = svg('path', { d: buildSelectionPath(station), class: 'selection-path' });
  els.selection.appendChild(path);
  currentActivePath = path;
  animatePath(path, 'in');
}

function selectStation(id) {
  hideTooltip();
  const sequence = ++selectionSequence;
  selectedId = id;
  setLabelSelection();
  openPreview();

  const drawIfStillSelected = () => {
    if (sequence !== selectionSequence || selectedId !== id) return;
    renderSelectionPath(id);
  };

  if (currentActivePath) {
    const old = currentActivePath;
    currentActivePath = null;
    animatePath(old, 'out', () => {
      old.remove();
      drawIfStillSelected();
    });
  } else {
    drawIfStillSelected();
  }
}

function populateDetail() {
  const station = stationMap.get(selectedId);
  els.detailTitle.textContent = station.title;
  els.detailStatement.textContent = station.detailText;
  els.detailGallery.innerHTML = station.projects.map(projectCardMarkup).join('');
  els.detailGallery.querySelectorAll('[data-project]').forEach(card => {
    card.addEventListener('click', () => openProject(card.dataset.project));
  });
}

const transitionStrokes = [
  { el: els.strikeTop, family: 'down', offsetSign: -1, origin: 'top-right' },
  { el: els.strikeBottom, family: 'up', offsetSign: 1, origin: 'bottom-right' },
  { el: els.strikeTopAccent, family: 'down', offsetSign: 1, origin: 'top-right' },
  { el: els.strikeBottomAccent, family: 'up', offsetSign: -1, origin: 'bottom-right' }
];

const TRANSITION = {
  strokeMs: 45,
  betweenMs: 1,
  coveredBeatMs: 24,
  titleInMs: 80,
  titleHoldMs: 280,
  titleOutMs: 60,
  easing: 'cubic-bezier(.2,.9,.12,1)'
};

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const nextFrame = () => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));

function transitionGeometry() {
  const width = Math.max(1, window.innerWidth);
  const height = Math.max(1, window.innerHeight);
  const diagonal = Math.hypot(width, height);
  const thickness = Math.max(180, Math.min(width, height) * 0.5);
  const overscan = Math.max(width, height) * 0.38;
  const length = diagonal + overscan * 2;
  const center = { x: width / 2, y: height / 2 };

  const normalize = (x, y) => {
    const magnitude = Math.hypot(x, y) || 1;
    return { x: x / magnitude, y: y / magnitude };
  };

  // down: top-right -> bottom-left. up: bottom-right -> top-left.
  const directions = {
    down: normalize(-width, height),
    up: normalize(-width, -height)
  };

  for (const stroke of transitionStrokes) {
    const direction = directions[stroke.family];
    const normal = { x: -direction.y, y: direction.x };
    const offset = stroke.offsetSign * thickness * 0.5;
    const finalCenter = {
      x: center.x + normal.x * offset,
      y: center.y + normal.y * offset
    };
    const origin = stroke.origin === 'top-right'
      ? { x: width, y: 0 }
      : { x: width, y: height };

    // Put the leading end just outside the originating corner.
    const startCenter = {
      x: origin.x - direction.x * (length / 2 + thickness * 0.16),
      y: origin.y - direction.y * (length / 2 + thickness * 0.16)
    };

    const angle = Math.atan2(direction.y, direction.x) * 180 / Math.PI;
    const finalLeft = finalCenter.x - length / 2;
    const finalTop = finalCenter.y - thickness / 2;
    const deltaX = startCenter.x - finalCenter.x;
    const deltaY = startCenter.y - finalCenter.y;

    stroke.el.style.width = `${length}px`;
    stroke.el.style.height = `${thickness}px`;
    stroke.el.style.left = `${finalLeft}px`;
    stroke.el.style.top = `${finalTop}px`;
    stroke.el.style.transformOrigin = '50% 50%';
    stroke.startTransform = `translate3d(${deltaX}px, ${deltaY}px, 0) rotate(${angle}deg)`;
    stroke.endTransform = `translate3d(0, 0, 0) rotate(${angle}deg)`;
  }
}

function setStrokeState(stroke, painted) {
  stroke.el.getAnimations().forEach(animation => animation.cancel());
  stroke.el.style.opacity = '1';
  stroke.el.style.transform = painted ? stroke.endTransform : stroke.startTransform;
}

async function animateStroke(stroke, painted) {
  stroke.el.getAnimations().forEach(animation => animation.cancel());
  const animation = stroke.el.animate(
    [
      { transform: stroke.startTransform },
      { transform: stroke.endTransform }
    ],
    {
      duration: TRANSITION.strokeMs,
      easing: TRANSITION.easing,
      direction: painted ? 'normal' : 'reverse',
      fill: 'forwards'
    }
  );
  await animation.finished.catch(() => {});
  stroke.el.style.transform = painted ? stroke.endTransform : stroke.startTransform;
  animation.cancel();
}

async function animateTransitionTitle(title) {
  if (!title) {
    await wait(TRANSITION.coveredBeatMs);
    return;
  }

  els.strikeTitle.textContent = title;
  const enter = els.strikeTitle.animate(
    [
      { opacity: 0, transform: 'translate(-50%,-50%) scale(.94)' },
      { opacity: 1, transform: 'translate(-50%,-50%) scale(1)' }
    ],
    { duration: TRANSITION.titleInMs, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'forwards' }
  );
  await enter.finished.catch(() => {});
  await wait(TRANSITION.titleHoldMs);
  const exit = els.strikeTitle.animate(
    [{ opacity: 1 }, { opacity: 0 }],
    { duration: TRANSITION.titleOutMs, easing: 'linear', fill: 'forwards' }
  );
  await exit.finished.catch(() => {});
  els.strikeTitle.textContent = '';
  els.strikeTitle.style.opacity = '0';
}

async function runPageTransition({ title = '', swap }) {
  if (transitionBusy) return;
  transitionBusy = true;

  transitionGeometry();
  els.strike.className = 'strike is-active';
  els.strikeFill.style.opacity = '0';
  els.strikeTitle.textContent = '';
  els.strikeTitle.style.opacity = '0';
  transitionStrokes.forEach(stroke => setStrokeState(stroke, false));
  await nextFrame();

  // PAINT: four real rectangles sweep from the two right-hand corners.
  for (let index = 0; index < transitionStrokes.length; index++) {
    await animateStroke(transitionStrokes[index], true);
    if (index < transitionStrokes.length - 1) await wait(TRANSITION.betweenMs);
  }

  // At this point the four physical bands already cover the viewport.
  // The backing fill is only sub-pixel insurance and therefore cannot flash on.
  await nextFrame();
  els.strikeFill.style.opacity = '1';
  await nextFrame();
  await wait(TRANSITION.coveredBeatMs);

  // Swap content only while absolutely nothing but yellow can be visible.
  swap?.();
  await nextFrame();

  // Text is a full-yellow phase. It never overlaps the four paint strokes.
  await animateTransitionTitle(title);
  await wait(TRANSITION.coveredBeatMs);

  // The four rectangles are still fully painted underneath the backing fill.
  // Removing the insurance layer changes no pixels; then we rewind 4,3,2,1.
  els.strikeFill.style.opacity = '0';
  await nextFrame();

  for (let index = transitionStrokes.length - 1; index >= 0; index--) {
    await animateStroke(transitionStrokes[index], false);
    if (index > 0) await wait(TRANSITION.betweenMs);
  }

  els.strike.className = 'strike';
  els.strikeFill.style.opacity = '0';
  els.strikeTitle.textContent = '';
  els.strikeTitle.style.opacity = '';
  transitionBusy = false;
}

function openDetail() {
  if (!selectedId) return;
  populateDetail();
  const station = stationMap.get(selectedId);
  els.shell.dataset.mode = 'transitioning';
  runPageTransition({
    title: station.title,
    swap: () => {
      els.detailView.classList.add('is-open');
      els.detailView.setAttribute('aria-hidden', 'false');
      els.shell.dataset.mode = 'detail';
    }
  });
}

function closeDetail() {
  if (!els.detailView.classList.contains('is-open')) return;
  closeProject();

  // The home preview and its selection line should not survive a trip into a detail page.
  // Start their exit while the detail view still covers the map, so home returns to neutral.
  closePreview();
  els.shell.dataset.mode = 'transitioning';
  runPageTransition({
    title: '',
    swap: () => {
      els.detailView.classList.remove('is-open');
      els.detailView.setAttribute('aria-hidden', 'true');
      els.shell.dataset.mode = 'home';
    }
  });
}

function openProfile() {
  if (transitionBusy || els.detailView.classList.contains('is-open')) return;
  closePreview();
  els.profileOverlay.classList.remove('is-closing');
  els.profileOverlay.classList.add('is-open');
  els.profileOverlay.setAttribute('aria-hidden', 'false');
  els.navProfile.classList.add('is-active');
  els.navProfile.setAttribute('aria-expanded', 'true');
  els.navWork.classList.remove('is-active');
  requestAnimationFrame(() => els.profileClose.focus());
}

function closeProfile() {
  if (!els.profileOverlay.classList.contains('is-open')) return;
  els.profileOverlay.classList.remove('is-open');
  els.profileOverlay.classList.add('is-closing');
  els.navProfile.classList.remove('is-active');
  els.navProfile.setAttribute('aria-expanded', 'false');
  els.navWork.classList.add('is-active');
  setTimeout(() => {
    if (els.profileOverlay.classList.contains('is-open')) return;
    els.profileOverlay.classList.remove('is-closing');
    els.profileOverlay.setAttribute('aria-hidden', 'true');
  }, 250);
}

const trainState = {
  currentId: STATIONS[Math.floor(Math.random() * STATIONS.length)].id,
  targetId: null,
  pathNode: null,
  pathLength: 0,
  wagons: 3 + Math.floor(Math.random() * 3),
  mode: 'dwell',
  started: 0,
  duration: 0,
  dwell: 420,
  dwellStarted: 0,
  hideDistance: 0
};

function nextRandomStation(exclude) {
  const pool = STATIONS.map(s => s.id).filter(id => id !== exclude);
  return pool[Math.floor(Math.random() * pool.length)];
}

function setTrainPath(fromId, toId) {
  trainState.pathNode = buildTravelPathVariant(fromId, toId, Math.random() < .34);
  trainState.pathLength = trainState.pathNode.getTotalLength();
  trainState.hideDistance = trainState.wagons * 34 + 36;
}

function drawTrain(progress) {
  els.train.innerHTML = '';
  if (trainState.mode === 'dwell') return;
  const wagonLen = 24;
  const wagonGap = 8;
  const lead = progress * (trainState.pathLength + trainState.hideDistance);
  for (let i = 0; i < trainState.wagons; i++) {
    const centerLength = lead - i * (wagonLen + wagonGap);
    if (centerLength < 0 || centerLength > trainState.pathLength) continue;
    const point = trainState.pathNode.getPointAtLength(centerLength);
    const prev = trainState.pathNode.getPointAtLength(Math.max(0, centerLength - 1));
    const angle = Math.atan2(point.y - prev.y, point.x - prev.x) * 180 / Math.PI;
    els.train.appendChild(svg('rect', {
      x: point.x - wagonLen / 2,
      y: point.y - 5,
      width: wagonLen,
      height: 10,
      rx: 1.5,
      class: i === 0 ? 'train-car train-car--lead' : 'train-car',
      transform: `rotate(${angle} ${point.x} ${point.y})`
    }));
  }
}

function animateTrain(now) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (trainState.mode === 'dwell') {
    if (!trainState.dwellStarted) trainState.dwellStarted = now;
    els.train.innerHTML = '';
    if (now - trainState.dwellStarted >= trainState.dwell) {
      trainState.mode = 'move';
      trainState.started = now;
      trainState.duration = Math.max(1280, trainState.pathLength * 2.7);
    }
  } else {
    const progress = Math.min(1, (now - trainState.started) / trainState.duration);
    drawTrain(progress);
    if (progress >= 1) {
      pulseLabel(trainState.targetId);
      trainState.currentId = trainState.targetId;
      trainState.targetId = nextRandomStation(trainState.currentId);
      setTrainPath(trainState.currentId, trainState.targetId);
      trainState.mode = 'dwell';
      trainState.dwellStarted = now;
      els.train.innerHTML = '';
    }
  }
  requestAnimationFrame(animateTrain);
}

const preloadedMedia = [];

function collectMediaSources() {
  const sources = new Map();
  const remember = (asset) => {
    if (!asset?.src || !asset?.type) return;
    sources.set(asset.src, asset.type);
  };
  for (const station of STATIONS) {
    remember(station.previewAsset);
    for (const project of station.projects ?? []) {
      remember(project.cover);
      for (const media of project.media ?? []) remember(media);
    }
  }
  return [...sources.entries()];
}

function warmProjectMedia() {
  for (const [src, type] of collectMediaSources()) {
    if (type === 'image') {
      const img = new Image();
      img.decoding = 'async';
      img.src = src;
      preloadedMedia.push(img);
      continue;
    }
    if (type === 'video') {
      const video = document.createElement('video');
      video.preload = 'auto';
      video.muted = true;
      video.playsInline = true;
      video.src = src;
      video.load();
      preloadedMedia.push(video);
    }
  }
}

function scheduleMediaWarmup() {
  const start = () => warmProjectMedia();
  if ('requestIdleCallback' in window) {
    requestIdleCallback(start, { timeout: 900 });
  } else {
    setTimeout(start, 250);
  }
}

renderMap();
scheduleMediaWarmup();
els.preview.hidden = true;
trainState.targetId = nextRandomStation(trainState.currentId);
setTrainPath(trainState.currentId, trainState.targetId);
requestAnimationFrame(animateTrain);

els.previewClose.addEventListener('click', (event) => {
  event.stopPropagation();
  closePreview();
});
els.previewEnter.addEventListener('click', openDetail);
els.returnDetail.addEventListener('click', closeDetail);
els.projectClose.addEventListener('click', closeProject);
els.projectBackdrop.addEventListener('click', closeProject);


els.navProfile.addEventListener('click', openProfile);
els.navWork.addEventListener('click', () => {
  closeProfile();
  if (els.detailView.classList.contains('is-open')) closeDetail();
});
els.profileClose.addEventListener('click', closeProfile);
els.profileBackdrop.addEventListener('click', closeProfile);
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (els.projectOverlay.classList.contains('is-open')) {
    closeProject();
    return;
  }
  if (els.profileOverlay.classList.contains('is-open')) closeProfile();
});

document.addEventListener('pointerdown', (event) => {
  if (els.detailView.classList.contains('is-open')) return;
  if (!els.workbench.classList.contains('has-preview')) return;
  if (els.preview.contains(event.target)) return;
  if (event.target.closest?.('.station-hit-svg, .metro-label')) return;
  closePreview();
});
