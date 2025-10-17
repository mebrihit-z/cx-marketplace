import { useState, useEffect } from 'react'
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
import PreviewPage from './components/preview-page'
import CreatePage from './components/create-page'
import GetQuote from './components/get-quote'
import type { MoreTemplate } from './data/templates'
import type { ActiveSection } from './types'

function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('home')
  const [selectedTemplate, setSelectedTemplate] = useState<MoreTemplate | null>(null)

  // Check if we're on a preview page
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/preview') {
      const urlParams = new URLSearchParams(window.location.search);
      const templateParam = urlParams.get('template');
      if (templateParam) {
        try {
          const template = JSON.parse(decodeURIComponent(templateParam));
          setSelectedTemplate(template);
          setActiveSection('preview' as ActiveSection);
        } catch (error) {
          console.error('Error parsing template parameter:', error);
        }
      }
    }
  }, []);

  const renderActiveComponent = () => {
    switch (activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection} setSelectedTemplate={setSelectedTemplate} />
      case 'gallery':
        return <Gallery  setActiveSection={setActiveSection} setSelectedTemplate={setSelectedTemplate}/>
      case 'pricing':
        return <Pricing />
      case 'faqs':
        return <FAQs />
      case 'training':
        return <Training />
      case 'contact':
        return <Contact />
      case 'saas':
        return <SaaS setActiveSection={setActiveSection} selectedTemplate={selectedTemplate} />
      case 'preview':
        return selectedTemplate ? <PreviewPage template={selectedTemplate} /> : <Home setActiveSection={setActiveSection} setSelectedTemplate={setSelectedTemplate} />
      case 'create':
        return <CreatePage setActiveSection={setActiveSection} />
      case 'quote':
        return <GetQuote setActiveSection={setActiveSection} />
      default:
        return <Home setActiveSection={setActiveSection} setSelectedTemplate={setSelectedTemplate} />
    }
  }

  // For preview page only, don't show header and footer
  if (activeSection === 'preview') {
    return <PreviewPage template={selectedTemplate!} />
  }

  return (
    <>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="">
        {renderActiveComponent()}
      </main>
      <Footer />
    </>
  )
}

export default App
