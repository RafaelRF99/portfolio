import styles from './Banner.module.css'
import Image from 'next/image'

export default function Banner() {

    return (
        <div className={styles.container}>
            <Image className={styles.img} src="/img/Rafael.jpeg" alt='Rafael' width={180} height={180}/>
            <h1 className={styles.title}>Rafael Ferreira</h1>
            <h2 className={styles.sub_title}>Desenvolvedor Web</h2>
        </div>
    )
}