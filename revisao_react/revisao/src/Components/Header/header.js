import Image from './G4CLogo.png'
import '../../css/style.css'
import {Link} from 'react-router-dom'
export default function Header(){
    return(
        <div>
          <header class="cabecalho">
            <div class="area-logo">
                <img src={Image} alt={Image}/>
            </div>
            <div class="area-texto">
                <h1>Html, Css e JavaScript em foco.</h1>
            </div>
        </header>
        <div class="menu">
           <Link className='link' to='/'>Inicio</Link>
           <Link className='link' to='/Qsomos'>Quem Somos</Link>
           <Link className='link' to='/Cadastro'>Cadastro</Link>
        </div>
        </div>
    )
}