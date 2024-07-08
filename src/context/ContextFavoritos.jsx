import { createContext, useState } from 'react'
import PropTypes from 'prop-types';

export const ContextoFavoritos = createContext()

export const FavoritosProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (photo) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some(fav => fav.id === photo.id)) {
        return prevFavorites.filter(fav => fav.id !== photo.id)
      } else {
        return [...prevFavorites, photo]
      }
    })
  }

  return (
    <ContextoFavoritos.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </ContextoFavoritos.Provider>
  )
};

FavoritosProvider.propTypes = {
  children: PropTypes.string.isRequired,
};
