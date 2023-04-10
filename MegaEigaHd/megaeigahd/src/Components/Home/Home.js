import "../css/style.index.css";
import UncontrolledExample from "../../Components/Bootstrap/caroussel";
import ImageP from "../../img/prime.jpg";
import ImageD from "../../img/disney.jpg";
import ImageH from "../../img/hbo.jpg";
import ImageN from "../../img/netflix.jpg";
import ImageT from "../../img/telecine.jpg";
import ImageG from "../../img/globoplay.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="casa">
      <div className="imega">
        <UncontrolledExample />
      </div>
      <div className="img">
        <div className="imge1">
          <Link to="https://www.primevideo.com/">
            <img src={ImageP} alt={ImageP} />
          </Link>
          <Link to="https://www.starplus.com/pt-br/">
            <img src={ImageD} alt={ImageD} />
          </Link>
        </div>
        <div className="imge2">
          <Link to="https://www.hbomax.com/br/pt">
            <img src={ImageH} alt={ImageH} />
          </Link>
          <Link to="https://www.netflix.com/br/">
            <img src={ImageN} alt={ImageN} />
          </Link>
        </div>
        <div className="imge3">
          <Link to="https://www.telecine.com.br">
            <img src={ImageT} alt={ImageT} />
          </Link>
          <Link to="https://globoplay.globo.com">
            <img src={ImageG} alt={ImageG} />
          </Link>
        </div>
      </div>
    </div>
  );
}
