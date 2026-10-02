import { useState } from 'react'
import {
  Shield, Lock, Eye, Cpu, Battery, RefreshCw, ChevronDown, ChevronRight,
  Check, X,
} from 'lucide-react'
import {
  MODELS, IMG_FRONT, PILLARS, FEATURE_CARDS, COMPARE, FAQ,
  fmtRub, minTotal, phoneCardImg, realImg, type PhoneModel,
} from '../data'

/* ---- Карточка модели в каталоге ---- */
function HeroCard({ model, big }: { model: PhoneModel, big?: boolean }) {
  const img = phoneCardImg(model)
  const isViz = !realImg(model.id, model.colors[0])
  return (
    <div className={`hero-card ${model.gradient} ${big ? 'hero-card-big' : ''}`}>
      <div className="hero-card-top">
        <h2>{model.name}</h2>
        <p className="hero-tagline">{model.tagline}</p>
        <p className="hero-price">От {fmtRub(minTotal(model.id))}</p>
        <div className="hero-card-cta">
          <a href={`#/phone/${model.id}`} className="btn-outline">Подробнее</a>
          <a href={`#/phone/${model.id}`} className="link-buy">Купить <ChevronRight size={16} /></a>
        </div>
      </div>
      <div className="hero-card-img">
        <img src={img} alt={model.name} loading={big ? 'eager' : 'lazy'} />
        {isViz && <span className="viz-note-card">визуализация</span>}
      </div>
    </div>
  )
}

const PILLAR_ICONS = { shield: Shield, lock: Lock, eye: Eye, cpu: Cpu, battery: Battery, refresh: RefreshCw }

export default function Home() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const xl = MODELS.find(m => m.id === 'pixel-10-pro-xl')!
  const fold = MODELS.find(m => m.id === 'pixel-10-pro-fold')!
  const pro = MODELS.find(m => m.id === 'pixel-10-pro')!
  const a10 = MODELS.find(m => m.id === 'pixel-10a')!

  return (
    <>
      {/* Каталог */}
      <section className="catalog-hero">
        <div className="container">
          <div className="hero-grid">
            <HeroCard model={xl} big />
            <HeroCard model={fold} big />
          </div>
          <div className="hero-grid">
            <HeroCard model={pro} />
            <HeroCard model={a10} />
          </div>
          <div className="catalog-all">
            <a href="#/phones">Все модели каталога <ChevronRight size={16} /></a>
          </div>
        </div>
      </section>

      {/* Зачем GrapheneOS — тизер */}
      <section className="section">
        <div className="container">
          <p className="eyebrow-blue">Операционная система</p>
          <h2>Невероятная камера.<br />Беспрецедентная безопасность.</h2>
          <p className="lead">
            Всё, что есть в Pixel, плюс защита от слежки на уровне операционной системы.
            Мы устанавливаем GrapheneOS — открытую ОС, которой доверяют журналисты, активисты и спецслужбы.
          </p>
          <div className="pillars">
            {PILLARS.map((p, i) => {
              const Icon = PILLAR_ICONS[p.icon]
              return (
                <div className="pillar" key={i}>
                  <div className="pillar-icon"><Icon size={24} strokeWidth={1.5} /></div>
                  <p>{p.text}</p>
                </div>
              )
            })}
          </div>
          <a href="#/grapheneos" className="btn-outline-dark">Что такое GrapheneOS и зачем он вам <ChevronRight size={16} /></a>
        </div>
      </section>

      {/* Фичи-карточки */}
      <section className="feature-cards-section">
        <div className="container">
          <h2 className="fc-title">Что даёт GrapheneOS.</h2>
          <div className="fc-grid">
            {FEATURE_CARDS.map((c, i) => (
              <div className={`fc-card ${c.bg}`} key={i}>
                <h4>{c.title}</h4>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Тёмная витрина */}
      <section className="showcase">
        <div className="container showcase-inner">
          <div className="showcase-img">
            <img src={IMG_FRONT} alt="Pixel с GrapheneOS" loading="lazy" />
          </div>
          <div className="showcase-text">
            <h2>Защищает вас<br />и ваши данные.</h2>
            <p>GrapheneOS добавляет несколько слоёв защиты поверх стандартного Android: hardened memory allocator, network permissions, sensors permissions, exec-spawning, auto-reboot, PIN scrambling.</p>
            <p>Каждое приложение спрашивает разрешение только тогда, когда это нужно. Google сервисы живут в песочнице и не видят другие приложения.</p>
            <a href="#/grapheneos" className="btn-primary-dark">Узнать больше о GrapheneOS</a>
          </div>
        </div>
      </section>

      {/* Сравнение */}
      <section className="section">
        <div className="container">
          <h2>GrapheneOS vs Google Android.</h2>
          <p className="lead">Что меняется, когда вы переходите на Pixel с GrapheneOS</p>
          <div className="specs-table-wrap">
            <table className="specs-table">
              <thead>
                <tr><th></th><th>GrapheneOS</th><th>Google Android</th></tr>
              </thead>
              <tbody>
                {COMPARE.map((row, i) => (
                  <tr key={i}>
                    <td>{row.feature}</td>
                    <td>{typeof row.g === 'boolean' ? (row.g ? <Check color="var(--green)" size={20} /> : <X color="#d93025" size={20} />) : row.g}</td>
                    <td>{typeof row.a === 'boolean' ? (row.a ? <Check color="var(--green)" size={20} /> : <X color="#d93025" size={20} />) : row.a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section" id="faq">
        <div className="container">
          <h2>Частые вопросы.</h2>
          <p className="lead">Всё, что нужно знать перед заказом</p>
          <div className="faq-list">
            {FAQ.map((item, i) => (
              <div className="faq-item" key={i}>
                <div className={`faq-q ${faqOpen === i ? 'open' : ''}`} onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                  <span>{item.q}</span>
                  <ChevronDown className="icon" size={20} />
                </div>
                {faqOpen === i && <div className="faq-a open">{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
