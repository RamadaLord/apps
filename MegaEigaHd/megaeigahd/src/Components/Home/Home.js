import "../css/style.index.css";
import UncontrolledExample from "../../Components/Bootstrap/caroussel";
import ImageP from "../../img/prime.jpg";
import ImageD from "../../img/disney.jpg";
import ImageH from "../../img/hbo.jpg";
import ImageN from "../../img/netflix.jpg";
import ImageT from "../../img/telecine.jpg";
import ImageG from "../../img/globoplay.jpg";

export default function Home() {
  return (
    <div className="casa">
      <div className="imega">
        <UncontrolledExample />
      </div>
      <div className="img">
        <div className="imge1">
          <img src={ImageP} alt={ImageP} />
          <img src={ImageD} alt={ImageD} />
        </div>
        <div className="imge2">
          <img src={ImageH} alt={ImageH} />
          <img src={ImageN} alt={ImageN} />
        </div>
        <div className="imge3">
          <img src={ImageT} alt={ImageT} />
          <img src={ImageG} alt={ImageG} />
        </div>
      </div>
    </div>
  );
}
