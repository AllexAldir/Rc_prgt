import { Input } from '../form/input'
import { Select } from '../form/select'
import { Submit } from '../form/submitButton'
import './FormNewprojects.css'
import { useEffect, useState } from 'react'


export function FormNew() {

    //Coloca os hooks para armazenar as informações vidas da api

    const [respo, setRespos] = useState([]);

    //coloca as repostas da minha requisição uma só vez

    useEffect(() => { //Efetua a ação somente uma vez
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'content-type': 'aplication/json',
            },
        }).then(resposta => resposta.json())
            .then(data => setRespos(data))
            .catch(e => console.log(`Erro na requisição ${e}`))

        

    }, [])

    return (
        <form className="form">

            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" />

            <Input type="number" text="Faça o orçamento" name="name" placeholder="Insira o nome do projeto" />

            <Select name="categoria_id" text="Selecione a categoria" options={setRespos} />

            <Submit text="Criar Projeto" />
        </form>

    )
}