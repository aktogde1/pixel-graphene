import {
  ChevronRight, Check
} from 'lucide-react'
import { IMG_FRONT, fmtRub, minTotal, OSS_APPS, realImg, AVITO_PROFILE_URL } from '../data'

const SECTIONS = [
  {
    title: 'Что такое GrapheneOS',
    text: 'GrapheneOS — независимая открытая мобильная операционная система на базе AOSP (Android Open Source Project), созданная в 2014 году. Её приоритет — приватность, укрепление ядра и защита от эксплойтов. Никакой телеметрии, рекламы и привязки к сервисам Google по умолчанию. Исходный код публичен и аудируется независимыми исследователями.',
  },
  {
    title: 'Зачем это нужно вам',
    text: 'Обычный Android непрерывно отправляет телеметрию и рекламные идентификаторы. GrapheneOS полностью исключает фоновый сбор данных на уровне ОС и даёт гранулярный контроль: вы сами определяете, какие файлы, датчики и сетевые подключения доступны каждому приложению.',
  },
  {
    title: 'Почему именно Google Pixel',
    text: 'GrapheneOS разрабатывается строго под аппаратную платформу Pixel. Причина — эталонная реализация безопасности: выделенный чип Titan M2, поддержка перепрошиваемого Verified Boot с возможностью блокировки загрузчика сторонним ключом и аппаратная изоляция элементов памяти.',
  },
]

const DEEP_FEATURES = [
  {
    title: 'Sandboxed Google Play',
    text: 'Сервисы Google работают как обычные изолированные приложения в песочнице без системных привилегий. Банковские клиенты, навигация и мессенджеры продолжают стабильно функционировать.',
  },
  {
    title: 'Network Permission',
    text: 'Возможность запретить доступ в интернет любому конкретному приложению на уровне ядра системы, исключая скрытые утечки трафика.',
  },
  {
    title: 'Storage Scopes',
    text: 'Вместо предоставления доступа ко всей файловой системе приложение видит только те конкретные папки и файлы, которые вы явно выбрали.',
  },
  {
    title: 'Auto-Reboot и защита At Rest',
    text: 'Автоматическая перезагрузка телефона при заданном времени неактивности возвращает память в зашифрованное состояние (Before First Unlock).',
  },
  {
    title: 'Изолированные профили',
    text: 'Раздельные пользовательские пространства для личных задач, работы и финансов с независимым шифрованием и изоляцией данных.',
  },
  {
    title: 'PIN Scrambling',
    text: 'Случайный порядок цифр на экране ввода PIN-кода для защиты от подглядывания и тепловых следов на стекле экрана.',
  },
]

const MATERIAL_FACTS = [
  {
    title: 'Толщина в один атом',
    text: 'Графен представляет собой монослой атомов углерода, соединённых в правильную гексагональную двумерную решётку. Тоньше одного атома структуры в природе не существует.',
  },
  {
    title: 'Предельная прочность',
    text: 'Благодаря прочным ковалентным C–C связям графен является самым прочным на разрыв материалом из всех когда-либо измеренных наукой.',
  },
  {
    title: 'Нобелевская премия 2010 года',
    text: 'Материал был получен и исследован Андреем Геймом и Константином Новосёловым в Манчестерском университете с помощью знаменитого метода расслоения графита.',
  },
]

const STEPS = [
  { num: '01', title: 'Выбираете конфигурацию', text: 'Модель, объём памяти, цвет и версию SIM в каталоге на сайте.' },
  { num: '02', title: 'Согласуем заказ на Авито', text: 'Обсуждаем наличие у проверенного поставщика, итоговую стоимость и сроки отправки в переписке.' },
  { num: '03', title: 'Подбор, прошивка и проверка', text: 'Выкупаем новый аппарат, устанавливаем официальную сборку GrapheneOS, блокируем загрузчик и проводим аппаратный тест.' },
  { num: '04', title: 'Доставка со страхованием', text: 'Отправляем СДЭК с объявленной ценностью на полную стоимость по всей России или передаём лично в СПб.' },
]

export default function Graphene() {
  const cheapestFrom = minTotal('pixel-10a')
  return (
    <>
      {/* Главный экран */}
      <section className="g-hero">
        <div className="container g-hero-inner">
          <div className="g-hero-text">
            <p className="eyebrow-blue">Операционная система</p>
            <h1>GrapheneOS.<br />Чистая приватность<br />без компромиссов.</h1>
            <p>
              Защищённая операционная система с открытым кодом на базе AOSP.
              Полный контроль телеметрии, изоляция приложений и сохранение работоспособности повседневных сервисов.
            </p>
            <div className="g-hero-cta">
              <a href="#/" className="btn-primary-dark">Выбрать Pixel — от {fmtRub(cheapestFrom)}</a>
              <a href={AVITO_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-dark">
                Консультация на Авито
              </a>
            </div>
          </div>
          <div className="g-hero-img">
            <img src={IMG_FRONT} alt="Google Pixel с GrapheneOS" />
          </div>
        </div>
      </section>

      {/* Манифест */}
      <section className="manifest">
        <div className="container">
          <p className="hw-eyebrow">Архитектура приватности</p>
          <h2>Принцип владения своим устройством.</h2>
          <div className="manifest-grid">
            <div className="manifest-card manifest-now">
              <h3>Стандартная коммерческая система</h3>
              <p>
                Постоянный фоновый сбор геопозиции, рекламные трекеры внутри прошивки,
                навязчивая привязка к облачному аккаунту и отсутствие возможности полностью контролировать отправку телеметрии производителю.
              </p>
            </div>
            <div className="manifest-card manifest-should">
              <h3>Система под вашим контролем</h3>
              <p>
                Никаких обязательных аккаунтов для первого включения. Никаких предустановленных рекламных пакетов.
                Каждое разрешение отзывается мгновенно, а приложения запускаются в изолированных средах без прямого доступа к системе.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Три фундаментальных принципа */}
      <section className="section">
        <div className="container">
          <div className="g-sections">
            {SECTIONS.map((s, i) => (
              <div className="g-section-clean" key={i}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ключевые возможности */}
      <section className="section g-deep">
        <div className="container">
          <h2>Ключевые технологии GrapheneOS.</h2>
          <p className="lead">Встроенные механизмы безопасности аппаратного и программного уровня</p>
          <div className="g-deep-grid">
            {DEEP_FEATURES.map((f, i) => (
              <div className="g-deep-card-clean" key={i}>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Предыстория названия: Графен как материал */}
      <section className="section graphene-origin-section">
        <div className="container">
          <p className="eyebrow-blue">Предыстория и концепция</p>
          <h2>Почему система названа в честь графена.</h2>
          <p className="lead">
            Графен — фундаментальная двумерная модификация углерода. Разработчики операционной системы
            выбрали это имя как точную метафору: тонкий, монолитный и кристально чистый программный слой,
            который фундаментально меняет защитные свойства устройства, не утяжеляя его избыточным весом.
          </p>

          <div className="origin-facts-grid">
            {MATERIAL_FACTS.map((fact, idx) => (
              <div className="origin-fact-card" key={idx}>
                <h4>{fact.title}</h4>
                <p>{fact.text}</p>
              </div>
            ))}
          </div>

          <div className="origin-summary-box">
            <p>
              <strong>Смысл названия:</strong> Подобно тому, как отдельный слой графена придаёт невероятную прочность
              структуре, GrapheneOS служит чистым защитным фундаментом поверх аппаратного обеспечения Google Pixel.
              Устройство сохраняет скорость и эргономику, но получает полную независимость от корпоративной телеметрии.
            </p>
          </div>
        </div>
      </section>

      {/* Опенсорс-экосистема */}
      <section className="section">
        <div className="container">
          <p className="eyebrow-blue">Свободный софт</p>
          <h2>Открытые приложения без трекеров.</h2>
          <p className="lead">
            Проверенная опенсорс-альтернатива для всех повседневных задач: без рекламы, сборов аналитики и обязательных профилей.
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

      {/* Совместимость с обычными программами */}
      <section className="section">
        <div className="container">
          <h2>Привычные сервисы продолжают работать.</h2>
          <p className="lead">
            GrapheneOS — это полноценный современный Android. Благодаря Sandboxed Google Play повседневные приложения функционируют в штатном режиме.
          </p>
          <div className="g-compat">
            {['Банки: Сбер, Т-Банк, ВТБ, Альфа', 'Карты, такси и навигация', 'Мессенджеры и корпоративная почта', 'NFC и бесконтактная оплата', 'Штатная камера и связь', 'Стриминговые сервисы'].map((x, i) => (
              <div className="g-compat-item" key={i}>
                <Check size={18} color="var(--green)" /> {x}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Порядок покупки */}
      <section className="section g-steps">
        <div className="container">
          <h2>Порядок заказа и подготовки.</h2>
          <p className="lead">Прозрачный процесс: согласование всех деталей и сроков до оплаты</p>
          <div className="g-steps-grid">
            {STEPS.map((s, i) => (
              <div className="g-step" key={i}>
                <div className="g-step-num">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28, display: 'flex', gap: 16 }}>
            <a href="#/" className="btn-primary-dark">Смотреть каталог моделей <ChevronRight size={16} /></a>
            <a href={AVITO_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-dark">
              Написать продавцу на Авито
            </a>
          </div>
        </div>
      </section>

      {/* Баннер Fold */}
      <section className="g-fold-banner">
        <div className="container g-fold-inner">
          <img src={realImg('pixel-10-pro-fold', 'Moonstone', 'card') || ''} alt="Pixel 10 Pro Fold" loading="lazy" />
          <div>
            <h2>Складной Pixel 10 Pro Fold с GrapheneOS.</h2>
            <p>Полная поддержка обоих экранов, Verified Boot, Sandboxed Google Play и аппаратная изоляция памяти.</p>
            <a href="#/phone/pixel-10-pro-fold" className="link-buy">Конфигуратор Fold <ChevronRight size={16} /></a>
          </div>
        </div>
      </section>
    </>
  )
}
