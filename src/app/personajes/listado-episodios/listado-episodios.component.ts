import { ServicioPersonajeService } from './../services/servicio-personaje.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-episodios',
  templateUrl: './listado-episodios.component.html',
  styleUrls: ['./listado-episodios.component.css']
})
export class ListadoEpisodiosComponent implements OnInit {

  constructor(private servicioPersonaje: ServicioPersonajeService) { }

  episodes;

  ngOnInit(): void {
    this.getEpisodes();
  }

  getEpisodes(){
    this.servicioPersonaje.getListadoEpisodios().subscribe(res =>{
      this.episodes = res.results;
      console.log(this.episodes);

    });
  }

}
