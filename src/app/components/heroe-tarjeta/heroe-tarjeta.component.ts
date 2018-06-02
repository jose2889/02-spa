import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
 
 @Input() heroe:any;
 @Input() index:number;

 @Output() mostrar:EventEmitter<number> = new EventEmitter();
 
  constructor() { }

  ngOnInit() {
  }

  verHeroe(){
    this.mostrar.emit(this.index);
  }
}
