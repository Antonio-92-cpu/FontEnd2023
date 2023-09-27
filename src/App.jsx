import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contenido from './components/Contenido';

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
