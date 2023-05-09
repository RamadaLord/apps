import { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
export default function PopularesFilmes(){
    
        const [filmespop, setFilmespop] = useState([""]);
        const [loading, setLoading] = useState(true)


        useEffect(() => {
          async function loadFilmes() {
            const response = await api.get("/movie/popular", {
              params: {
                api_key: "35f672447b37987d3a6ab0b0adf8cc96",
                language: "en",
              },
            });
            setFilmespop(response.data.results);
            setLoading(false)
          }
          loadFilmes();
        }, [filmespop]);

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
            {filmespop.map((filmespop) => {
              return (
                <div>
                  <article>
                  <strong className="api-api">{filmespop.title}</strong>
                    <img
                      className="img-api1"
                      src={`https://image.tmdb.org/t/p/w400/${filmespop.poster_path}`}
                      alt={filmespop.title}
                    />
                    {/* <strong className="api-api">{series.overview}</strong> */}
                    <Link className="des" to={`/Detalhes/${filmespop.id}`}>Detalhes</Link>
                  </article>
                  
                </div>
              );
            })}
            
          </div>
        );
    
}