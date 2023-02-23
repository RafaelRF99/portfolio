import Banner from '../components/Banner'
import Educacao from '../components/Educacao'
import Experiencia from '../components/Experiencia'
import NavBar from '../components/NavBar'
import Sobre from '../components/Sobre'

export default function Home() {

  return (
    <>
      <NavBar />
      <Banner />
      <Sobre />
      <Experiencia nome="Experiência" />
      <Educacao titulo="Formação" cursos="Cursos" />
    </>
  )
}
