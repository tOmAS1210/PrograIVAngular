import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css'
})
export class Usuarios {
  
  usuarios = [
    {
      nombre: 'Goku',
      perfil: 'Profesor'
    },
    
    {
      nombre: 'Thomas',
      perfil: 'Estudiante'
    },
    
    {
      nombre: 'SPIDERMAN',
      perfil: 'Estudiante'
    },
    
    {
      nombre: 'Pato Donlad',
      perfil: 'Estudiante'
    }
  ]
  
  usuarioActual:any = 0;
  private activatedRoute = inject(ActivatedRoute)
  
  ngOnInit(): void{
    console.log('Se instancia el componente usuarios');
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id!==null){
      this.usuarioActual = parseInt(id);
    }
  }
  ngOnDestroy(): void{
    console.log('Se destruye el componente usuarios');
  }
  
}
