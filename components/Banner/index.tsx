import styles from './Banner.module.css'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className={styles.container}>
            <Image className={styles.img} src="/img/Rafael.jpeg" alt='Rafael' width={180} height={180}/>
        </div>
    )
}