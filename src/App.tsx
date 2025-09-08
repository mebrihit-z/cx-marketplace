import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Home from './components/home'
import Gallery from './components/gallery'
import Pricing from './components/pricing'
import FAQs from './components/faqs'
import Training from './components/training'
import Contact from './components/contact'

type ActiveSection = 'home' | 'gallery' | 'pricing' | 'faqs' | 'training' | 'contact'

function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('home')

  const renderActiveComponent = () => {
    switch (activeSection) {
      case 'home':
        return <Home />
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
    </>
  )
}

export default App
