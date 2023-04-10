import Image from "../../img/O_hobbit.jpg";
import { useState, useEffect } from "react";
import api from "../../services/api";

export default function Emcartaz() {
  //array de string vazia//
  const [filmes, setFilmes] = useState([""]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("/movie/now_playing", {
        params: {
          api_key: "35f672447b37987d3a6ab0b0adf8cc96",
          language: "pt-br",
        },
      });
      setFilmes(response.data.results);
    }
    loadFilmes();
  }, [filmes]);

  console.log(filmes);

  return (
    <div>
      <h1>Em cartaz</h1>
      {filmes.map((filmes) => {
        return (
          <article>
            <strong>{filmes.backdrop_path}</strong>
          </article>
        );
      })}
      {/* <img className="img1" src={Image} alt={Image} /> */}
    </div>
  );
}
