import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Persona } from '../../classes/persona';
import { Boton } from "../boton/boton";

@Component({
  selector: 'app-agregar-alumnos',
  imports: [FormsModule, Boton],
  templateUrl: './agregar-alumnos.html',
  styleUrl: './agregar-alumnos.css'
})
export class AgregarAlumnos {
  //output -> salida -> envio de informacion hacia el padre
  nombre: string = '';
  apellido: string = '';
  legajo: number = 0;


  envioDeAlumno = output<Persona>();

  enviarAlPadreDesdeElHijo(){
    //envia al padre el elemento a agregar
    const persona = new Persona(this.legajo, this.nombre, this.apellido);
    console.log(persona);
    this.envioDeAlumno.emit(persona);
  }
}
