import styles from './Sobre.module.css'
import Table from './Table'

export default function Sobre() {
    return (
        <div className={styles.container}>
            <section className={styles.sobre}>
                <h1 className={`${styles.title} traco`}>Sobre</h1>
                <div className={styles.lista}>
                    <ul>
                        <li>Experiência em programação de máquinas e lasers +4 anos.</li>
                        <li>Estudando JavaScript, ReactJS a 2 anos.</li>
                        <li>Bom entendimento em BootsTrap e ReactJS</li>
                    </ul>
                </div>
                <div className={styles.observacao}>
                    <p>Sede por conhecimento e apaixonado por programação. Encaro os problemas como
                        um desafio.
                    </p>
                </div>
            </section>
            <section className={styles.informacao}>
                <h1 className={`${styles.title} traco`}>Informações básicas</h1>
                <div className={styles.table}>
                    <Table pergunta='Data de Nascimento:' resposta='15/01/1999' />
                    <Table pergunta='Email:' resposta='rafaelfferreira99@hotmail.com' />
                    <Table pergunta='Celular:' resposta='(19) 99825-5728' />
                    <Table pergunta='Linguagem:' resposta='Inglês Básico para leitura' />
                </div>
            </section>
        </div>
    )
}