import "./styles.css"
function Navbar({ cambiarSeccion }) {
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

export default Navbar;
