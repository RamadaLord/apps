import Image from '../../favicon.png'
//import {Link} from 'react-router-dom'
import Series from '../Series/Series'
import Filmes from '../Filmes/Filmes'
import Home from '../Home/Home'
import Contatos from '../Contatos/cadastro'
export default function Header() {
    return (
        <div>
            <header class="cabecalho">
                <div class="area-logo">
                    <img src={Image} alt={Image} />
                </div>
                <div class="area-texto">
                    <h1>MegaEigaHD</h1>
                </div>
            </header>
            <div class="menu">
                <Home />
                <Filmes />
                <Series />
                <Contatos />
            </div>
        </div>
    )
}