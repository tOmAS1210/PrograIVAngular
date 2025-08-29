import { Component, input, SimpleChange, SimpleChanges } from '@angular/core';
import { CardTutorialType } from '../../classes/card-tutorial';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {

  card = input<CardTutorialType>();

  // comprobar(){
  //   if(this.card() !== undefined){
  //     this.card()?.imagen;
  //   }
  // }

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes);
  }

}
