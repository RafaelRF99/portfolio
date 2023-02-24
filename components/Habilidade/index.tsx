import Image from 'next/image'
import styles from './Habilidade.module.css'

export default function Habilidade() {
    const tamanho = 100

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Habilidades</h1>
            <div className={styles.icons}>
                <div>
                    <Image src="/icons/HTML5.png" alt='HTML5' width={tamanho} height={tamanho}
                        priority={10 === 10} />
                </div>
                <div>
                    <Image src="/icons/CSS3.png" alt='CSS3' width={tamanho} height={tamanho}
                        priority={10 === 10} />
                </div>
                <div>
                    <Image src="/icons/BootsTrap.png" alt='BootsTrap' width={tamanho} height={tamanho}
                        priority={10 === 10} />
                </div>
                <div>
                    <Image src="/icons/JavaScript.png" alt='JavaScript' width={tamanho} height={tamanho}
                        priority={10 === 10} />
                </div>
                <div>
                    <Image src="/icons/Angular.png" alt='Angular' width={tamanho} height={tamanho}
                        priority={10 === 10} />
                </div>
                <div>
                    <Image src="/icons/React.png" alt='React' width={tamanho} height={tamanho}
                        priority={10 === 10} />
                </div>
                <div>
                    <Image src="/icons/Sass.png" alt='Sass' width={tamanho} height={tamanho}
                        priority={10 === 10} />
                </div>
                <div>
                    <Image src="/icons/TypeScript.png" alt='TypeScript' width={tamanho} height={tamanho}
                        priority={10 === 10} />
                </div>
                <div>
                    <Image src="/icons/NextJS.png" alt='NextJS' width={tamanho} height={tamanho}
                        priority={10 === 10} />
                </div>
            </div>
            <div className={styles.display}>
            </div>
        </div>
    )
}