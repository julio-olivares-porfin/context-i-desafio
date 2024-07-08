import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './layouts/Home'
import Favorites from './layouts/Favoritos'
import { Routes, Route } from 'react-router-dom'
import { FavoritosProvider } from './context/ContextFavoritos'

function App () {
  return (
    <FavoritosProvider>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/favorites'
          element={<Favorites />}
        />
      </Routes>
      <Footer />
    </FavoritosProvider>
  )
}

export default App
