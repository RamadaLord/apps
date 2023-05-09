import { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'


export default function Estreias() {
  const [filmesUp, setFilmesUp] = useState([""]);
  const [loading, setLoading] = useState(true)

        useEffect(() => {
          async function loadFilmes() {
            const response = await api.get("/movie/upcoming", {
              params: {
                api_key: "35f672447b37987d3a6ab0b0adf8cc96",
                language: "en",
              },
            });
            setFilmesUp(response.data.results);
            setLoading(false)
          }
          loadFilmes();
        }, [filmesUp]);
      

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
