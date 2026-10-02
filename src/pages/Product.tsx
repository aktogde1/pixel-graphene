import { useEffect, useState } from 'react'
import {
  Smartphone, Zap, Truck, ShieldCheck, Send, ChevronRight
} from 'lucide-react'
import {
  MODELS, COLOR_HEX, COLOR_IMG, IMG_FRONT, IMG_FOLD,
  PREP_FEE, SIM_OPTIONS, TELEGRAM_BOT_URL,
  getModel, calcTotal, devicePrice, storageDelta, fmt, fmtRub, realImg,
  type OrderConfig,
} from '../data'
import { navigate } from '../components'

interface Props {
  id: string
  config: OrderConfig
  setConfig: (c: OrderConfig) => void
}

/* Страница отсутствующей в каталоге модели — старые ссылки не должны
   молча показывать другой телефон. */
function ModelNotFound() {
  return (
    <section className="page-head">
      <div className="container">
        <p className="eyebrow-blue">Каталог</p>
        <h1>Такой модели нет в каталоге.</h1>
        <p className="lead">
          Возможно, она была снята с продажи. Актуальный ассортимент — 10-я серия Pixel с GrapheneOS.
        </p>
        <a href="#/phones" className="btn-outline-dark">Смотреть каталог <ChevronRight size={16} /></a>
      </div>
    </section>
  )
}

export default function Product({ id, config, setConfig }: Props) {
  const m = getModel(id)
  const [view, setView] = useState<'back' | 'front'>('back')

  // при смене модели — сбрасываем недоступные опции
  useEffect(() => {
    const model = getModel(id)
    if (!model) return
    const next = { ...config, modelId: model.id }
    if (!model.colors.includes(next.color)) next.color = model.colors[0]
    if (!model.storage.includes(next.storage)) next.storage = model.storage[0]
    if (!model.sims.includes(next.sim)) next.sim = model.sims[0]
    setConfig(next)
    setView('back')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const set = (patch: Partial<OrderConfig>) => setConfig({ ...config, ...patch })

  const total = calcTotal(config)
  // Реальные рендеры: 'back' — крупный план спинки, 'card' — композиция с фронтом
  const realBack = m ? realImg(m.id, config.color, 'back') : null
  const realFront = m ? realImg(m.id, config.color, 'card') : null
  const isReal = !!realBack
  const fallbackBack = m?.fold ? IMG_FOLD : COLOR_IMG[config.color] || IMG_FRONT
  const mainImg = view === 'front' ? (realFront || IMG_FRONT) : (realBack || fallbackBack)
  const versionStr = m ? `${m.name} · ${config.color} · ${config.storage} · ${SIM_OPTIONS[config.sim].title}` : ''

  const specs = m ? [
    { label: 'Дисплей', value: m.display + ', ' + (m.glass || 'Gorilla Glass Victus 2') },
    { label: 'Процессор', value: m.chip + ' + сопроцессор безопасности Titan M2' },
    { label: 'Оперативная память', value: m.ram },
    { label: 'Хранилище', value: m.storage.join(' / ') },
    { label: 'Камера', value: m.camera },
    { label: 'Фронтальная камера', value: m.frontCamera },
    { label: 'Аккумулятор', value: m.battery },
    ...(m.special ? [{ label: 'Особенности', value: m.special }] : []),
    { label: 'Защита', value: 'IP68, алюминий аэрокосмического класса' },
    { label: 'ОС', value: 'GrapheneOS: verified boot, sandboxed Google Play, отключённая телеметрия, 7+ лет обновлений' },
  ] : []

  if (!m) return <ModelNotFound />

  return (
    <>
      {/* Хлебные крошки */}
      <div className="container breadcrumbs">
        <a href="#/">Смартфоны</a>
        <ChevronRight size={14} />
        <span>{m.name}</span>
      </div>

      <section className="product-page">
        <div className="container product-grid">
          {/* Миниатюры */}
          <div className="thumbs">
            {!m.fold && (
              <button className={`thumb ${view === 'front' ? 'active' : ''}`} onClick={() => setView('front')} aria-label="Вид спереди">
                <img src={realFront || IMG_FRONT} alt="Спереди" loading="lazy" />
              </button>
            )}
            <button className={`thumb ${view === 'back' ? 'active' : ''}`} onClick={() => setView('back')} aria-label="Вид сзади">
              <img src={realBack || fallbackBack} alt="Сзади" loading="lazy" />
            </button>
          </div>

          {/* Большое фото */}
          <div className="product-stage">
            {!isReal && <span className="viz-note">рендер-визуализация</span>}
            <img key={mainImg} src={mainImg} alt={m.name} className="product-img" />
          </div>

          {/* Опции */}
          <div className="product-options">
            <h1 className="product-title">Google {m.name}</h1>
            <div className="product-links">
              <span>с GrapheneOS</span>
              <a href="#specs-table" onClick={e => { e.preventDefault(); document.getElementById('specs-table')?.scrollIntoView({ behavior: 'smooth' }) }}>Характеристики</a>
            </div>

            {/* Модель */}
            <div className="opt-block">
              <h3 className="opt-label">Модель</h3>
              <div className="opt-models">
                {MODELS.map(x => (
                  <button key={x.id} className={`opt-model ${id === x.id ? 'active' : ''}`} onClick={() => navigate(`/phone/${x.id}`)}>
                    {x.name}
                  </button>
                ))}
              </div>
              <a href="#/phones" className="opt-all-models">Все модели каталога <ChevronRight size={14} /></a>
            </div>

            {/* Цвет */}
            <div className="opt-block">
              <h3 className="opt-label">Цвет</h3>
              <div className="color-cards">
                {m.colors.map(c => (
                  <button key={c} className={`color-card ${config.color === c ? 'active' : ''}`} onClick={() => { set({ color: c }); setView('back') }}>
                    <span className="color-circle" style={{ background: COLOR_HEX[c] }} />
                    <span className="color-name">{c}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Память */}
            <div className="opt-block">
              <h3 className="opt-label">Память</h3>
              <div className="opt-cards">
                {m.storage.map(s => {
                  const delta = storageDelta(m.id, s)
                  return (
                    <button key={s} className={`opt-card ${config.storage === s ? 'active' : ''}`} onClick={() => set({ storage: s })}>
                      <span className="opt-card-title">{s}</span>
                      <span className="opt-card-sub">{delta ? `+${fmt(delta)}` : 'в базе'}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* SIM */}
            <div className="opt-block">
              <h3 className="opt-label">SIM</h3>
              <div className="opt-cards">
                {m.sims.map(s => {
                  const opt = SIM_OPTIONS[s]
                  return (
                    <button key={s} className={`opt-card ${config.sim === s ? 'active' : ''}`} onClick={() => set({ sim: s })}>
                      {s === 'esim' ? <Zap size={18} /> : <Smartphone size={18} />}
                      <span className="opt-card-title">{opt.title}</span>
                      <span className="opt-card-sub">{opt.sub}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Цена + CTA */}
            <div className="price-block">
              <div className="price-value">{fmtRub(total)}</div>
              <div className="price-version">Версия: {versionStr}</div>
              <ul className="price-lines">
                <li><span>{m.name} · {config.storage}</span><span>{fmtRub(devicePrice(m.id, config.storage))}</span></li>
                <li><span>Подготовка: GrapheneOS, настройка, организация доставки</span><span>{fmtRub(PREP_FEE)}</span></li>
                <li><span>Доставка (СДЭК / СПб / Яндекс Go)</span><span>по согласованию</span></li>
              </ul>
              <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="btn-tg btn-tg-full">
                <Send size={18} /> Заказать в Telegram
              </a>
              <p className="opt-hint" style={{ marginTop: 10 }}>
                Выбранная конфигурация пока не передаётся в бот автоматически — сообщите её в чате.
              </p>
              <a href="#/payment" className="btn-buy-alt">Оплата и доставка</a>
              <div className="price-badges">
                <span><Truck size={14} /> Закупка под заказ</span>
                <span><ShieldCheck size={14} /> Verified Boot из коробки</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Характеристики этой модели */}
      <section className="section specs-section" id="specs-table">
        <div className="container">
          <h2>Характеристики {m.name}.</h2>
          <p className="lead">С предустановленной GrapheneOS</p>
          <div className="specs-table-wrap">
            <table className="specs-table">
              <tbody>
                {specs.map((s, i) => (
                  <tr key={i}><th>{s.label}</th><td>{s.value}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
