import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../assets/Feminicidio.jpg';

function Cards() {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt="PC" />
      <Card.Body>
        <Card.Title>Feminicídio</Card.Title>
        <Card.Text>
        Feminicídio é um termo de crime de ódio baseado no gênero, mais definido como o assassinato de mulheres em violência doméstica.
        </Card.Text>
        <Button variant="primary">Saiba mais</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;