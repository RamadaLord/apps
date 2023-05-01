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
      <div>

      <div className="img">
        <div className="imge1">
          <Link to="https://www.primevideo.com/" target='blank'>
            <img className="image1" src={ImageP} alt={ImageP} />
          </Link>
          <Link to="https://www.starplus.com/pt-br/" target='blank'>
            <img className="image2" src={ImageD} alt={ImageD} />
          </Link>
        </div>
        <div className="imge2">
          <Link className="image" to="https://www.hbomax.com/br/pt" target='blank'>
            <img className="image3" src={ImageH} alt={ImageH} />
          </Link>
          <Link to="https://www.netflix.com/br/" target='blank'>
            <img className="image4" src={ImageN} alt={ImageN} />
          </Link>
        </div>
        <div className="imge5">
          <Link to="https://www.telecine.com.br" target='blank'>
            <img className="image5" src={ImageT} alt={ImageT} />
          </Link>
          <Link to="https://globoplay.globo.com" target='blank'>
            <img className="image6" src={ImageG} alt={ImageG} />
          </Link>
      </div>
        </div>
      </div>
    </div>
  );
}
