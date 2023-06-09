import './Newproject.css'
import { FormNew } from '../projects/FormNewprojects'
import { useNavigate } from 'react-router-dom'//Redericiona o usuario para outra página quando enviado pelo metódo post

export function Newproject() {
    //Aqui coloca as página do meu projetos aonde será colocado os orçamentos

    const history = useNavigate() //Mudança de página para o usuário

    function CreatePost(projetos) {
        projetos.cost = 0
        projetos.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST', //método de envio de formulários
            headers: {
                'Content-type': 'application/json',// Vai se comunicar com json 
            },
            body: JSON.stringify(projetos),
        })
            .then(resposta => resposta.json())
            .then((data )=> {
                console.log(data)
                history('/projetos', {message: 'projeto criado com sucesso!'}) //redirect
            }) //Aqui depois fazer um redirect
            .catch(e => console.log(`Erro na requisição ${e}`))
    }

    return (

        <div className="contanier">
            <h1>Criar Projetos</h1>
            <p>Crie um projeto para depois adicionar os serviços</p>
            <FormNew handlesubmit={CreatePost}/>
        </div>

    )

}