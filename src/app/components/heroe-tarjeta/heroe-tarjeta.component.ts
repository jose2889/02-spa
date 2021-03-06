import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
 
 @Input() heroe:any;
 @Input() index:number;

 @Output() mostrar:EventEmitter<number> = new EventEmitter();
 
  constructor(private router:Router) { }

  ngOnInit() {
  }

  verHeroe(){
   
    this.router.navigate(['/heroe',this.heroe.idx])
    // this.mostrar.emit(this.index);
  }
  
}
