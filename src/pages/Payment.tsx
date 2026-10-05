import { MessageSquare } from 'lucide-react'
import { INCLUDED_IN_PRICE, AVITO_PROFILE_URL } from '../data'

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
          <h2>До оплаты</h2>
          <ul className="terms-list">
            <li>Вы выбираете модель, память, цвет и версию SIM — в конфигураторе или сразу в сообщениях на Авито.</li>
            <li>Мы подтверждаем наличие конфигурации у проверенного поставщика и фиксируем полную стоимость и срок отправки.</li>
            <li>Заказ передаётся в работу только после согласования всех деталей.</li>
          </ul>
        </div>

        <div className="terms-block">
          <h2>Оплата</h2>
          <ul className="terms-list">
            <li><strong>100% предоплата</strong> полной стоимости заказа.</li>
            <li><strong>Цена на сайте — итоговая:</strong> подготовка уже включена ({INCLUDED_IN_PRICE.join(', ')}).</li>
            <li><strong>Доставка оплачивается отдельно</strong> — её стоимость и способ согласовываются до оплаты.</li>
            <li>Способ оплаты и реквизиты выдаются в личной переписке на Авито при согласовании заказа.</li>
          </ul>
        </div>

        <div className="terms-block">
          <h2>Доставка</h2>
          <ul className="terms-list">
            <li>СДЭК со страхованием на полную стоимость — по всей территории России.</li>
            <li>Личная передача в Санкт-Петербурге или Яндекс Go — по согласованию.</li>
            <li>Авито Доставка для сборных заказов с индивидуальной прошивкой не используется.</li>
          </ul>
        </div>

        <div className="terms-block">
          <h2>Сроки</h2>
          <ul className="terms-list">
            <li>Срок зависит от наличия конкретной конфигурации у поставщика и согласуется до оплаты.</li>
            <li>Телефон новый; коробка вскрывается для установки официальной сборки GrapheneOS и обязательного тестирования перед отправкой.</li>
          </ul>
        </div>

        <div className="terms-cta">
          <p>Готовы обсудить заказ? Напишите нам:</p>
          <a href={AVITO_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="btn-avito">
            <MessageSquare size={18} /> Написать продавцу на Авито
          </a>
        </div>
      </div>
    </section>
  )
}
