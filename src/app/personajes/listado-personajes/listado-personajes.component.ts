import { Personaje } from './../models/personaje.model';
import { ServicioPersonajeService } from './../services/servicio-personaje.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-personajes',
  templateUrl: './listado-personajes.component.html',
  styleUrls: ['./listado-personajes.component.css']
})
export class ListadoPersonajesComponent implements OnInit {

  character: Personaje[];

  constructor(private servicioPersonaje: ServicioPersonajeService) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(){
    this.servicioPersonaje.getListadoPersonajes().subscribe(res =>{
      this.character = res.results;
      console.log(this.character);

    });
  }

}
