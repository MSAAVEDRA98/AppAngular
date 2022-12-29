import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }

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

//Box de ACERCA DE
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


//FORMACION ACADEMICA
agregarAlgo(){
  let contenedorExp:any = document.getElementById("contenedor-exp");
  contenedorExp.insertAdjacentHTML(`beforeend`,`
  <div class="card">
          <div class="card-body">
              <button class="btn btn-success" (click)="editarEducacion()">Editar</button>
              <button id="guardarEscuela" class="btn btn-primary disabled" (click)="guardarEducacion()">Guardar</button>
              <div>
                  <input type="text" id="institucion" placeholder="Institucion" disabled>
                  <input type="text" id="anio" placeholder="Año de finalizacion" disabled>
              </div>
          </div>
      </div>
  `)
}
editarEducacion(){
  let institucion:any = document.getElementById("institucion");
  let guardarEscuela:any = document.getElementById("guardarEscuela");
  let anio:any = document.getElementById("anio");
  institucion.disabled = false;
  guardarEscuela.classList.remove("disabled");
  anio.disabled = false;
}
guardarEducacion(){
  let guardarEscuela:any = document.getElementById("guardarEscuela");
  let institucion:any = document.getElementById("institucion");
  let anio:any = document.getElementById("anio");
  guardarEscuela.classList.add("disabled");
  institucion.disabled = true;
  anio.disabled = true;
}
esconder(){
  let botonOculto:any = document.getElementById("botonOculto");
  let imagenEditar:any = document.getElementById("editar");
  botonOculto.hidden = true;
  imagenEditar.hidden = true;
}

//EXPERICNECIA LABORAL
esconder2(){
  let boton2:any = document.getElementById("boton2");
  boton2.hidden= true;
}
agregarOtraCosa(){
  let contenedorAcademia:any = document.getElementById("contenedor-academia");
  contenedorAcademia.insertAdjacentHTML(`beforeend`,`
  <div class="card">
          <div class="card-body">
              <button class="btn btn-success" (click)="editarExperincia()">Editar</button>
              <button id="guardarExperiencia" class="btn btn-primary disabled" (click)="guardarExperiencia()">Guardar</button>
              <div>
                  <input type="text" id="lugarTrabajo" placeholder="Lugar de trabajo" disabled>
                  <input type="text" id="tiempo" placeholder="Año de finalizacion" disabled>
              </div>
          </div>
      </div>
  `)
}
editarExperincia(){
  let lugarTrabajo:any = document.getElementById("lugarTrabajo");
  let guardarExperiencia:any = document.getElementById("guardarExperiencia");
  let tiempo:any = document.getElementById("tiempo");
  lugarTrabajo.disabled = false;
  guardarExperiencia.classList.remove("disabled");
  tiempo.disabled = false;
}
guardarExperiencia(){
  let guardarExperiencia:any = document.getElementById("guardarExperiencia");
  let lugarTrabajo:any = document.getElementById("lugarTrabajo");
  let tiempo:any = document.getElementById("tiempo");
  guardarExperiencia.classList.add("disabled");
  lugarTrabajo.disabled = true;
  tiempo.disabled = true;
}

  ngOnInit(): void {
  }

}
