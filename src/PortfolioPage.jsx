import { useState, useEffect } from 'react';
import './App.css';

function PortfolioPage() {
  const [proyectos, setProyectos] = useState([]);
  const [nuevoProyecto, setNuevoProyecto] = useState({ nombre: '', descripcion: '', fecha_inicio: '', fecha_fin: '' });
  const [proyectoEditando, setProyectoEditando] = useState(null);

  useEffect(() => {
    // Simular carga de proyectos desde una API o base de datos
    const proyectosDummy = [
      { id: 1, nombre: 'Proyecto 1', descripcion: 'Descripción del proyecto 1', fecha_inicio: '2023-01-01', fecha_fin: '2023-01-31' },
      { id: 2, nombre: 'Proyecto 2', descripcion: 'Descripción del proyecto 2', fecha_inicio: '2023-02-01', fecha_fin: '2023-02-28' },
    ];
    setProyectos(proyectosDummy);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNuevoProyecto({ ...nuevoProyecto, [name]: value });
  };

  const agregarProyecto = () => {

    const nuevoId = proyectos.length + 1;
    const nuevoProyectoConId = { ...nuevoProyecto, id: nuevoId };
    setProyectos([...proyectos, nuevoProyectoConId]);
    setNuevoProyecto({ nombre: '', descripcion: '', fecha_inicio: '', fecha_fin: '' });
  };

  const editarProyecto = (proyecto) => {
    setProyectoEditando(proyecto);
    setNuevoProyecto({ ...proyecto });
  };

  const guardarEdicion = () => {
  
    const proyectosActualizados = proyectos.map((p) =>
      p.id === proyectoEditando.id ? nuevoProyecto : p
    );
    setProyectos(proyectosActualizados);
    setProyectoEditando(null);
    setNuevoProyecto({ nombre: '', descripcion: '', fecha_inicio: '', fecha_fin: '' });
  };

  const eliminarProyecto = (proyecto) => {

    const proyectosFiltrados = proyectos.filter((p) => p.id !== proyecto.id);
    setProyectos(proyectosFiltrados);
  };

  return (
    <div className="App">
      <h1>CRUD de Proyectos</h1>
      <div>
        <h2>Crear Proyecto</h2>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={nuevoProyecto.nombre}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="descripcion"
          placeholder="Descripción"
          value={nuevoProyecto.descripcion}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="fecha_inicio"
          placeholder="Fecha de Inicio (YYYY-MM-DD)"
          value={nuevoProyecto.fecha_inicio}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="fecha_fin"
          placeholder="Fecha de Fin (YYYY-MM-DD)"
          value={nuevoProyecto.fecha_fin}
          onChange={handleInputChange}
        />
        {proyectoEditando ? (
          <button onClick={guardarEdicion}>Guardar Edición</button>
        ) : (
          <button onClick={agregarProyecto}>Agregar Proyecto</button>
        )}
      </div>
      <div>
        <h2>Lista de Proyectos</h2>
        <ul>
          {proyectos.map((proyecto) => (
            <li key={proyecto.id}>
              <span>{proyecto.nombre}</span>
              <button onClick={() => editarProyecto(proyecto)}>Editar</button>
              <button onClick={() => eliminarProyecto(proyecto)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PortfolioPage;
