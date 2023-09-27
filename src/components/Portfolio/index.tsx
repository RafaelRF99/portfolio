import styles from './Portfolio.module.css'
import { Titles } from '../../styles/styled';

import Slider from "./Slider";

export default function Portfolio() {
    return (
        <div className={styles.container}>
            <div>
                <Titles>Portfolio</Titles>
                <Slider />
            </div>
        </div>
    )
}