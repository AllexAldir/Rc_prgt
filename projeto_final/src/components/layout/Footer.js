//colocando icons
import './Footer.css'
import { FaFacebook,FaInstagram,FaLinkedin } from 'react-icons/fa'

export function Footer() {
    return (
        <footer className='footer'>
            <ul className='lista_ul'>
                <li><FaFacebook className='icon'/></li>
                <li><FaInstagram className='icon' /></li>
                <li><FaLinkedin className='icon' /></li>
            </ul>
            <p>Feito por Állex Aldir &copy;</p>
        </footer>
    )
}