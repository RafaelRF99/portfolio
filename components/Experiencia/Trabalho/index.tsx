import styles from './Trabalho.module.css'

interface TrabalhoProps {
    analista: {empresa: string; tempo: string; registro: string}
    funcao: string[]
}

export default function Trabalho(props: TrabalhoProps) {
    const analista = props.analista

    function funcoes() {
        return props.funcao.map(funcao => {
            return <li>{funcao}</li>
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.principal}>
                <h1 className={styles.title}>{analista.empresa}</h1>
                <span>{analista.tempo}</span>
            </div>
            <div className={styles.registro}>
                <span>{analista.registro}</span>
            </div>
            <div className={styles.funcao}>
                <ul>
                    {funcoes()}
                </ul>
            </div>

        </div>
    )
}