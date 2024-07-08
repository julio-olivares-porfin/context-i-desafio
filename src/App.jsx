import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './layouts/Home'
import Favorites from './layouts/Favoritos'
import { Routes, Route } from 'react-router-dom'
import { FavoritosProvider } from './context/ContextFavoritos'

function App () {
  return (
    <FavoritosProvider>
      <Navigation />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/favoritos'
          element={<Favorites />}
        />
      </Routes>
      <Footer />
    </FavoritosProvider>
  )
}

export default App
