import { Component, input, output } from '@angular/core';
import { Alumnos } from '../../pages/alumnos/alumnos';
import { Persona } from '../../classes/persona';

@Component({
  selector: 'app-listado-alumnos',
  imports: [],
  templateUrl: './listado-alumnos.html',
  styleUrl: './listado-alumnos.css'
})
export class ListadoAlumnos {
  /*input -> entrada -> recibir datos de un componente padre */
  listadoHijo = input<Persona[]>([]);

  envioDeAlumno = output<Persona>();

  verDetalle(alumno: Persona){
    this.envioDeAlumno.emit(alumno);
  }


}

