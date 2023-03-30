import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Emcartaz from './pages/Emcartaz/emcartaz'
import PopularesFilmes from './pages/Populares/popularesfilmes'
import Estreias from './pages/Estreias/estreias'
import Streamming from './pages/Streamming/streamming'
import PopularesSeries from './pages/PopularesSeries/PopularesSeries'
import Exibidos from './pages/ExibirHoje/exibirhoje'

function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Emcartaz' element={<Emcartaz />} />
                <Route path='/Popularesfilmes' element={<PopularesFilmes />} />
                <Route path='/Estreias' element={<Estreias />} />
                <Route path='/Streamming' element={<Streamming />} />
                <Route path='/popularesSeries' element={<PopularesSeries />} />
                <Route path='/Exibidos' element={<Exibidos />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas