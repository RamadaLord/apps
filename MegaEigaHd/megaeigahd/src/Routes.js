import { BrowserRouter, Routes, Route,useParams } from 'react-router-dom'
import * as React from 'react'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Emcartaz from './pages/Emcartaz/emcartaz'
import PopularesFilmes from './pages/Populares/popularesfilmes'
import Estreias from './pages/Estreias/estreias'
import Streamming from './pages/Streamming/streamming'
import PopularesSeries from './pages/PopularesSeries/PopularesSeries'
import Exibidos from './pages/ExibirHoje/exibirhoje'
import Detalhes from './Components/detalhes/detalhes'



function Rotas() {

        // let { filme } = useParams();

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

            
                <Route path='/Detalhes/:id' element={< Detalhes/>} />
                <Route path='*' element={< Detalhes/>} />

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas