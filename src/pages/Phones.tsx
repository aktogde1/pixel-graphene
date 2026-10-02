import { ChevronRight } from 'lucide-react'
import { MODELS, COLOR_HEX, fmtRub, minTotal, phoneCardImg } from '../data'

export default function Phones() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow-blue">Каталог</p>
          <h1>Все смартфоны.</h1>
          <p className="lead">
            Новые Pixel 10-й серии с предустановленной GrapheneOS. К цене устройства
            добавляется подготовка — 25 000 руб.
          </p>
        </div>
      </section>
      <section className="phones-list">
        <div className="container">
          <div className="phones-grid">
            {MODELS.map(m => (
              <a href={`#/phone/${m.id}`} className="phone-row" key={m.id}>
                <div className={`phone-row-img ${m.gradient}`}>
                  <img src={phoneCardImg(m)} alt={m.name} loading="lazy" />
                </div>
                <div className="phone-row-body">
                  <h3>{m.name}</h3>
                  <p>{m.display} · {m.chip} · {m.ram}</p>
                  <div className="phone-row-colors">
                    {m.colors.map(c => <span key={c} className="phone-row-dot" title={c} style={{ background: COLOR_HEX[c] }} />)}
                  </div>
                </div>
                <div className="phone-row-right">
                  <span className="phone-row-price">от {fmtRub(minTotal(m.id))}</span>
                  <span className="link-buy">Подробнее <ChevronRight size={15} /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
