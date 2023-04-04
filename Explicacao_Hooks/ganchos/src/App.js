import React, {useState} from "react";

export default function Ganchos() {
  const [nome, setNome] = useState('')
  const [ senha , setSenha] = useState('')
  function handleCadastro(){
    alert(`Nome: ${nome} \n Senha: ${senha}`)
  }
  return (
    <div>
      <h1>Estados Hooks</h1>
      <form onSubmit={handleCadastro}>
        <label>Nome:</label>
        <input type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)} /> 
        <br/>
        <label>Senha:</label>
        <input type="password"
        value={senha}
         onChange={(e)=> setSenha(e.target.value)}
         /> 
        <br/>
        <button>Enviar</button>
      </form>
    </div>
  );
}
