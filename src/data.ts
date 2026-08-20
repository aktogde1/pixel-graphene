/* ============================ ДАННЫЕ МАГАЗИНА ============================ */

export interface PhoneModel {
  id: string
  name: string
  series: string
  colors: string[]
  storage: string[]
  purchase: number
  markup: number
  display: string
  chip: string
  ram: string
  camera: string
  frontCamera: string
  battery: string
  special?: string
  tagline: string
  gradient: string
  fold?: boolean
  glass?: string
}

export const MODELS: PhoneModel[] = [
  {
    id: 'pixel-10-pro-xl', name: 'Pixel 10 Pro XL', series: '10 Pro XL',
    colors: ['Moonstone', 'Jade', 'Porcelain', 'Obsidian'], storage: ['256GB', '512GB', '1TB'],
    purchase: 80000, markup: 30000,
    display: '6.8" Super Actua LTPO OLED, 1-120 Гц, 3000 нит', chip: 'Google Tensor G5 (3 нм)', ram: '16 GB',
    camera: '50 МП + 48 МП сверхширокая + 48 МП 5x теле', frontCamera: '42 МП, автофокус',
    battery: '5200 мАч, 24+ часов', special: 'Зум до 100x, видео 8K',
    tagline: 'Новая эра приватности.', gradient: 'grad-blue',
  },
  {
    id: 'pixel-10-pro-fold', name: 'Pixel 10 Pro Fold', series: '10 Pro Fold',
    colors: ['Moonstone', 'Jade'], storage: ['256GB', '512GB', '1TB'],
    purchase: 120000, markup: 30000,
    display: '8" внутренний + 6.4" внешний LTPO OLED, 1-120 Гц, 3000 нит', chip: 'Google Tensor G5 (3 нм)', ram: '16 GB',
    camera: '48 МП + 10.5 МП сверхширокая + 10.8 МП 5x теле', frontCamera: '10 МП (внешний экран) + 10 МП (внутренний)',
    battery: '5015 мАч, 24+ часов', special: 'IP68 — первая полная защита среди складных Pixel',
    tagline: 'Раскройте неординарность.', gradient: 'grad-purple', fold: true,
  },
  {
    id: 'pixel-10-pro', name: 'Pixel 10 Pro', series: '10 Pro',
    colors: ['Moonstone', 'Jade', 'Porcelain', 'Obsidian'], storage: ['128GB', '256GB', '512GB', '1TB'],
    purchase: 70000, markup: 30000,
    display: '6.3" Super Actua LTPO OLED, 1-120 Гц, 3000 нит', chip: 'Google Tensor G5 (3 нм)', ram: '16 GB',
    camera: '50 МП + 48 МП сверхширокая + 48 МП 5x теле', frontCamera: '42 МП, автофокус',
    battery: '4870 мАч, 24+ часов', special: 'Зум до 100x',
    tagline: 'Профессиональная защита.', gradient: 'grad-gray',
  },
  {
    id: 'pixel-10', name: 'Pixel 10', series: '10',
    colors: ['Obsidian', 'Indigo', 'Frost', 'Lemongrass'], storage: ['128GB', '256GB'],
    purchase: 52000, markup: 30000,
    display: '6.3" Actua OLED, 60-120 Гц, 3000 нит', chip: 'Google Tensor G5 (3 нм)', ram: '12 GB',
    camera: '48 МП + 13 МП сверхширокая + 10.8 МП 5x теле', frontCamera: '10.5 МП',
    battery: '4970 мАч, 24+ часов', special: 'Впервые телеобъектив в базовом Pixel',
    tagline: 'Приватность для всех.', gradient: 'grad-mint',
  },
  {
    id: 'pixel-10a', name: 'Pixel 10a', series: '10a',
    colors: ['Obsidian', 'Berry', 'Fog', 'Lavender'], storage: ['128GB', '256GB'],
    purchase: 38000, markup: 30000,
    display: '6.3" Actua pOLED, 60-120 Гц, 3000 нит', chip: 'Google Tensor G4', ram: '8 GB',
    camera: '48 МП + 13 МП сверхширокая', frontCamera: '13 МП',
    battery: '5100 мАч, 24+ часов', special: 'Полностью плоский корпус без выступа камеры',
    tagline: 'Доступная безопасность.', gradient: 'grad-peach', glass: 'Gorilla Glass 7i',
  },
  {
    id: 'pixel-9-pro', name: 'Pixel 9 Pro', series: '9 Pro',
    colors: ['Obsidian', 'Porcelain', 'Hazel', 'Rose'], storage: ['128GB', '256GB', '512GB', '1TB'],
    purchase: 75000, markup: 30000,
    display: '6.3" Super Actua LTPO OLED, 1-120 Гц', chip: 'Google Tensor G4', ram: '16 GB',
    camera: '50 МП + 48 МП + 48 МП 5x теле', frontCamera: '42 МП',
    battery: '4700 мАч, 24+ часов', special: '5x зум',
    tagline: 'Проверенная классика Pro.', gradient: 'grad-blue',
  },
  {
    id: 'pixel-9-pro-xl', name: 'Pixel 9 Pro XL', series: '9 Pro XL',
    colors: ['Obsidian', 'Porcelain', 'Hazel', 'Rose'], storage: ['256GB', '512GB', '1TB'],
    purchase: 85000, markup: 30000,
    display: '6.8" Super Actua LTPO OLED, 1-120 Гц', chip: 'Google Tensor G4', ram: '16 GB',
    camera: '50 МП + 48 МП + 48 МП 5x теле', frontCamera: '42 МП',
    battery: '5060 мАч, 24+ часов', special: '5x зум',
    tagline: 'Большой и надёжный.', gradient: 'grad-purple',
  },
  {
    id: 'pixel-9', name: 'Pixel 9', series: '9',
    colors: ['Obsidian', 'Wintergreen', 'Porcelain', 'Peony'], storage: ['128GB', '256GB'],
    purchase: 55000, markup: 30000,
    display: '6.3" Actua OLED, 60-120 Гц', chip: 'Google Tensor G4', ram: '12 GB',
    camera: '50 МП + 48 МП сверхширокая', frontCamera: '10.5 МП',
    battery: '4700 мАч, 24+ часов',
    tagline: 'Баланс цены и защиты.', gradient: 'grad-mint',
  },
  {
    id: 'pixel-9a', name: 'Pixel 9a', series: '9a',
    colors: ['Obsidian', 'Porcelain', 'Peony', 'Iris'], storage: ['128GB', '256GB'],
    purchase: 45000, markup: 30000,
    display: '6.3" Actua OLED, 60-120 Гц', chip: 'Google Tensor G4', ram: '8 GB',
    camera: '48 МП + 13 МП', frontCamera: '13 МП',
    battery: '5100 мАч, 24+ часов',
    tagline: 'Вход в мир приватности.', gradient: 'grad-peach', glass: 'Gorilla Glass 3',
  },
]

export const COLOR_HEX: Record<string, string> = {
  Obsidian: '#3c4043', Porcelain: '#efece6', Pink: '#f5c2d4', Wintergreen: '#b5d9c3',
  Peony: '#f0c9cf', Hazel: '#cdb99a', Rose: '#eec2c2', Jade: '#a8c9b4',
  Moonstone: '#c3d2e4', Indigo: '#4a4e8f', Frost: '#c3cfeb', Lemongrass: '#dcecae',
  Berry: '#dd8fa0', Fog: '#d7d9d2', Lavender: '#d5c6e8', Iris: '#c9c3e0',
}

export const COLOR_IMG: Record<string, string> = {
  Obsidian: '/images/gen/pixel-back-obsidian.webp',
  Porcelain: '/images/gen/pixel-back-porcelain.webp',
  Moonstone: '/images/gen/pixel-back-moonstone.webp',
  Jade: '/images/gen/pixel-back-jade.webp',
  Pink: '/images/gen/pixel-back-pink.webp',
  Peony: '/images/gen/pixel-back-peony.webp',
  Rose: '/images/gen/pixel-back-rose.webp',
  Hazel: '/images/gen/pixel-back-hazel.webp',
  Wintergreen: '/images/gen/pixel-back-wintergreen.webp',
}

export const IMG_FRONT = '/images/gen/pixel-front.webp'
export const IMG_FOLD = '/images/gen/pixel-fold.webp'

/* ---- Реальные рендеры устройств (официальные, public/images/real) ---- */
const REAL_COLORS: Record<string, string[]> = {
  'pixel-10-pro-xl': ['Moonstone', 'Jade', 'Porcelain', 'Obsidian'],
  'pixel-10-pro-fold': ['Moonstone', 'Jade'],
  'pixel-10-pro': ['Moonstone', 'Jade', 'Porcelain', 'Obsidian'],
  'pixel-10': ['Obsidian', 'Indigo', 'Frost', 'Lemongrass'],
  'pixel-9-pro': ['Obsidian', 'Porcelain', 'Hazel', 'Rose'],
  'pixel-9-pro-xl': ['Obsidian', 'Porcelain', 'Hazel', 'Rose'],
  'pixel-9': ['Obsidian', 'Wintergreen', 'Porcelain', 'Peony'],
}

/**
 * Реальный рендер модели в цвете; view: 'card' — фронт+зад (карточки),
 * 'back' — крупный план задней панели. Возвращает null, если рендера нет
 * (pixel-9a, pixel-10a — пока остаются на визуализациях).
 */
export function realImg(modelId: string, color: string, view: 'card' | 'back' = 'card'): string | null {
  if (!REAL_COLORS[modelId]?.includes(color)) return null
  return `/images/real/${modelId}-${color.toLowerCase()}-${view}.webp`
}

/** Картинка для карточки модели: реальный рендер, иначе старые визуализации. */
export function phoneCardImg(m: PhoneModel, color?: string): string {
  const c = color || m.colors[0]
  return realImg(m.id, c, 'card')
    || (m.fold ? IMG_FOLD : COLOR_IMG[c])
    || IMG_FRONT
}

export const STORAGE_DELTA: Record<string, number> = {
  '128GB': 0, '256GB': 9000, '512GB': 18000, '1TB': 32000,
}

export const ENGRAVING_PRICE = 1990
export const ENGRAVING_MAX = 20

/* ---- Премиальные аксессуары ---- */
export interface Accessory {
  id: string
  brand: string
  name: string
  price: number
  desc: string
  tag?: string
}

export const ACCESSORIES: Accessory[] = [
  { id: 'pitaka', brand: 'Pitaka', name: 'MagEZ Case', price: 7990, tag: 'Арамид', desc: 'Ультратонкий (0.95 мм) чехол из арамидного волокна 600D. MagSafe-совместимые магниты, нулевая толщина в кармане.' },
  { id: 'spigen', brand: 'Spigen', name: 'Tough Armor', price: 5490, tag: 'Хит продаж', desc: 'Двухслойная защита стандарта MIL-STD 810G, встроенная подставка, усиленные углы Air Cushion.' },
  { id: 'uag', brand: 'UAG', name: 'Monarch', price: 8990, tag: 'Максимум защиты', desc: 'Пять слоёв защиты: кевлар, кожа, поликарбонат. Тест падения с 7.6 метра.' },
  { id: 'bellroy', brand: 'Bellroy', name: 'Leather Case', price: 8490, desc: 'Натуральная кожа премиум-класса, тонкий профиль, мягкая подкладка из микрофибры.' },
  { id: 'faraday', brand: 'Faraday', name: 'Экранирующий чехол', price: 9900, tag: 'Приватность', desc: 'Полная блокировка сотовой сети, Wi-Fi, Bluetooth, GPS и NFC. Телефон «исчезает» из эфира, пока внутри.' },
  { id: 'glass', brand: 'Privacy', name: 'Приватность-стекло', price: 2990, desc: 'Закалённое стекло 9H с фильтром: экран виден только вам, под углом от 30° — чёрный.' },
]

export const HARDWARE_MODS = [
  {
    id: 'mics', name: 'Без микрофонов и датчиков движения', price: 14900,
    desc: 'Физическое удаление всех микрофонов, акселерометра и гироскопа — датчики движения могут работать как микрофоны. Окружение невозможно записать. Звонки — через внешнюю гарнитуру.',
  },
  {
    id: 'cameras', name: 'Без камер', price: 11900,
    desc: 'Физическое удаление фронтальной и основных камер. Для режимных объектов, где фототехника запрещена.',
  },
]

/* ---- Конфигурация заказа ---- */
export interface OrderConfig {
  modelId: string
  color: string
  storage: string
  sim: 'esim' | 'nano'
  engraving: string
  accessories: string[]
  hwMods: string[]
}

export const DEFAULT_CONFIG: OrderConfig = {
  modelId: 'pixel-10-pro',
  color: 'Moonstone',
  storage: '256GB',
  sim: 'esim',
  engraving: '',
  accessories: [],
  hwMods: [],
}

export function getModel(id: string): PhoneModel {
  return MODELS.find(m => m.id === id) || MODELS[0]
}

export function calcTotal(cfg: OrderConfig): number {
  const m = getModel(cfg.modelId)
  const storageDelta = STORAGE_DELTA[cfg.storage] || 0
  const acc = ACCESSORIES.filter(a => cfg.accessories.includes(a.id)).reduce((s, a) => s + a.price, 0)
  const hw = HARDWARE_MODS.filter(h => cfg.hwMods.includes(h.id)).reduce((s, h) => s + h.price, 0)
  const engr = cfg.engraving.trim() ? ENGRAVING_PRICE : 0
  return m.purchase + m.markup + storageDelta + acc + hw + engr
}

export const fmt = (n: number) => n.toLocaleString('ru') + ' ₽'
export const fmtRub = (n: number) => n.toLocaleString('ru') + ' руб.'

/* ---- Другие устройства: планшеты, ноутбуки, роутеры, питание ---- */
export interface Device {
  id: string
  name: string
  price: number
  desc: string
  note?: string
}

export interface DeviceCategory {
  id: string
  name: string
  icon: 'tablet' | 'laptop' | 'router' | 'power'
  headline: string
  text: string
  items: Device[]
}

export const DEVICE_CATEGORIES: DeviceCategory[] = [
  {
    id: 'tablets',
    name: 'Планшеты',
    icon: 'tablet',
    headline: 'Pixel Tablet с GrapheneOS — в том числе для ребёнка',
    text: 'Ребёнок с обычным планшетом начинает копить цифровой след с первого касания: рекламный профиль формируется раньше школьного дневника. На GrapheneOS профиль ребёнка полностью изолирован, нет аккаунта Google, нет сбора данных — планшет просто показывает мультики и учебные приложения.',
    items: [
      { id: 'tablet-128', name: 'Pixel Tablet 128GB + GrapheneOS', price: 68000, desc: '10.95" LCD 60 Гц, Tensor G2, изолированный детский профиль, зарядная док-станция в комплекте.' },
      { id: 'tablet-256', name: 'Pixel Tablet 256GB + GrapheneOS', price: 78000, desc: 'То же, с запасом памяти под офлайн-контент и учебные материалы.' },
    ],
  },
  {
    id: 'laptops',
    name: 'Ноутбуки',
    icon: 'laptop',
    headline: 'ThinkPad с приватным Linux — продолжение философии',
    text: 'Телефон защищён, а ноутбук с Windows 11 отправляет телеметрию пачками? Мы готовим Lenovo ThinkPad — машины с лучшей ремонтопригодностью и поддержкой Linux — с настроенной Fedora или Qubes OS, полнодисковым шифрованием и отключённым Intel ME где возможно.',
    items: [
      { id: 'thinkpad-t14', name: 'ThinkPad T14 + Fedora Workstation', price: 95000, desc: 'Ryzen 7 Pro / 32GB / 1TB, LUKS-шифрование, настроенный файрвол, LibreOffice и Signal Desktop из коробки.' },
      { id: 'thinkpad-x1', name: 'ThinkPad X1 Carbon + Qubes OS', price: 145000, desc: 'Изоляция через виртуализацию: работа, банк и личное — в отдельных qubes. Уровень «паранойя+».' },
    ],
  },
  {
    id: 'routers',
    name: 'LTE-роутеры',
    icon: 'router',
    headline: 'SIM-карта живёт в роутере, а не в телефоне',
    text: 'Оператор сотовой сети видит IMEI вашего телефона и вышки, к которым он подключён. Решение: SIM в LTE-роутере с OpenWrt и VPN на уровне роутера, а Pixel подключается по Wi-Fi — оператор не знает ни модель телефона, ни ваш трафик.',
    items: [
      { id: 'glinet-mudi', name: 'GL.iNet Mudi (E750)', price: 16900, desc: 'Портативный 4G-роутер на OpenWrt: WireGuard/Tor на борту, батарея на 8 часов, экран состояния.' },
      { id: 'glinet-puli', name: 'GL.iNet Puli (M1000)', price: 18900, desc: '4G+ с внешними антеннами и слотом microSD — стационарный приватный шлюз для дома и дачи.' },
    ],
  },
  {
    id: 'power',
    name: 'Питание',
    icon: 'power',
    headline: 'Блоки питания и повербанки без сюрпризов',
    text: 'Дешёвая зарядка с маркетплейса — это риск для аккумулятора и, в экзотических случаях, вектор атаки через USB (juice jacking). Мы продаём проверенные GaN-зарядки и повербанки, которые сами тестируем.',
    items: [
      { id: 'gan-65', name: 'GaN-зарядка 65W, 2×USB-C + USB-A', price: 4990, desc: 'Заряжает Pixel, планшет и ноутбук. Компактная, не греется.' },
      { id: 'pb-20000', name: 'Повербанк 20000 мАч, PD 30W', price: 7990, desc: 'Две полные зарядки Pixel 10 Pro XL, пасsthrough-зарядка, дисплей заряда.' },
    ],
  },
]

/* ---- Опенсорс-экосистема: вся замена Google Play ---- */
export const OSS_APPS = [
  { cat: 'Магазин приложений', apps: 'F-Droid, Obtainium', desc: 'Тысячи свободных приложений без аккаунта и рекламы. Обновления напрямую от разработчиков.' },
  { cat: 'Карты и навигация', apps: 'Organic Maps, OsmAnd', desc: 'Офлайн-карты всего мира. Никуда не «звонят», не строят историю перемещений.' },
  { cat: 'Видео и музыка', apps: 'NewPipe, VLC, Spotube', desc: 'YouTube без рекламы и аккаунта, любые форматы медиа, стриминг без трекеров.' },
  { cat: 'Почта', apps: 'Thunderbird, K-9 Mail', desc: 'Любой почтовый провайдер по IMAP, шифрование OpenPGP из коробки.' },
  { cat: 'Пароли', apps: 'KeePassDX, Bitwarden (self-hosted)', desc: 'Локальная база паролей с биометрией. Облако — только ваше, если захотите.' },
  { cat: 'Связь', apps: 'Signal, Molly, SimpleX', desc: 'Сквозное шифрование. Molly — форк Signal с шифрованием базы паролем.' },
  { cat: 'Галерея и файлы', apps: 'Aves, Material Files', desc: 'Быстрые, без облачной синхронизации «по умолчанию» и без аналитики.' },
  { cat: 'Офис и заметки', apps: 'Collabora Office, Joplin, Standard Notes', desc: 'Документы, заметки с шифрованием, синхронизация на ваш сервер.' },
  { cat: 'Браузер', apps: 'Vanadium (встроен), Mull', desc: 'Усиленный Chromium от GrapheneOS или укреплённый Firefox.' },
  { cat: 'Клавиатура', apps: 'HeliBoard', desc: 'Без отправки набранного текста на чужие серверы — в отличие от стоковых.' },
]

/* ---- Telegram-бот и оплата (отключено, в разработке) ---- */
// export const TELEGRAM_BOT = 'PixelShieldBot'
// export const TELEGRAM_URL = `https://t.me/${TELEGRAM_BOT}`

// export function orderDeepLink(cfg: OrderConfig): string {
//   const code = [
//     cfg.modelId.replace('pixel-', 'p'),
//     cfg.color.slice(0, 3).toLowerCase(),
//     cfg.storage.replace('GB', 'g').replace('TB', 't'),
//     cfg.sim,
//     cfg.accessories.join('.') || 'noacc',
//     cfg.hwMods.join('.') || 'std',
//   ].join('_').replace(/[^a-zA-Z0-9_.-]/g, '')
//   return `${TELEGRAM_URL}?start=${code.slice(0, 64)}`
// }

/* ---- Контент ---- */
export const PILLARS = [
  { icon: 'shield', text: 'Защита от слежки и телеметрии' },
  { icon: 'lock', text: 'Sandboxed Google Play' },
  { icon: 'eye', text: 'Полный контроль доступа' },
  { icon: 'cpu', text: 'Verified Boot на каждом старте' },
  { icon: 'battery', text: 'Авто-стирание при краже' },
  { icon: 'refresh', text: 'Обновления 7+ лет' },
] as const

export const FEATURE_CARDS = [
  { title: 'Никакой слежки в фоне', text: 'GrapheneOS отключает телеметрию Google, фоновую отправку данных и трекеры на уровне системы.', bg: 'g-blue' },
  { title: 'Sandboxed Google Play', text: 'Google сервисы работают в изолированной песочнице. Приложения — да, системный доступ — нет.', bg: 'g-purple' },
  { title: 'Verified Boot', text: 'Каждое включение проверяет целостность системы. Подделка или взлом — телефон предупредит.', bg: 'g-mint' },
  { title: 'Контроль камеры и микрофона', text: 'Индикаторы доступа, мгновенные разрешения, автоотзыв — ничего не работает без вашего ведома.', bg: 'g-peach' },
  { title: '7+ лет обновлений', text: 'GrapheneOS поддерживает Pixel дольше, чем сам Google. Регулярные патчи безопасности.', bg: 'g-blue' },
  { title: 'Авто-стирание при краже', text: 'Включение PIN при перезагрузке, авто-стирание после N попыток, полное шифрование данных.', bg: 'g-purple' },
  { title: 'Свобода от Google', text: 'Нет обязательного аккаунта Google. Нет встроенной рекламы. Нет сбора метрик.', bg: 'g-mint' },
  { title: 'Банковские приложения', text: 'Сбер, Тинькофф, ВТБ и другие работают через Sandboxed Google Play.', bg: 'g-peach' },
]

export const COMPARE = [
  { feature: 'Слежка за пользователем', g: false, a: true },
  { feature: 'Сбор телеметрии', g: false, a: true },
  { feature: 'Реклама в системе', g: false, a: true },
  { feature: 'Фоновая отправка данных', g: false, a: true },
  { feature: 'Sandboxed Google Play', g: true, a: false },
  { feature: 'Verified Boot', g: true, a: true },
  { feature: 'Открытый исходный код', g: true, a: false },
  { feature: 'Поддержка безопасности', g: '7+ лет', a: '3-5 лет' },
]

export const FAQ = [
  { q: 'Сломается ли телефон после установки GrapheneOS?', a: 'Нет. GrapheneOS — полноценная операционная система на базе Android. Камера, звонки, интернет, NFC, банковские приложения продолжают работать.' },
  { q: 'Как работает удаление микрофонов и камер?', a: 'Это аппаратная модификация: мы физически извлекаем микрофоны, акселерометр, гироскоп и/или камеры из корпуса. Программного «отключения» недостаточно — удалённые компоненты невозможно задействовать ни одним приложением или эксплойтом. Звонки после удаления микрофонов возможны через проводную или Bluetooth-гарнитуру.' },
  { q: 'Как происходит заказ и оплата?', a: 'Заказ оформляется через нашего Telegram-бота: он примет конфигурацию, ответит на вопросы и выдаст реквизиты. Оплата — в экосистеме TON (Toncoin, USDT в сети TON, Telegram Wallet), а также международные карты через платёжный шлюз в боте.' },
  { q: 'Что такое чехол Фарадея?', a: 'Это экранирующий чехол из токопроводящей ткани. Пока телефон внутри, он полностью отрезан от сотовой сети, Wi-Fi, Bluetooth, GPS и NFC — его нельзя ни отследить, ни активировать удалённо. Вынули из чехла — телефон снова на связи.' },
  { q: 'Будут ли работать банковские приложения?', a: 'Да. Большинство банков (Сбер, Тинькофф, ВТБ, Альфа) работают через Sandboxed Google Play. Некоторые приложения с жёсткой проверкой SafetyNet могут потребовать дополнительной настройки.' },
  { q: 'Что входит в цену?', a: 'Всё включено: телефон + установка GrapheneOS + первичная настройка + выбранные аксессуары и аппаратные модификации + доставка СДЭК по России со страховкой груза на полную стоимость.' },
  { q: 'Сколько занимает весь процесс?', a: 'От оплаты до отправки — 3-5 рабочих дней (с аппаратными модификациями — до 7): закупка, установка ОС, модификация, настройка, тестирование, упаковка и отправка СДЭК.' },
  { q: 'Можно ли вернуть Google Android?', a: 'Да, в любой момент можно вернуть заводскую прошивку. GrapheneOS не влияет на аппаратную гарантию. Аппаратные модификации (удалённые микрофоны/камеры) необратимы.' },
]
