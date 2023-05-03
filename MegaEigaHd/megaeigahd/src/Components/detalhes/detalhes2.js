import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../Components/button/style.botao.css";
import api from "../../services/api";
import moment from "moment";

export default function Detalhes2() {
  const { id } = useParams();
  const [series, setSeries] = useState({});
  const [serie, setSerie] = useState([""]);

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

  function salvarSeries() {
    const minhaLista = localStorage.getItem("@seriesfavoritas");
    let seriesSalvas = JSON.parse(minhaLista) || [];


    const verificarSeries = seriesSalvas.some(
      (seriesSalvas) => seriesSalvas.id === serie.id
      );

    if (verificarSeries) {
      alert("Serie Ja Esta Na Lista");

      return;
    }

    seriesSalvas.push(serie);

    localStorage.setItem("@seriesfavoritas", JSON.stringify(seriesSalvas));

    alert(" Serie Salva");
  }

  return(
    <div className="api-content">
    <h1 className="des2">
      Title : {serie.name}
      <br />
      Airing Ep.:{serie.episode_run_time}
      <br/>
      Release:
      {moment(new Date(`${serie.first_air_date}`)).format("DD-MM-YYYY")}
      <br />
      Popularity:
      
      {serie.popularity}
      <br />
      
        TMDB:★
       {Number(serie.vote_average).toFixed(1)}
    </h1>
    <div className="api-api">
      {/* {serie.map((det) => {
        return (
          <div key={det.id}>
            <h1>Studio:{det.name}</h1>
          </div>
        );
      })} */}
     
      <img
        className="img-api"
        src={`https://image.tmdb.org/t/p/w400/${serie.backdrop_path || serie.poster_path }`} 
        alt={series.tittle}
      />
      <h3>
        <button className="botao" onClick={salvarSeries}>
          ★Favoritar★
        </button>
      </h3>
    </div>
    <h2 className="des2">Details : {serie.overview}</h2>
  </div>
  )
}
