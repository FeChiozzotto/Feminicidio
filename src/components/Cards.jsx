import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../assets/vitimas.png';

function Cards() {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt="PC" />
      <Card.Body>
        <Card.Title>Vitimas de 2015 a 2022</Card.Title>
        <Card.Text>
        Dentre os anos de 2015 a 2022, o ano em que mais ocorreram casos de feminicidios foram 2022 e 2019.
        </Card.Text>
        <Button variant="primary">Saiba mais</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;