import { Titles } from '../../styles/styled'
import Cursos from './Cursos'
import styles from './Educacao.module.css'
import Formacao from './Formacao'

interface EducacaoProps {
    titulo: string
    cursos: string
}

export default function Educacao(props: EducacaoProps) {

    const anhanguera = {
        instituicao: "Anhanguera Educacional",
        formacao: "Curso Superior de Tecnologia - Analise e Desenvolvimento de Sistemas",
        tempo: "2022 - 2024"
    }

    const senai = {
        instituicao: "Senai Indaiatuba",
        formacao: "Curso Técnico de eletroeletrônica - Manutenção Elétrica",
        tempo: "2017 - 2018"
    }

    return (
        <div className={styles.container}>
            <div>
                <Titles>{props.titulo}</Titles>
                <Formacao nivel="Graduação" formacao={anhanguera} />
                <Formacao nivel="Técnico" formacao={senai} />
            </div>
            <div>
                <Titles>{props.cursos}</Titles>
                <Cursos />
            </div>
        </div>
    )
}