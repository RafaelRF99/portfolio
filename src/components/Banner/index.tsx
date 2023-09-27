import { useTheme } from '../../data/hooks/useTheme'
import styles from './Banner.module.css'
import Image from 'next/image'

export default function Banner() {
    const { theme } = useTheme()
    const isBanner = theme === 'dark' ? styles.banner : styles.banner2

    return (
        <div className={`${styles.container} ${isBanner}`}>
            <Image className={styles.img} src="/img/Rafael.jpeg" alt='Rafael' width={180} height={180} 
            priority={10 === 10}/>
            <h1 className={styles.title}>Rafael Ferreira</h1>
            <h2 className={`${styles.sub_title} traco`}>Desenvolvedor Web</h2>
        </div>
    )
}