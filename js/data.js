/* ── Orthography keys ──────────────────────────────────────────────────────
   cn = Cyrillic Narkamaŭka  (official post-1933)
   ct = Cyrillic Taraškievica (classical)
   ln = Latin Narkamaŭka     (Łacinka, official-based)
   lt = Latin Taraškievica   (Łacinka, classical-based)
   ─────────────────────────────────────────────────────────────────────── */

const ORTHO_LABELS = {
  cn: 'Cyrillic Narkamaŭka',
  ct: 'Cyrillic Taraškievica',
  ln: 'Latin Narkamaŭka',
  lt: 'Latin Taraškievica'
};

const ORTHO_NATIVE = {
  cn: 'Кірыліца Наркамаўка',
  ct: 'Кірыліца Тарашкевіца',
  ln: 'Łacinka Narkamaŭka',
  lt: 'Łacinka Taraškievica'
};

/* ════════════════════════════════════════════════════════════════════════
   GRAMMAR DATA
   ════════════════════════════════════════════════════════════════════════ */

/* ── Alphabet ─────────────────────────────────────────────────────────── */

/* Each row: [cyrillic-letter, IPA, latin-nark, latin-tarak, example-word-cn, example-word-ct, example-word-ln, example-word-lt] */
const ALPHABET_ROWS = [
  ['А а', '/a/',  'A a',  'A a',  'адрас',   'адрас',    'adras',   'adras'],
  ['Б б', '/b/',  'B b',  'B b',  'брат',    'брат',     'brat',    'brat'],
  ['В в', '/v/',  'V v',  'V v',  'вада',    'вада',     'vada',    'vada'],
  ['Г г', '/ɣ/',  'H h',  'H h',  'горад',   'горад',    'horad',   'horad'],
  ['Д д', '/d/',  'D d',  'D d',  'дом',     'дом',      'dom',     'dom'],
  ['Е е', '/jɛ/', 'Je/ie','Je/ie','вера',    'вера',     'viera',   'viera'],
  ['Ё ё', '/jɔ/', 'Jo/io','Jo/io','ёлка',    'ёлка',     'jolka',   'jolka'],
  ['Ж ж', '/ʐ/',  'Ž ž',  'Ž ž',  'жыць',   'жыць',     'žyć',     'žyć'],
  ['З з', '/z/',  'Z z',  'Z z',  'зямля',  'зямля',    'ziamlia', 'ziamlia'],
  ['І і', '/i/',  'I i',  'I i',  'ісці',   'ісьці',    'isci',    'iści'],
  ['Й й', '/j/',  'J j',  'J j',  'мой',     'мой',      'moj',     'moj'],
  ['К к', '/k/',  'K k',  'K k',  'кніга',  'кніга',    'kniha',   'kniha'],
  ['Л л', '/l/',  'L l',  'L l',  'лес',     'лес',      'lies',    'lies'],
  ['М м', '/m/',  'M m',  'M m',  'мова',    'мова',     'mova',    'mova'],
  ['Н н', '/n/',  'N n',  'N n',  'неба',    'неба',     'nieba',   'nieba'],
  ['О о', '/ɔ/',  'O o',  'O o',  'вока',    'вока',     'voka',    'voka'],
  ['П п', '/p/',  'P p',  'P p',  'піць',    'піць',     'pić',     'pić'],
  ['Р р', '/r/',  'R r',  'R r',  'рака',    'рака',     'raka',    'raka'],
  ['С с', '/s/',  'S s',  'S s',  'слова',   'слова',    'slova',   'slova'],
  ['Т т', '/t/',  'T t',  'T t',  'час',     'час',      'čas',     'čas'],
  ['У у', '/u/',  'U u',  'U u',  'думаць',  'думаць',   'dumać',   'dumać'],
  ['Ў ў', '/w/',  'Ŭ ŭ',  'Ŭ ŭ',  'ноўт',   'ноўт',     'noŭt',    'noŭt'],
  ['Ф ф', '/f/',  'F f',  'F f',  'форма',   'форма',    'forma',   'forma'],
  ['Х х', '/x/',  'Ch ch','Ch ch','хлеб',    'хлеб',     'chleb',   'chleb'],
  ['Ц ц', '/ts/', 'C c',  'C c',  'цэнтр',  'цэнтр',    'centr',   'centr'],
  ['Ч ч', '/tʃ/', 'Č č',  'Č č',  'чалавек','чалавек',  'čalaviek','čalaviek'],
  ['Ш ш', '/ʃ/',  'Š š',  'Š š',  'школа',  'школа',    'škola',   'škola'],
  ['Ы ы', '/ɨ/',  'Y y',  'Y y',  'рыба',    'рыба',     'ryba',    'ryba'],
  ['Ь ь', '—',   '\'',   'diacr.','моль',   'моль',     'mol\'',   'mol\''],
  ['Э э', '/ɛ/',  'È è',  'È è',  'эпас',    'эпас',     'epas',    'epas'],
  ['Ю ю', '/ju/', 'Ju/iu','Ju/iu','юнак',    'юнак',     'junak',   'junak'],
  ['Я я', '/ja/', 'Ja/ia','Ja/ia','яблык',   'яблык',    'jabłyk',  'jabłyk'],
];

const ALPHABET = {
  title: { cn: 'Алфавіт і фанетыка', ct: 'Альфабэт і фанэтыка', ln: 'Alfavit i fanetyka', lt: 'Alfabet i fanetyka' },
  subtitle: 'Alphabet & Phonology',
  intro: `Belarusian is written in a <strong>Cyrillic alphabet of 32 letters</strong>.
    The language also has an established <strong>Latin script</strong> called <em>Łacinka</em>, used in certain literary and diaspora contexts.
    Two main orthographic traditions coexist: <strong>Narkamaŭka</strong> (the post-1933 official standard) and
    <strong>Taraškievica</strong> (the classical pre-reform standard).
    The key phonological feature of Belarusian is <em>akanne</em> — unstressed /o/ is pronounced and written as /a/.`,
  noteNark: `<strong>Narkamaŭka (Наркамаўка)</strong> is the official state standard, codified in 1933 and revised in 1959 and 2008. It reflects akanne strictly in spelling. The soft sign <em>ь</em> appears in fewer environments than in the classical standard.`,
  noteTarak: `<strong>Taraškievica (Тарашкевіца)</strong> is the pre-1933 classical orthography, named after grammarian Branisłaŭ Taraška. It uses the soft sign <em>ь</em> (or diacritics in Łacinka: <em>ś, ź, ć, ń</em>) more extensively before certain consonant clusters.`,
  tableCaption: { cn: 'Беларускі алфавіт', ct: 'Беларускі альфабэт', ln: 'Bielaruski alfavit', lt: 'Bielaruski alfabet' },
};

/* ── Noun declension ──────────────────────────────────────────────────── */

const CASE_NAMES = {
  cn: ['Назоўны', 'Родны', 'Давальны', 'Вінавальны', 'Творны', 'Месны', 'Клічны'],
  ct: ['Назоўны', 'Родны', 'Давальны', 'Вінавальны', 'Творны', 'Месны', 'Клічны'],
  ln: ['Nazouny', 'Rodny', 'Davalny', 'Vinavalny', 'Tvorny', 'Miesny', 'Kličny'],
  lt: ['Nazouny', 'Rodny', 'Davalny', 'Vinavalny', 'Tvorny', 'Miesny', 'Kličny'],
};

const CASE_EN = ['Nominative', 'Genitive', 'Dative', 'Accusative', 'Instrumental', 'Locative', 'Vocative'];

/* forms[ortho] = array of [sg, pl] per case */
const NOUN_MASC = {
  lemma:  { cn: 'стол', ct: 'стол', ln: 'stol', lt: 'stol' },
  gloss:  'table — masculine, hard stem',
  note:   { cn: 'Цвёрдая аснова, мужчынскі род', ct: 'Цвёрдая аснова, мужчынскі род', ln: 'Hard stem, masculine', lt: 'Hard stem, masculine' },
  forms: {
    cn: [['стол','сталы'],['стала','сталоў'],['сталу','сталам'],['стол','сталы'],['сталом','сталамі'],['стале','сталах'],['стале','сталы']],
    ct: [['стол','сталы'],['стала','сталоў'],['сталу','сталам'],['стол','сталы'],['сталом','сталамі'],['стале','сталах'],['стале','сталы']],
    ln: [['stol','stały'],['stała','stałoŭ'],['stału','stałam'],['stol','stały'],['stałom','stałami'],['stale','stałach'],['stale','stały']],
    lt: [['stol','stały'],['stała','stałoŭ'],['stału','stałam'],['stol','stały'],['stałom','stałami'],['stale','stałach'],['stale','stały']],
  }
};

const NOUN_FEM = {
  lemma:  { cn: 'кніга', ct: 'кніга', ln: 'kniha', lt: 'kniha' },
  gloss:  'book — feminine, hard stem',
  note:   { cn: 'Цвёрдая аснова, жаночы род', ct: 'Цвёрдая аснова, жаночы род', ln: 'Hard stem, feminine', lt: 'Hard stem, feminine' },
  forms: {
    cn: [['кніга','кнігі'],['кнігі','кніг'],['кнізе','кнігам'],['кнігу','кнігі'],['кнігай','кнігамі'],['кнізе','кнігах'],['кніга','кнігі']],
    ct: [['кніга','кнігі'],['кнігі','кніг'],['кнізе','кнігам'],['кнігу','кнігі'],['кнігай','кнігамі'],['кнізе','кнігах'],['кніга','кнігі']],
    ln: [['kniha','knihi'],['knihi','knih'],['knize','kniham'],['knihu','knihi'],['knihaj','knihami'],['knize','knihach'],['kniha','knihi']],
    lt: [['kniha','knihi'],['knihi','knih'],['knize','kniham'],['knihu','knihi'],['knihaj','knihami'],['knize','knihach'],['kniha','knihi']],
  }
};

const NOUN_NEUT = {
  lemma:  { cn: 'слова', ct: 'слова', ln: 'slova', lt: 'slova' },
  gloss:  'word — neuter',
  note:   { cn: 'Ніякі род', ct: 'Ніякі род', ln: 'Neuter', lt: 'Neuter' },
  forms: {
    cn: [['слова','словы'],['слова','слоў'],['слову','словам'],['слова','словы'],['словам','словамі'],['слове','словах'],['слова','словы']],
    ct: [['слова','словы'],['слова','слоў'],['слову','словам'],['слова','словы'],['словам','словамі'],['слове','словах'],['слова','словы']],
    ln: [['slova','słovy'],['slova','słoŭ'],['slovu','słovam'],['slova','słovy'],['słovam','słovami'],['słovie','słovach'],['slova','słovy']],
    lt: [['slova','słovy'],['slova','słoŭ'],['slovu','słovam'],['slova','słovy'],['słovam','słovami'],['słovie','słovach'],['slova','słovy']],
  }
};

const NOUNS = {
  title: { cn: 'Склонаванне назоўнікаў', ct: 'Скланеньне назоўнікаў', ln: 'Skłanavannе nazounikaŭ', lt: 'Skłanennie nazounikaŭ' },
  subtitle: 'Noun Declension',
  intro: `Belarusian nouns are declined for <strong>7 cases</strong>: Nominative, Genitive, Dative, Accusative, Instrumental, Locative, and Vocative.
    Nouns have three <strong>genders</strong> (masculine, feminine, neuter) and two <strong>numbers</strong> (singular, plural).
    Hard and soft stem variants exist for each gender. The tables below show the three core paradigms.`,
  sg_label: { cn: 'Адз. лік', ct: 'Адз. лік', ln: 'Адз. lik', lt: 'Адз. lik' },
  pl_label: { cn: 'Мн. лік',  ct: 'Мн. лік',  ln: 'Mn. lik',  lt: 'Mn. lik'  },
};

/* ── Verb conjugation ─────────────────────────────────────────────────── */

const PERSON_LABELS = {
  cn: ['я (1sg)', 'ты (2sg)', 'ён/яна (3sg)', 'мы (1pl)', 'вы (2pl)', 'яны (3pl)'],
  ct: ['я (1sg)', 'ты (2sg)', 'ён/яна (3sg)', 'мы (1pl)', 'вы (2pl)', 'яны (3pl)'],
  ln: ['ja (1sg)', 'ty (2sg)', 'jon/jana (3sg)', 'my (1pl)', 'vy (2pl)', 'jany (3pl)'],
  lt: ['ja (1sg)', 'ty (2sg)', 'jon/jana (3sg)', 'my (1pl)', 'vy (2pl)', 'jany (3pl)'],
};

const PAST_LABELS = {
  cn: ['м. р. (m.)', 'ж. р. (f.)', 'н. р. (n.)', 'мн. лік (pl.)'],
  ct: ['м. р. (m.)', 'ж. р. (f.)', 'н. р. (n.)', 'мн. лік (pl.)'],
  ln: ['m. r. (m.)', 'ž. r. (f.)', 'n. r. (n.)', 'mn. lik (pl.)'],
  lt: ['m. r. (m.)', 'ž. r. (f.)', 'n. r. (n.)', 'mn. lik (pl.)'],
};

const VERB_CONJ1 = {
  lemma:    { cn: 'чытаць', ct: 'чытаць', ln: 'čytać', lt: 'čytać' },
  gloss:    'to read — 1st conjugation',
  pres: {
    cn: ['чытаю','чытаеш','чытае','чытаем','чытаеце','чытаюць'],
    ct: ['чытаю','чытаеш','чытае','чытаем','чытаеце','чытаюць'],
    ln: ['čytaju','čytaješ','čytaje','čytajem','čytajecie','čytajuć'],
    lt: ['čytaju','čytaješ','čytaje','čytajem','čytajecie','čytajuć'],
  },
  past: {
    cn: ['чытаў','чытала','чытала','чыталі'],
    ct: ['чытаў','чытала','чытала','чыталі'],
    ln: ['čytaŭ','čytała','čytało','čytali'],
    lt: ['čytaŭ','čytała','čytało','čytali'],
  },
};

const VERB_CONJ2 = {
  lemma:    { cn: 'рабіць', ct: 'рабіць', ln: 'rabić', lt: 'rabić' },
  gloss:    'to do / make — 2nd conjugation',
  pres: {
    cn: ['раблю','робіш','робіць','робім','робіце','робяць'],
    ct: ['раблю','робіш','робіць','робім','робіце','робяць'],
    ln: ['rabliu','robiš','robić','robim','robice','robiac'],
    lt: ['rabliu','robiš','robić','robim','robice','robiac'],
  },
  past: {
    cn: ['рабіў','рабіла','рабіла','рабілі'],
    ct: ['рабіў','рабіла','рабіла','рабілі'],
    ln: ['rabiŭ','rabiła','rabiło','rabili'],
    lt: ['rabiŭ','rabiła','rabiło','rabili'],
  },
};

const VERBS = {
  title: { cn: 'Спражэнне дзеясловаў', ct: 'Спражэньне дзеясловаў', ln: 'Spražennе dziajasłoŭ', lt: 'Spražennе dziajasłoŭ' },
  subtitle: 'Verb Conjugation',
  intro: `Belarusian verbs conjugate for <strong>person</strong> (1st, 2nd, 3rd) and <strong>number</strong> (singular, plural).
    There are two conjugation classes. The <strong>past tense</strong> agrees with the subject in gender and number but not person.
    Verbs have a grammatical <strong>aspect</strong> (imperfective / perfective); the tables below show imperfective present forms.`,
  pres_head: { cn: 'Цяперашні час', ct: 'Цяперашні час', ln: 'Ciapierašni čas', lt: 'Ciapierašni čas' },
  past_head: { cn: 'Прошлы час', ct: 'Прошлы час', ln: 'Prošły čas', lt: 'Prošły čas' },
};

/* ════════════════════════════════════════════════════════════════════════
   DICTIONARY — 30 entries
   Each entry: { id, pos, en, variants:{cn,ct,ln,lt}, example:{cn,ct,ln,lt}, trans }
   ════════════════════════════════════════════════════════════════════════ */

const DICTIONARY = [
  {
    id: 1,
    pos: 'noun f.',
    en: 'language; tongue; speech',
    variants: { cn:'мова', ct:'мова', ln:'mova', lt:'mova' },
    example:  { cn:'Беларуская мова прыгожая.',    ct:'Беларуская мова прыгожая.',    ln:'Bielaruskaja mova pryhožaja.',    lt:'Bielaruskaja mova pryhožaja.' },
    trans: 'The Belarusian language is beautiful.'
  },
  {
    id: 2,
    pos: 'noun f.',
    en: 'book',
    variants: { cn:'кніга', ct:'кніга', ln:'kniha', lt:'kniha' },
    example:  { cn:'Я чытаю цікавую кнігу.',  ct:'Я чытаю цікавую кнігу.',  ln:'Ja čytaju cikavuju knihu.',  lt:'Ja čytaju cikavuju knihu.' },
    trans: 'I am reading an interesting book.'
  },
  {
    id: 3,
    pos: 'noun m.',
    en: 'house; home; building',
    variants: { cn:'дом', ct:'дом', ln:'dom', lt:'dom' },
    example:  { cn:'Мой дом вялікі і цёплы.',  ct:'Мой дом вялікі і цёплы.',  ln:'Moj dom vialiki i ciopły.',  lt:'Moj dom vialiki i ciopły.' },
    trans: 'My house is large and warm.'
  },
  {
    id: 4,
    pos: 'noun f.',
    en: 'water',
    variants: { cn:'вада', ct:'вада', ln:'vada', lt:'vada' },
    example:  { cn:'Чыстая вада вельмі важная.',  ct:'Чыстая вада вельмі важная.',  ln:'Čystaja vada vielmi važnaja.',  lt:'Čystaja vada vielmi važnaja.' },
    trans: 'Clean water is very important.'
  },
  {
    id: 5,
    pos: 'noun m.',
    en: 'bread; grain; livelihood',
    variants: { cn:'хлеб', ct:'хлеб', ln:'chleb', lt:'chleb' },
    example:  { cn:'Свежы хлеб пахне добра.',  ct:'Свежы хлеб пахне добра.',  ln:'Svieži chleb pachnie dobra.',  lt:'Svieži chleb pachnie dobra.' },
    trans: 'Fresh bread smells good.'
  },
  {
    id: 6,
    pos: 'noun m.',
    en: 'time; hour; period',
    variants: { cn:'час', ct:'час', ln:'čas', lt:'čas' },
    example:  { cn:'У нас мала часу.',  ct:'У нас мала часу.',  ln:'U nas mała času.',  lt:'U nas mała času.' },
    trans: 'We have little time.'
  },
  {
    id: 7,
    pos: 'noun m.',
    en: 'day; daytime',
    variants: { cn:'дзень', ct:'дзень', ln:'dzień', lt:'dzień' },
    example:  { cn:'Добры дзень!',  ct:'Добры дзень!',  ln:'Dobry dzień!',  lt:'Dobry dzień!' },
    trans: '"Good day!" — standard greeting.'
  },
  {
    id: 8,
    pos: 'noun f.',
    en: 'night; nighttime',
    variants: { cn:'ноч', ct:'ноч', ln:'noč', lt:'noč' },
    example:  { cn:'Ноч была цёмная і ціхая.',  ct:'Ноч была цёмная і ціхая.',  ln:'Noč była ciomna i cichaja.',  lt:'Noč była ciomna i cichaja.' },
    trans: 'The night was dark and quiet.'
  },
  {
    id: 9,
    pos: 'noun f.',
    en: 'earth; land; ground; soil',
    variants: { cn:'зямля', ct:'зямля', ln:'ziamlia', lt:'ziamlia' },
    example:  { cn:'Зямля круглая.',  ct:'Зямля круглая.',  ln:'Ziamlia kruhłaja.',  lt:'Ziamlia kruhłaja.' },
    trans: 'The earth is round.'
  },
  {
    id: 10,
    pos: 'noun n.',
    en: 'sky; heaven',
    variants: { cn:'неба', ct:'неба', ln:'nieba', lt:'nieba' },
    example:  { cn:'Неба сёння блакітнае.',  ct:'Неба сёньня блакітнае.',  ln:'Nieba sionja blakitnaje.',  lt:'Nieba sionnia blakitnaje.' },
    trans: 'The sky is blue today.'
  },
  {
    id: 11,
    pos: 'noun n.',
    en: 'sun',
    variants: { cn:'сонца', ct:'сонца', ln:'sonca', lt:'sonca' },
    example:  { cn:'Сонца свеціць ярка.',  ct:'Сонца сьвеціць ярка.',  ln:'Sonca sviecić jarka.',  lt:'Sonca śviecić jarka.' },
    trans: 'The sun shines brightly.'
  },
  {
    id: 12,
    pos: 'noun m.',
    en: 'wind; breeze',
    variants: { cn:'вецер', ct:'вецер', ln:'viecer', lt:'viecer' },
    example:  { cn:'Дзьме моцны вецер.',  ct:'Дзьме моцны вецер.',  ln:'Dzmie mocny viecer.',  lt:'Dzmie mocny viecer.' },
    trans: 'A strong wind is blowing.'
  },
  {
    id: 13,
    pos: 'noun m.',
    en: 'fire; flame; light',
    variants: { cn:"агонь", ct:"агонь", ln:"ahon'", lt:"ahon'" },
    example:  { cn:'Агонь грэе і асвятляе.',  ct:'Агонь грэе і асьвятляе.',  ln:"Ahon' hreie i asviatłaje.",  lt:"Ahon' hreie i aśviatłaje." },
    trans: 'Fire warms and illuminates.'
  },
  {
    id: 14,
    pos: 'noun m.',
    en: 'world; light; universe',
    variants: { cn:'свет', ct:'сьвет', ln:'sviet', lt:'śviet' },
    example:  { cn:'Гэты свет прыгожы.',  ct:'Гэты сьвет прыгожы.',  ln:'Hety sviet pryhožy.',  lt:'Hety śviet pryhožy.' },
    trans: 'This world is beautiful.',
    diff: true
  },
  {
    id: 15,
    pos: 'noun m.',
    en: 'snow',
    variants: { cn:'снег', ct:'сьнег', ln:'snieg', lt:'śnieg' },
    example:  { cn:'Белы снег пакрыў зямлю.',  ct:'Белы сьнег пакрыў зямлю.',  ln:'Biely snieg pakryŭ ziаmliu.',  lt:'Biely śnieg pakryŭ ziаmliu.' },
    trans: 'White snow covered the earth.',
    diff: true
  },
  {
    id: 16,
    pos: 'noun f.',
    en: 'death',
    variants: { cn:'смерць', ct:'сьмерць', ln:'smierć', lt:'śmierć' },
    example:  { cn:'Смерць — гэта канец жыцця.',  ct:'Сьмерць — гэта канец жыцьця.',  ln:'Smierć — heta kaniec žyccia.',  lt:'Śmierć — heta kaniec žyćcia.' },
    trans: 'Death is the end of life.',
    diff: true
  },
  {
    id: 17,
    pos: 'noun m.',
    en: 'person; human being; man',
    variants: { cn:'чалавек', ct:'чалавек', ln:'čalaviek', lt:'čalaviek' },
    example:  { cn:'Кожны чалавек мае правы.',  ct:'Кожны чалавек мае правы.',  ln:'Každy čalaviek maje pravy.',  lt:'Každy čalaviek maje pravy.' },
    trans: 'Every person has rights.'
  },
  {
    id: 18,
    pos: 'noun f.',
    en: 'woman; adult female',
    variants: { cn:'жанчына', ct:'жанчына', ln:'žančyna', lt:'žančyna' },
    example:  { cn:'Жанчына чытае кнігу.',  ct:'Жанчына чытае кнігу.',  ln:'Žančyna čytaje knihu.',  lt:'Žančyna čytaje knihu.' },
    trans: 'The woman is reading a book.'
  },
  {
    id: 19,
    pos: 'noun n.',
    en: 'child; infant',
    variants: { cn:'дзіця', ct:'дзіця', ln:'dzicia', lt:'dzicia' },
    example:  { cn:'Маленькае дзіця спіць.',  ct:'Маленькае дзіця спіць.',  ln:'Malenkaje dzicia spić.',  lt:'Malenkaje dzicia spić.' },
    trans: 'The small child is sleeping.'
  },
  {
    id: 20,
    pos: 'noun f.',
    en: 'family; household',
    variants: { cn:"сям'я", ct:"сям'я", ln:"siam'ja", lt:"siam'ja" },
    example:  { cn:"Мая сям'я жыве ў Мінску.",  ct:"Мая сям'я жыве ў Менску.",  ln:"Maja siam'ja žyvie ŭ Minsku.",  lt:"Maja siam'ja žyvie ŭ Miensku." },
    trans: 'My family lives in Minsk.'
  },
  {
    id: 21,
    pos: 'verb impf.',
    en: 'to go; to walk; to come',
    variants: { cn:'ісці', ct:'ісьці', ln:'isci', lt:'iści' },
    example:  { cn:'Я іду ў горад.',  ct:'Я іду ў горад.',  ln:'Ja idu ŭ horad.',  lt:'Ja idu ŭ horad.' },
    trans: 'I am going to the city.',
    diff: true
  },
  {
    id: 22,
    pos: 'verb impf.',
    en: 'to live; to reside; to exist',
    variants: { cn:'жыць', ct:'жыць', ln:'žyć', lt:'žyć' },
    example:  { cn:'Я жыву ў Беларусі.',  ct:'Я жыву ў Беларусі.',  ln:'Ja žyvu ŭ Bielarusi.',  lt:'Ja žyvu ŭ Bielarusi.' },
    trans: 'I live in Belarus.'
  },
  {
    id: 23,
    pos: 'verb impf.',
    en: 'to know; to be aware of',
    variants: { cn:'ведаць', ct:'ведаць', ln:'viedać', lt:'viedać' },
    example:  { cn:'Я ведаю беларускую мову.',  ct:'Я ведаю беларускую мову.',  ln:'Ja viedaju bielaruskuju movu.',  lt:'Ja viedaju bielaruskuju movu.' },
    trans: 'I know the Belarusian language.'
  },
  {
    id: 24,
    pos: 'verb impf.',
    en: 'to speak; to talk; to say',
    variants: { cn:'гаварыць', ct:'гаварыць', ln:'havaryć', lt:'havaryć' },
    example:  { cn:'Ён гаворыць па-беларуску.',  ct:'Ён гаворыць па-беларуску.',  ln:'Jon havoryć pa-bielarusku.',  lt:'Jon havoryć pa-bielarusku.' },
    trans: 'He speaks Belarusian.'
  },
  {
    id: 25,
    pos: 'verb impf.',
    en: 'to read',
    variants: { cn:'чытаць', ct:'чытаць', ln:'čytać', lt:'čytać' },
    example:  { cn:'Яна чытае газету.',  ct:'Яна чытае газэту.',  ln:'Jana čytaje hazetu.',  lt:'Jana čytaje hazetu.' },
    trans: 'She is reading a newspaper.'
  },
  {
    id: 26,
    pos: 'verb impf.',
    en: 'to see; to perceive visually',
    variants: { cn:'бачыць', ct:'бачыць', ln:'bačyć', lt:'bačyć' },
    example:  { cn:'Я бачу прыгожы пейзаж.',  ct:'Я бачу прыгожы пейзаж.',  ln:'Ja bačу pryhožy piejzaž.',  lt:'Ja bačу pryhožy piejzaž.' },
    trans: 'I see a beautiful landscape.'
  },
  {
    id: 27,
    pos: 'verb impf.',
    en: 'to love; to like; to enjoy',
    variants: { cn:'любіць', ct:'любіць', ln:'liubić', lt:'liubić' },
    example:  { cn:'Я люблю беларускую музыку.',  ct:'Я люблю беларускую музыку.',  ln:'Ja liubliu bielaruskuju muzyku.',  lt:'Ja liubliu bielaruskuju muzyku.' },
    trans: 'I love Belarusian music.'
  },
  {
    id: 28,
    pos: 'verb impf.',
    en: 'to do; to make; to perform',
    variants: { cn:'рабіць', ct:'рабіць', ln:'rabić', lt:'rabić' },
    example:  { cn:'Ён робіць сваю работу.',  ct:'Ён робіць сваю работу.',  ln:'Jon robić svaju rabotu.',  lt:'Jon robić svaju rabotu.' },
    trans: 'He is doing his work.'
  },
  {
    id: 29,
    pos: 'verb impf.',
    en: 'to think; to consider; to believe',
    variants: { cn:'думаць', ct:'думаць', ln:'dumać', lt:'dumać' },
    example:  { cn:'Я думаю аб гэтым.',  ct:'Я думаю аб гэтым.',  ln:'Ja dumaju ab hetym.',  lt:'Ja dumaju ab hetym.' },
    trans: 'I am thinking about this.'
  },
  {
    id: 30,
    pos: 'noun n.',
    en: 'word; utterance',
    variants: { cn:'слова', ct:'слова', ln:'slova', lt:'slova' },
    example:  { cn:'Гэта прыгожае слова.',  ct:'Гэта прыгожае слова.',  ln:'Heta pryhožaje slova.',  lt:'Heta pryhožaje slova.' },
    trans: 'This is a beautiful word.'
  },

  /* ── Body parts ── */
  {
    id: 31,
    pos: 'noun f.',
    en: 'head',
    variants: { cn:'галава', ct:'галава', ln:'halava', lt:'halava' },
    example:  { cn:'Мая галава баліць.', ct:'Мая галава баліць.', ln:'Maja halava baliać.', lt:'Maja halava baliać.' },
    trans: 'My head aches.'
  },
  {
    id: 32,
    pos: 'noun f.',
    en: 'hand; arm',
    variants: { cn:'рука', ct:'рука', ln:'ruka', lt:'ruka' },
    example:  { cn:'Дай мне руку.', ct:'Дай мне руку.', ln:'Daj mnie ruku.', lt:'Daj mnie ruku.' },
    trans: 'Give me your hand.'
  },
  {
    id: 33,
    pos: 'noun f.',
    en: 'leg; foot',
    variants: { cn:'нага', ct:'нага', ln:'naha', lt:'naha' },
    example:  { cn:'Ён зламаў нагу.', ct:'Ён зламаў нагу.', ln:'Jon złamaŭ nahu.', lt:'Jon złamaŭ nahu.' },
    trans: 'He broke his leg.'
  },
  {
    id: 34,
    pos: 'noun n.',
    en: 'eye',
    variants: { cn:'вока', ct:'вока', ln:'voka', lt:'voka' },
    example:  { cn:'У яе блакітныя вочы.', ct:'У яе блакітныя вочы.', ln:'U jaje blakitnyja vočy.', lt:'U jaje blakitnyja vočy.' },
    trans: 'She has blue eyes.'
  },
  {
    id: 35,
    pos: 'noun n.',
    en: 'ear',
    variants: { cn:'вуха', ct:'вуха', ln:'vucha', lt:'vucha' },
    example:  { cn:'У яе добры слых.', ct:'У яе добры слых.', ln:'U jaje dobry słych.', lt:'U jaje dobry słych.' },
    trans: 'She has good hearing.'
  },
  {
    id: 36,
    pos: 'noun m.',
    en: 'nose',
    variants: { cn:'нос', ct:'нос', ln:'nos', lt:'nos' },
    example:  { cn:'У яго вялікі нос.', ct:'У яго вялікі нос.', ln:'U jaho vialiki nos.', lt:'U jaho vialiki nos.' },
    trans: 'He has a big nose.'
  },
  {
    id: 37,
    pos: 'noun m.',
    en: 'mouth',
    variants: { cn:'рот', ct:'рот', ln:'rot', lt:'rot' },
    example:  { cn:'Закрый рот.', ct:'Закрый рот.', ln:'Zakryj rot.', lt:'Zakryj rot.' },
    trans: 'Close your mouth.'
  },
  {
    id: 38,
    pos: 'noun n.',
    en: 'heart',
    variants: { cn:'сэрца', ct:'сэрца', ln:'serca', lt:'serca' },
    example:  { cn:'Сэрца б\'ецца хутка.', ct:'Сэрца б\'ецца хутка.', ln:'Serca bjecca chutka.', lt:'Serca bjecca chutka.' },
    trans: 'The heart beats fast.'
  },
  {
    id: 39,
    pos: 'noun m.',
    en: 'tooth',
    variants: { cn:'зуб', ct:'зуб', ln:'zub', lt:'zub' },
    example:  { cn:'У мяне баліць зуб.', ct:'У мяне баліць зуб.', ln:'U miane baliać zub.', lt:'U miane baliać zub.' },
    trans: 'I have a toothache.'
  },
  {
    id: 40,
    pos: 'noun f.',
    en: 'back (of body)',
    variants: { cn:'спіна', ct:'спіна', ln:'spina', lt:'spina' },
    example:  { cn:'У яго баліць спіна.', ct:'У яго баліць спіна.', ln:'U jaho baliać spina.', lt:'U jaho baliać spina.' },
    trans: 'He has back pain.'
  },

  /* ── Family ── */
  {
    id: 41,
    pos: 'noun f.',
    en: 'mother',
    variants: { cn:'маці', ct:'маці', ln:'maci', lt:'maci' },
    example:  { cn:'Мая маці — добрая жанчына.', ct:'Мая маці — добрая жанчына.', ln:'Maja maci — dobraja žančyna.', lt:'Maja maci — dobraja žančyna.' },
    trans: 'My mother is a kind woman.'
  },
  {
    id: 42,
    pos: 'noun m.',
    en: 'father',
    variants: { cn:"бацька", ct:"бацька", ln:"bac'ka", lt:"bac'ka" },
    example:  { cn:'Яго бацька — настаўнік.', ct:'Яго бацька — настаўнік.', ln:"Jaho bac'ka — nastaŭnik.", lt:"Jaho bac'ka — nastaŭnik." },
    trans: 'His father is a teacher.'
  },
  {
    id: 43,
    pos: 'noun m.',
    en: 'son',
    variants: { cn:'сын', ct:'сын', ln:'syn', lt:'syn' },
    example:  { cn:'Яго сын вучыцца ў школе.', ct:'Яго сын вучыцца ў школе.', ln:'Jaho syn vučycca ŭ škole.', lt:'Jaho syn vučycca ŭ škole.' },
    trans: 'His son studies at school.'
  },
  {
    id: 44,
    pos: 'noun f.',
    en: 'daughter',
    variants: { cn:'дачка', ct:'дачка', ln:'dačka', lt:'dačka' },
    example:  { cn:'Яе дачка прыгожая.', ct:'Яе дачка прыгожая.', ln:'Jaje dačka pryhožaja.', lt:'Jaje dačka pryhožaja.' },
    trans: 'Her daughter is beautiful.'
  },
  {
    id: 45,
    pos: 'noun m.',
    en: 'brother',
    variants: { cn:'брат', ct:'брат', ln:'brat', lt:'brat' },
    example:  { cn:'Мой брат жыве ў Мінску.', ct:'Мой брат жыве ў Менску.', ln:'Moj brat žyvie ŭ Minsku.', lt:'Moj brat žyvie ŭ Miensku.' },
    trans: 'My brother lives in Minsk.'
  },
  {
    id: 46,
    pos: 'noun f.',
    en: 'sister',
    variants: { cn:'сястра', ct:'сястра', ln:'siastra', lt:'siastra' },
    example:  { cn:'Мая сястра піша ліст.', ct:'Мая сястра піша ліст.', ln:'Maja siastra piša list.', lt:'Maja siastra piša list.' },
    trans: 'My sister writes a letter.'
  },

  /* ── Nature ── */
  {
    id: 47,
    pos: 'noun f.',
    en: 'river',
    variants: { cn:'рака', ct:'рака', ln:'raka', lt:'raka' },
    example:  { cn:'Рака цячэ праз горад.', ct:'Рака цячэ праз горад.', ln:'Raka ciacie praz horad.', lt:'Raka ciacie praz horad.' },
    trans: 'The river flows through the city.'
  },
  {
    id: 48,
    pos: 'noun m.',
    en: 'forest; woods',
    variants: { cn:'лес', ct:'лес', ln:'lies', lt:'lies' },
    example:  { cn:'Лес поўны птушак.', ct:'Лес поўны птушак.', ln:'Lies poŭny ptušak.', lt:'Lies poŭny ptušak.' },
    trans: 'The forest is full of birds.'
  },
  {
    id: 49,
    pos: 'noun f.',
    en: 'mountain; hill',
    variants: { cn:'гара', ct:'гара', ln:'hara', lt:'hara' },
    example:  { cn:'Гара вельмі высокая.', ct:'Гара вельмі высокая.', ln:'Hara vielmi vysokaja.', lt:'Hara vielmi vysokaja.' },
    trans: 'The mountain is very high.'
  },
  {
    id: 50,
    pos: 'noun n.',
    en: 'sea; ocean',
    variants: { cn:'мора', ct:'мора', ln:'mora', lt:'mora' },
    example:  { cn:'Мора спакойнае сёння.', ct:'Мора спакойнае сёньня.', ln:'Mora spakojna sionja.', lt:'Mora spakojna sionnia.' },
    trans: 'The sea is calm today.'
  },
  {
    id: 51,
    pos: 'noun f.',
    en: 'fish',
    variants: { cn:'рыба', ct:'рыба', ln:'ryba', lt:'ryba' },
    example:  { cn:'Рыба плыве ў рацэ.', ct:'Рыба плыве ў рацэ.', ln:'Ryba płyvie ŭ race.', lt:'Ryba płyvie ŭ race.' },
    trans: 'The fish swims in the river.'
  },
  {
    id: 52,
    pos: 'noun f.',
    en: 'bird',
    variants: { cn:'птушка', ct:'птушка', ln:'ptuška', lt:'ptuška' },
    example:  { cn:'Птушка спявае.', ct:'Птушка спявае.', ln:'Ptuška spivaje.', lt:'Ptuška spivaje.' },
    trans: 'The bird is singing.'
  },
  {
    id: 53,
    pos: 'noun n.',
    en: 'tree',
    variants: { cn:'дрэва', ct:'дрэва', ln:'dreva', lt:'dreva' },
    example:  { cn:'Высокае дрэва расце ля дома.', ct:'Высокае дрэва расце ля дома.', ln:'Vysokaje dreva rascie lia doma.', lt:'Vysokaje dreva rascie lia doma.' },
    trans: 'A tall tree grows by the house.'
  },
  {
    id: 54,
    pos: 'noun f.',
    en: 'flower',
    variants: { cn:'кветка', ct:'кветка', ln:'kvietka', lt:'kvietka' },
    example:  { cn:'Прыгожая кветка расце ў садзе.', ct:'Прыгожая кветка расце ў садзе.', ln:'Pryhožaja kvietka rascie ŭ sadzie.', lt:'Pryhožaja kvietka rascie ŭ sadzie.' },
    trans: 'A beautiful flower grows in the garden.'
  },
  {
    id: 55,
    pos: 'noun f.',
    en: 'grass',
    variants: { cn:'трава', ct:'трава', ln:'trava', lt:'trava' },
    example:  { cn:'Трава зялёная і мяккая.', ct:'Трава зялёная і мяккая.', ln:'Trava zialonaja i miakkaja.', lt:'Trava zialonaja i miakkaja.' },
    trans: 'The grass is green and soft.'
  },
  {
    id: 56,
    pos: 'noun m.',
    en: 'stone; rock',
    variants: { cn:'камень', ct:'камень', ln:'kamień', lt:'kamień' },
    example:  { cn:'Ён падняў камень.', ct:'Ён падняў камень.', ln:'Jon padniaŭ kamień.', lt:'Jon padniaŭ kamień.' },
    trans: 'He picked up a stone.'
  },

  /* ── City & society ── */
  {
    id: 57,
    pos: 'noun m.',
    en: 'city; town',
    variants: { cn:'горад', ct:'горад', ln:'horad', lt:'horad' },
    example:  { cn:'Мінск — вялікі горад.', ct:'Менск — вялікі горад.', ln:'Minsk — vialiki horad.', lt:'Mienск — vialiki horad.' },
    trans: 'Minsk is a large city.'
  },
  {
    id: 58,
    pos: 'noun f.',
    en: 'country; land',
    variants: { cn:'краіна', ct:'краіна', ln:'kraina', lt:'kraina' },
    example:  { cn:'Беларусь — прыгожая краіна.', ct:'Беларусь — прыгожая краіна.', ln:'Bielaruś — pryhožaja kraina.', lt:'Bielaruś — pryhožaja kraina.' },
    trans: 'Belarus is a beautiful country.'
  },
  {
    id: 59,
    pos: 'noun f.',
    en: 'street',
    variants: { cn:'вуліца', ct:'вуліца', ln:'vulica', lt:'vulica' },
    example:  { cn:'Мы ідзём па вуліцы.', ct:'Мы ідзём па вуліцы.', ln:'My idzom pa vulicy.', lt:'My idzom pa vulicy.' },
    trans: 'We walk down the street.'
  },
  {
    id: 60,
    pos: 'noun f.',
    en: 'school',
    variants: { cn:'школа', ct:'школа', ln:'škola', lt:'škola' },
    example:  { cn:'Дзеці ідуць у школу.', ct:'Дзеці ідуць у школу.', ln:'Dzieci iduc u školu.', lt:'Dzieci iduc u školu.' },
    trans: 'The children go to school.'
  },
  {
    id: 61,
    pos: 'noun f.',
    en: 'music',
    variants: { cn:'музыка', ct:'музыка', ln:'muzyka', lt:'muzyka' },
    example:  { cn:'Музыка гучыць прыгожа.', ct:'Музыка гучыць прыгожа.', ln:'Muzyka hučyć pryhožа.', lt:'Muzyka hučyć pryhožа.' },
    trans: 'The music sounds beautiful.'
  },
  {
    id: 62,
    pos: 'noun f.',
    en: 'song',
    variants: { cn:'песня', ct:'песьня', ln:'piesnia', lt:'pieśnia' },
    example:  { cn:'Яна спявае прыгожую песню.', ct:'Яна спявае прыгожую песьню.', ln:'Jana spivaje pryhožuju piesniu.', lt:'Jana spivaje pryhožuju pieśniu.' },
    trans: 'She sings a beautiful song.',
    diff: true
  },

  /* ── Abstract nouns ── */
  {
    id: 63,
    pos: 'noun f.',
    en: 'road; way; path',
    variants: { cn:'дарога', ct:'дарога', ln:'daroha', lt:'daroha' },
    example:  { cn:'Дарога доўгая і роўная.', ct:'Дарога доўгая і роўная.', ln:'Daroha doŭhaja i roŭnaja.', lt:'Daroha doŭhaja i roŭnaja.' },
    trans: 'The road is long and flat.'
  },
  {
    id: 64,
    pos: 'noun m.',
    en: 'rain',
    variants: { cn:'дождж', ct:'дождж', ln:'doždž', lt:'doždž' },
    example:  { cn:'Сёння ідзе дождж.', ct:'Сёньня ідзе дождж.', ln:'Sionja idzie doždž.', lt:'Sionnia idzie doždž.' },
    trans: 'It is raining today.'
  },
  {
    id: 65,
    pos: 'noun n.',
    en: 'life',
    variants: { cn:'жыццё', ct:'жыцьцё', ln:'žyccio', lt:'žyćcio' },
    example:  { cn:'Жыццё прыгожае.', ct:'Жыцьцё прыгожае.', ln:'Žyccio pryhožaje.', lt:'Žyćcio pryhožaje.' },
    trans: 'Life is beautiful.',
    diff: true
  },
  {
    id: 66,
    pos: 'noun f.',
    en: 'freedom; liberty',
    variants: { cn:'свабода', ct:'свабода', ln:'svaboda', lt:'svaboda' },
    example:  { cn:'Свабода вельмі важная.', ct:'Свабода вельмі важная.', ln:'Svaboda vielmi važnaja.', lt:'Svaboda vielmi važnaja.' },
    trans: 'Freedom is very important.'
  },
  {
    id: 67,
    pos: 'noun f.',
    en: 'truth',
    variants: { cn:'праўда', ct:'праўда', ln:'praŭda', lt:'praŭda' },
    example:  { cn:'Заўсёды кажы праўду.', ct:'Заўсёды кажы праўду.', ln:'Zaŭsiody kaži praŭdu.', lt:'Zaŭsiody kaži praŭdu.' },
    trans: 'Always tell the truth.'
  },
  {
    id: 68,
    pos: 'noun f.',
    en: 'love',
    variants: { cn:'любоў', ct:'любоў', ln:'liuboŭ', lt:'liuboŭ' },
    example:  { cn:'Любоў — вялікае пачуццё.', ct:'Любоў — вялікае пачуццё.', ln:'Liuboŭ — vialikaje pačuccie.', lt:'Liuboŭ — vialikaje pačuccie.' },
    trans: 'Love is a great feeling.'
  },
  {
    id: 69,
    pos: 'noun m.',
    en: 'peace',
    variants: { cn:'мір', ct:'мір', ln:'mir', lt:'mir' },
    example:  { cn:'Мы хочам міру.', ct:'Мы хочам міру.', ln:'My chočam miru.', lt:'My chočam miru.' },
    trans: 'We want peace.'
  },
  {
    id: 70,
    pos: 'noun m.',
    en: 'people; nation',
    variants: { cn:'народ', ct:'народ', ln:'narod', lt:'narod' },
    example:  { cn:'Беларускі народ мае багатую культуру.', ct:'Беларускі народ мае багатую культуру.', ln:'Bielaruski narod maje bahatuju kulturu.', lt:'Bielaruski narod maje bahatuju kulturu.' },
    trans: 'The Belarusian people have a rich culture.'
  },
  {
    id: 71,
    pos: 'noun f.',
    en: 'history',
    variants: { cn:'гісторыя', ct:'гісторыя', ln:'historija', lt:'historija' },
    example:  { cn:'Гісторыя Беларусі цікавая.', ct:'Гісторыя Беларусі цікавая.', ln:'Historija Bielarusi cikavaja.', lt:'Historija Bielarusi cikavaja.' },
    trans: 'The history of Belarus is interesting.'
  },

  /* ── More verbs ── */
  {
    id: 72,
    pos: 'verb impf.',
    en: 'to eat',
    variants: { cn:'есці', ct:'есьці', ln:'jesci', lt:'jeści' },
    example:  { cn:'Я люблю есці суп.', ct:'Я люблю есьці суп.', ln:'Ja liubliu jesci sup.', lt:'Ja liubliu jeści sup.' },
    trans: 'I love eating soup.',
    diff: true
  },
  {
    id: 73,
    pos: 'verb impf.',
    en: 'to drink',
    variants: { cn:'піць', ct:'піць', ln:'pić', lt:'pić' },
    example:  { cn:'Яна п\'е гарбату.', ct:'Яна п\'е гарбату.', ln:"Jana p'je harbatu.", lt:"Jana p'je harbatu." },
    trans: 'She drinks tea.'
  },
  {
    id: 74,
    pos: 'verb impf.',
    en: 'to sleep',
    variants: { cn:'спаць', ct:'спаць', ln:'spać', lt:'spać' },
    example:  { cn:'Ён спіць восем гадзін.', ct:'Ён спіць восем гадзін.', ln:'Jon spić vosiem hadzin.', lt:'Jon spić vosiem hadzin.' },
    trans: 'He sleeps eight hours.'
  },
  {
    id: 75,
    pos: 'verb impf.',
    en: 'to write',
    variants: { cn:'пісаць', ct:'пісаць', ln:'pisać', lt:'pisać' },
    example:  { cn:'Яна піша ліст.', ct:'Яна піша ліст.', ln:'Jana piša list.', lt:'Jana piša list.' },
    trans: 'She writes a letter.'
  },
  {
    id: 76,
    pos: 'verb impf.',
    en: 'to listen; to hear',
    variants: { cn:'слухаць', ct:'слухаць', ln:'sluchać', lt:'sluchać' },
    example:  { cn:'Я слухаю музыку.', ct:'Я слухаю музыку.', ln:'Ja sluchaju muzyku.', lt:'Ja sluchaju muzyku.' },
    trans: 'I am listening to music.'
  },
  {
    id: 77,
    pos: 'verb impf.',
    en: 'to understand',
    variants: { cn:'разумець', ct:'разумець', ln:'razumieć', lt:'razumieć' },
    example:  { cn:'Я разумею па-беларуску.', ct:'Я разумею па-беларуску.', ln:'Ja razumeju pa-bielarusku.', lt:'Ja razumeju pa-bielarusku.' },
    trans: 'I understand Belarusian.'
  },
  {
    id: 78,
    pos: 'verb impf.',
    en: 'to study; to learn',
    variants: { cn:'вучыцца', ct:'вучыцца', ln:'vučycca', lt:'vučycca' },
    example:  { cn:'Яна вучыцца ва ўніверсітэце.', ct:'Яна вучыцца ва ўніверсітэце.', ln:'Jana vučycca va ŭniversitecie.', lt:'Jana vučycca va ŭniversitecie.' },
    trans: 'She studies at university.'
  },
  {
    id: 79,
    pos: 'verb impf.',
    en: 'to sit',
    variants: { cn:'сядзець', ct:'сядзець', ln:'siadzieć', lt:'siadzieć' },
    example:  { cn:'Ён сядзіць за сталом.', ct:'Ён сядзіць за сталом.', ln:'Jon siadzić za stałom.', lt:'Jon siadzić za stałom.' },
    trans: 'He sits at the table.'
  },
  {
    id: 80,
    pos: 'verb impf.',
    en: 'to stand',
    variants: { cn:'стаяць', ct:'стаяць', ln:'stajać', lt:'stajać' },
    example:  { cn:'Яна стаіць ля акна.', ct:'Яна стаіць ля акна.', ln:'Jana staić lia akna.', lt:'Jana staić lia akna.' },
    trans: 'She stands by the window.'
  },
  {
    id: 81,
    pos: 'verb impf.',
    en: 'to run',
    variants: { cn:'бегчы', ct:'бегчы', ln:'biehčy', lt:'biehčy' },
    example:  { cn:'Ён бяжыць вельмі хутка.', ct:'Ён бяжыць вельмі хутка.', ln:'Jon biažyć vielmi chutka.', lt:'Jon biažyć vielmi chutka.' },
    trans: 'He runs very fast.'
  },
  {
    id: 82,
    pos: 'verb impf.',
    en: 'to play; to go for a walk',
    variants: { cn:'гуляць', ct:'гуляць', ln:'hulać', lt:'hulać' },
    example:  { cn:'Дзеці гуляюць у парку.', ct:'Дзеці гуляюць у парку.', ln:'Dzieci hulajuc u parku.', lt:'Dzieci hulajuc u parku.' },
    trans: 'The children play in the park.'
  },
  {
    id: 83,
    pos: 'verb impf.',
    en: 'to buy; to purchase',
    variants: { cn:'купляць', ct:'купляць', ln:'kuplać', lt:'kuplać' },
    example:  { cn:'Яна купляе кнігі.', ct:'Яна купляе кнігі.', ln:'Jana kuplaie knihi.', lt:'Jana kuplaie knihi.' },
    trans: 'She buys books.'
  },
  {
    id: 84,
    pos: 'verb impf.',
    en: 'to give',
    variants: { cn:'даваць', ct:'даваць', ln:'davać', lt:'davać' },
    example:  { cn:'Ён дае мне кнігу.', ct:'Ён дае мне кнігу.', ln:'Jon daje mnie knihu.', lt:'Jon daje mnie knihu.' },
    trans: 'He gives me a book.'
  },
  {
    id: 85,
    pos: 'verb impf.',
    en: 'to take',
    variants: { cn:'браць', ct:'браць', ln:'brać', lt:'brać' },
    example:  { cn:'Яна бярэ кнігу са стала.', ct:'Яна бярэ кнігу са стала.', ln:'Jana biere knihu sa stała.', lt:'Jana biere knihu sa stała.' },
    trans: 'She takes a book from the table.'
  },
  {
    id: 86,
    pos: 'verb impf.',
    en: 'to come; to arrive',
    variants: { cn:'прыходзіць', ct:'прыходзіць', ln:'prychodzić', lt:'prychodzić' },
    example:  { cn:'Ён прыходзіць дадому позна.', ct:'Ён прыходзіць дадому позна.', ln:'Jon prychodzić dodomu pozna.', lt:'Jon prychodzić dodomu pozna.' },
    trans: 'He comes home late.'
  },
  {
    id: 87,
    pos: 'verb impf.',
    en: 'to say; to tell',
    variants: { cn:'казаць', ct:'казаць', ln:'kazać', lt:'kazać' },
    example:  { cn:'Ён кажа праўду.', ct:'Ён кажа праўду.', ln:'Jon kaža praŭdu.', lt:'Jon kaža praŭdu.' },
    trans: 'He tells the truth.'
  },
  {
    id: 88,
    pos: 'verb impf.',
    en: 'to hear',
    variants: { cn:'чуць', ct:'чуць', ln:'čuć', lt:'čuć' },
    example:  { cn:'Я чую птушак.', ct:'Я чую птушак.', ln:'Ja čuju ptušak.', lt:'Ja čuju ptušak.' },
    trans: 'I hear the birds.'
  },
  {
    id: 89,
    pos: 'verb impf.',
    en: 'to find',
    variants: { cn:'знаходзіць', ct:'знаходзіць', ln:'znachodzić', lt:'znachodzić' },
    example:  { cn:'Яна знаходзіць ключы.', ct:'Яна знаходзіць ключы.', ln:'Jana znachodzić kluča.', lt:'Jana znachodzić kluča.' },
    trans: 'She finds the keys.'
  },

  /* ── Time & seasons ── */
  {
    id: 90,
    pos: 'noun m.',
    en: 'year',
    variants: { cn:'год', ct:'год', ln:'hod', lt:'hod' },
    example:  { cn:'Новы год прыходзіць зімой.', ct:'Новы год прыходзіць зімой.', ln:'Novy hod prychodzić zimoj.', lt:'Novy hod prychodzić zimoj.' },
    trans: 'The New Year comes in winter.'
  },
  {
    id: 91,
    pos: 'noun m.',
    en: 'week',
    variants: { cn:'тыдзень', ct:'тыдзень', ln:'tydzień', lt:'tydzień' },
    example:  { cn:'Тыдзень мае сем дзён.', ct:'Тыдзень мае сем дзён.', ln:'Tydzień maje siem dzion.', lt:'Tydzień maje siem dzion.' },
    trans: 'A week has seven days.'
  },
  {
    id: 92,
    pos: 'noun f.',
    en: 'morning',
    variants: { cn:'раніца', ct:'раніца', ln:'ranica', lt:'ranica' },
    example:  { cn:'Добрая раніца!', ct:'Добрая раніца!', ln:'Dobraja ranica!', lt:'Dobraja ranica!' },
    trans: 'Good morning!'
  },
  {
    id: 93,
    pos: 'noun m.',
    en: 'evening',
    variants: { cn:'вечар', ct:'вечар', ln:'viechar', lt:'viechar' },
    example:  { cn:'Добры вечар!', ct:'Добры вечар!', ln:'Dobry viechar!', lt:'Dobry viechar!' },
    trans: 'Good evening!'
  },
  {
    id: 94,
    pos: 'noun f.',
    en: 'thing; matter; object',
    variants: { cn:'рэч', ct:'рэч', ln:'reč', lt:'reč' },
    example:  { cn:'Гэта важная рэч.', ct:'Гэта важная рэч.', ln:'Heta važnaja reč.', lt:'Heta važnaja reč.' },
    trans: 'This is an important thing.'
  },
  {
    id: 95,
    pos: 'noun n.',
    en: 'name',
    variants: { cn:'імя', ct:'імя', ln:'imja', lt:'imja' },
    example:  { cn:'Яе імя — Ганна.', ct:'Яе імя — Ганна.', ln:'Jaje imja — Hanna.', lt:'Jaje imja — Hanna.' },
    trans: 'Her name is Hanna.'
  },
  {
    id: 96,
    pos: 'noun f.',
    en: 'winter',
    variants: { cn:'зіма', ct:'зіма', ln:'zima', lt:'zima' },
    example:  { cn:'Зіма ў Беларусі халодная.', ct:'Зіма ў Беларусі халодная.', ln:'Zima ŭ Bielarusi chałodnaja.', lt:'Zima ŭ Bielarusi chałodnaja.' },
    trans: 'Winter in Belarus is cold.'
  },
  {
    id: 97,
    pos: 'noun n.',
    en: 'summer',
    variants: { cn:'лета', ct:'лета', ln:'lieta', lt:'lieta' },
    example:  { cn:'Лета — цёплая пара года.', ct:'Лета — цёплая пара года.', ln:'Lieta — ciopłaja para hoda.', lt:'Lieta — ciopłaja para hoda.' },
    trans: 'Summer is a warm time of year.'
  },
  {
    id: 98,
    pos: 'noun f.',
    en: 'spring',
    variants: { cn:'вясна', ct:'вясна', ln:'viasna', lt:'viasna' },
    example:  { cn:'Вясна прыносіць цяпло.', ct:'Вясна прыносіць цяпло.', ln:'Viasna prynościć ciapło.', lt:'Viasna prynościć ciapło.' },
    trans: 'Spring brings warmth.'
  },
  {
    id: 99,
    pos: 'noun f.',
    en: 'autumn; fall',
    variants: { cn:'восень', ct:'восень', ln:'vosień', lt:'vosień' },
    example:  { cn:'Восень вельмі прыгожая.', ct:'Восень вельмі прыгожая.', ln:'Vosień vielmi pryhožaja.', lt:'Vosień vielmi pryhožaja.' },
    trans: 'Autumn is very beautiful.'
  },
  {
    id: 100,
    pos: 'noun m.',
    en: 'sound; noise',
    variants: { cn:'гук', ct:'гук', ln:'huk', lt:'huk' },
    example:  { cn:'Я чую дзіўны гук.', ct:'Я чую дзіўны гук.', ln:'Ja čuju dziuny huk.', lt:'Ja čuju dziuny huk.' },
    trans: 'I hear a strange sound.'
  },
];
