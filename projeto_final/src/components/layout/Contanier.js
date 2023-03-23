//estilo
import './ES01Contanier.css'

export function Contanier(props) {
    return (

        <div className={`Contanier min-heigth`}>
            {props.children}
        </div>

    )
}      
