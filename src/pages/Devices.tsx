import { Tablet, Laptop, Router, BatteryCharging, Send, ChevronRight } from 'lucide-react'
import { DEVICE_CATEGORIES, fmtRub, type DeviceCategory } from '../data'

const CAT_ICONS = {
  tablet: Tablet,
  laptop: Laptop,
  router: Router,
  power: BatteryCharging,
}

function CategoryBlock({ cat }: { cat: DeviceCategory }) {
  const Icon = CAT_ICONS[cat.icon]
  return (
    <section className="device-cat" id={cat.id}>
      <div className="container">
        <div className="device-cat-head">
          <div className="device-cat-icon"><Icon size={30} strokeWidth={1.4} /></div>
          <div>
            <h2>{cat.headline}</h2>
            <p>{cat.text}</p>
          </div>
        </div>
        <div className="device-grid">
          {cat.items.map(d => (
            <div className="device-card" key={d.id}>
              <h3>{d.name}</h3>
              <p>{d.desc}</p>
              <div className="device-card-bottom">
                <span className="device-price">{fmtRub(d.price)}</span>
                <a href="#" style={{pointerEvents:'none',opacity:'0.5'}} className="link-buy">
                  В разработке <ChevronRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Devices() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow-blue">Экосистема цифровой гигиены</p>
          <h1>Не только телефоны.</h1>
          <p className="lead">
            Приватность не заканчивается смартфоном: планшеты для детей без цифрового следа,
            ноутбуки ThinkPad с Linux, LTE-роутеры, которые прячут ваш телефон от оператора,
            и честное питание. Всё настраиваем и проверяем перед отправкой.
          </p>
        </div>
      </section>

      {DEVICE_CATEGORIES.map(cat => <CategoryBlock cat={cat} key={cat.id} />)}

      <section className="order-teaser">
        <div className="container order-teaser-inner">
          <div>
            <h2>Не нашли нужное?</h2>
            <p>Функционал заказа под заказ в разработке.</p>
          </div>
          <a href="#" style={{pointerEvents:'none',opacity:'0.5'}} className="btn-tg">
            <Send size={18} /> В разработке
          </a>
        </div>
      </section>
    </>
  )
}