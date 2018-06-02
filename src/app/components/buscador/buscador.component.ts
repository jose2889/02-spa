import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {
  heroes:any[]= []
  termino:string;
  mostrar:boolean = false;
  constructor(private activatedRoute:ActivatedRoute, private heroesService:HeroesService ) {

    
  }
  
  ngOnInit() {
    this.activatedRoute.params.subscribe( p => {
      this.termino = p['termino'];
      this.heroes = this.heroesService.buscarHeroes(p['termino']);
      this.mostrar = false;
      if (this.heroes.length === 0){
        this.mostrar = true;
      }
      console.log(this.heroes.length);
    });
  }

}
