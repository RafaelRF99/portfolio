import styles from './Display.module.css'
import historico from './historicoCursos.json'

interface DisplayProps {
    curso: string
    status: boolean
}

export default function Display(props: DisplayProps) {

    function descricao() {
        return historico.map(curso => {
            let valorCurso = curso.curso
            if (props.curso === valorCurso) {
                return (
                    <ul className={styles.lista}>
                        <li>{curso.outros.topico1}</li>
                        <li>{curso.outros.topico2}</li>
                        <li>{curso.outros.topico3}</li>
                    </ul>
                )
            }
        })
    }

    function render() {
        if (props.status == true) {
            return (
                <div>
                    <span>{descricao()}</span>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Escolha uma habilidade...</h1>
                </div>
            )
        }
    }

    return (
        <div className={styles.container}>
            <h1>{props.curso}</h1>
            <span>{render()}</span>
        </div>
    )
}