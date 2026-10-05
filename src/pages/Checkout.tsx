import { useState } from 'react'
import { MessageSquare, Copy, Check, ChevronLeft } from 'lucide-react'
import {
  SIM_OPTIONS, AVITO_PROFILE_URL,
  getModel, calcTotal, fmtRub, formatOrderSummary, type OrderConfig,
} from '../data'

export default function Checkout({ config }: { config: OrderConfig }) {
  const m = getModel(config.modelId)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const summary = formatOrderSummary(config)
    navigator.clipboard.writeText(summary)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section className="page-head checkout-page">
      <div className="container container-narrow">
        <a href={`#/phone/${config.modelId}`} className="checkout-back-link">
          <ChevronLeft size={16} /> Вернуться в конфигуратор
        </a>

        <p className="eyebrow-blue">Заказ через Авито</p>
        <h1>Ваша конфигурация готова к согласованию.</h1>
        <p className="lead">
          Мы работаем через официальный профиль на Авито с реальными отзывами. Скопируйте спецификацию заказа
          и отправьте её в диалог для подтверждения наличия, итоговой стоимости и сроков доставки.
        </p>

        {m && (
          <div className="checkout-card">
            <div className="checkout-card-header">
              <h2>Google {m.name}</h2>
              <span className="checkout-price">{fmtRub(calcTotal(config))}</span>
            </div>

            <ul className="checkout-specs-list">
              <li>
                <span className="spec-label">Цвет корпуса</span>
                <span className="spec-value">{config.color}</span>
              </li>
              <li>
                <span className="spec-label">Объём памяти</span>
                <span className="spec-value">{config.storage}</span>
              </li>
              <li>
                <span className="spec-label">Версия SIM</span>
                <span className="spec-value">{SIM_OPTIONS[config.sim].title}</span>
              </li>
              <li>
                <span className="spec-label">Операционная система</span>
                <span className="spec-value">GrapheneOS (чистая установка, закрытый загрузчик)</span>
              </li>
              <li>
                <span className="spec-label">Подготовка и проверка</span>
                <span className="spec-value">Включена в стоимость (подбор, выкуп, прошивка)</span>
              </li>
              <li>
                <span className="spec-label">Доставка</span>
                <span className="spec-value">СДЭК со страхованием на полную стоимость</span>
              </li>
            </ul>

            <div className="checkout-actions">
              <button
                type="button"
                onClick={handleCopy}
                className={`btn-copy-checkout ${copied ? 'copied' : ''}`}
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                <span>{copied ? 'Спецификация скопирована!' : 'Скопировать текст заказа'}</span>
              </button>

              <a
                href={AVITO_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-avito-checkout"
              >
                <MessageSquare size={18} />
                <span>Написать продавцу на Авито</span>
              </a>
            </div>

            <p className="checkout-hint">
              В диалоге на Авито вставьте скопированный текст. Мы сразу ответим по точным срокам поставки и реквизитам.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
