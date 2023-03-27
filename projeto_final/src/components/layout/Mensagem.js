//Projetos componentes
import styles from './Mensagem.css'
import { useState, useEffect } from 'react'


export function Mensagem({ msg, type }) {

    const [visibilite, setvisibilite] = useState(false)

    useEffect(() => {
        if (!msg) {
            setvisibilite(false)
            return
        }

        setvisibilite(true)

        const time = setTimeout(() => {
            setvisibilite(false)
        }, 300)

        return() => clearTimeout(time)
    }, [msg])


    return (
        <>
            {visibilite &&(
                <div className={`${styles.mensagem} ${styles[type]}`}>{msg}</div>
            )

            }
        </>
    )


}