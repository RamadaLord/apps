import {Link} from 'react-router-dom' 

export default function Filmes() {
    return (
        <div className="dropdown">
            <a href="#">Filmes</a>
            <div className="drop">
                <Link className='link' to={'/Populares'}>Populares</Link>
                <Link className='link' to={'/Emcartaz'}>Em cartaz</Link>
                <Link className='link' to={'/Estreias'}>Estreia</Link>
            </div>
        </div>
    )
}