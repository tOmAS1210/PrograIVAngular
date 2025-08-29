import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators} from '@angular/forms'
import { get } from 'http';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {  
  nombre = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20),])

  formulario = new FormGroup({
    nombre : this.nombre,
    apellido : new FormControl('',[Validators.required]),
    correo : new FormControl('',[Validators.required, Validators.email]),
    contrasenia : new FormControl('',[Validators.required, Validators.minLength(8)]),
    repetirContrasenia : new FormControl('',[Validators.required,Validators.minLength(8), this.validarContrasenias]),
  });

  ngOnInit(){
    this.formulario.valueChanges.subscribe
    ((value)=>{
        console.log(value);
        console.log(this.formulario.controls);
    });




  }




  // login = new FormGroup({
  //   nombre: new FormControl(''),
  // });

  enviarFormulario(){
    console.log(this.formulario);
    console.log(this.formulario.value);
    console.log(this.formulario.get('nombre'));
  }

  validarContrasenias(control: AbstractControl): ValidationErrors | null{
    const error = {iguales: false};
    
    if(!control.value){
      return error;
    }

    if(!this.formulario){
      return error;
    }


    const contrasenia = control.parent?.get('contrasenia')?.value;

    if(!contrasenia){
      return error;
    }

    if(control.value === contrasenia){
      return null
    }else{
      return error;
    }

  }

  get apellido(){
    return this.formulario.get('apellido');
  }

}
