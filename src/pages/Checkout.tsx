import { Send, ChevronRight, Check, MicOff, CameraOff, PenTool, Shield, Zap, Smartphone } from 'lucide-react'
import {
  getModel, calcTotal, fmt, fmtRub, orderDeepLink,
  ACCESSORIES, HARDWARE_MODS, ENGRAVING_PRICE, TELEGRAM_URL,
  phoneCardImg, type OrderConfig,
} from '../data'

export default function Checkout({ config }: { config: OrderConfig }) {
  return (
    <section className="page-head">
      <div className="container">
        <p className="eyebrow-blue">Оформление заказа</p>
        <h1>В разработке</h1>
        <p className="lead">
          Страница в разработке — функционал появится позже
        </p>
      </div>
    </section>
  )
}
      <section className="page-head">
        <div className="container">
          <p className="eyebrow-blue">Оформление заказа</p>
          <h1>Ваш заказ.</h1>
          <p className="lead">Проверьте конфигурацию и завершите оформление в Telegram-боте — там же проходит оплата.</p>
        </div>
      </section>

      <section className="checkout-section">
        <div className="container checkout-grid">
          <div className="checkout-summary">
            <div className="checkout-phone">
              <img src={phoneCardImg(m, config.color)} alt={m.name} loading="lazy" />
            </div>
            <h2>Google {m.name}</h2>
            <ul className="checkout-lines">
              <li><span><Smartphone size={14} /> Модель</span><span>{m.name}</span></li>
              <li><span><Shield size={14} /> Цвет</span><span>{config.color}</span></li>
              <li><span><Check size={14} /> Память</span><span>{config.storage}</span></li>
              <li><span><Zap size={14} /> SIM</span><span>{config.sim === 'esim' ? 'eSIM' : 'Физическая nano-SIM'}</span></li>
              {config.engraving.trim() && (
                <li><span><PenTool size={14} /> Гравировка</span><span>«{config.engraving.trim()}»</span></li>
              )}
              {config.hwMods.includes('mics') && (
                <li className="line-danger"><span><MicOff size={14} /> Модификация</span><span>без микрофонов и датчиков</span></li>
              )}
              {config.hwMods.includes('cameras') && (
                <li className="line-danger"><span><CameraOff size={14} /> Модификация</span><span>без камер</span></li>
              )}
            </ul>
            <ul className="price-lines">
              {lines.map((l, i) => (
                <li key={i} className={l.danger ? 'line-danger' : ''}><span>{l.label}</span><span>{l.value}</span></li>
              ))}
              <li><span>GrapheneOS + настройка + доставка СДЭК</span><span>включено</span></li>
            </ul>
            <div className="checkout-total">
              <span>Итого</span>
              <span>{hasConfig ? fmtRub(total) : '—'}</span>
            </div>
            <a href={`#/phone/${m.id}`} className="checkout-edit">Изменить конфигурацию <ChevronRight size={14} /></a>
          </div>

          <div className="checkout-steps">
            <h3>Как завершить заказ</h3>
            <div className="checkout-step">
              <div className="checkout-step-num">1</div>
              <div>
                <h4>Откройте Telegram-бота</h4>
                <p>По кнопке ниже бот запустится с уже вложенной конфигурацией — ничего вводить заново не нужно.</p>
              </div>
            </div>
            <div className="checkout-step">
              <div className="checkout-step-num">2</div>
              <div>
                <h4>Подтвердите и оплатите</h4>
                <p>Бот выдаст реквизиты: Toncoin, USDT (TON), Telegram Wallet или международная карта через платёжный шлюз.</p>
              </div>
            </div>
            <div className="checkout-step">
              <div className="checkout-step-num">3</div>
              <div>
                <h4>Получите телефон</h4>
                <p>3–7 рабочих дней на сборку и отправка СДЭК со страховкой на полную стоимость. Трек-номер пришлёт бот.</p>
              </div>
            </div>
            <a href={orderDeepLink(config)} target="_blank" rel="noreferrer" className="btn-tg btn-tg-full">
              <Send size={18} /> Перейти в бота и оплатить
            </a>
            <p className="order-note">
              Если кнопка не открылась — найдите в Telegram <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="tg-inline">@{TELEGRAM_URL.split('/').pop()}</a> и отправьте ему конфигурацию сообщением.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
