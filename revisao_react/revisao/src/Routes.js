import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/header'
import Inicio from './Pages/Start/inicio'
import Qsomos from './Components/Qsomos/qsomos'
import Cadastro from './Components/Contatos/Contatos'

function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/Qsomos' element={<Qsomos />} />
                <Route path='/Cadastro' element={<Cadastro />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas