import PropTypes from 'prop-types';
import { useState, useEffect, useContext } from 'react'
import { fetchPhotoById } from '../database/pexelsAPI'
import { ContextoFavoritos } from '../context/ContextFavoritos'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/fontAwesome.js';

const CardPicture = ({ photoId }) => {
  const [photo, setPhoto] = useState(null);
  const { favorites, toggleFavorite } = useContext(ContextoFavoritos);

  useEffect(() => {
    const getPhoto = async () => {
      try {
        const photoData = await fetchPhotoById(photoId);
        setPhoto(photoData);
      } catch (error) {
        console.error('Error fetching photo:', error);
      }
    };

    getPhoto();
  }, [photoId]);

  if (!photo) return <div>Loading...</div>;

  const isFavorite = favorites.some(fav => fav.id === photo.id);

  return (
    <Card className='card-picture'>
    <Card.Img variant="top" src={photo.src.tiny} alt={photo.alt} />
    <Card.Body>
      <Card.Title>{photo.photographer}</Card.Title>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>{photo.alt}</ListGroup.Item>
      <ListGroup.Item>{photo.width}x{photo.height}px</ListGroup.Item>
      <ListGroup.Item>
        <Card.Link href={photo.photographer_url} target='_blank'>perfil</Card.Link>
        <Card.Link href={photo.src.original} target='_blank'>descargar</Card.Link>
      </ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <button className='botonfavorito' onClick={() => toggleFavorite(photo)}>
        <FontAwesomeIcon icon={isFavorite ? ['fas','heart'] : ['far', 'heart']} />
      </button>
    </Card.Body>
    </Card>
  );
};

CardPicture.propTypes = {
  photoId: PropTypes.number.isRequired,
};

export default CardPicture
