import React, { useState } from "react";
import "./css/style.forms.css";
import Mudar from "./components/contador/contador";
export default function Ganchos() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [genero, setGenero] = useState("");
  const [preferencia, setPreferencia] = useState("");
  const [valor, setValor] = useState('');

  function handleCadastro() {
    alert(
      `Nome: ${nome} \n Email: ${email} \n Senha: ${senha} \n Genero: ${genero} \n Preferencia: ${preferencia} \n Valor: ${valor}`
    );
  }
  return (
    <div id="Principal">
      <h1>Estados Hooks</h1>
      <form onSubmit={handleCadastro}>
        <label>Nome:</label>
        <input
          type="text"
          placeholder="Seu Nome Aqui"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <br />

        <label>E-mail:</label>
        <input
          type="text"
          placeholder="seuemail@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label>Senha:</label>
        <input
          type="password"
          placeholder="*******"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <br />

        <label>Genero</label>
        <select value={genero} onChange={(e) => setGenero(e.target.value)}>
          <option>Selecionar</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminio">Feminino</option>
        </select>

        <br />
        <div
          value={preferencia}
          onChange={(e) => setPreferencia(e.target.value)}
        >
          <label>Preferencia?</label>
          <br />
          <label>
            <input type="radio" name="preferencia" value="Hooks" />
            Hooks?
          </label>
          <label>
            <input type="radio" name="preferencia" value="Props" />
            Props?
          </label>
        </div>
        <br />

        <button type="submit">Enviar</button>
      </form>
      <br />
      <br />
        <Mudar value={valor}
        onClick={(e) => setValor(e.target.value)} />
      
      
    </div>
  );
}
