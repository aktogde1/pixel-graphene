import { useState } from 'react'
import {
  ChevronDown, ChevronRight, Check, X, Quote, MessageSquare
} from 'lucide-react'
import {
  MODELS, IMG_FRONT, PILLARS, FEATURE_CARDS, COMPARE, FAQ, REVIEWS,
  AVITO_PROFILE_URL,
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
          <a href={`#/phone/${model.id}`} className="btn-outline">Конфигуратор</a>
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
            Всё, что есть в Pixel, плюс контроль над данными на уровне операционной системы.
            Мы устанавливаем GrapheneOS — открытую ОС, код которой может проверить каждый.
          </p>
          <div className="pillars-clean">
            {PILLARS.map((p, i) => (
              <div className="pillar-clean-card" key={i}>
                <span className="pillar-clean-num">0{i + 1}</span>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
          <a href="#/grapheneos" className="btn-outline-dark" style={{ marginTop: 24, display: 'inline-flex' }}>
            Что такое GrapheneOS и предыстория названия <ChevronRight size={16} />
          </a>
        </div>
      </section>

      {/* Фичи-карточки */}
      <section className="feature-cards-section">
        <div className="container">
          <h2 className="fc-title">Что даёт GrapheneOS.</h2>
          <p className="fc-intro">
            <strong>Почему Pixel + GrapheneOS:</strong> дополнительные защиты системы работают
            на аппаратной безопасности Pixel — чип Titan M2, проверенная загрузка, обновления
            7 лет с выпуска модели. Современные телефоны и так имеют встроенные защиты;
            здесь к ним добавляется открытая система, чей код можно проверить.
          </p>
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
            <p>Каждое приложение спрашивает разрешение только тогда, когда это нужно. Google-сервисы работают в песочнице как обычные приложения — без системных привилегий и в рамках выданных разрешений.</p>
            <a href="#/grapheneos" className="btn-primary-dark">Узнать больше о GrapheneOS</a>
          </div>
        </div>
      </section>

      {/* Сравнение */}
      <section className="section">
        <div className="container">
          <h2>GrapheneOS vs Google Android.</h2>
          <p className="lead">
            Сравнение со стандартной системой Pixel. Базовые защиты аппарата есть в обеих:
            verified boot, изоляция приложений, шифрование. Разница — в приватности
            на уровне системы. Срок поддержки безопасности определяется производителем
            и у 10-й серии одинаков: 7 лет с выпуска модели.
          </p>
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

      {/* Отзывы */}
      <section className="section reviews-section">
        <div className="container">
          <p className="eyebrow-blue">Отзывы</p>
          <h2>Что говорят покупатели.</h2>
          <p className="lead">Реальные отрывки из отзывов на Авито — без редактуры текста</p>
          <div className="reviews-grid">
            {REVIEWS.map((r, i) => (
              <div className="review-card" key={i}>
                <Quote size={22} strokeWidth={1.5} />
                <p className="review-text">{r.text}</p>
                <span className="review-source">{r.source}</span>
              </div>
            ))}
          </div>
          <a href={AVITO_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="reviews-link">
            Все отзывы — профиль продавца на Авито <ChevronRight size={16} />
          </a>
          <div className="reviews-cta">
            <a href={AVITO_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="btn-avito">
              <MessageSquare size={17} /> Написать на Авито
            </a>
            <a href="#/payment" className="btn-outline-dark">
              Условия оплаты и доставки
            </a>
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
