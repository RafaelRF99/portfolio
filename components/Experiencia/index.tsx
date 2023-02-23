import styles from './Experiencia.module.css'
import Trabalho from './Trabalho'

interface ExperienciaProps {
    nome: string
}

export default function Experiencia(props: ExperienciaProps) {

    const analista = {
        empresa: "Flabeg Brasil LTDA",
        tempo: "Jan de 2019 - Atualmente",
        registro: "Analista de Processos",
    }

    const analistaFuncao = [
        "Criação de programas linguagem G",
        "Criação de programas de corte e lasers",
        "Desenvolvimento de amostras"
    ]

    const aprendiz = {
        empresa: "Flabeg Brasil LTDA",
        tempo: "Jan de 2017 - Dez de 2018 · 2 anos",
        registro: "Aprendiz de manutenção de eletroeletrônica"
    }

    const aprendizFuncao = [
        "Lançamento de Ordem de Serviços",
        "Organização das manutenções preditivas",
        "Acompanhamento de Superiores para pequenos auxílios",
        "Programação de CLPs"
    ]


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{props.nome}</h1>
            <Trabalho analista={analista} funcao={analistaFuncao} />
            <Trabalho analista={aprendiz} funcao={aprendizFuncao} />
        </div>
    )
}