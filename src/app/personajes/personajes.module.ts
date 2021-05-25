import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesComponent } from './personajes.component';
import { ListadoPersonajesComponent } from './listado-personajes/listado-personajes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListadoEpisodiosComponent } from './listado-episodios/listado-episodios.component';

@NgModule({
  declarations: [PersonajesComponent, ListadoPersonajesComponent, NavbarComponent, ListadoEpisodiosComponent],
  imports: [
    CommonModule,
    PersonajesRoutingModule
  ]
})
export class PersonajesModule { }
