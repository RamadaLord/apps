import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../Components/css/style.fav.css";
import '../../Components/css/style.index.css'

export default function Favoritos() {
  const [filme, setFilmes] = useState(['']);
  const [serie, setSerie] = useState([''])

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
  //
  useEffect(() => {
    const minhaLista = localStorage.getItem("@seriesfavoritas");
    setSerie(JSON.parse(minhaLista) || []);
  }, []);

  function excluirSerie(id) {
    let filtroSerie = serie.filter((serie) => {
      return serie.id !== id;
    });

    setSerie(filtroSerie);
    localStorage.setItem("@seriesfavoritas", JSON.stringify(filtroSerie));
  }

  return (
    <div>
      <ul>
        <h1 className="Favh1">
        🌟 Filmes Favoritos🌟
        </h1>
        {filme.map((filme) => {
          return (
            <div className="Fav">
              <br />
              <article key={filme.id}>
                <strong>{filme.title}</strong>
                <img
                  src={`https://image.tmdb.org/t/p/w400/${filme.backdrop_path }`}
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
        <h1 className="Favh1">
        🌟Series Favoritas🌟
        </h1>
        {serie.map((serie) => {
          return(
            <div className="Fav">
              <br/>
              <article key={serie.id}>
                <strong>{serie.name}</strong>
                <img src={`https://image.tmdb.org/t/p/w400/${serie.backdrop_path}`} alt={serie.name} />
                <button className="botao">
                  <Link to={`/Detalhes2/${serie.id}`}>Detalhes</Link>
                </button>

                <br />

                <button  className="botao" onClick={() => excluirSerie(serie.id)}>EXCLUIR</button>
              </article>

            </div>
          )
        })}
      </ul>
    </div>
  );
}
