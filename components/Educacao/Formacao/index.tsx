import styles from './Formacao.module.css'

interface FormacaoProps {
    formacao: {instituicao: string; formacao: string; tempo: string}
    nivel: string
}

export default function Formacao(props: FormacaoProps) {
    const formacao = props.formacao

    return (
        <div className={styles.container}>
            <div className={styles.categoria}>
                <span>{formacao.tempo}</span>
                <h1>{props.nivel}</h1>
            </div>
            <div className={styles.curso}>
                <h1>{formacao.instituicao}</h1>
                <span>{formacao.formacao}</span>
            </div>
        </div>
    )
}