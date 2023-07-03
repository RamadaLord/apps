import axios from "axios";
import { useEffect, useState } from "react";
import pokeApi from "../../services/api";
import './poke.css'

function PokeTeste() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      const sortedArray = [...response.data.results];
      sortedArray.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });

      return setList(sortedArray);
    });
  }, []);

  return (
    <div>
      <h3>Testes Api</h3>
      <h1>Pokemons</h1>
      <hr />
      {list.map((item) => (
        <Pokemon key={item.name} data={item} />
      ))}
      
    </div>
  );
}

const Pokemon = ({ data }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios.get(data.url).then((response) => setDetails(response.data));
  }, []);

  if (details === null) {
    return <div>-</div>;
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={details.sprites.front_default}
        style={{ width: 30, marginRight: 20 }}
      />
      <span>
        <b>{details.name}</b> - EXP {details.base_experience}
        <br />
        altura {details.height} - ordem {details.order}
        <br />
        type {details.types.type}
        <br />
      </span>
    </div>
  );
};

export default PokeTeste;
