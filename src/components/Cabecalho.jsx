import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import img from '../assets/feminicidio.jpg'

function Cabecalho() {
  return (
    <>
      <Navbar bg="white" variant="white">
        <Container>
          <img className='img-feminicidio' src={img} alt="" />
            
        </Container>
        
      </Navbar>
    </>
  );
}

export default Cabecalho;