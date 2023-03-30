import Cadastro from "./Contatos"
export default function Contatos(){
    return (
        <div>
        <div className="dropdown">
            <a>Contatos</a>
            <div className="drop">
            <Cadastro/>
            </div>
        </div>
        </div>
    )
}