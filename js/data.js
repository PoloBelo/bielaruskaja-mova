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
];
