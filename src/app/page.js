
import Helm from './components/Helm'
import Header from './components/pages/Header'
import Footer from './components/pages/Footer'


export default function Home() {
  return (<>
    <Header/>
    <section>
      <Helm/>
    </section>
    <Footer/>
    </>
  )
}
