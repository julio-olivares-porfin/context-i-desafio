import { useContext } from 'react'
import { ContextoFavoritos } from '../context/ContextFavoritos'
import CardPicture from '../components/CardPicture'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Favorites = () => {
  const { favorites } = useContext(ContextoFavoritos)

  return (
    <section className='favoritossection'>
      <Container fluid>
        <Row>
          <Col>
            <div className='favoritos'>
              {favorites.map(photo => ( <CardPicture key={photo.id} photoId={photo.id} />))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Favorites
