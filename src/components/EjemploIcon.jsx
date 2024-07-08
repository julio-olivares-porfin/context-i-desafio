import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/fontAwesome.js'; // Importa la configuración de FontAwesome

const EjemploIcon = () => {
  return (
    <div className="App">
      <h1>Icono de FontAwesome</h1>
      <FontAwesomeIcon icon={['far', 'heart']} />
    </div>
  )
}

export default EjemploIcon
