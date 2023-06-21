import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../assets/Mes.png';

function CardMes() {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt="PC" />
      <Card.Body>
        <Card.Title>Meses que mais ocorrem</Card.Title>
        <Card.Text>
        Os meses em que mais acontece o feminicidio são outubro, maio e dezembro.
        </Card.Text>
        <Button variant="primary">Saiba mais</Button>
      </Card.Body>
    </Card>
  );
}

export default CardMes;