import Carousel from 'react-bootstrap/Carousel';
import Image from '../../img/Avatar.jpg'
import Image2 from '../../img/Enrolados.jpg'
import Image3 from '../../img/O_hobbit.jpg'

function UncontrolledExample() {
  return (
    <div>

      <div className='Favh1'>
      <h1>Destaques</h1>

      </div>
    <Carousel className='Carousel'>
      <Carousel.Item className='Carousel-item'>
        <img
          className="C-Image"
          src={Image}
          alt={Image}
        />
        <Carousel.Caption>
          <h3>Avatar</h3>
          <p>Um filme vencedor dos oscars.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='Carousel-item'>
        <img
          className="C-Image"
          src={Image2}
          alt={Image2}
        />

        <Carousel.Caption>
          <h3>Enrolados</h3>
          <p>Uma otima animação infantil.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="C-Image"
          src={Image3}
          alt={Image3}
        />

        <Carousel.Caption>
          <h3>Hobbit</h3>
          <p>
           Uma otima pedida para uma boa noite de sono.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;



