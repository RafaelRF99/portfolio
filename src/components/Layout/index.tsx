import Banner from "../Banner";
import Educacao from "../Educacao";
import Experiencia from "../Experiencia";
import Habilidade from "../Habilidade";
import Portfolio from "../Portfolio";
import Sobre from "../Sobre";
import Head from 'next/head'
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function Layout() {
    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/logo/tecnologia.png" />
                <title>Rafael Ferreira</title>
            </Head>
            <main>
                <NavBar />
                <Banner />
                <Sobre />
                <Experiencia nome="Experiência" />
                <Educacao titulo="Formação" cursos="Cursos" />
                <Habilidade />
                <Portfolio />
            </main>
            <Footer />
        </>
    )
}