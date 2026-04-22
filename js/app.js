/* ── State ── */
let currentOrtho = 'cn';
let currentTopic = 'alphabet';
let currentSection = 'grammar';

/* ── Boot ── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initOrthoToggle();
  initGrammarTabs();
  initDictionary();
  renderGrammar();
  renderDictionary('');
});

/* ════════════════════════════════════════════════════════════════════════
   Navigation
   ════════════════════════════════════════════════════════════════════════ */
function initNav() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const sec = btn.dataset.section;
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
      document.getElementById('section-' + sec).classList.add('active');
      currentSection = sec;
    });
  });
}

/* ════════════════════════════════════════════════════════════════════════
   Orthography toggle
   ════════════════════════════════════════════════════════════════════════ */
function initOrthoToggle() {
  document.querySelectorAll('input[name="ortho"]').forEach(radio => {
    radio.addEventListener('change', () => {
      currentOrtho = radio.value;
      renderGrammar();
      const q = document.getElementById('search-input').value;
      renderDictionary(q);
    });
  });
}

/* ════════════════════════════════════════════════════════════════════════
   Grammar tabs
   ════════════════════════════════════════════════════════════════════════ */
function initGrammarTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      currentTopic = btn.dataset.topic;
      renderGrammar();
    });
  });
}

function renderGrammar() {
  const container = document.getElementById('grammar-content');
  container.innerHTML = '';
  const o = currentOrtho;

  if (currentTopic === 'alphabet') container.appendChild(buildAlphabetSection(o));
  if (currentTopic === 'nouns')    container.appendChild(buildNounsSection(o));
  if (currentTopic === 'verbs')    container.appendChild(buildVerbsSection(o));
}

/* ── Alphabet ─────────────────────────────────────────────────────────── */
function buildAlphabetSection(o) {
  const div = el('div', 'grammar-content-area');

  div.appendChild(topicHeading(gramLat(ALPHABET.title.cn, ALPHABET.title.ct, o), ALPHABET.subtitle, o));
  div.appendChild(introBlock(ALPHABET.intro));

  /* Letter table */
  const block = el('div', 'grammar-block');
  const cap = el('h3', 'grammar-block-title', gramLat(ALPHABET.tableCaption.cn, ALPHABET.tableCaption.ct, o));
  block.appendChild(cap);

  const isCyrillic = o === 'cn' || o === 'ct';

  let thead, rows;

  if (isCyrillic) {
    thead = ['Letter','Name','IPA','Łacinka equiv.','Example'];
    rows = ALPHABET_ROWS.map(r => {
      const latinCol = (o === 'cn') ? r[2] : r[3];
      return [r[0], r[0].toLowerCase().trim().split(' ')[0], r[1], latinCol,
              `<span class="alpha-example">${r[4]}</span>`];
    });
  } else {
    thead = ['Letter (Latin)','IPA','Cyrillic equiv.','Example'];
    rows = ALPHABET_ROWS.map(r => {
      const latinLetter = (o === 'ln') ? r[2] : r[3];
      const exampleWord = cyrToLat(o === 'ln' ? r[4] : r[5], o === 'lt');
      return [latinLetter, r[1], r[0], `<span class="alpha-example">${exampleWord}</span>`];
    });
    // Filter duplicate/combined entries for Latin view
  }

  const table = buildTable(thead, rows, 'ref-table alpha-table');
  block.appendChild(wrapTable(table));

  /* Orthography note */
  const noteBox = el('div', 'ortho-note-box');
  if (o === 'cn' || o === 'ln') {
    noteBox.innerHTML = ALPHABET.noteNark;
  } else {
    noteBox.innerHTML = ALPHABET.noteTarak;
  }
  block.appendChild(noteBox);

  div.appendChild(block);
  return div;
}

/* ── Nouns ────────────────────────────────────────────────────────────── */
function buildNounsSection(o) {
  const div = el('div');
  div.appendChild(topicHeading(gramLat(NOUNS.title.cn, NOUNS.title.ct, o), NOUNS.subtitle, o));
  div.appendChild(introBlock(NOUNS.intro));

  [NOUN_MASC, NOUN_FEM, NOUN_NEUT].forEach(paradigm => {
    const block = el('div', 'grammar-block');
    const lemmaText = gramLat(paradigm.lemma.cn, paradigm.lemma.ct, o);
    const heading = `${lemmaText} — <span style="font-size:.85em;font-family:var(--font-ui);color:var(--ink-faint)">${paradigm.gloss}</span>`;
    const h3 = el('h3', 'grammar-block-title');
    h3.innerHTML = heading;
    block.appendChild(h3);

    const forms = gramLatForms(paradigm.forms.cn, paradigm.forms.ct, o);
    const cases = gramLatArr(CASE_NAMES.cn, CASE_NAMES.ct, o);
    const thead = ['Case', 'Singular', 'Plural'];
    const rows = cases.map((c, i) => [c, forms[i][0], forms[i][1]]);

    block.appendChild(wrapTable(buildTable(thead, rows, 'ref-table')));
    div.appendChild(block);
  });

  return div;
}

/* ── Verbs ────────────────────────────────────────────────────────────── */
function buildVerbsSection(o) {
  const div = el('div');
  div.appendChild(topicHeading(gramLat(VERBS.title.cn, VERBS.title.ct, o), VERBS.subtitle, o));
  div.appendChild(introBlock(VERBS.intro));

  [VERB_CONJ1, VERB_CONJ2].forEach(verb => {
    const block = el('div', 'grammar-block');
    const heading = `${gramLat(verb.lemma.cn, verb.lemma.ct, o)} — <span style="font-size:.85em;font-family:var(--font-ui);color:var(--ink-faint)">${verb.gloss}</span>`;
    const h3 = el('h3', 'grammar-block-title');
    h3.innerHTML = heading;
    block.appendChild(h3);

    /* Present tense */
    const presHead = el('p', 'grammar-block-subhead', gramLat(VERBS.pres_head.cn, VERBS.pres_head.ct, o));
    presHead.style.cssText = 'font-family:var(--font-ui);font-size:.80rem;text-transform:uppercase;letter-spacing:.06em;color:var(--ink-faint);margin-bottom:.4rem;';
    block.appendChild(presHead);

    const persons = gramLatArr(PERSON_LABELS.cn, PERSON_LABELS.ct, o);
    const presForms = gramLatArr(verb.pres.cn, verb.pres.ct, o);
    const presRows = persons.map((p, i) => [p, presForms[i]]);
    block.appendChild(wrapTable(buildTable(['Person / Pronoun', 'Form'], presRows, 'ref-table')));

    /* Past tense */
    const pastHead = el('p', 'grammar-block-subhead', gramLat(VERBS.past_head.cn, VERBS.past_head.ct, o));
    pastHead.style.cssText = 'font-family:var(--font-ui);font-size:.80rem;text-transform:uppercase;letter-spacing:.06em;color:var(--ink-faint);margin:.9rem 0 .4rem;';
    block.appendChild(pastHead);

    const pastLabels = gramLatArr(PAST_LABELS.cn, PAST_LABELS.ct, o);
    const pastForms = gramLatArr(verb.past.cn, verb.past.ct, o);
    const pastRows = pastLabels.map((l, i) => [l, pastForms[i]]);
    block.appendChild(wrapTable(buildTable(['Gender / Number', 'Past form'], pastRows, 'ref-table')));

    div.appendChild(block);
  });

  return div;
}

/* ════════════════════════════════════════════════════════════════════════
   Dictionary
   ════════════════════════════════════════════════════════════════════════ */
function initDictionary() {
  const input = document.getElementById('search-input');
  input.addEventListener('input', () => renderDictionary(input.value));
}

function renderDictionary(query) {
  const container = document.getElementById('dictionary-results');
  container.innerHTML = '';
  const o = currentOrtho;
  const q = query.trim().toLowerCase();

  const matches = q
    ? DICTIONARY.filter(e => entryMatches(e, q))
    : DICTIONARY;

  const countLine = el('p', 'dict-entry-count',
    q ? `${matches.length} result${matches.length !== 1 ? 's' : ''} for "${query}"`
      : `Showing all ${DICTIONARY.length} entries — orthography: ${ORTHO_LABELS[o]}`);
  container.appendChild(countLine);

  if (matches.length === 0) {
    const msg = el('div', 'dict-no-results', 'No entries found. Try a different spelling or English keyword.');
    container.appendChild(msg);
    return;
  }

  matches.forEach(entry => container.appendChild(buildEntry(entry, o, q)));
}

/* ── Latin forms derived from Cyrillic via cyrToLat() ──────────────────
   getVariant / getExample compute LN and LT on the fly so they always
   match the Cyrillic source; stored ln/lt keys in data are ignored.     */
function getVariant(entry, key) {
  if (key === 'ln') return cyrToLat(entry.variants.cn, false);
  if (key === 'lt') return cyrToLat(entry.variants.ct, true);
  return entry.variants[key];
}

function getExample(entry, key) {
  if (key === 'ln') return cyrToLat(entry.example.cn, false);
  if (key === 'lt') return cyrToLat(entry.example.ct, true);
  return entry.example[key];
}

function entryMatches(entry, q) {
  if (entry.en.toLowerCase().includes(q)) return true;
  for (const key of ['cn', 'ct', 'ln', 'lt']) {
    if (getVariant(entry, key).toLowerCase().includes(q)) return true;
  }
  return false;
}

function buildEntry(entry, o, q) {
  const card = el('div', 'dict-entry');
  if (entry.diff) card.style.borderLeftColor = 'var(--accent)';

  /* Top row: headword + POS */
  const top = el('div', 'dict-entry-top');
  const hw  = el('span', 'dict-headword', hl(getVariant(entry, o), q));
  const pos = el('span', 'dict-pos', entry.pos);
  top.appendChild(hw);
  top.appendChild(pos);
  card.appendChild(top);

  /* English definition */
  card.appendChild(el('p', 'dict-definition', entry.en));

  /* Orthography variant pills */
  const varWrap     = el('div', 'dict-variants');
  const orthoOrder  = ['cn', 'ct', 'ln', 'lt'];
  const shortLabels = { cn:'Cyr. Nark.', ct:'Cyr. Tarak.', ln:'Lat. Nark.', lt:'Lat. Tarak.' };
  orthoOrder.forEach(key => {
    const pill = el('span', 'dict-variant' + (key === o ? ' active-variant' : ''));
    pill.innerHTML = `<span class="variant-label">${shortLabels[key]}</span>${esc(getVariant(entry, key))}`;
    varWrap.appendChild(pill);
  });
  card.appendChild(varWrap);

  /* Example sentence */
  const exDiv  = el('div', 'dict-example');
  const exText = el('span', '', getExample(entry, o));
  const exTrans = el('span', 'example-trans', ' — ' + entry.trans);
  exDiv.appendChild(exText);
  exDiv.appendChild(exTrans);
  card.appendChild(exDiv);

  /* Paradigm toggle */
  if (entry.decl) {
    const btn = el('button', 'decl-toggle', 'Paradigm ▾');
    const section = buildDeclSection(entry, o);
    section.style.display = 'none';
    btn.addEventListener('click', () => {
      const open = section.style.display !== 'none';
      section.style.display = open ? 'none' : 'block';
      btn.textContent = open ? 'Paradigm ▾' : 'Paradigm ▲';
    });
    card.appendChild(btn);
    card.appendChild(section);
  }

  return card;
}

/* ════════════════════════════════════════════════════════════════════════
   Dictionary declension / conjugation tables
   ════════════════════════════════════════════════════════════════════════ */
function buildDeclSection(entry, o) {
  if (!entry.decl) return null;
  const { type, cn, ct } = entry.decl;
  const src = (o === 'ct' && ct) ? ct : cn;
  const isTarak = o === 'lt';
  const forms = arr => (o === 'ln' || o === 'lt') ? arr.map(f => cyrToLat(f, isTarak)) : arr;

  const wrap = el('div', 'dict-decl');

  if (type === 'n') {
    const cases = gramLatArr(CASE_NAMES.cn, CASE_NAMES.ct, o);
    const sg = forms(src.sg);
    const pl = forms(src.pl);
    const rows = cases.map((c, i) => [c, sg[i], pl[i]]);
    wrap.appendChild(wrapTable(buildTable(['Case', 'Singular', 'Plural'], rows, 'ref-table decl-table')));
  } else {
    const ph = el('p', '', gramLat(VERBS.pres_head.cn, VERBS.pres_head.ct, o));
    ph.style.cssText = 'font-family:var(--font-ui);font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;color:var(--ink-faint);margin-bottom:.35rem;';
    wrap.appendChild(ph);
    const persons = gramLatArr(PERSON_LABELS.cn, PERSON_LABELS.ct, o);
    const pf = forms(src.pres);
    wrap.appendChild(wrapTable(buildTable(['Person / Pronoun', 'Form'], persons.map((p, i) => [p, pf[i]]), 'ref-table decl-table')));

    const pastH = el('p', '', gramLat(VERBS.past_head.cn, VERBS.past_head.ct, o));
    pastH.style.cssText = 'font-family:var(--font-ui);font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;color:var(--ink-faint);margin:.65rem 0 .35rem;';
    wrap.appendChild(pastH);
    const pastLbls = gramLatArr(PAST_LABELS.cn, PAST_LABELS.ct, o);
    const pastF = forms(src.past);
    wrap.appendChild(wrapTable(buildTable(['Gender / Number', 'Past form'], pastLbls.map((l, i) => [l, pastF[i]]), 'ref-table decl-table')));
  }
  return wrap;
}

/* ════════════════════════════════════════════════════════════════════════
   Helpers
   ════════════════════════════════════════════════════════════════════════ */
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.innerHTML = text;
  return node;
}

function esc(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function hl(text, q) {
  if (!q) return esc(text);
  const re = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
  return esc(text).replace(re, m => `<mark class="match-hl">${m}</mark>`);
}

function gramLat(cn, ct, o) {
  if (o === 'ln') return cyrToLat(cn, false);
  if (o === 'lt') return cyrToLat(ct, true);
  return o === 'cn' ? cn : ct;
}
function gramLatArr(cnArr, ctArr, o) {
  if (o === 'ln') return cnArr.map(s => cyrToLat(s, false));
  if (o === 'lt') return ctArr.map(s => cyrToLat(s, true));
  return o === 'cn' ? cnArr : ctArr;
}
function gramLatForms(cnForms, ctForms, o) {
  if (o === 'ln') return cnForms.map(p => p.map(f => cyrToLat(f, false)));
  if (o === 'lt') return ctForms.map(p => p.map(f => cyrToLat(f, true)));
  return o === 'cn' ? cnForms : ctForms;
}

function topicHeading(title, subtitle, o) {
  const wrap = el('div');
  const h2 = el('h2', 'grammar-topic-title', title);
  const sub = el('p', 'grammar-topic-subtitle', subtitle + ' · ' + ORTHO_LABELS[o]);
  wrap.appendChild(h2);
  wrap.appendChild(sub);
  return wrap;
}

function introBlock(html) {
  const p = el('p', 'grammar-intro');
  p.innerHTML = html;
  return p;
}

function buildTable(headCells, rows, className) {
  const table = el('table', className || 'ref-table');
  table.setAttribute('role', 'table');

  const thead = el('thead');
  const hrow = el('tr');
  headCells.forEach(h => hrow.appendChild(el('th', '', h)));
  thead.appendChild(hrow);
  table.appendChild(thead);

  const tbody = el('tbody');
  rows.forEach(row => {
    const tr = el('tr');
    row.forEach(cell => {
      tr.appendChild(el('td', '', cell));
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  return table;
}

function wrapTable(table) {
  const wrap = el('div', 'ref-table-wrap');
  wrap.appendChild(table);
  return wrap;
}
