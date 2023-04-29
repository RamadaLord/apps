import { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom'


export default function Estreias() {
  const [filmesUp, setFilmesUp] = useState([""]);

        useEffect(() => {
          async function loadFilmes() {
            const response = await api.get("/movie/upcoming", {
              params: {
                api_key: "35f672447b37987d3a6ab0b0adf8cc96",
                language: "en",
              },
            });
            setFilmesUp(response.data.results);
          }
          loadFilmes();
        }, [filmesUp]);
      
        //console.log(filmes);
      
        return (
          <div className="api-content">
            {filmesUp.map((filmesUp) => {
              return (
                <div>
                  <article>
                  <strong className="api-api">{filmesUp.title}</strong>
                    <img
                      className="img-api1"
                      src={`https://image.tmdb.org/t/p/w400/${filmesUp.poster_path}`}
                      alt={filmesUp.title}
                    />
                    {/* <strong className="api-api">{series.overview}</strong> */}
                    <Link className="des" to={`/Detalhes/${filmesUp.id}`}>Detalhes</Link>
                  </article>
                </div>
              );
            })}
            
          </div>
        );
}
