import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../assets/Estados.png';

function CardEstados() {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt="PC" />
      <Card.Body>
        <Card.Title>Estados que mais ocorrem</Card.Title>
        <Card.Text>
       Dentre todas as cidades de São Paulo as que mais ocorrem feminicidios são: São Paulo, Osasco e Guarulhos.
        </Card.Text>
        <Button variant="primary">Saiba mais</Button>
      </Card.Body>
    </Card>
  );
}

export default CardEstados;