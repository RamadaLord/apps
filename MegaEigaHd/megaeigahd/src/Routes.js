import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Filmes from './Components/Filmes/Filmes'
import Series from './Components/Series/Series'
import Emcartaz from './emcartaz'
import Estreias from './estreias'
import Populares from './populares'

function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/Filmes' element={<Filmes/>}/>
              <Route path='/Series' element={<Series/>} />
              <Route path='/Emcartaz' element={<Emcartaz/>} />
              <Route path='/Estreias' element={<Estreias/>} />
              <Route path='/Populares' element={<Populares/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas