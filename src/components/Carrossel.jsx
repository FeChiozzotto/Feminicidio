import Carousel from 'react-bootstrap/Carousel';

function Carrossel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2019/04/entenda-a-lei-do-feminicc3addio-e-por-que-ela-c3a9-importante.png?w=1024"
          alt="computador1"
        />
        <Carousel.Caption>
          <h3 class='text-carrosel'>Denuncie Já</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dssbr.ensp.fiocruz.br/wp-content/uploads/2021/03/arte08-768x446-1-678x381.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3 class='text-carrosel'>Denuncie Já</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images01.brasildefato.com.br/c96b568b9f6e53a29a76f1227adc3015.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3 class='text-carrosel'>Denuncie Já!</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;