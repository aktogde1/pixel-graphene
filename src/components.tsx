import { useState } from 'react'
import { ShieldCheck, ShoppingBag, Menu, Send } from 'lucide-react'
import { TELEGRAM_URL } from './data'

export function navigate(to: string) {
  window.location.hash = to
}

const TICKER_ITEMS = ['готовим оплату в TON', 'telegram-бот скоро', 'цены предварительные']

export function DevBanner() {
  const line = TICKER_ITEMS.join('  ·  ') + '  ·  '
  return (
    <div className="dev-banner">
      <div className="dev-banner-top">
        <span className="dev-banner-badge">Beta</span>
        Сайт в разработке — каталог и конфигуратор уже открыты
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
        <a href="#/" className="nav-logo">
          <ShieldCheck size={22} strokeWidth={2.2} />
          Pixel<span>Shield</span>
        </a>
        <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          {link('/', 'Смартфоны')}
          {link('/devices', 'Устройства')}
          {link('/grapheneos', 'GrapheneOS')}
          {link('/accessories', 'Аксессуары')}
          {link('/payment', 'Оплата и доставка')}
        </ul>
        <div className="nav-actions">
          <span className="nav-phone nav-phone-tg" style={{pointerEvents:'none',opacity:'0.5'}}>В разработке</span>
          <span className="nav-tg" style={{pointerEvents:'none',opacity:'0.5'}}>В разработке</span>
          <a href="#/checkout" className="nav-cart" aria-label="Заказ"><ShoppingBag size={20} /></a>
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
            <h3><ShieldCheck size={20} /> PixelShield</h3>
            <p>Google Pixel с предустановленной GrapheneOS. Приватность под ключ — от закупки и аппаратной модификации до доставки.</p>
            <span className="footer-tg" style={{pointerEvents:'none',opacity:'0.5'}}>В разработке</span>
          </div>
          <div className="footer-col">
            <h4>Смартфоны</h4>
            <a href="#/phone/pixel-10-pro">Pixel 10 Pro</a>
            <a href="#/phone/pixel-10-pro-xl">Pixel 10 Pro XL</a>
            <a href="#/phone/pixel-10">Pixel 10</a>
            <a href="#/phone/pixel-10-pro-fold">Pixel 10 Pro Fold</a>
          </div>
          <div className="footer-col">
            <h4>Магазин</h4>
            <a href="#/accessories">Аксессуары</a>
            <a href="#/payment">Оплата и доставка</a>
            <a href="#/grapheneos">Что такое GrapheneOS</a>
          </div>
          <div className="footer-col">
            <h4>Связь</h4>
            <a href="#" style={{pointerEvents:'none',opacity:'0.5'}}>В разработке</a>
            <a href="#/terms">Условия и оферта</a>
            <a href="#/terms">Политика конфиденциальности</a>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 PixelShield. GrapheneOS — открытая операционная система. Google Pixel — товарный знак Google LLC.
        </div>
      </div>
    </footer>
  )
}
