import { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom'

export default function PopularesSeries(){


    const [series, setSeries] = useState([""]);

    useEffect(() => {
      async function loadFilmes() {
        const response = await api.get("/tv/on_the_air", {
          params: {
            api_key: "35f672447b37987d3a6ab0b0adf8cc96",
            language: "en",
          },
        });
        setSeries(response.data.results);
      }
      loadFilmes();
    }, [series]);
  
    //console.log(filmes);
  
    return (
      <div className="api-content">
        {series.map((series) => {
          return (
            <div>
              <article>
                <strong className="api-api">{series.name}</strong>
                <img
                  className="img-api1"
                  src={`https://image.tmdb.org/t/p/w400/${series.poster_path}`}
                  alt={series.tittle}
                />
                {/* <strong className="api-api">{series.overview}</strong> */}
                <Link className="des" to={`/Detalhes/${series.id}`}>Detalhes</Link>
              </article>
            </div>
          );
        })}
        
      </div>
    );
}