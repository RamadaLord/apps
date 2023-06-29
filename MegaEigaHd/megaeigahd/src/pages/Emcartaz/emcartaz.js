import { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'
export default function Emcartaz() {
  //array de string vazia//
  const [filmes, setFilmes] = useState([""]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("/movie/now_playing", {
        params: {
          api_key: "35f672447b37987d3a6ab0b0adf8cc96",
          language: "en",
        },
      });
      setLoading(false)
      setFilmes(response.data.results);
    }
    loadFilmes();
    
  }, [filmes]);

  if (loading){
    return (
      <div className="spinner">
        <div>
          <h1>Carregando</h1>
        </div>
        <div>
          <Spinner animation="border" variant="secondary"/>
        </div>
      </div>
    )
   }

  //console.log(filmes);

  return (
    <div className="api-content">
      {filmes.map((filmes) => {
        return (
          <div>
            <article>
              <strong className="api-api">{filmes.title}</strong>
              <img
                className="img-api1"
                src={`https://image.tmdb.org/t/p/w400/${filmes.poster_path}`}
                alt={filmes.tittle}
              />
              {/* <strong className="api-api">{filmes.overview}</strong> */}
              <Link className="des" to={`/Detalhes/${filmes.id}`}>
                Detalhes
              </Link>
            </article>
          </div>
        );
      })}
    </div>
  );
}
