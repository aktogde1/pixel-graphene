import { useEffect, useState } from 'react'
import {
  Check, X, MicOff, CameraOff, PenTool, Smartphone, Zap, Shield,
  Truck, ShieldCheck, Send, ChevronRight
} from 'lucide-react'
import {
  MODELS, COLOR_HEX, COLOR_IMG, IMG_FRONT, IMG_FOLD, STORAGE_DELTA,
  ENGRAVING_PRICE, ENGRAVING_MAX, ACCESSORIES, HARDWARE_MODS,
  getModel, calcTotal, fmt, fmtRub, realImg,
  type OrderConfig,
} from '../data'
import { navigate } from '../components'

interface Props {
  id: string
  config: OrderConfig
  setConfig: (c: OrderConfig) => void
}

export default function Product({ id, config, setConfig }: Props) {
  const m = getModel(id)
  const [view, setView] = useState<'back' | 'front'>('back')

  // при смене модели — сбрасываем недоступные опции
  useEffect(() => {
    const next = { ...config, modelId: m.id }
    if (!m.colors.includes(next.color)) next.color = m.colors[0]
    if (!m.storage.includes(next.storage)) next.storage = m.storage[0]
    setConfig(next)
    setView('back')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const set = (patch: Partial<OrderConfig>) => setConfig({ ...config, ...patch })
  const toggle = (key: 'accessories' | 'hwMods', val: string) =>
    set({ [key]: config[key].includes(val) ? config[key].filter(x => x !== val) : [...config[key], val] } as Partial<OrderConfig>)

  const total = calcTotal(config)
  // Реальные рендеры: 'back' — крупный план спинки, 'card' — композиция с фронтом
  const realBack = realImg(m.id, config.color, 'back')
  const realFront = realImg(m.id, config.color, 'card')
  const isReal = !!realBack
  const fallbackBack = m.fold ? IMG_FOLD : COLOR_IMG[config.color] || IMG_FRONT
  const mainImg = view === 'front' ? (realFront || IMG_FRONT) : (realBack || fallbackBack)
  const versionStr = `${m.name} · ${config.color} · ${config.storage} · ${config.sim === 'esim' ? 'eSIM' : 'nano-SIM'}`

  const specs = [
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
  ]

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
            {config.engraving.trim() && view === 'back' && !m.fold && (
              <div className="engraving-preview">Гравировка: «{config.engraving.trim()}»</div>
            )}
            <div className="stage-chips">
              {config.hwMods.includes('mics') && <span className="chip chip-danger"><MicOff size={12} /> без микрофонов</span>}
              {config.hwMods.includes('cameras') && <span className="chip chip-danger"><CameraOff size={12} /> без камер</span>}
              {config.accessories.includes('faraday') && <span className="chip"><Shield size={12} /> чехол Фарадея</span>}
            </div>
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
                {MODELS.filter(x => x.series.includes('10')).map(x => (
                  <button key={x.id} className={`opt-model ${id === x.id ? 'active' : ''}`} onClick={() => navigate(`/phone/${x.id}`)}>
                    {x.name}
                  </button>
                ))}
              </div>
              <a href="#/phones" className="opt-all-models">Все 9 моделей, включая серию 9 <ChevronRight size={14} /></a>
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
                {m.storage.map(s => (
                  <button key={s} className={`opt-card ${config.storage === s ? 'active' : ''}`} onClick={() => set({ storage: s })}>
                    <span className="opt-card-title">{s}</span>
                    <span className="opt-card-sub">{STORAGE_DELTA[s] ? `+${fmt(STORAGE_DELTA[s])}` : 'в базе'}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* SIM */}
            <div className="opt-block">
              <h3 className="opt-label">SIM</h3>
              <div className="opt-cards">
                <button className={`opt-card ${config.sim === 'esim' ? 'active' : ''}`} onClick={() => set({ sim: 'esim' })}>
                  <Zap size={18} />
                  <span className="opt-card-title">eSIM</span>
                  <span className="opt-card-sub">Активация QR-кодом</span>
                </button>
                <button className={`opt-card ${config.sim === 'nano' ? 'active' : ''}`} onClick={() => set({ sim: 'nano' })}>
                  <Smartphone size={18} />
                  <span className="opt-card-title">Физическая SIM</span>
                  <span className="opt-card-sub">Классическая nano-SIM</span>
                </button>
              </div>
            </div>

            {/* Гравировка */}
            <div className="opt-block">
              <h3 className="opt-label">Гравировка</h3>
              <div className="opt-cards">
                <button className={`opt-card ${!config.engraving && 'active' || ''}`} onClick={() => set({ engraving: '' })}>
                  <X size={18} />
                  <span className="opt-card-title">Без гравировки</span>
                </button>
                <button className={`opt-card ${config.engraving ? 'active' : ''}`} onClick={() => document.getElementById('engraving-field')?.focus()}>
                  <PenTool size={18} />
                  <span className="opt-card-title">С гравировкой</span>
                  <span className="opt-card-sub">+{fmt(ENGRAVING_PRICE)}</span>
                </button>
              </div>
              <div className="engraving-input">
                <input
                  id="engraving-field"
                  className="form-input"
                  placeholder={`Текст на задней панели, до ${ENGRAVING_MAX} символов`}
                  maxLength={ENGRAVING_MAX}
                  value={config.engraving}
                  onChange={e => set({ engraving: e.target.value })}
                />
                <span className="engraving-count">{config.engraving.length}/{ENGRAVING_MAX}</span>
              </div>
            </div>

            {/* Аксессуары */}
            <div className="opt-block">
              <h3 className="opt-label">Аксессуары</h3>
              <div className="acc-list">
                {ACCESSORIES.map(a => (
                  <button key={a.id} className={`acc-item ${config.accessories.includes(a.id) ? 'active' : ''}`} onClick={() => toggle('accessories', a.id)}>
                    <div className="acc-icon acc-brand">{a.brand.slice(0, 2)}</div>
                    <div className="acc-body">
                      <span className="acc-name">{a.brand} {a.name}</span>
                      <span className="acc-desc">{a.desc}</span>
                    </div>
                    <div className="acc-right">
                      <span className="acc-price">+{fmt(a.price)}</span>
                      <span className="acc-check">{config.accessories.includes(a.id) && <Check size={13} strokeWidth={3} />}</span>
                    </div>
                  </button>
                ))}
              </div>
              <a href="#/accessories" className="opt-all-models">Подробнее об аксессуарах <ChevronRight size={14} /></a>
            </div>

            {/* Аппаратные модификации */}
            <div className="opt-block">
              <h3 className="opt-label">Аппаратные модификации <span className="opt-label-tag">опционально</span></h3>
              <p className="opt-hint">По технологии Nitrophone: для максимальных требований к безопасности компоненты удаляются физически. Модификации необратимы.</p>
              <div className="acc-list">
                {HARDWARE_MODS.map(h => (
                  <button key={h.id} className={`acc-item acc-danger ${config.hwMods.includes(h.id) ? 'active' : ''}`} onClick={() => toggle('hwMods', h.id)}>
                    <div className="acc-icon">{h.id === 'mics' ? <MicOff size={22} strokeWidth={1.6} /> : <CameraOff size={22} strokeWidth={1.6} />}</div>
                    <div className="acc-body">
                      <span className="acc-name">{h.name}</span>
                      <span className="acc-desc">{h.desc}</span>
                    </div>
                    <div className="acc-right">
                      <span className="acc-price">+{fmt(h.price)}</span>
                      <span className="acc-check">{config.hwMods.includes(h.id) && <Check size={13} strokeWidth={3} />}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Цена + CTA */}
            <div className="price-block">
              <div className="price-value">{fmtRub(total)}</div>
              <div className="price-version">Версия: {versionStr}</div>
              <ul className="price-lines">
                {config.engraving.trim() && <li><span>Гравировка</span><span>+{fmt(ENGRAVING_PRICE)}</span></li>}
                {ACCESSORIES.filter(a => config.accessories.includes(a.id)).map(a => (
                  <li key={a.id}><span>{a.brand} {a.name}</span><span>+{fmt(a.price)}</span></li>
                ))}
                {HARDWARE_MODS.filter(h => config.hwMods.includes(h.id)).map(h => (
                  <li key={h.id} className="line-danger"><span>{h.name}</span><span>+{fmt(h.price)}</span></li>
                ))}
                <li><span>GrapheneOS + настройка + доставка СДЭК</span><span>включено</span></li>
              </ul>
              <a href="#" style={{pointerEvents:'none',opacity:'0.5'}} className="btn-tg btn-tg-full">
                <Send size={18} /> В разработке
              </a>
              <a href="#/checkout" className="btn-buy-alt">Оплата и доставка</a>
              <div className="price-badges">
                <span><Truck size={14} /> 3–7 дней до отправки</span>
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
