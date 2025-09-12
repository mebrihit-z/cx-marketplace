import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/home'
import Gallery from './components/gallery'
import Pricing from './components/pricing'
import FAQs from './components/faqs'
import Training from './components/training'
import Contact from './components/contact'
import SaaS from './components/saas'

type ActiveSection = 'home' | 'gallery' | 'pricing' | 'faqs' | 'training' | 'contact' | 'saas'

function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('home')

  const renderActiveComponent = () => {
    switch (activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection} />
      case 'gallery':
        return <Gallery />
      case 'pricing':
        return <Pricing />
      case 'faqs':
        return <FAQs />
      case 'training':
        return <Training />
      case 'contact':
        return <Contact />
      case 'saas':
        return <SaaS setActiveSection={setActiveSection} />
      default:
        return <Home />
    }
  }

  return (
    <>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="min-h-screen">
        {renderActiveComponent()}
      </main>
      <Footer />
    </>
  )
}

export default App
