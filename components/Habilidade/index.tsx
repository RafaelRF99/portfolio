import Image from 'next/image'
import styles from './Habilidade.module.css'
import habilidades from './habilidades.json'

export default function Habilidade() {
    const tamanho = 100

    function render() {
        return habilidades.map((hab, i) => {
            return (
                <div key={i}>
                    <Image src={require('../../public/icons/' + hab.imagem)} alt='HTML5'
                    width={tamanho} height={tamanho}
                    priority={10 === 10} />
                </div>
            )
        })
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Habilidades</h1>
            <div className={styles.icons}>
                {render()}
            </div>
            <div className={styles.display}>
            </div>
        </div>
    )
}