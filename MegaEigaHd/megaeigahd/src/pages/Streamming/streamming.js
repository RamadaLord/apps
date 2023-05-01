import { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom'

export default function Streamming(){

    const [Streamming, setStreamming] = useState([""]);

    useEffect(() => {
        async function loadFilmes() {
          const response = await api.get("/tv/on_the_air", {
            params: {
              api_key: "35f672447b37987d3a6ab0b0adf8cc96",
              language: "en",
            },
          });
          setStreamming  (response.data.results);
        }
        loadFilmes();
      }, [Streamming]);
    
      //console.log(filmes);
    
      return (
        <div className="api-content">
          {Streamming.map((Streamming) => {
            return (
              <div>
                <article>
                <strong className="api-api">{Streamming.name}</strong>
                  <img
                    className="img-api1"
                    src={`https://image.tmdb.org/t/p/w400/${Streamming.poster_path}`}
                    alt={Streamming.name}
                  />
                  {/* <strong className="api-api">{series.overview}</strong> */}
                  <Link className="des" to={`/Detalhes/${Streamming.id}`}>Detalhes</Link>
                </article>
              </div>
            );
          })}
          
        </div>
      );
}