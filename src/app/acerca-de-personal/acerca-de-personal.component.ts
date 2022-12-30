import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de-personal',
  templateUrl: './acerca-de-personal.component.html',
  styleUrls: ['./acerca-de-personal.component.scss']
})
export class AcercaDePersonalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  editarDescripcion(){
    let informacion:any = document.getElementById("informacion");
    let guardarDescripcion:any = document.getElementById("descripcion");
    informacion.disabled = false;
    guardarDescripcion.classList.remove("disabled");
  }
  guardarDescripcion(){
    let informacion:any = document.getElementById("informacion");
    let guardarDescripcion:any = document.getElementById("descripcion");
    informacion.disabled = true;
    guardarDescripcion.classList.add("disabled");
  }

}
