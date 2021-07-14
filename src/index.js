//Importamos el css
import './css/style.css';

//Importamos la clase que necesitamos
import { ListaTareas } from './clases/index'

//Importamos las funciones que necesita para que funcione la aplicación
import { anadirTareaHTML, mostrarFooter, mostrarPendientes, mostrarBorrarCompletadas } from './js/componentes'

//LLamadas a las funciones 
export const listaTareas = new ListaTareas();
//Tengo que llamar a la función que dibuja el html
listaTareas.listaTareas.forEach( ( tarea ) => anadirTareaHTML( tarea ) );
mostrarFooter();
mostrarPendientes();
mostrarBorrarCompletadas();


