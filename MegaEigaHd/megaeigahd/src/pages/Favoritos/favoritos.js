import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../Components/css/style.fav.css";
import '../../Components/css/style.index.css'

export default function Favoritos() {
  const [filme, setFilmes] = useState([]);
  useEffect(() => {
    const minhaLista = localStorage.getItem("@filmesfavoritos");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function excluirFilme(id) {
    let filtroFilme = filme.filter((filme) => {
      return filme.id !== id;
    });

    setFilmes(filtroFilme);
    localStorage.setItem("@filmesfavoritos", JSON.stringify(filtroFilme));
  }

  return (
    <div>
      <ul>
        {filme.map((filme) => {
          return (
            <div className="Fav">
              <br />
              <article key={filme.id}>
                <strong>{filme.title}</strong>
                <img
                  src={`https://image.tmdb.org/t/p/w400/${filme.backdrop_path}`}
                  alt={filme.tittle}
                />
                <button className="botao">
                  <Link to={`/Detalhes/${filme.id}`}>Detalhes</Link>
                </button>

                <br />

                <button  className="botao" onClick={() => excluirFilme(filme.id)}>EXCLUIR</button>
              </article>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
