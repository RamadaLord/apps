import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../Components/button/style.botao.css";
import api from "../../services/api";
import moment from "moment";

export default function Detalhes() {
  const { id } = useParams();
  const [filmes, setFilme] = useState({}); //chama de objeto//
  const [filme, setFilmes] = useState(['']);
  const [series, setSeries] = useState({})
  const [serie, setSerie] = useState ([''])
  
    useEffect(() => {
      async function loadFilmeDetails() {
        const response = await api.get(`/movie/${id}`, {
          params: {
            api_key: "35f672447b37987d3a6ab0b0adf8cc96",
            language: "en",
            // page: 1,
          },
        });
        setFilme(response.data);
        setFilmes(response.data.production_companies);
      }
      loadFilmeDetails();
    }, []);
  
    useEffect(() => {
      async function loadSeriesDetails() {
        const response = await api.get(`/tv/${id}`, {
          params: {
            api_key: "35f672447b37987d3a6ab0b0adf8cc96",
            language: "en",
            // page: 1,
          },
        });
        setSerie(response.data);
        setSeries(response.data.production_companies);
      }
      loadSeriesDetails();
    }, []);
  
  function salvarFilmes() {
    const minhaLista = localStorage.getItem("@filmesfavoritos");
    let filmesSalvos = JSON.parse(minhaLista) || [];


    const verificarFilmes = filmesSalvos.some(
      (filmesSalvos) => filmesSalvos.id === filmes.id
      );

    if (verificarFilmes) {
      alert("Filme Ja Esta Na Lista");

      return;
    }

    filmesSalvos.push(filmes);

    localStorage.setItem("@filmesfavoritos", JSON.stringify(filmesSalvos));

    alert("Salvo");
  }

  return (
    <div className="api-content">
      <h1 className="des2">
        Title : {filmes.title} {serie.name}
        <br />
        Release:
        {moment(new Date(`${filmes.release_date}`)).format("DD-MM-YYYY")}
        {/* {moment(new Date(`${serie.first_air_date}`)).format("DD-MM-YYYY")} */}
        <br />
        Popularity:
        {filmes.popularity}
        {serie.popularity}
        <br />
        
          TMDB:★
          
         {Number(filmes.vote_average).toFixed(1)}
         {Number(serie.vote_average).toFixed(1)}
      </h1>
      <div className="api-api">
        {filme.map((det) => {
          return (
            <div key={det.id}>
              <h1>Studio:{det.name}</h1>
            </div>
          );
        })}
        <img
          className="img-api"
          src={`https://image.tmdb.org/t/p/w400/${filmes.backdrop_path}`} 
          alt={filmes.tittle}
        />
        <img
          className="img-api"
          src={`https://image.tmdb.org/t/p/w400/${serie.backdrop_path}`}
          alt={filmes.tittle}
        />
        <h3>
          <button className="botao" onClick={salvarFilmes}>
            ★Favoritar★
          </button>
        </h3>
      </div>
      <h2 className="des2">Details : {filmes.overview}{serie.over}</h2>
    </div>
  );
}
