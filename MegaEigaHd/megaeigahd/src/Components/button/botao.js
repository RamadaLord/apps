import './style.botao.css'

export default function Botaum(){
    function alerta(){

        alert('Salved')
    }
        
    
    return(
        <div >
            <button className='botao' onClick={alerta}>Salvar Filme</button>
        </div>
    )
}