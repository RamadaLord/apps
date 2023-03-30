import Cadastro from "./Contatos"
export default function Contatos(){
    return (
        <div>
        <div className="dropdown">
            <a href="#">Contatos</a>
            <div className="drop">
            <Cadastro/>
            </div>
        </div>
        </div>
    )
}