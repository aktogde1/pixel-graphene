import { Send, ChevronRight, Check, MicOff, CameraOff, PenTool, Shield, Zap, Smartphone } from 'lucide-react'
import {
  getModel, calcTotal, fmt, fmtRub,
  ACCESSORIES, HARDWARE_MODS, ENGRAVING_PRICE,
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