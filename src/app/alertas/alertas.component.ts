import { Component, OnInit } from '@angular/core';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
import { O_DIRECTORY } from 'constants';
const swal: SweetAlert = _swal as any;

// import { swal } from 'sweetalert2';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // name = 'Angular 6';

  EditClient(){
      // swal('test');
      // swal(
      //   'Kardox',
      //   'Link para compartir copiado con exito!',
      //   'success'
      // )

      swal({
        // position: 'top-end',
        // type: 'success',
        title: 'Link copiado con exito!',
        // showConfirmButton: false,
        timer: 3000
      })
      
      // swal(
      //   'The Internet?',
      //   'That thing is still around?',
      //   'question'
      // )
      // swal({
      //   // type: 'error',
      //   title: 'Oops...',
      //   text: 'Something went wrong!',
      //   // footer: '<a href>Why do I have this issue?</a>',
      // })
  }
  EditClient2(){
   
    swal(
      'Kardox',
      'Link para compartir copiado con exito!',
      'success'
    )

  
}


}
