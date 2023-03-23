import './Home.css'
import porco from '../../images/porco_trans.png'
import './Home.css'
import { Butao } from '../layout/Linkbutton.js'

//Aqui a página inicial do projeto
export function Home() {
    return (

        <section className='Home'>
            <h1>Bem-vindos ao <span>Invests</span></h1>
            <p>Come a gerenciar os seus projetos agora mesmo!</p>
            <Butao to='/newproject' text='criar projetos' />
            {/*Propis passando o valor!*/}
            <img src={porco} alt='Imagem do porco' />
        </section>

    )
}