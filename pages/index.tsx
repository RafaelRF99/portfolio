import Banner from '../components/Banner'
import Experiencia from '../components/Experiencia'
import NavBar from '../components/NavBar'
import Sobre from '../components/Sobre'

export default function Home() {

  return (
    <>
      <NavBar />
      <Banner />
      <Sobre />
      <Experiencia nome="Experiência"/>
    </>
  )
}
