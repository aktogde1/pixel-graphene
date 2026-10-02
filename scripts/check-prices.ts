// Автоматическая проверка утверждённой таблицы цен сайта.
// Утверждено владельцем (2026-10-02): итог = устройство + 25 000 ₽ подготовки.
// Запуск: npm run check:prices
import {
  MODELS, PREP_FEE, PRICE_TABLE, DEFAULT_CONFIG,
  calcTotal, devicePrice, minTotal, storageDelta,
  type OrderConfig,
} from '../src/data.ts'

/* Утверждённая таблица: [модель, память, цена устройства ₽] */
const EXPECTED_DEVICE: Array<[string, string, number]> = [
  ['pixel-10-pro', '128GB', 70000],
  ['pixel-10-pro', '256GB', 88000],
  ['pixel-10-pro', '512GB', 99000],
  ['pixel-10-pro', '1TB', 110000],
  ['pixel-10-pro-xl', '256GB', 78000],
  ['pixel-10-pro-xl', '512GB', 102000],
  ['pixel-10-pro-xl', '1TB', 120000],
  ['pixel-10-pro-fold', '256GB', 118000],
  ['pixel-10-pro-fold', '512GB', 133000],
  ['pixel-10-pro-fold', '1TB', 155000],
  ['pixel-10a', '128GB', 42000],
  ['pixel-10a', '256GB', 48000],
]

/* Стартовые цены «от» для главной и каталога */
const EXPECTED_FROM: Record<string, number> = {
  'pixel-10-pro': 95000,
  'pixel-10-pro-xl': 103000,
  'pixel-10-pro-fold': 143000,
  'pixel-10a': 67000,
}

/* Согласованный каталог: модель → памяти, цвета, варианты SIM */
const EXPECTED_CATALOG: Record<string, { storage: string[], colors: string[], sims: string[] }> = {
  'pixel-10-pro': { storage: ['128GB', '256GB', '512GB', '1TB'], colors: ['Obsidian'], sims: ['nano', 'esim'] },
  'pixel-10-pro-xl': { storage: ['256GB', '512GB', '1TB'], colors: ['Obsidian'], sims: ['nano', 'esim'] },
  'pixel-10-pro-fold': { storage: ['256GB', '512GB', '1TB'], colors: ['Moonstone'], sims: ['nano'] },
  'pixel-10a': { storage: ['128GB', '256GB'], colors: ['Obsidian'], sims: ['nano'] },
}

let failures = 0
const fail = (msg: string) => { failures++; console.error('FAIL: ' + msg) }
const pass = (msg: string) => console.log('ok:   ' + msg)

function check(cond: boolean, msg: string) { cond ? pass(msg) : fail(msg) }

/* 1. Каталог — ровно согласованные модели */
const ids = MODELS.map(m => m.id).sort()
const expectedIds = Object.keys(EXPECTED_CATALOG).sort()
check(
  JSON.stringify(ids) === JSON.stringify(expectedIds),
  `каталог: ровно 4 модели 10-й серии (${ids.join(', ')})`,
)

for (const [id, spec] of Object.entries(EXPECTED_CATALOG)) {
  const m = MODELS.find(x => x.id === id)
  if (!m) { fail(`каталог: модель ${id} отсутствует`); continue }
  check(JSON.stringify(m.storage) === JSON.stringify(spec.storage), `${id}: памяти ${m.storage.join('/')}`)
  check(JSON.stringify(m.colors) === JSON.stringify(spec.colors), `${id}: цвета ${m.colors.join('/')}`)
  check(JSON.stringify(m.sims) === JSON.stringify(spec.sims), `${id}: SIM ${m.sims.join('/')}`)
}

/* 2. Все 12 конфигураций: цена устройства и итог = устройство + 25 000 */
for (const [modelId, storage, device] of EXPECTED_DEVICE) {
  const inTable = PRICE_TABLE[modelId]?.[storage]
  check(inTable === device, `${modelId} ${storage}: устройство ${device}`)

  const cfg: OrderConfig = { ...DEFAULT_CONFIG, modelId, storage, color: 'x', sim: 'nano' }
  const total = calcTotal(cfg)
  check(devicePrice(modelId, storage) === device, `${modelId} ${storage}: devicePrice`)
  check(total === device + PREP_FEE, `${modelId} ${storage}: итог ${total} = ${device} + ${PREP_FEE}`)
  check(PREP_FEE === 25000, `${modelId} ${storage}: подготовка 25 000`)
}

/* 3. Цвет и SIM не создают надбавок (формула их не учитывает) */
const probeA = calcTotal({ ...DEFAULT_CONFIG, modelId: 'pixel-10-pro', storage: '256GB', color: 'Obsidian', sim: 'nano' })
const probeB = calcTotal({ ...DEFAULT_CONFIG, modelId: 'pixel-10-pro', storage: '256GB', color: 'ЛюбойЦвет', sim: 'esim' })
check(probeA === probeB, 'цвет и SIM не меняют итог')

/* 4. Разница памяти вычисляется из таблицы, а не из общей STORAGE_DELTA */
check(storageDelta('pixel-10-pro', '256GB') === 18000, 'Pro 256GB: +18000 к 128GB (из таблицы)')
check(storageDelta('pixel-10-pro-xl', '512GB') === 24000, 'XL 512GB: +24000 к 256GB (из таблицы)')
check(storageDelta('pixel-10a', '256GB') === 6000, '10a 256GB: +6000 к 128GB (из таблицы)')

/* 5. Стартовые цены «от» */
for (const [id, from] of Object.entries(EXPECTED_FROM)) {
  check(minTotal(id) === from, `${id}: «от» ${from}`)
}

/* 6. Удалённые сущности не экспортируются из данных */
const dataExports = Object.keys(await import('../src/data.ts'))
for (const gone of ['STORAGE_DELTA', 'ENGRAVING_PRICE', 'ENGRAVING_MAX', 'ACCESSORIES', 'HARDWARE_MODS', 'DEVICE_CATEGORIES']) {
  check(!dataExports.includes(gone), `удалено: ${gone}`)
}

console.log('')
if (failures > 0) {
  console.error(`ПРОВАЛЕНО: ${failures} проверок не прошли`)
  process.exit(1)
}
console.log('ВСЕ ПРОВЕРКИ ЦЕН ПРОЙДЕНЫ')
