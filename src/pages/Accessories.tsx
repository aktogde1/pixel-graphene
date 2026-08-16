import { Shield, Award, CheckCircle2, ChevronRight } from 'lucide-react'
import { ACCESSORIES, fmt } from '../data'

const WHY_PREMIUM = [
  { title: 'Оригиналы, не реплики', text: 'Закупаем напрямую у официальных дистрибьюторов Pitaka, Spigen, UAG и Bellroy. Каждый чехол можно проверить по серийному номеру на сайте бренда.' },
  { title: 'Проверено на Pixel', text: 'Каждый аксессуар мы физически примеряем на конкретную модель: точные вырезы под камеру, кнопки и порт, никаких «универсальных» компромиссов.' },
  { title: 'Установка сразу', text: 'Стекло и чехол устанавливаем и проверяем до отправки — вы получаете телефон, готовый к использованию.' },
]

export default function Accessories() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow-blue">Аксессуары</p>
          <h1>Премиальная защита<br />для премиального телефона.</h1>
          <p className="lead">
            Никакого ширпотреба: только Pitaka, Spigen, UAG и Bellroy —
            бренды, которые делают чехлы для тех, кто не признаёт компромиссов.
            Любой аксессуар можно добавить к заказу прямо в карточке телефона.
          </p>
        </div>
      </section>

      <section className="acc-catalog">
        <div className="container">
          <div className="acc-catalog-grid">
            {ACCESSORIES.map(a => (
              <div className="acc-catalog-card" key={a.id}>
                <div className="acc-catalog-top">
                  <span className="acc-brand-badge">{a.brand}</span>
                  {a.tag && <span className="acc-tag-badge">{a.tag}</span>}
                </div>
                <div className="acc-catalog-icon">
                  {a.id === 'faraday' ? <Shield size={40} strokeWidth={1.2} /> : <Award size={40} strokeWidth={1.2} />}
                </div>
                <h3>{a.name}</h3>
                <p>{a.desc}</p>
                <div className="acc-catalog-bottom">
                  <span className="acc-catalog-price">{fmt(a.price)}</span>
                  <a href="#/phone/pixel-10-pro" className="link-buy">Добавить к заказу <ChevronRight size={15} /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Почему только премиум.</h2>
          <div className="g-sections">
            {WHY_PREMIUM.map((w, i) => (
              <div className="g-section" key={i}>
                <div className="pillar-icon"><CheckCircle2 size={24} strokeWidth={1.5} /></div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
          <a href="#/" className="btn-outline-dark">Выбрать телефон <ChevronRight size={16} /></a>
        </div>
      </section>
    </>
  )
}
