import { useState, useEffect } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";

export default function Favoritos() {
  const { id } = useParams();
  const [filmes, setFilmes] = useState([]);
  useEffect(() => {
    const minhaLista = localStorage.getItem("@filmesfavoritos");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  useEffect(() => {
    async function loadFilmeDetails() {
      const response = await api.get(`/movie/${id}`, {
        params: {
          api_key: "35f672447b37987d3a6ab0b0adf8cc96",
          language: "en",
          // page: 1,
        },
      });
      setFilmes(response.data);
    }
    loadFilmeDetails();
  }, []);

  return (
    <div>
      <h1>Favoritos</h1>
    </div>
  );
}
