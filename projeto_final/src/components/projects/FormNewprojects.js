import { Input } from '../form/input'
import { Select } from '../form/select'
import { Submit } from '../form/submitButton'
import './FormNewprojects.css'

export function FormNew() {
    return (
        <form className="form">
            
            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto"/>

            <Input type="number" text="Faça o orçamento" name="name" placeholder="Insira o nome do projeto" />

            <Select name="categoria_id" text="Selecione a categoria"/>
            
            <Submit text="Criar Projeto"/>
        </form>

    )
}