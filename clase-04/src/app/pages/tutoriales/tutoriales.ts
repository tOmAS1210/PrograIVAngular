import { Component } from '@angular/core';
import { CardTutorialType } from '../../classes/card-tutorial';
import { Card } from "../../components/card/card";

@Component({
  selector: 'app-tutoriales',
  imports: [Card],
  templateUrl: './tutoriales.html',
  styleUrl: './tutoriales.css'
})
export class Tutoriales {
  card1: CardTutorialType = {
    titulo: 'algo',
    desc: 'texto',
    imagen: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
    textoUrl: 'utn',
    url: '/',
  }
  card2: CardTutorialType = {
    titulo: 'algo',
    desc: 'texto',
    imagen: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
    textoUrl: 'utn',
    url: '/',
  }
  card3: CardTutorialType = {
    titulo: 'algo',
    desc: 'texto',
    imagen: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
    textoUrl: 'utn',
    url: '/',
  }

}
