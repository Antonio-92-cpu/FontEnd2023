import "./styles.css"
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/oyu">Oyu</Link></li>
        <li><Link to="/galeria">Galería</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/sobre-mi">Sobre mí</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;


{/*function Navbar({ cambiarSeccion }) {
  return (
    <nav>
      <ul>
        <li onClick={() => cambiarSeccion('Oyu')}>Oyu</li>
        <li onClick={() => cambiarSeccion('Galería')}>Galería</li>
        <li onClick={() => cambiarSeccion('Portfolio')}>Portfolio</li>
        <li onClick={() => cambiarSeccion('Sobre mi')}>Sobre mi</li>
      </ul>
    </nav>
  );
}

export default Navbar;*/}
