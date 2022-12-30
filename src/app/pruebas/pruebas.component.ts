import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.scss']
})
export class PruebasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  element:boolean = false;

  mostrar(){
    this.element=true;
  }
  ocultar(){
    this.element=false;
  }

}
