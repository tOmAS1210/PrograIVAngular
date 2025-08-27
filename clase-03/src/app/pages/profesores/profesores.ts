import { Component } from '@angular/core';
import { ListadoAlumnos } from "../../components/listado-alumnos/listado-alumnos";
import { Persona } from '../../classes/persona';

@Component({
  selector: 'app-profesores',
  imports: [ListadoAlumnos],
  templateUrl: './profesores.html',
  styleUrl: './profesores.css'
})
export class Profesores {
  profesores: Persona[] = [
    {
      nombre: 'PROFE',
      apellido: 'SOR',
      legajo: 9099
    }
  ]
}
