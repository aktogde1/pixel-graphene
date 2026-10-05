import {
  Hexagon, Atom, Layers, BookOpen,
  ChevronRight, Send,
} from 'lucide-react'
import { TELEGRAM_BOT_URL } from '../data'

/* Страница «Графен» — про материал. Не путать с GrapheneOS (#/grapheneos).
   Факты сверены с NobelPrize.org (премия по физике 2010) 2026-10-05. */

/* ---- Геометрия сотовой решётки для иллюстрации ---- */
const R = 34                       // радиус одного гексагона
const SX = 1.5 * R                 // шаг между столбцами
const SY = Math.sqrt(3) * R        // шаг между рядами
const VB_W = 840
const VB_H = 460

function hexPath(cx: number, cy: number): string {
  return Array.from({ length: 6 }, (_, k) => {
    const a = (Math.PI / 3) * k
    return `${(cx + R * Math.cos(a)).toFixed(1)},${(cy + R * Math.sin(a)).toFixed(1)}`
  }).join(' ')
}

const HEXES: { x: number, y: number }[] = []
for (let col = -1; col * SX <= VB_W + R; col++) {
  const x = col * SX
  const yOff = col % 2 === 0 ? 0 : SY / 2
  for (let row = -1; row * SY + yOff <= VB_H + SY; row++) {
    HEXES.push({ x, y: row * SY + yOff })
  }
}

/* Уникальные вершины решётки = атомы углерода (общие для трёх гексагонов) */
const ATOMS: { x: number, y: number }[] = (() => {
  const seen = new Set<string>()
  const out: { x: number, y: number }[] = []
  for (const h of HEXES) {
    for (let k = 0; k < 6; k++) {
      const a = (Math.PI / 3) * k
      const x = h.x + R * Math.cos(a)
      const y = h.y + R * Math.sin(a)
      const key = `${Math.round(x * 10)}:${Math.round(y * 10)}`
      if (!seen.has(key) && x > -R && x < VB_W + R && y > -R && y < VB_H + R) {
        seen.add(key)
        out.push({ x, y })
      }
    }
  }
  return out
})()

/* Подсвеченные элементы: гексагон у центра, его левый атом и верхняя связь */
const HX = HEXES.reduce((best, h) =>
  Math.hypot(h.x - 460, h.y - 206) < Math.hypot(best.x - 460, best.y - 206) ? h : best)
const HI_ATOM = { x: HX.x - R, y: HX.y }
const HI_BOND = {
  x1: HX.x - R / 2,
  y1: HX.y - (Math.sqrt(3) / 2) * R,
  x2: HX.x + R / 2,
  y2: HX.y - (Math.sqrt(3) / 2) * R,
}
const BOND_MID = { x: HX.x, y: HX.y - (Math.sqrt(3) / 2) * R }

const PROPS = [
  { title: 'Толщина — один атом', text: 'Тонкий слой из атомов углерода: в миллиметре графита умещается около трёх миллионов таких слоёв.', bg: 'g-blue' },
  { title: 'Самый прочный из известных', text: 'Слой можно растянуть почти на пятую часть длины — при этом он прочнее любого другого известного материала.', bg: 'g-purple' },
  { title: 'Проводит ток как медь', text: 'Свободные электроны движутся по листу со скоростью порядка миллиона метров в секунду.', bg: 'g-mint' },
  { title: 'Лучший проводник тепла', text: 'По теплопроводности графен обходит все другие известные материалы.', bg: 'g-peach' },
  { title: 'Пропускает ~98% света', text: 'Почти прозрачен, как тонкое стекло, — при этом плотен настолько, что не пропускает даже гелий.', bg: 'g-mint' },
  { title: 'Гибкий и лёгкий', text: 'Квадратный метр листа графена весит меньше миллиграмма — при этом он не ломается, а гнётся.', bg: 'g-blue' },
]

const HISTORY = [
  {
    num: '01',
    title: 'Пятничные эксперименты',
    text: 'В Манчестерском университете Андрей Гейм и Константин Новосёлов по пятницам ставили опыты «не по теме» основных исследований. Один из таких вечеров посвятили графиту — материалу карандашного грифеля.',
  },
  {
    num: '02',
    title: 'Скотч-метод (2004)',
    text: 'Кусочек графита приклеивали клейкой лентой и разъединяли её — от 10 до 20 раз, пока среди хлопьев не оказался слой толщиной в один атом. Увидеть его помогла хитрость: хлопьи положили на окисленный кремний, где даже один слой виден в обычный микроскоп по интерференционным цветам.',
  },
  {
    num: '03',
    title: 'Статья в Science (2004)',
    text: 'В октябре 2004 года вышла работа «Electric field effect in atomically thin carbon films». Существование свободного двумерного кристалла стало сюрпризом для учёных — и открыло целое направление исследований.',
  },
  {
    num: '04',
    title: 'Нобелевская премия (2010)',
    text: 'В 2010 году Гейм и Новосёлов получили Нобелевскую премию по физике «за новаторские эксперименты с двумерным материалом графен». Гейм — единственный на сегодня человек с двумя такими премиями: в 2000-м он получил Шнобелевскую за магнитную левитацию лягушки.',
  },
]

const SOURCES = [
  {
    title: 'NobelPrize.org — «The rise and rise of graphene»',
    desc: 'Научно-популярный обзор Комитета по физике к премии 2010 года: метод получения и ключевые свойства.',
    url: 'https://www.nobelprize.org/prizes/physics/2010/popular-information/',
  },
  {
    title: 'NobelPrize.org — Нобелевская премия по физике 2010',
    desc: 'Официальная формулировка награды и данные лауреатов.',
    url: 'https://www.nobelprize.org/prizes/physics/2010/summary/',
  },
  {
    title: 'K. S. Novoselov et al. «Electric field effect in atomically thin carbon films», Science, 2004',
    desc: 'Оригинальная статья, с которой началась история графена.',
    url: 'https://www.science.org/doi/10.1126/science.1102896',
  },
]

export default function GrapheneMaterial() {
  return (
    <>
      {/* Герой с иллюстрацией решётки */}
      <section className="gm-hero">
        <div className="container g-hero-inner">
          <div className="g-hero-text">
            <p className="eyebrow-blue">Материал</p>
            <h1>Графен.<br />Слой толщиной<br />в один атом.</h1>
            <p>
              Самый тонкий из известных материалов: плоская решётка из атомов углерода.
              Он прочнее любого другого известного материала, проводит ток как медь
              и почти прозрачен. Рассказываем, как он устроен, как его открыли
              и почему это слово есть в названии нашего магазина.
            </p>
            <div className="g-hero-cta">
              <a href="#/grapheneos" className="btn-primary-dark">Что такое GrapheneOS</a>
              <a href="#/" className="btn-outline-dark">Выбрать Pixel</a>
            </div>
          </div>
          <div className="gm-hero-fig">
            <figure className="gm-fig">
              <svg viewBox={`0 0 ${VB_W} ${VB_H}`} role="img" aria-label="Схема: сотовая решётка графена из атомов углерода" className="gm-svg">
                {/* Гексагоны */}
                {HEXES.map((h, i) => (
                  <polygon key={i} points={hexPath(h.x, h.y)} className="gm-hex" />
                ))}
                {/* Подсвеченный гексагон */}
                <polygon points={hexPath(HX.x, HX.y)} className="gm-hex-hi" />
                {/* Подсвеченная связь */}
                <line x1={HI_BOND.x1} y1={HI_BOND.y1} x2={HI_BOND.x2} y2={HI_BOND.y2} className="gm-bond-hi" />
                {/* Атомы */}
                {ATOMS.map((a, i) => (
                  <circle key={i} cx={a.x.toFixed(1)} cy={a.y.toFixed(1)} r="4.2" className="gm-atom" />
                ))}
                {/* Подсвеченный атом */}
                <circle cx={HI_ATOM.x} cy={HI_ATOM.y} r="10" className="gm-atom-hi-ring" />
                <circle cx={HI_ATOM.x} cy={HI_ATOM.y} r="5.5" className="gm-atom-hi" />
                {/* Подписи с выносками */}
                <line x1={BOND_MID.x} y1={BOND_MID.y} x2={BOND_MID.x + 66} y2={BOND_MID.y - 46} className="gm-lead" />
                <text x={BOND_MID.x + 72} y={BOND_MID.y - 50} className="gm-label">связь C–C ≈ 0,142 нм</text>
                <line x1={HI_ATOM.x} y1={HI_ATOM.y} x2={HI_ATOM.x - 96} y2={HI_ATOM.y - 46} className="gm-lead" />
                <text x={HI_ATOM.x - 102} y={HI_ATOM.y - 50} textAnchor="end" className="gm-label">атом углерода</text>
                <line x1={HX.x} y1={HX.y} x2={HX.x + 86} y2={HX.y + 78} className="gm-lead" />
                <text x={HX.x + 92} y={HX.y + 96} className="gm-label">шестиугольная ячейка</text>
              </svg>
              <figcaption className="gm-caption">
                Схема решётки графена: атомы углерода связаны в шестиугольники — «пчелиные соты» толщиной в один атом
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Что такое графен */}
      <section className="section">
        <div className="container">
          <div className="g-sections">
            <div className="g-section">
              <div className="pillar-icon"><Hexagon size={24} strokeWidth={1.5} /></div>
              <h3>Слой углерода в один атом</h3>
              <p>
                Графен — это плоский лист углерода толщиной в один атом. Атомы соединены
                в шестиугольные ячейки — как пчелиные соты, только в миллиарды раз меньше.
                Более тонкого материала в природе просто не бывает: тоньше одного атома — никак.
              </p>
            </div>
            <div className="g-section">
              <div className="pillar-icon"><Layers size={24} strokeWidth={1.5} /></div>
              <h3>Он всегда был рядом</h3>
              <p>
                Карандашный грифель — это графит: стопка слоёв графена, которые легко
                соскальзывают друг с другом и остаются на бумаге. Сверните один слой
                в трубку — получится углеродная нанотрубка. Замкните в сферу — фуллерен.
                Графен — «кирпичик», из которого собраны все эти формы углерода.
              </p>
            </div>
            <div className="g-section">
              <div className="pillar-icon"><Atom size={24} strokeWidth={1.5} /></div>
              <h3>Дело в связях, а не в составе</h3>
              <p>
                Алмаз и графит состоят из тех же атомов углерода, но ведут себя противоположно:
                один — твёрдый и не проводит ток, другой — мягкий и проводит. В графене каждый
                атом связан с тремя соседями, а оставшиеся электроны свободно движутся
                по всему листу — отсюда и проводимость, и прочность одновременно.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Свойства */}
      <section className="section g-deep">
        <div className="container">
          <p className="eyebrow-blue">Свойства</p>
          <h2>Крайности — в одном материале.</h2>
          <p className="lead">
            Каждый пункт здесь — рекорд среди известных материалов. Часть цифр выглядит
            как опечатка, поэтому их всегда перепроверяют: графен тем и знаменит.
          </p>
          <div className="gm-props">
            {PROPS.map((p, i) => (
              <div className={`fc-card ${p.bg}`} key={i}>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* История открытия */}
      <section className="section g-steps">
        <div className="container">
          <p className="eyebrow-blue">История</p>
          <h2>Как графен нашли,<br />исследовали и отметили.</h2>
          <p className="lead">Скотч, любопытство и Нобелевская премия — коротко о главных вехах</p>
          <div className="gm-steps">
            {HISTORY.map((s) => (
              <div className="g-step" key={s.num}>
                <div className="g-step-num">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Наша ассоциация с брендом */}
      <section className="nowear">
        <div className="container nowear-inner">
          <div className="nowear-icon"><Hexagon size={40} strokeWidth={1.3} /></div>
          <div>
            <h2>Почему это слово — в нашем названии.</h2>
            <p>
              Графен — тот же углерод, но тонкий слой которого полностью меняет свойства
              материала. Мы видим в этом близкую нам идею: тонкий слой GrapheneOS поверх
              привычного железа Pixel превращает знакомый телефон в совсем другое устройство
              — ваше собственное. Это наша ассоциация с названием материала. Почему проект
              GrapheneOS выбрал себе именно такое имя, мы не утверждаем — у системы своя
              история, а мы рассказываем о ней на{' '}
              <a href="#/grapheneos" style={{ textDecoration: 'underline' }}>отдельной странице</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Источники */}
      <section className="section">
        <div className="container container-narrow">
          <p className="eyebrow-blue">Проверяемость</p>
          <h2>Источники.</h2>
          <p className="lead">Факты на этой странице сверены с авторитетными источниками</p>
          <div className="gm-sources">
            {SOURCES.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="gm-source">
                <BookOpen size={20} strokeWidth={1.5} />
                <span>
                  <strong>{s.title}</strong>
                  {s.desc}
                </span>
                <ChevronRight size={16} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section gm-cta">
        <div className="container">
          <h2>Графен вдохновил на название.<br />GrapheneOS мы устанавливаем на деле.</h2>
          <p className="lead">Новые Pixel 10-й серии с GrapheneOS под заказ — итоговая цена с включённой подготовкой</p>
          <div className="reviews-cta">
            <a href="#/" className="btn-primary-dark">Выбрать Pixel</a>
            <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="btn-tg">
              <Send size={17} /> Заказать в Telegram
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
