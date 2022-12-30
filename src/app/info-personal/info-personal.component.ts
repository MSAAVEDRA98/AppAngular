import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.component.html',
  styleUrls: ['./info-personal.component.scss']
})
export class InfoPersonalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    //INFORMACION PERSONAL
evento (){
  let botonGuardar:any = document.getElementById("botonGuardar");
  let situacionLaboral:any = document.getElementById("situacionLaboral");
  let localidad:any = document.getElementById("localidad");
  let inputNombre:any = document.getElementById("nombreCompleto");
  botonGuardar.classList.remove("disabled");
  inputNombre.disabled = false;
  situacionLaboral.disabled = false;
  localidad.disabled = false;
}
guardar(){
  let botonGuardar:any = document.getElementById("botonGuardar");
  let situacionLaboral:any = document.getElementById("situacionLaboral");
  let localidad:any = document.getElementById("localidad");
  let inputNombre:any = document.getElementById("nombreCompleto");
  botonGuardar.classList.add("disabled");
  inputNombre.disabled = true;
  situacionLaboral.disabled = true;
  localidad.disabled = true;
}

}
