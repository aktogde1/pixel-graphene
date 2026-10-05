import { Wallet, Truck, Clock, Send, FileCheck } from 'lucide-react'
import { INCLUDED_IN_PRICE, TELEGRAM_BOT_URL, TELEGRAM_CONTACT_URL } from '../data'

export default function Payment() {
  return (
    <section className="section terms-page">
      <div className="container container-narrow">
        <h1>Оплата и доставка.</h1>
        <p className="lead">
          Телефонов в наличии нет — только закупка под заказ. До оплаты мы согласуем
          с вами конфигурацию, наличие у поставщика, полную стоимость и срок отправки.
        </p>

        <div className="terms-block">
          <h2><FileCheck size={20} /> До оплаты</h2>
          <ul className="terms-list">
            <li>Вы выбираете модель, память, цвет и версию SIM — в конфигураторе или сразу в чате.</li>
            <li>Мы подтверждаем наличие конфигурации у поставщика и называем полную стоимость и срок отправки.</li>
            <li>Заказ передаётся в работу только после согласования всех условий.</li>
          </ul>
        </div>

        <div className="terms-block">
          <h2><Wallet size={20} /> Оплата</h2>
          <ul className="terms-list">
            <li><strong>100% предоплата</strong> полной стоимости заказа.</li>
            <li><strong>Цена на сайте — итоговая:</strong> подготовка уже включена ({INCLUDED_IN_PRICE.join(', ')}).</li>
            <li><strong>Доставка оплачивается отдельно</strong> — её стоимость и способ согласовываются до оплаты.</li>
            <li>Способ оплаты и реквизиты выдаются в переписке при согласовании заказа.</li>
          </ul>
        </div>

        <div className="terms-block">
          <h2><Truck size={20} /> Доставка</h2>
          <ul className="terms-list">
            <li>СДЭК со страхованием на полную стоимость — по всей России.</li>
            <li>Личная передача в Санкт-Петербурге или Яндекс Go — по согласованию.</li>
            <li>Авито Доставка не используется.</li>
          </ul>
        </div>

        <div className="terms-block">
          <h2><Clock size={20} /> Сроки</h2>
          <ul className="terms-list">
            <li>Срок зависит от наличия конкретной конфигурации у поставщика и согласуется до оплаты.</li>
            <li>Телефон новый; коробка вскрывается для установки GrapheneOS и проверки перед отправкой.</li>
          </ul>
        </div>

        <div className="terms-cta">
          <p>Готовы обсудить заказ? Напишите:</p>
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
