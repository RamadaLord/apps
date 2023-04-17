import { useParams } from "react-router-dom"
import {useEffect, useState} from 'react'
import api from "../../services/api";

export default function Detalhes(){

    const {id} = useParams();
    const [filmes , setFilme] = useState({});//chama de objeto//

    useEffect(() => {
        async function loadFilmeDetails (){
            const response = await api.get(`/movie/${id}`, {
                params: {
                    api_key: "35f672447b37987d3a6ab0b0adf8cc96",
                    language: "en",
                    page: 1,
                }
            })
            setFilme(response.data)
        } 
        console.log(filmes)
        loadFilmeDetails()
    }, [])

    return(
        <div className="api-content">
                <h1 className="des2" >Movie : {filmes.title}
                <br/>
                Release Date: {filmes.release_date}
                <br/>
                Popularity: 
                 {filmes.popularity}
                <br/>
                TMDB: 
                 {filmes.vote_average}
                </h1>
            <div className="api-api" >
                <img className="img-api"
                src={`https://image.tmdb.org/t/p/w400/${filmes.poster_path}`}
                alt={filmes.tittle}/>
            </div>
                <h2 className="des2">Details : {filmes.overview}</h2>
        </div>
    )
}