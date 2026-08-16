import { useState, useEffect } from 'react'
import { Nav, Footer, DevBanner } from './components'
import Home from './pages/Home'
import Phones from './pages/Phones'
import Product from './pages/Product'
import Graphene from './pages/Graphene'
import Accessories from './pages/Accessories'
import Devices from './pages/Devices'
import Payment from './pages/Payment'
import Checkout from './pages/Checkout'
import Terms from './pages/Terms'
import { DEFAULT_CONFIG, type OrderConfig } from './data'

function parseRoute(): { route: string, param?: string } {
  const hash = window.location.hash.replace(/^#/, '') || '/'
  const parts = hash.split('/').filter(Boolean)
  if (parts[0] === 'phone' && parts[1]) return { route: '/phone', param: parts[1] }
  return { route: hash }
}

export default function App() {
  const [{ route, param }, setRoute] = useState(parseRoute)
  const [config, setConfig] = useState<OrderConfig>(DEFAULT_CONFIG)

  useEffect(() => {
    const onHash = () => {
      setRoute(parseRoute())
      window.scrollTo({ top: 0 })
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  let page: React.ReactNode
  switch (route) {
    case '/phones': page = <Phones />; break
    case '/phone': page = <Product id={param || 'pixel-10-pro'} config={config} setConfig={setConfig} />; break
    case '/grapheneos': page = <Graphene />; break
    case '/devices': page = <Devices />; break
    case '/accessories': page = <Accessories />; break
    case '/payment': page = <Payment />; break
    case '/checkout': page = <Checkout config={config} />; break
    case '/terms': page = <Terms />; break
    default: page = <Home />
  }

  return (
    <>
      <DevBanner />
      <Nav route={route} />
      {page}
      <Footer />
    </>
  )
}
