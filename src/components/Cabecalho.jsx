import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Cabecalho() {
  return (
    <>
      <Navbar bg="white" variant="white">
        <Container>
          <img className='img-feminicidio' src="https://cnttl.org.br/files/imagem/vaw-logo-port-not12684-not4377.jpg" alt="" />
            
        </Container>
        
      </Navbar>
    </>
  );
}

export default Cabecalho;