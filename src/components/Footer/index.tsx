// REACT ICONS
import { MdEmail } from 'react-icons/md'
import { VscAccount } from 'react-icons/vsc'
import { BsGithub, BsWhatsapp } from 'react-icons/bs'

import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.contato}>
                <h1 className={styles.title}>Contato</h1>
                <div className={styles.link}>
                    <Link passHref rel="noreferrer" target="_blank"
                        href="mailto: rafaelfferreira99@hotmail.com"><MdEmail /><span>Email</span></Link>
                    <Link passHref rel="noreferrer" target="_blank"
                        href="https://wa.me/5519998255728"><BsWhatsapp /><span>WhatsApp</span></Link>
                    <Link passHref rel="noreferrer" target="_blank"
                        href="https://www.linkedin.com/in/rafael-ferreira99/"><VscAccount />
                        <span>LinkedIn</span></Link>
                    <Link passHref rel="noreferrer" target="_blank"
                        href="https://github.com/RafaelRF99"><BsGithub /><span>GitHub</span></Link>
                </div>
            </div>
            <div className={styles.honra}>
                © 2023 - Desenvolvido por Rafael Ferreira em NextJS.
            </div>
        </div>
    )
}