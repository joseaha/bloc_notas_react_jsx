import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import '../stylesSheets/ListaDeTareas.css';
import { useState } from 'react';
function ListaDeTareas() {
  // useState nos permite controlar el estado inicial de nuestros componentes
  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      const tareasActulizadas = [tarea, ...tareas];
      setTareas(tareasActulizadas);
    }
  }
  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  }
  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }
  return (
    // uso de fragmentos 
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {
          // la funcion map nos retorna una matriz nueva sin modificar la original
          tareas.map((tarea) => < Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
          )
        }
      </div>
    </>
  )
}

export default ListaDeTareas;