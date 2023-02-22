import styles from './Table.module.css'

interface TableProps {
    pergunta: string
    resposta: string
}

export default function Table(props: TableProps) {
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <th>{props.pergunta}</th>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <td>{props.resposta}</td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}