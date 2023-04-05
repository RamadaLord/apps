import { useState } from "react";

export default function Mudar() {
  const [valor, setValor] = useState(0);

  function aumentar() {
    if (valor === 20) {
      return (
        alert("Chegou em 20")
      );
    }
    setValor(valor + 1);
  }
  function diminuir() {
    if (valor === 0) {
      return(
        alert("chegou a 0")
      );
    }
    setValor(valor - 1);
  }

  function alerta(){
    alert(valor)
  }

  return (
    <div className="botao">
      <button onClick={aumentar}>+</button>
      <p>{valor}</p>
      <button onClick={diminuir}>-</button>
    </div>
  );
}
