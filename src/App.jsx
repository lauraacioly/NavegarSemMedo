import Header from './components/Header'
import Hero from './components/Hero'
import ViolenciaDigital from './components/sections/ViolenciaDigital'
import Cyberbullying from './components/sections/Cyberbullying'
import ComoIdentificar from './components/sections/ComoIdentificar'
import ImpactosEmocionais from './components/sections/ImpactosEmocionais'
import GuardarProvas from './components/sections/GuardarProvas'
import ComoDenunciar from './components/sections/ComoDenunciar'
import OrientacoesVitimas from './components/sections/OrientacoesVitimas'
import LinksUteis from './components/sections/LinksUteis'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ViolenciaDigital />
        <Cyberbullying />
        <ComoIdentificar />
        <ImpactosEmocionais />
        <GuardarProvas />
        <ComoDenunciar />
        <OrientacoesVitimas />
        <LinksUteis />
      </main>
      <Footer />
    </div>
  )
}
