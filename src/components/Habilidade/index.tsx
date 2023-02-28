import Image from 'next/image'
import { useState } from 'react'
import Display from './Display'
import styles from './Habilidade.module.css'
import habilidades from './habilidades.json'

export default function Habilidade() {
    const tamanho = 100
    const [status, setStatus] = useState(false)
    const [cursos, setCursos] = useState("")

    function render() {
        return habilidades.map(hab => {
            return (
                <div key={hab.curso} onClick={clicado} >
                    <Image src={require('../../../public/icons/' + hab.imagem)} alt='HTML5'
                        width={tamanho} height={tamanho}
                        priority={10 === 10} />
                </div>
            )

            function clicado() {
                setStatus(true)
                let valorCurso = hab.curso
                return setCursos(valorCurso)
            }            
        })
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Habilidades</h1>
            <div className={styles.icons}>
                {render()}
            </div>
            <div className={styles.display}>
                <Display curso={cursos} status={status} />
            </div>
        </div>
    )
}