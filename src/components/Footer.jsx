import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; 2024 Tus Fotos Favoritas - DesafioLatam</p>
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <a href="https://www.pexels.com">Fotos proporcionadas por Pexels</a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
