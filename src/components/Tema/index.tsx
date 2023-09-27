import styles from './Tema.module.scss'

import { CiDark } from 'react-icons/ci'
import { BsLightbulbFill } from 'react-icons/bs'

import { useTheme } from '../../data/hooks/useTheme'

export default function Tema() {
    const { theme, handleTheme } = useTheme()

    return (
        <>
            {theme === 'light' ? (
                 <>
                 <div className={styles.container__dark}>
                     <div className={styles.light}></div>
                     <div
                         className={styles.dark}
                         onClick={() => handleTheme()}
                     >
                         <CiDark size={20} />
                     </div>
                 </div>
             </>
            ) : (
                <>
                <div className={styles.container__light}>
                    <div
                        className={styles.light}
                        onClick={() => handleTheme()}
                    >
                        <BsLightbulbFill color="#000" size={15} />
                    </div>
                    <div className={styles.dark}></div>
                </div>
            </>
            )}
        </>
    )
}
