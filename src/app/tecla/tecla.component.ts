import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecla',
  templateUrl: './tecla.component.html',
  styleUrls: ['./tecla.component.css']
})
export class TeclaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  reproducirSonido( sonido:number):void{
    const audio = new Audio();
    audio.src = '../assets/sonidos/note'+sonido+'.wav';
    audio.load();
    audio.play();
  }
}
