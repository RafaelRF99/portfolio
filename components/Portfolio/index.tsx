import styles from './Portfolio.module.css'
import Slider from "./Slider";

export default function Portfolio() {
    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.title}>Portfolio</h1>
                <Slider />
            </div>
        </div>
    )
}