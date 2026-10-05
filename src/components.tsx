import { useState } from 'react'
import { ShieldCheck, Menu, Send } from 'lucide-react'
import { TELEGRAM_BOT_URL, TELEGRAM_CONTACT_URL } from './data'

export function navigate(to: string) {
  window.location.hash = to
}

const TICKER_ITEMS = ['заказ через Telegram-бота', 'телефоны под заказ', 'подготовка включена в цену']

export function DevBanner() {
  const line = TICKER_ITEMS.join('  ·  ') + '  ·  '
  return (
    <div className="dev-banner">
      <div className="dev-banner-top">
        <span className="dev-banner-badge">Beta</span>
        Каталог открыт — оформление заказа из конфигуратора пока не подключено, заказ через Telegram
      </div>
      <div className="dev-banner-tick">
        <span className="dev-banner-track">{line}{line}{line}</span>
      </div>
    </div>
  )
}

export function Nav({ route }: { route: string }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const link = (to: string, label: string) => (
    <li>
      <a
        href={`#${to}`}
        className={route === to ? 'active' : ''}
        onClick={() => setMobileOpen(false)}
      >
        {label}
      </a>
    </li>
  )
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#/" className="nav-logo" aria-label="Your Pixel with Graphene — на главную">
          <ShieldCheck size={22} strokeWidth={2.2} />
          Your Pixel<span> with Graphene</span>
        </a>
        <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          {link('/', 'Смартфоны')}
          {link('/grapheneos', 'GrapheneOS')}
          {link('/graphene', 'Графен')}
          {link('/payment', 'Оплата и доставка')}
          {link('/terms', 'Условия')}
        </ul>
        <div className="nav-actions">
          <a
            href={TELEGRAM_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-tg nav-tg-wide"
            aria-label="Заказать в Telegram-боте @PixelReadyBot"
          >
            <Send size={18} />
            <span>Заказать в Telegram</span>
          </a>
          <button className="nav-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Меню"><Menu size={20} /></button>
        </div>
      </div>
    </nav>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <h3><ShieldCheck size={20} /> Your Pixel with Graphene</h3>
            <p>Новые Google Pixel с предустановленной GrapheneOS под заказ: подбор, установка системы, доставка.</p>
            <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="footer-tg">
              <Send size={16} /> @PixelReadyBot
            </a>
          </div>
          <div className="footer-col">
            <h4>Смартфоны</h4>
            <a href="#/phone/pixel-10-pro">Pixel 10 Pro</a>
            <a href="#/phone/pixel-10-pro-xl">Pixel 10 Pro XL</a>
            <a href="#/phone/pixel-10-pro-fold">Pixel 10 Pro Fold</a>
            <a href="#/phone/pixel-10a">Pixel 10a</a>
          </div>
          <div className="footer-col">
            <h4>Информация</h4>
            <a href="#/grapheneos">Что такое GrapheneOS</a>
            <a href="#/graphene">Графен как материал</a>
            <a href="#/payment">Оплата и доставка</a>
            <a href="#/terms">Условия покупки</a>
          </div>
          <div className="footer-col">
            <h4>Связь</h4>
            <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer">Заказ — @PixelReadyBot</a>
            <a href={TELEGRAM_CONTACT_URL} target="_blank" rel="noopener noreferrer">Вопросы — @aktogde1</a>
            <a href="#/terms">Условия и оферта</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-indep">Не связано с Google или проектом GrapheneOS.</p>
          © 2026 Your Pixel with Graphene. GrapheneOS — открытая операционная система. Google Pixel — товарный знак Google LLC.
        </div>
      </div>
    </footer>
  )
}
