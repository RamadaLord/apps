import { Link } from 'react-router-dom'
import '../css/style.footer.css'
import image from '../../favicon.png'
export default function Footer(){
    return(
        <div className='footer'>
            <footer>
                <Link to='/'>
                <img className='F-img' src={image} alt={image}/>
                </Link>
                <div  className='pes'>

                Copyright©
                <Link to="https://github.com/RamadaLord">
                :RamadaLord
                </Link>
                </div>
            </footer>
        </div>
    )
}
