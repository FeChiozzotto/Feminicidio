import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../assets/corPele.png';

function CardPele() {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt="PC" />
      <Card.Body>
        <Card.Title>Cores de Pele que mais morrem</Card.Title>
        <Card.Text>
        A primeira pele que mais morre por feminicidio é a branca e a segunda é a preta.
        </Card.Text>
        <Button variant="primary">Saiba mais</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPele;