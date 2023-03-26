import { Input } from '../form/input'
import { Select } from '../form/select'
import { Submit } from '../form/submitButton'
import './FormNewprojects.css'
import { useEffect, useState } from 'react'


export function FormNew({ handlesubmit, btntext, projectData }) {

    const [project, setProject] = useState(projectData || {})

    //Coloca os hooks para armazenar as informações vidas da api

    const [respo, setRespos] = useState([]); //incrementa um valor para o meu state

    //coloca as repostas da minha requisição uma só vez

    useEffect(() => { //Efetua a ação somente uma vez
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'content-type': 'aplication/json',
            },
        })
            .then(resposta => resposta.json())
            .then(data => setRespos(data))
            .catch(e => console.log(`Erro na requisição ${e}`))



    }, [])

    const submit = (e) => {
        e.preventDefault()
        handlesubmit(project) //Executo o metodo passado pela props 
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }


    function handleCatergorie(e) {
        setProject({ ...project, category:{
            id: e.target.velue, 
            name: e.target.options[e.target.selectedIndex].text //aqui consegue vizualizar qual opção selecionada pelo index
        },
        })

    }

    return (
        <form onSubmit={submit} className="form">

            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" handleOnChange={handleChange} />

            <Input type="number" text="Faça o orçamento" name="name" placeholder="Insira o nome do projeto" handleOnChange={handleChange} />

            <Select name="categoria_id" text="Selecione a categoria" options={respo} handleOnChange={handleCatergorie} />

            <Submit text="Criar Projeto" />
        </form>

    )
}