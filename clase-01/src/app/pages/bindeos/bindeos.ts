import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindeos',
  imports: [FormsModule],
  templateUrl: './bindeos.html',
  styleUrl: './bindeos.css'
})
export class Bindeos {
nombre: string = "Thomas";
  numero: number = 69;
  contador: number = 0;

  link: string = "https://google.com";
  style = "background-color: red; height: 100px;";

  contar(){
    this.contador ++;
    console.log(this.contador);
  }

  borrar(){
    this.nombre = '';
  }
}


// signal es una forma para definir variables que estan pensadas para mostrarse en el html

//Binding o Bindeo conectar el html con el ts.
// {{}} -> variables ts al html
// [] -> vatiables ts a atributos html
// (eventos) -> funciones ts a atributos html 

// Bindeo doble -> [()]
