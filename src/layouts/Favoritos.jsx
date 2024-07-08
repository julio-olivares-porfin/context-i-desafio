import { useContext } from 'react'
import { ContextoFavoritos } from '../context/ContextFavoritos'
import CardPicture from '../components/CardPicture'

const Favorites = () => {
  const { favorites } = useContext(ContextoFavoritos)

  return (
    <div className='favoritos'>
      {favorites.map(photo => (
        <CardPicture key={photo.id} photoId={photo.id} />
      ))}
    </div>
  )
}

export default Favorites
