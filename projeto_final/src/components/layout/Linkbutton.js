import { Link } from 'react-router-dom'
import './Linkbutton.css'
export function Butao({to, text}){
    return(
        <Link className='btn' to={to}>
            {text}
        </Link>
    )
}