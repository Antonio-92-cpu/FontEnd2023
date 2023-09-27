
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import OyuPage from './OyuPage';
import GaleriaPage from './GaleriaPage';
import PortfolioPage from './PortfolioPage';
import SobreMiPage from './SobreMiPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/oyu" component={OyuPage} />
          <Route path="/galeria" component={GaleriaPage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/sobre-mi" component={SobreMiPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



{/*import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Contenido from './Contenido';

function App() {
  const [seccion, setSeccion] = useState(''); // Estado para rastrear la sección actual

  const cambiarSeccion = (nuevaSeccion) => {
    setSeccion(nuevaSeccion);
  };

  return (
    <div className="App">
      <Navbar cambiarSeccion={cambiarSeccion} />
      <Contenido seccion={seccion} />
      <Footer />
    </div>
  );
}

export default App;
*/}

