import Image from '../../favicon.png'
import { Link } from 'react-router-dom'
import Contatos from '../Contatos/cadastro'
import Home from '../Home/Home'
export default function Header() {
    return (
        <div className='container-fluid'>
            <div class="cabecalho">
                <div class="area-logo">
                    <img src={Image} alt={Image} />
                </div>
                <div class="area-texto">
                    <h1>MegaEigaHD</h1>
                </div>
            </div>
            <div class="menu">
            <Link className='link' to='/'>Home</Link>
                </div>
            <div class="menu">
                <div className="dropdown">
                    <a href="#">Filmes</a>
                    <div className="drop">
                        <Link className='link' to='/Popularesfilmes'>Populares</Link>
                        <Link className='link' to='/Emcartaz'>Em cartaz</Link>
                        <Link className='link' to='/Estreias'>Estreias</Link>
                    </div>
                </div>
                
                <div className="dropdown">
                    <a href="#">Series</a>
                    <div className="drop">
                        <Link className='link' to='/Popularesseries'>Populares</Link>
                        <Link className='link' to='/Exibidos'>Exibir Hoje</Link>
                        <Link className='link' to='Streamming'>Streamming</Link>
                    </div>
                </div>
                <Contatos />
            </div>
        </div>
    )
}