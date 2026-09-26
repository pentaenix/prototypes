const SVG_NS = 'http://www.w3.org/2000/svg';
const LOOP = { cx: 540, cy: 370, r: 160 };

const STATIONS = [
  {
    id: 'breadmaker',
    title: 'BREADMAKER',
    short: 'Local-first authoring application',
    kicker: 'AUTHORING / TOOLS',
    description: 'Breadmaker is a local-first writing application for long-form projects. It combines manuscript editing, visual planning, maps, review workflows, and project storage in one workspace.',
    detailText: 'Breadmaker is an ongoing authoring application built around the workflow of writing a large manuscript. The editor handles chapters and scenes, while separate views cover visual planning, maps, review sessions, checkpoints, and project recovery. The video below shows the current product website and how the application is presented to users.',
    station: { x: 785, y: 175 },
    join: { x: 653, y: 256, angle: -0.79 },
    branchPoints: [[653,256],[718,208],[785,208],[785,175]],
    label: { x: 785, y: 124, anchor: 'middle', rotate: -1.4 },
    tooltipSide: 'top',
    previewAsset: { type: 'video', badge: 'VIDEO', label: 'BREADMAKER — PRODUCT WEBSITE WALKTHROUGH', src: './assets/breadmaker-site.mp4' },
    assets: [
      { type: 'video', badge: 'VIDEO', label: 'BREADMAKER — PRODUCT WEBSITE WALKTHROUGH', src: './assets/breadmaker-site.mp4' },
    ]
  },
  {
    id: 'online-stores',
    title: 'ONLINE STORES',
    short: 'Storefronts + usability tooling',
    kicker: 'ECOMMERCE / INTERNAL TOOLS',
    description: 'Two live storefront projects and the internal testing tool used alongside product work. Corazón de Terciopelo and AvoKind are public ecommerce sites; Cairon records and reviews structured user-test sessions.',
    detailText: 'This section contains two live ecommerce sites and one internal research tool. Corazón de Terciopelo is a jewelry storefront, AvoKind is a consumer nutrition storefront, and Cairon is a browser-based tool for registering usability sessions and reviewing the resulting reports.',
    station: { x: 890, y: 355 },
    join: { x: 700, y: 384, angle: 0.09 },
    branchPoints: [[700,384],[812,384],[836,355],[890,355]],
    label: { x: 890, y: 307, anchor: 'middle', rotate: -1 },
    tooltipSide: 'top',
    previewAsset: { type: 'image', badge: 'LIVE SITE', label: 'AVOKIND — NUTRITION STOREFRONT', src: './assets/avokind-home.png', href: 'https://avokind.com/' },
    assets: [
      { type: 'image', badge: 'LIVE SITE', label: 'CORAZÓN DE TERCIOPELO — JEWELRY STOREFRONT', src: './assets/corazon-home.png', href: 'https://corazondeterciopelo.com/' },
      { type: 'image', badge: 'LIVE SITE', label: 'AVOKIND — NUTRITION STOREFRONT', src: './assets/avokind-home.png', href: 'https://avokind.com/' },
      { type: 'image', badge: 'INTERNAL TOOL', label: 'CAIRON — SESSION REGISTRATION AND TESTING INTERFACE', src: './assets/cairon-tooling.png' },
      { type: 'image', badge: 'REPORT', label: 'CAIRON — USER-TEST SESSION REPORT', src: './assets/cairon-report-01.png' },
      { type: 'image', badge: 'REPORT', label: 'CAIRON — REPORT DETAIL', src: './assets/cairon-report-02.png' }
    ]
  },
  {
    id: 'interactive-experiences',
    title: 'INTERACTIVE EXPERIENCES',
    short: 'Event browser games',
    kicker: 'EVENTS / EXPERIENCES',
    description: 'Browser games created for branded event experiences. Citrex ran on a large vertical touch display at a live activation; Lotería del Limón is a separate Citrex game built around a digital lotería format.',
    detailText: 'These are browser-based games created for Citrex event experiences. The Citrex touch game shown below was deployed on a large vertical display and played directly by attendees. Lotería del Limón is a separate branded game based on Mexican lotería; the screen recording shows the playable build rather than event footage.',
    station: { x: 810, y: 610 },
    join: { x: 639, y: 496, angle: 0.89 },
    branchPoints: [[639,496],[714,555],[810,555],[810,610]],
    label: { x: 810, y: 670, anchor: 'middle', rotate: -1.3 },
    tooltipSide: 'bottom',
    previewAsset: { type: 'image', badge: 'LIVE EVENT', label: 'CITREX — TOUCH GAME RUNNING AT A LIVE ACTIVATION', src: './assets/citrex-event.png' },
    assets: [
      { type: 'image', badge: 'LIVE EVENT', label: 'CITREX — TOUCH GAME RUNNING AT A LIVE ACTIVATION', src: './assets/citrex-event.png' },
      { type: 'image', badge: 'BRAND / EVENT', label: 'CITREX — GAME BRANDING', src: './assets/citrex-logo.png' },
      { type: 'image', badge: 'GAME', label: 'LOTERÍA DEL LIMÓN — TITLE SCREEN', src: './assets/loteria-del-limon.png' },
      { type: 'video', badge: 'SCREEN RECORDING', label: 'LOTERÍA DEL LIMÓN — PLAYABLE BUILD', src: './assets/loteria-del-limon.mp4' }
    ]
  },
  {
    id: 'videogames',
    title: 'VIDEOGAMES',
    short: 'Games + interactive tools',
    kicker: 'GAME DEVELOPMENT',
    description: 'Game projects and interactive tools. Please Stop Helping is the main game shown here, alongside the Pokémon Resort fan project and Aquarium Maker, a browser-based 3D layout editor.',
    detailText: 'This section collects game-focused work from different projects. Please Stop Helping is the primary game shown here. Pokémon Resort is a fan project with its own documentation site, and Aquarium Maker is a browser-based 3D layout tool for designing aquarium spaces and passage geometry.',
    station: { x: 178, y: 610 },
    join: { x: 428, y: 484, angle: 2.31 },
    branchPoints: [[428,484],[338,555],[235,555],[235,610],[178,610]],
    label: { x: 178, y: 670, anchor: 'middle', rotate: 1 },
    tooltipSide: 'bottom',
    previewAsset: { type: 'video', badge: 'VIDEO', label: 'PLEASE STOP HELPING — GAME FOOTAGE', src: './assets/psh.mp4' },
    assets: [
      { type: 'video', badge: 'VIDEO', label: 'PLEASE STOP HELPING — GAME FOOTAGE', src: './assets/psh.mp4' },
      { type: 'image', badge: 'FAN PROJECT', label: 'POKÉMON RESORT — PROJECT DOCUMENTATION SITE', src: './assets/pokemon-resort-page.png', href: 'https://pentaenix.github.io/pokemon-resort-page/#/' },
      { type: 'image', badge: 'TOOL / SIMULATION', label: 'AQUARIUM MAKER — BROWSER-BASED 3D LAYOUT EDITOR', src: './assets/aquarium-maker.png' },
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
  profileClose: document.getElementById('profile-close')
};

let selectedId = null;
let currentActivePath = null;
let selectionSequence = 0;
let tooltipTimer = null;
let transitionBusy = false;
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

function galleryMarkup(asset) {
  if (asset.type === 'video') {
    return `<figure class="asset-card asset-card--video"><div class="asset-media"><video src="${asset.src}" controls muted loop playsinline></video></div><figcaption><span class="asset-card__badge">${asset.badge}</span><span>${asset.label}</span></figcaption></figure>`;
  }
  if (asset.type === 'image') {
    const card = `<figure class="asset-card asset-card--image"><div class="asset-media"><img src="${asset.src}" alt="${asset.label}"></div><figcaption><span class="asset-card__badge">${asset.badge}</span><span>${asset.label}</span>${asset.href ? '<span class="asset-card__open">OPEN ↗</span>' : ''}</figcaption></figure>`;
    return asset.href ? `<a class="asset-link" href="${asset.href}" target="_blank" rel="noreferrer">${card}</a>` : card;
  }
  return `<div class="asset-card asset-card--placeholder"><span class="asset-card__badge">${asset.badge}</span><strong>${asset.label}</strong></div>`;
}

function openPreview() {
  const station = stationMap.get(selectedId);
  if (!station) return;
  els.previewKicker.textContent = station.kicker;
  els.previewTitle.textContent = station.title;
  els.previewImage.innerHTML = previewMarkup(station.previewAsset);
  els.previewDescription.textContent = station.description;
  els.preview.hidden = false;
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
  els.preview.setAttribute('aria-hidden', 'true');
  let settled = false;
  const finish = () => {
    if (settled) return;
    settled = true;
    els.preview.removeEventListener('transitionend', done);
    if (!els.workbench.classList.contains('has-preview')) els.preview.hidden = true;
  };
  const done = (event) => {
    if (event.propertyName === 'transform') finish();
  };
  els.preview.addEventListener('transitionend', done);
  setTimeout(finish, 620);
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
  els.detailGallery.innerHTML = station.assets.map(galleryMarkup).join('');
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
  els.profileOverlay.setAttribute('aria-hidden', 'true');
  els.navProfile.classList.remove('is-active');
  els.navProfile.setAttribute('aria-expanded', 'false');
  els.navWork.classList.add('is-active');
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

renderMap();
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


els.navProfile.addEventListener('click', openProfile);
els.navWork.addEventListener('click', () => {
  closeProfile();
  if (els.detailView.classList.contains('is-open')) closeDetail();
});
els.profileClose.addEventListener('click', closeProfile);
els.profileBackdrop.addEventListener('click', closeProfile);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && els.profileOverlay.classList.contains('is-open')) closeProfile();
});

document.addEventListener('pointerdown', (event) => {
  if (els.detailView.classList.contains('is-open')) return;
  if (!els.workbench.classList.contains('has-preview')) return;
  if (els.preview.contains(event.target)) return;
  if (event.target.closest?.('.station-hit-svg')) return;
  closePreview();
});
