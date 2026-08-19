import { Send, Bitcoin, CreditCard, Wallet, Truck, ShieldCheck, Timer } from 'lucide-react'
import { TELEGRAM_URL, TELEGRAM_BOT } from '../data'

const PAY_METHODS = [
  { icon: Bitcoin, title: 'Toncoin (TON)', text: 'Нативная монета экосистемы Telegram. Бот выдаёт адрес и сумму — перевод занимает минуту, комиссия копеечная.' },
  { icon: Wallet, title: 'USDT в сети TON', text: 'Стейблкоин, привязанный к доллару: курс фиксируется в момент оплаты, без сюрпризов волатильности.' },
  { icon: Send, title: 'Telegram Wallet', text: 'Оплата прямо внутри Telegram, без обменников и сторонних приложений — бот подтвердит платёж автоматически.' },
  { icon: CreditCard, title: 'Международные карты', text: 'Visa / Mastercard / UnionPay через платёжный шлюз в боте. Подходит для заказов из любой страны.' },
]

const DELIVERY = [
  { icon: Timer, title: '3–7 рабочих дней', text: 'Закупка, установка GrapheneOS, аппаратные модификации, тестирование, упаковка.' },
  { icon: Truck, title: 'СДЭК по всей России', text: 'До пункта выдачи или курьером до двери. Страховка груза на полную стоимость включена в цену.' },
  { icon: ShieldCheck, title: 'Проверка при получении', text: 'Телефон загружается в GrapheneOS с verified boot — вы видите, что система не модифицирована третьими лицами.' },
]

export default function Payment() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow-blue">Оплата и доставка</p>
<h1>В разработке</h1>
        <p className="lead">
          Страница в разработке — функционал появится позже
        </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2>Способы оплаты.</h2>
          <p className="lead">Оплата в экосистеме TON — быстро, международно и без банковских блокировок</p>
          <div className="pay-grid">
            {PAY_METHODS.map((p, i) => (
              <div className="pay-card" key={i}>
                <div className="pay-icon"><p.icon size={26} strokeWidth={1.5} /></div>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
          <div className="pay-note">
            100% предоплата. Телефон закупается только после подтверждения платежа — поэтому мы не держим склад и не завышаем цены.
          </div>
        </div>
      </section>

      <section className="section specs-section">
        <div className="container">
          <h2>Доставка.</h2>
          <p className="lead">Информация о доставке уточняется в разработке</p>
          <div className="pay-grid">
            {DELIVERY.map((d, i) => (
              <div className="pay-card" key={i}>
                <div className="pay-icon"><d.icon size={26} strokeWidth={1.5} /></div>
                <h4>{d.title}</h4>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
          <a href="#" style={{pointerEvents:'none',opacity:'0.5'}} className="btn-tg" style={{ marginTop: 40 }}>
              <Send size={18} /> В разработке
            </a>
        </div>
      </section>
    </>
  )
}
