import {
  Shield, Lock, Cpu, KeyRound, Wifi, Fingerprint, RefreshCw,
  HardDrive, Users, Globe, ChevronRight, Check, UserX, BluetoothOff
} from 'lucide-react'
import { IMG_FRONT, fmtRub, minTotal, OSS_APPS, realImg } from '../data'

const SECTIONS = [
  {
    icon: Shield,
    title: 'Что такое GrapheneOS',
    text: 'GrapheneOS — открытая мобильная операционная система на базе Android, созданная некоммерческим проектом в 2014 году. Её единственная цель — приватность и безопасность. Никакой рекламы, никакой телеметрии, никаких обязательных аккаунтов. Код открыт и аудируется независимыми исследователями по всему миру.',
  },
  {
    icon: Lock,
    title: 'Зачем это нужно именно вам',
    text: 'Стандартный Android отправляет телеметрию в Google: статистику использования, рекламные идентификаторы. GrapheneOS убирает это на уровне системы и даёт точный контроль: вы решаете, что приложение видит — вплоть до выдачи пустого хранилища вместо запрета.',
  },
  {
    icon: Cpu,
    title: 'Почему именно Pixel',
    text: 'GrapheneOS официально поддерживает только Google Pixel: его дополнительные защиты работают на сильной аппаратной базе — чип безопасности Titan M2, перепрошиваемый verified boot с возможностью переблокировки загрузчика, изолированный secure element. Поддерживаемость конкретной модели и разблокировку загрузчика мы проверяем перед установкой. Современные телефоны и на других системах имеют встроенные защиты — но GrapheneOS официально выпускается только для Pixel.',
  },
]

const DEEP_FEATURES = [
  { icon: Lock, title: 'Sandboxed Google Play', text: 'Google Play и сервисы устанавливаются по желанию как обычные приложения в песочнице — без системных привилегий, в рамках выданных разрешений. Работают банки, карты и мессенджеры.' },
  { icon: KeyRound, title: 'PIN scrambling и duress PIN', text: 'Цифры на экране блокировки перемешиваются, чтобы код нельзя было подсмотреть. Duress PIN — не автоопределение кражи: при вводе этого специального кода телефон необратимо стирает данные.' },
  { icon: Wifi, title: 'Network permission', text: 'Запретите конкретному приложению прямой доступ в интернет — на уровне системы, а не файрвола-посредника. Другие каналы обмена это не отменяет, но сеть под вашим контролем.' },
  { icon: Fingerprint, title: 'Sensors permission', text: 'Акселерометр, гироскоп, барометр — по умолчанию отключены для всех приложений: через них можно слушать и отслеживать.' },
  { icon: HardDrive, title: 'Storage Scopes', text: 'Вместо «все фото или никаких» — приложение, запросившее всё хранилище, видит только явно выданные ему файлы. Автоматического доступа ко всему хранилищу нет.' },
  { icon: RefreshCw, title: 'Auto-reboot', text: 'Телефон сам перезагружается после периода бездействия, возвращая данные в зашифрованное состояние at rest. Это перезагрузка, а не удаление данных.' },
  { icon: Users, title: 'Профили пользователей', text: 'Несколько изолированных профилей: рабочий, личный, «для банков» — у каждого свои приложения и данные на уровне системы.' },
  { icon: Globe, title: 'Случайный MAC на каждое соединение', text: 'Wi-Fi модуль представляется новым устройством каждой сети — отслеживание по MAC-адресу между сетями не работает.' },
]

const STEPS = [
  { num: '01', title: 'Выбираете конфигурацию', text: 'Модель, память, цвет и версию SIM — в карточке телефона или сразу в чате.' },
  { num: '02', title: 'Согласуем заказ в Telegram', text: 'До оплаты обсуждаем наличие у поставщика, полную стоимость и срок отправки.' },
  { num: '03', title: 'Мы закупаем и собираем', text: 'Выкуп телефона, установка GrapheneOS, настройка, проверка и упаковка.' },
  { num: '04', title: 'Получаете готовый телефон', text: 'СДЭК со страхованием на полную стоимость, личная передача в Санкт-Петербурге или Яндекс Go по согласованию.' },
]

export default function Graphene() {
  const cheapestFrom = minTotal('pixel-10a')
  return (
    <>
      {/* Герой страницы */}
      <section className="g-hero">
        <div className="container g-hero-inner">
          <div className="g-hero-text">
            <p className="eyebrow-blue">Операционная система</p>
            <h1>GrapheneOS.<br />Телефон, который<br />работает на вас.</h1>
            <p>Приватная и безопасная ОС на базе Android: обычные приложения работают через sandboxed Google Play. Устанавливаем на каждый Pixel перед отправкой — вам остаётся только включить.</p>
            <div className="g-hero-cta">
              <a href="#/" className="btn-primary-dark">Выбрать Pixel — от {fmtRub(cheapestFrom)}</a>
            </div>
          </div>
          <div className="g-hero-img">
            <img src={IMG_FRONT} alt="Pixel с GrapheneOS" />
          </div>
        </div>
      </section>

      {/* МАНИФЕСТ */}
      <section className="manifest">
        <div className="container">
          <p className="hw-eyebrow">Манифест</p>
          <h2>Что случилось с нашими устройствами.</h2>
          <div className="manifest-grid">
            <div className="manifest-card manifest-now">
              <h3>Устройство 2020-х: как есть</h3>
              <p>Смартфон сегодня — это не ваш компьютер в кармане. Это терминал сбора данных: рекламный идентификатор, история перемещений, статистика каждого тапа, микрофон «для аналитики», фото «для улучшения сервиса». Вы купили устройство — но пользуетесь им на условиях аренды, платя вниманием и данными.</p>
            </div>
            <div className="manifest-card manifest-should">
              <h3>Каким оно должно быть</h3>
              <p>Устройство, которое вы включили — и оно просто ваше. Без обязательного аккаунта. Без «примите условия, иначе кирпич». Без фоновых отправок «для улучшения опыта». Вы решаете, что приложение видит, слышит и куда отправляет. Компьютер в кармане, который работает на вас, а не на рекламную сеть.</p>
            </div>
          </div>
          <div className="manifest-answer">
            <p><strong>Почему GrapheneOS — сильный ответ в наше время:</strong> это открытая система, где приватность — часть архитектуры, а не пункт в настройках. Не «доверьтесь нам», а открытый код, verified boot и изоляция, которые можно проверить. Способ владеть своим устройством буквально.</p>
          </div>
        </div>
      </section>

      {/* Что / зачем / почему Pixel */}
      <section className="section">
        <div className="container">
          <div className="g-sections">
            {SECTIONS.map((s, i) => (
              <div className="g-section" key={i}>
                <div className="pillar-icon"><s.icon size={24} strokeWidth={1.5} /></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* БЕЗ АККАУНТОВ */}
      <section className="noacc">
        <div className="container noacc-inner">
          <UserX size={48} strokeWidth={1.2} />
          <h2>Включили — и пользуетесь. Без аккаунтов.</h2>
          <p>
            Никакого обязательного Google-аккаунта. Никаких навязанных мессенджеров и магазинов «по умолчанию» —
            ни MAX, ни RuStore, ни предустановленной рекламы. Телефон не просит «войти, чтобы продолжить».
            Вы просто пользуетесь устройством — и оно ваше. Полностью.
          </p>
        </div>
      </section>

      {/* Глубокие фичи */}
      <section className="section g-deep">
        <div className="container">
          <h2>Ключевые технологии<br />GrapheneOS.</h2>
          <p className="lead">Работают из коробки, без настройки. Подробности — в официальных материалах: <a href="https://grapheneos.org/features" target="_blank" rel="noopener noreferrer" className="tg-inline">grapheneos.org/features</a> и <a href="https://grapheneos.org/faq" target="_blank" rel="noopener noreferrer" className="tg-inline">grapheneos.org/faq</a></p>
          <div className="g-deep-grid">
            {DEEP_FEATURES.map((f, i) => (
              <div className="g-deep-card" key={i}>
                <f.icon size={26} strokeWidth={1.5} />
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ОПЕНСОРС-ЭКОСИСТЕМА */}
      <section className="section">
        <div className="container">
          <p className="eyebrow-blue">Свободный софт</p>
          <h2>Всё, что вы ставили из магазина,<br />уже есть в открытом виде.</h2>
          <p className="lead">
            Открытые альтернативы покрывают весь повседневный софт: полностью бесплатно,
            с открытым кодом, который может проверить любой, и без единого трекера.
            Мы предустанавливаем базовый набор по запросу.
          </p>
          <div className="oss-grid">
            {OSS_APPS.map((o, i) => (
              <div className="oss-card" key={i}>
                <span className="oss-cat">{o.cat}</span>
                <h4>{o.apps}</h4>
                <p>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ПРОТИВ BLUETOOTH-НОСИМЫХ */}
      <section className="nowear">
        <div className="container nowear-inner">
          <div className="nowear-icon"><BluetoothOff size={40} strokeWidth={1.3} /></div>
          <div>
            <h2>Почему мы не продаём наушники и браслеты.</h2>
            <p>
              Каждый Bluetooth-носимый гаджет — это маячок: он постоянно вещает свой идентификатор,
              по которому вас можно узнавать в толпе, метро и торговом центре. А приложение-компаньон
              сливает пульс, сон и геолокацию в облако производителя. Цифровая гигиена — это не только
              телефон: это отказ от лишних радиометок на теле. Проводные наушники звучат не хуже.
            </p>
          </div>
        </div>
      </section>

      {/* Совместимость */}
      <section className="section">
        <div className="container">
          <h2>Приложения продолжают работать.</h2>
          <p className="lead">GrapheneOS — это полноценный Android. Большинство приложений работает как обычно через sandboxed Google Play; отдельные программы с жёсткой проверкой могут потребовать дополнительной настройки.</p>
          <div className="g-compat">
            {['Банки: Сбер, Тинькофф, ВТБ, Альфа', 'Карты и навигация', 'Мессенджеры и почта', 'NFC и бесконтактная оплата', 'Камера, звонки, SMS', 'Музыка и стриминги'].map((x, i) => (
              <div className="g-compat-item" key={i}><Check size={18} color="var(--green)" /> {x}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Как мы работаем */}
      <section className="section g-steps">
        <div className="container">
          <h2>Как происходит покупка.</h2>
          <p className="lead">Согласуем конфигурацию, стоимость и срок до оплаты — заказ под заказ</p>
          <div className="g-steps-grid">
            {STEPS.map((s, i) => (
              <div className="g-step" key={i}>
                <div className="g-step-num">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <a href="#/" className="btn-outline-dark">Выбрать телефон <ChevronRight size={16} /></a>
        </div>
      </section>

      {/* Баннер Fold */}
      <section className="g-fold-banner">
        <div className="container g-fold-inner">
          <img src={realImg('pixel-10-pro-fold', 'Moonstone', 'card') || ''} alt="Pixel 10 Pro Fold" loading="lazy" />
          <div>
            <h2>Даже складной — с GrapheneOS.</h2>
            <p>Pixel 10 Pro Fold полностью поддерживается: verified boot, sandboxed Google Play и все функции приватности на обоих экранах.</p>
            <a href="#/phone/pixel-10-pro-fold" className="link-buy">Смотреть Pixel 10 Pro Fold <ChevronRight size={16} /></a>
          </div>
        </div>
      </section>
    </>
  )
}
