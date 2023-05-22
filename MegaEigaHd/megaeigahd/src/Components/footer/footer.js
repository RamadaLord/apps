import { Link } from "react-router-dom";
import "../css/style.footer.css";
import image from "../../favicon.png";
export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <Link to="/"  onClick={() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }}>
          <img
            className="F-img"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            src={image}
            alt={image}
          />
        </Link>
        <div className="pes">
          Copyright©
          <Link to="https://github.com/RamadaLord">:RamadaLord</Link>
        </div>
      </footer>
    </div>
  );
}
