import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private servicio:HeroesService, private router:Router) { }

  ngOnInit() {
  }

  buscarHeroe(valor){
   
    this.router.navigate(['/buscar',valor]);
    // this.buscarHeroe(valor);
    // console.log("dfkdfdkfp");
  
  }

}
