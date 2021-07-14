//Vamos a tener una clase que es la tarea, es esta recibira una tarea nueva y a partir de ahí creara una serie de datos
export class Tarea {
    constructor( tarea ) {
        this.tarea = tarea;

        //Necesitaremos un identificador único para cada tarea
        this.id = new Date().getTime();
        //Necesitamos saber si las tareas están completas o no
        this.completado = false;
        this.fecha = new Date();
    }
}
//