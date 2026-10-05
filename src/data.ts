/* ============================ ДАННЫЕ МАГАЗИНА ============================ */

/* Каналы связи */
/* Профиль продавца на Авито — официальный канал связи и реальные отзывы */
export const AVITO_PROFILE_URL = 'https://www.avito.ru/brands/i77522720'

/* Реальные отрывки отзывов на Авито (предоставлены владельцем 2026-10-03).
   Без имён, фото, дат и рейтингов — только дословный текст и пометка источника. */
export const REVIEWS = [
  {
    text: 'С огромной благодарностью за выполненную работу. Леонид нашёл и купил мне Pixel 10 Pro, установил систему и передал курьером. Оправдал доверие, что в наше время большая редкость. Могу рекомендовать.',
    source: 'Из отзыва на Авито',
  },
  {
    text: 'Благодарю Леонида за помощь в подборе телефона и установки GrapheneOS! Всё очень быстро и качественно) Мои рекомендации!)',
    source: 'Из отзыва на Авито',
  },
]

/* Подготовка: подбор/выкуп, установка GrapheneOS, организация доставки,
   консультация по настройке. Утверждено владельцем 2026-10-02.
   PREP_FEE — только внутренняя часть расчёта (calcTotal/minTotal):
   публично показываем итоговую цену, без отдельного ценника на подготовку. */
export const PREP_FEE = 25000

/* Работы и услуги, уже включённые в итоговую цену. */
export const INCLUDED_IN_PRICE = [
  'подбор и выкуп телефона',
  'установка GrapheneOS',
  'организация доставки',
  'консультация по настройке',
]

export interface PhoneModel {
  id: string
  name: string
  series: string
  colors: string[]
  storage: string[]
  baseStorage: string
  sims: SimVariant[]
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

export type SimVariant = 'nano' | 'esim'

export const SIM_OPTIONS: Record<SimVariant, { title: string, sub: string }> = {
  nano: { title: 'nano-SIM + eSIM', sub: 'Физическая SIM и eSIM по QR-коду' },
  esim: { title: 'eSIM (US-версия)', sub: 'Только eSIM, без слота nano-SIM' },
}

/* Каталог согласован с ботом: только 10-я серия. Обычного Pixel 10 в нём нет. */
export const MODELS: PhoneModel[] = [
  {
    id: 'pixel-10-pro', name: 'Pixel 10 Pro', series: '10 Pro',
    colors: ['Obsidian'], storage: ['128GB', '256GB', '512GB', '1TB'], baseStorage: '128GB',
    sims: ['nano', 'esim'],
    display: '6.3" Super Actua LTPO OLED, 1-120 Гц, 3000 нит', chip: 'Google Tensor G5 (3 нм)', ram: '16 GB',
    camera: '50 МП + 48 МП сверхширокая + 48 МП 5x теле', frontCamera: '42 МП, автофокус',
    battery: '4870 мАч, 24+ часов', special: 'Зум до 100x',
    tagline: 'Профессиональная защита.', gradient: 'grad-gray',
  },
  {
    id: 'pixel-10-pro-xl', name: 'Pixel 10 Pro XL', series: '10 Pro XL',
    colors: ['Obsidian'], storage: ['256GB', '512GB', '1TB'], baseStorage: '256GB',
    sims: ['nano', 'esim'],
    display: '6.8" Super Actua LTPO OLED, 1-120 Гц, 3000 нит', chip: 'Google Tensor G5 (3 нм)', ram: '16 GB',
    camera: '50 МП + 48 МП сверхширокая + 48 МП 5x теле', frontCamera: '42 МП, автофокус',
    battery: '5200 мАч, 24+ часов', special: 'Зум до 100x, видео 8K',
    tagline: 'Новая эра приватности.', gradient: 'grad-blue',
  },
  {
    id: 'pixel-10-pro-fold', name: 'Pixel 10 Pro Fold', series: '10 Pro Fold',
    colors: ['Moonstone'], storage: ['256GB', '512GB', '1TB'], baseStorage: '256GB',
    sims: ['nano'],
    display: '8" внутренний + 6.4" внешний LTPO OLED, 1-120 Гц, 3000 нит', chip: 'Google Tensor G5 (3 нм)', ram: '16 GB',
    camera: '48 МП + 10.5 МП сверхширокая + 10.8 МП 5x теле', frontCamera: '10 МП (внешний экран) + 10 МП (внутренний)',
    battery: '5015 мАч, 24+ часов', special: 'IP68 — первая полная защита среди складных Pixel',
    tagline: 'Раскройте неординарность.', gradient: 'grad-purple', fold: true,
  },
  {
    id: 'pixel-10a', name: 'Pixel 10a', series: '10a',
    colors: ['Obsidian'], storage: ['128GB', '256GB'], baseStorage: '128GB',
    sims: ['nano'],
    display: '6.3" Actua pOLED, 60-120 Гц, 3000 нит', chip: 'Google Tensor G4', ram: '8 GB',
    camera: '48 МП + 13 МП сверхширокая', frontCamera: '13 МП',
    battery: '5100 мАч, 24+ часов', special: 'Полностью плоский корпус без выступа камеры',
    tagline: 'Доступная безопасность.', gradient: 'grad-peach', glass: 'Gorilla Glass 7i',
  },
]

/* Утверждённая таблица цен: закупка устройства по модели и памяти.
   Публичная итоговая цена = цена устройства + PREP_FEE (подготовка включена,
   отдельно не показывается). Цены обновляются вручную. */
export const PRICE_TABLE: Record<string, Record<string, number>> = {
  'pixel-10-pro': { '128GB': 70000, '256GB': 88000, '512GB': 99000, '1TB': 110000 },
  'pixel-10-pro-xl': { '256GB': 78000, '512GB': 102000, '1TB': 120000 },
  'pixel-10-pro-fold': { '256GB': 118000, '512GB': 133000, '1TB': 155000 },
  'pixel-10a': { '128GB': 42000, '256GB': 48000 },
}

export function devicePrice(modelId: string, storage: string): number {
  return PRICE_TABLE[modelId]?.[storage] ?? 0
}

/* Разница к базовой памяти — только из таблицы, у моделей она разная.
   Базовая память: Pro/10a — 128 ГБ, XL/Fold — 256 ГБ. */
export function storageDelta(modelId: string, storage: string): number {
  const t = PRICE_TABLE[modelId]
  if (!t) return 0
  const base = PRICE_TABLE[modelId][MODELS.find(m => m.id === modelId)?.baseStorage || storage]
  return (t[storage] ?? 0) - (base ?? 0)
}

export function calcTotal(cfg: OrderConfig): number {
  return devicePrice(cfg.modelId, cfg.storage) + PREP_FEE
}

/* Стартовая цена модели для карточек: минимальная конфигурация + подготовка */
export function minTotal(modelId: string): number {
  const t = PRICE_TABLE[modelId]
  if (!t) return 0
  return Math.min(...Object.values(t)) + PREP_FEE
}

export const COLOR_HEX: Record<string, string> = {
  Obsidian: '#3c4043',
  Moonstone: '#c3d2e4',
}

export const COLOR_IMG: Record<string, string> = {
  Obsidian: '/images/gen/pixel-back-obsidian.webp',
  Moonstone: '/images/gen/pixel-back-moonstone.webp',
}

export const IMG_FRONT = '/images/gen/pixel-front.webp'
export const IMG_FOLD = '/images/gen/pixel-fold.webp'

/* ---- Реальные рендеры устройств (официальные, public/images/real) ---- */
const REAL_COLORS: Record<string, string[]> = {
  'pixel-10-pro': ['Obsidian'],
  'pixel-10-pro-xl': ['Obsidian'],
  'pixel-10-pro-fold': ['Moonstone'],
}

/**
 * Реальный рендер модели в цвете; view: 'card' — фронт+зад (карточки),
 * 'back' — крупный план задней панели. Возвращает null, если рендера нет
 * (pixel-10a — пока остаётся на визуализации).
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

/* ---- Конфигурация заказа ---- */
export interface OrderConfig {
  modelId: string
  color: string
  storage: string
  sim: SimVariant
}

export const DEFAULT_CONFIG: OrderConfig = {
  modelId: 'pixel-10-pro',
  color: 'Obsidian',
  storage: '128GB',
  sim: 'nano',
}

export function getModel(id: string): PhoneModel | undefined {
  return MODELS.find(m => m.id === id)
}

export function formatOrderSummary(config: OrderConfig): string {
  const m = getModel(config.modelId)
  const name = m ? m.name : config.modelId
  const sim = SIM_OPTIONS[config.sim]?.title || config.sim
  const total = fmtRub(calcTotal(config))
  return `Здравствуйте! Хочу заказать Google ${name}:\n• Цвет: ${config.color}\n• Память: ${config.storage}\n• Версия SIM: ${sim}\n• Итоговая стоимость: ${total}\nПодскажите, пожалуйста, наличие и сроки отправки.`
}

export const fmt = (n: number) => n.toLocaleString('ru') + ' ₽'
export const fmtRub = (n: number) => n.toLocaleString('ru') + ' руб.'

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

/* ---- Контент ----
   Тексты сверены с grapheneos.org/features и grapheneos.org/faq (2026-10-03).
   Поддержка Pixel 10-й серии: минимум 7 лет с выпуска модели (гарантия производителя). */
export const PILLARS = [
  { icon: 'shield', text: 'Контроль телеметрии и сенсоров' },
  { icon: 'lock', text: 'Sandboxed Google Play' },
  { icon: 'eye', text: 'Точный контроль разрешений' },
  { icon: 'cpu', text: 'Verified Boot на каждом старте' },
  { icon: 'battery', text: 'Auto-reboot: шифрование at rest' },
  { icon: 'refresh', text: 'Обновления 7 лет с выпуска модели' },
] as const

export const FEATURE_CARDS = [
  { title: 'Телеметрия отключена', text: 'GrapheneOS убирает телеметрию Google и фоновый сбор данных на уровне системы. За трекерами внутри самих приложений следят разрешения и выбор софта.', bg: 'g-blue' },
  { title: 'Sandboxed Google Play', text: 'Google-сервисы устанавливаются по желанию, как обычные приложения: без системных привилегий и в рамках выданных разрешений.', bg: 'g-purple' },
  { title: 'Verified Boot', text: 'Каждое включение проверяет целостность загрузочной цепочки от чипа безопасности. Это контроль целостности, а не гарантия от любой атаки.', bg: 'g-mint' },
  { title: 'Контроль камеры и микрофона', text: 'Индикаторы доступа, мгновенные разрешения, автоотзыв — ничего не работает без вашего ведома.', bg: 'g-peach' },
  { title: 'Storage Scopes', text: 'Приложение, запросившее всё хранилище, видит только явно выданные ему файлы. Автоматического доступа ко всему — нет.', bg: 'g-blue' },
  { title: 'Отдельные профили', text: 'Разные профили для разных задач: у каждого свои приложения и данные, разделённые на уровне системы.', bg: 'g-purple' },
  { title: 'Network permission', text: 'Конкретному приложению можно запретить прямой доступ в интернет. Это не закрывает любые другие каналы обмена, но сеть под контролем.', bg: 'g-mint' },
  { title: 'Банковские приложения', text: 'Сбер, Тинькофф, ВТБ и другие работают через Sandboxed Google Play.', bg: 'g-peach' },
]

/* Сравнение со стандартной системой Pixel. Базовые защиты аппарата
   (verified boot, изоляция приложений, шифрование) есть в обеих системах. */
export const COMPARE = [
  { feature: 'Телеметрия Google в системе', g: 'нет', a: 'есть' },
  { feature: 'Sandboxed Google Play', g: true, a: false },
  { feature: 'Storage Scopes и Network permission', g: true, a: false },
  { feature: 'Verified Boot', g: true, a: true },
  { feature: 'Изоляция приложений и шифрование', g: true, a: true },
  { feature: 'Открытый исходный код ОС', g: 'полностью', a: 'частично' },
]

/* FAQ — только утверждённые условия: под заказ, 100% предоплата,
   доставка СДЭК / СПб / Яндекс Go. */
export const FAQ = [
  { q: 'Есть ли телефоны в наличии?', a: 'Нет, телефонов в наличии нет — только закупка под заказ. Мы подбираем и выкупаем новый телефон у поставщика под вашу конфигурацию.' },
  { q: 'Как происходит заказ?', a: 'До оплаты мы согласуем с вами конфигурацию, наличие у поставщика, полную стоимость и срок отправки. Выберите параметры на сайте и напишите нам в сообщения на Авито.' },
  { q: 'Что входит в цену?', a: 'Цена на сайте — итоговая, подготовка уже включена: подбор и выкуп телефона, установка GrapheneOS, организация доставки и консультация по настройке. Стоимость доставки согласовывается до оплаты отдельно.' },
  { q: 'Как происходит оплата?', a: '100% предоплата полной стоимости заказа. Способ оплаты и реквизиты мы согласуем с вами до оплаты в переписке.' },
  { q: 'Как доставлен заказ?', a: 'СДЭК со страхованием на полную стоимость по России. Также возможна личная передача в Санкт-Петербурге или Яндекс Go по согласованию. Авито Доставка не используется.' },
  { q: 'Почему коробка будет вскрыта?', a: 'Телефон новый, но коробка вскрывается: мы устанавливаем GrapheneOS вместо заводского Android и проверяем устройство перед отправкой.' },
  { q: 'Сколько ждать заказ?', a: 'Срок зависит от наличия конкретной конфигурации у поставщика — мы согласуем его с вами до оплаты и предупредим, если что-то изменится.' },
  { q: 'Будут ли работать банковские приложения?', a: 'Да. Большинство банков (Сбер, Тинькофф, ВТБ, Альфа) работают через Sandboxed Google Play. Некоторые приложения с жёсткой проверкой могут потребовать дополнительной настройки.' },
  { q: 'Можно ли вернуть Google Android?', a: 'Да, в любой момент можно вернуть заводскую прошивку. Установка GrapheneOS не меняет аппаратную часть телефона.' },
]
