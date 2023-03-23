import './Newproject.css'
import { FormNew } from '../projects/FormNewprojects'

export function Newproject() {
    //Aqui coloca as página do meu projetos aonde será colocado os orçamentos 
    return (
        <div className="contanier">
            <h1>Criar Projetos</h1>
            <p>Crie um projeto para depois adicionar os serviços</p>
            <FormNew/>
        </div>

    )

}