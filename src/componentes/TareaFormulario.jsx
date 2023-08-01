import '../stylesSheets/TareaFormulario.css'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {
    const [input, setInput] = useState('');

    const manejarCambio = e => {
        // nos permite almacenar todos los cambios realizados en el campo de texto
        setInput(e.target.value);
        console.log(e.target.value)
    }

    const manejarEnvio = e => {
        e.preventDefault();
        console.log('enviando formulario')
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
    }
    return (
        <form className="tarea-formulario"
            onSubmit={manejarEnvio} >
            <input
                className="tarea-input"
                type='text'
                placeholder="Ingresa una tarea"
                name="texto"
                onChange={manejarCambio}
            />
            <button className="tarea-boton">Agregar tarea</button>
        </form>
    )
} 
export default TareaFormulario; 