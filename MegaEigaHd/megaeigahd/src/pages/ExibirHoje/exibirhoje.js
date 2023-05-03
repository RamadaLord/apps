import { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom'


export default function Exibidos(){

    const [seriesHj, setSeriesHj] = useState([""]);

    useEffect(() => {
        async function loadFilmes() {
          const response = await api.get("/tv/airing_today", {
            params: {
              api_key: "35f672447b37987d3a6ab0b0adf8cc96",
              language: "en",
            },
          });
          setSeriesHj(response.data.results);
        }
        loadFilmes();
      }, [seriesHj]);
    
      //console.log(filmes);
    
      return (
        <div className="api-content">
          {seriesHj.map((seriesHj) => {
            return (
              <div>
                <article>
                <strong className="api-api">{seriesHj.name}</strong>
                  <img
                    className="img-api1"
                    src={`https://image.tmdb.org/t/p/w400/${seriesHj.poster_path}`}
                    alt={seriesHj.name}
                  />
                  {/* <strong className="api-api">{series.overview}</strong> */}
                  <Link className="des" to={`/Detalhes2/${seriesHj.id}`}>Detalhes</Link>
                </article>
              </div>
            );
          })}
          
        </div>
      );
}