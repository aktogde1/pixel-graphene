import { Send } from 'lucide-react'
import {
  SIM_OPTIONS, TELEGRAM_BOT_URL, TELEGRAM_CONTACT_URL,
  getModel, calcTotal, fmtRub, type OrderConfig,
} from '../data'

export default function Checkout({ config }: { config: OrderConfig }) {
  const m = getModel(config.modelId)
  return (
    <section className="page-head">
      <div className="container">
        <p className="eyebrow-blue">Оформление заказа</p>
        <h1>Оформление из конфигуратора пока не подключено.</h1>
        <p className="lead">
          Сквозная передача заказа в бот появится позже. Сейчас вы можете выбрать конфигурацию здесь,
          а затем сообщить её в чате — вручную или скопировав текст ниже.
        </p>

        {m && (
          <div className="terms-block" style={{ textAlign: 'left' }}>
            <h2>Ваша конфигурация</h2>
            <ul className="terms-list">
              <li><strong>Модель:</strong> Google {m.name}</li>
              <li><strong>Цвет:</strong> {config.color}</li>
              <li><strong>Память:</strong> {config.storage}</li>
              <li><strong>SIM:</strong> {SIM_OPTIONS[config.sim].title}</li>
              <li><strong>Итоговая стоимость (подготовка включена):</strong> {fmtRub(calcTotal(config))}</li>
            </ul>
            <p style={{ marginTop: 12, fontFamily: 'monospace', fontSize: 14 }}>
              {`${m.name}, ${config.color}, ${config.storage}, ${SIM_OPTIONS[config.sim].title}`}
            </p>
          </div>
        )}

        <div className="terms-cta">
          <p>Заказ и вопросы по конфигурации:</p>
          <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="btn-tg">
            <Send size={18} /> @PixelReadyBot
          </a>
          <p style={{ marginTop: 10 }}>
            или лично: <a href={TELEGRAM_CONTACT_URL} target="_blank" rel="noopener noreferrer">@aktogde1</a>
          </p>
        </div>
      </div>
    </section>
  )
}
