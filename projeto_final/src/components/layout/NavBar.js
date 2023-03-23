import { Link } from "react-router-dom"
//import { Contanier } from "./Contanier"
import '././ES01Contanier.css'
import './NavBar.css'

import imagem from '../../images/bit_coin_03_sem_fundo.png'
export function NavBar() {

    return (

        <nav className="navbar">
            <ul className="lista_ul">
                <li className="li">
                    <Link to='/' >
                        <img src={imagem} />
                    </Link>
                </li>
                <li className="li" >
                    <Link to='/' className="links">Home</Link>
                </li>
                <li className="li">
                    <Link to='/company' className="links">Company</Link>
                </li>
                <li className="li">
                    <Link to='/contact' className="links">Contact</Link>
                </li>
                <li className="li">
                    <Link to='/newproject' className="links">Newproject</Link>
                </li>

                <li className="li">
                    <Link to='/projetos' className="links">Projetos</Link>
                </li>
            </ul>
            {/*Aqui embaixo aonde os links iram para suas determidas rotas*/}

        </nav>

    )
}