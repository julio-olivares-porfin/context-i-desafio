import { useState, useEffect } from 'react'
import { fetchCuratedPhotos } from '../database/pexelsAPI'
import Cardpicture from '../components/CardPicture'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const photosData = await fetchCuratedPhotos()
        setPhotos(photosData)
      } catch (error) {
        console.error('Error fetching photos:', error)
      }
    }

    getPhotos()
  }, [])

  return (
    <section className='homesection'>
      <Container fluid>
        <Row>
          <Col>
            <div className='home'>
              {photos.map(photo => (<Cardpicture key={photo.id} photoId={photo.id} />))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Home
