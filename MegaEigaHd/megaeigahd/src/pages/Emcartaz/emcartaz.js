import Image from "../../img/O_hobbit.jpg";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom'

export default function Emcartaz() {
  //array de string vazia//
  const [filmes, setFilmes] = useState([""]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("/movie/now_playing", {
        params: {
          api_key: "35f672447b37987d3a6ab0b0adf8cc96",
          language: "pt-br",
        },
      });
      setFilmes(response.data.results);
    }
    loadFilmes();
  }, [filmes]);

  console.log(filmes);

  return (
    <div className="api-content">
      {filmes.map((filmes) => {
        return (
          <div>
            <article>
              <strong className="api-api">{filmes.title}</strong>
              <img
                className="img-api"
                src={`https://image.tmdb.org/t/p/w400/${filmes.poster_path}`}
                alt={filmes.tittle}
              />
              <Link className="des" to={`/detalhes/${filmes.id}`}>Detalhes</Link>
            </article>
          </div>
        );
      })}
      
    </div>
  );
}
