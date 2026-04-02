import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import PorQueZyntello from './components/PorQueZyntello'
import Portafolio from './components/Portafolio'
import Nosotros from './components/Nosotros'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import WhatsAppChat from './components/WhatsAppChat'
import './styles/zyntello.css'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <PorQueZyntello />
        <Portafolio />
        <Nosotros />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppChat />
    </>
  )
}

export default App
