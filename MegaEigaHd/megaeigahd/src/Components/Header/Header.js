import Image from "../../favicon.png";
import { Link } from "react-router-dom";
import Contatos from "../Contatos/cadastro";

export default function Header() {
  return (
    <div>
      {/* className='container-fluid' */}
      <div class="cabecalho">
        <div class="area-logo">
          <img src={Image} alt={Image} />
        </div>
        <div class="area-texto">
          <h1>MegaEigaHD</h1>
        </div>
      </div>
      <div class="menu">
        <Link
          className="link"
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          Home
        </Link>
      </div>
      <div class="menu">
        <div className="dropdown">
          <a href="#">Filmes</a>
          <div className="drop">
            <Link className="link"  onClick={() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }} to="/Popularesfilmes">
              Populares
            </Link>
            <Link className="link"  onClick={() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }} to="/Emcartaz">
              Em cartaz
            </Link>
            <Link className="link"  onClick={() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }} to="/Estreias">
              Estreias
            </Link>
          </div>
        </div>
        <div>
          <Link to="/Favoritos"  onClick={() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }}>Favoritos</Link>
        </div>

        <div className="dropdown">
          <a href="#">Series</a>
          <div className="drop">
            <Link
              className="link"
              to="/Popularesseries"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              Populares
            </Link>
            <Link
              className="link"
              to="/Exibidos"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              Exibir Hoje
            </Link>
            <Link
              className="link"
              to="Streamming"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              Streamming
            </Link>
          </div>
        </div>
        <Contatos />
      </div>
    </div>
  );
}
