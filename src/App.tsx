import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home'
import Gallery from './components/gallery'
import Pricing from './components/pricing'
import FAQs from './components/faqs'
import Training from './components/training'
import Contact from './components/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Home />
      <Gallery />
      <Pricing />
      <FAQs />
      <Training />
      <Contact />
    </>
  )
}

export default App
