import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../assets/Genero.png';

function CardGenero() {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt="PC" />
      <Card.Body>
        <Card.Title>Genêros que mais sofrem</Card.Title>
        <Card.Text>
        Dentre os gêneros: mulher trans e mulher cis, as mulheres cis são as que mais sofrem o femenicidio.
        </Card.Text>
        <Button variant="primary">Saiba mais</Button>
      </Card.Body>
    </Card>
  );
}

export default CardGenero;