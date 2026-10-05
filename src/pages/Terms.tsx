import { FileText, RefreshCcw, ShieldCheck, Lock, Truck, Wallet } from 'lucide-react'
import { INCLUDED_IN_PRICE, TELEGRAM_BOT_URL, TELEGRAM_CONTACT_URL } from '../data'

export default function Terms() {
  return (
    <section className="section terms-page">
      <div className="container container-narrow">
        <h1>Условия покупки.</h1>
        <p className="lead">
          Коротко и по-честному о том, как мы работаем. Сайт — витрина: он не принимает
          платежи и не оформляет заказы автоматически, все условия сделки согласуются с вами
          до оплаты.
        </p>

        <div className="terms-block">
          <h2><FileText size={20} /> Предмет и порядок</h2>
          <ul className="terms-list">
            <li><strong>Предмет.</strong> Новые смартфоны Google Pixel с предустановленной GrapheneOS под заказ.</li>
            <li><strong>Наличие.</strong> Телефонов в наличии нет — только закупка под заказ под вашу конфигурацию.</li>
            <li><strong>Согласование до оплаты.</strong> Конфигурация, наличие у поставщика, полная стоимость и срок отправки фиксируются до того, как вы платите.</li>
            <li><strong>Предоплата.</strong> 100% предоплата полной стоимости заказа.</li>
          </ul>
        </div>

        <div className="terms-block">
          <h2><Wallet size={20} /> Стоимость</h2>
          <ul className="terms-list">
            <li><strong>Цена телефона — итоговая,</strong> по каталогу на сайте: зависит от модели и памяти, подготовка уже включена.</li>
            <li><strong>Что входит в цену:</strong> {INCLUDED_IN_PRICE.join(', ')}.</li>
            <li><strong>Доставка</strong> в цену не включена — её стоимость и условия согласуются до оплаты.</li>
            <li>Мы не обещаем отправку в день оплаты: срок закупки зависит от поставщика и согласовывается заранее.</li>
          </ul>
        </div>

        <div className="terms-block">
          <h2><Truck size={20} /> Доставка</h2>
          <ul className="terms-list">
            <li>СДЭК со страхованием на полную стоимость — по всей России.</li>
            <li>Личная передача в Санкт-Петербурге или Яндекс Go — по согласованию.</li>
            <li>Авито Доставка не используется.</li>
            <li>Телефон новый, но коробка вскрывается: мы устанавливаем GrapheneOS вместо заводской системы и проверяем устройство перед отправкой.</li>
          </ul>
        </div>

        <div className="terms-block">
          <h2><RefreshCcw size={20} /> Гарантия, возврат, поддержка</h2>
          <ul className="terms-list">
            <li>Условия гарантии, возврата и дальнейшей поддержки обсуждаются и фиксируются до оплаты — для каждого заказа.</li>
            <li>Гарантийные обязательства производителя Google на работу GrapheneOS не распространяются; уточняйте условия до оплаты.</li>
          </ul>
        </div>

        <div className="terms-block">
          <h2><Lock size={20} /> Персональные данные</h2>
          <ul className="terms-list">
            <li>Сайт не содержит форм, аккаунтов, cookies-трекеров и аналитики.</li>
            <li>Всё общение и передача данных для заказа — в Telegram: минимум информации, необходимой для исполнения заказа (адрес доставки, телефон для СДЭК).</li>
            <li>Данные не продаются и не передаются третьим лицам, кроме перевозчика (СДЭК).</li>
          </ul>
        </div>

        <div className="terms-block">
          <h2><ShieldCheck size={20} /> Реквизиты и статус</h2>
          <ul className="terms-list">
            <li>Сайт не публикует реквизиты и не принимает платежи: способ оплаты и реквизиты выдаются в переписке при согласовании заказа.</li>
            <li>Договорённости по каждому заказу фиксируются в переписке до оплаты.</li>
          </ul>
        </div>

        <div className="terms-cta">
          <p>Остались вопросы по условиям?</p>
          <a href={TELEGRAM_CONTACT_URL} target="_blank" rel="noopener noreferrer" className="btn-tg">
            Написать лично — @aktogde1
          </a>
          <p style={{ marginTop: 10 }}>
            или бот для заказов: <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer">@PixelReadyBot</a>
          </p>
        </div>
      </div>
    </section>
  )
}
