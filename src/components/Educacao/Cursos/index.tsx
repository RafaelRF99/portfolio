import styles from './Cursos.module.css'

import cursos from './cursos.json'

import { AiFillStar } from 'react-icons/ai'

export default function Cursos() {
    const isStar = true

    function render() {
        return cursos.map((curso, i) => {
            return (
                <div className={styles.area} key={i}>
                    <h2 className={styles.curso}>{curso.curso}</h2>
                    <div className={styles.local}>
                        <span className={styles.escola}>{curso.escola}</span>
                        <span>{curso.star ? <AiFillStar size={20} /> : ''}</span>
                    </div>
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