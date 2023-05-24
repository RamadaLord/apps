import { BrowserRouter, Routes, Route,} from 'react-router-dom'
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
import Detalhes2 from './Components/detalhes/detalhes2'
import Favoritos from './pages/Favoritos/favoritos'

import Footer from './Components/footer/footer'




function Rotas() {

      

    return (
        <BrowserRouter>
            <Header />
            <Routes>
               
                <Route path='/' element={<Home />} />
                <Route path='/Emcartaz' element={<Emcartaz />} />
                <Route path='/Popularesfilmes' element={<PopularesFilmes />} />
                <Route path='/Estreias' element={<Estreias />} />
                <Route path='/Favoritos' element={< Favoritos/>}/>

                <Route path='/Streamming' element={<Streamming />} />
                <Route path='/popularesSeries' element={<PopularesSeries />} />
                <Route path='/Exibidos' element={<Exibidos />} />

                <Route path='/Detalhes2/:id' element={< Detalhes2 />} />

                <Route path='/Detalhes/:id' element={< Detalhes/>} />
                <Route path='*' element={< Detalhes/>} />
             
            </Routes>
            <br/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Rotas