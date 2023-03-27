//Projetos componentes
import { useLocation } from "react-router-dom"
import { Mensagem } from "../layout/Mensagem"

export function Projetos() {
    const location = useLocation()

    let message = ''

    if(location.state){
        message = location.state.message
    }

    return (
        <div>
            <h1>Meus projetos</h1>
            {message && <Mensagem type='sucess' msg={message}/>}
        </div>

    )


}