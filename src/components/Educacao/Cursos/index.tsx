import cursos from './cursos.json'
import styles from './Cursos.module.css'

export default function Cursos() {

    function render() {
        return cursos.map((curso, i) => {
            return (
                <div className={styles.area} key={i}>
                    <h2 className={styles.curso}>{curso.curso}</h2>
                    <span className={styles.escola}>{curso.escola}</span>
                </div>
            )
        })
    }

    return (
        <div className={styles.container}>
            {render()}
        </div>
    )
}