import { ListadoEpisodiosComponent } from './listado-episodios/listado-episodios.component';
import { ListadoPersonajesComponent } from './listado-personajes/listado-personajes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'listado-personajes', component: ListadoPersonajesComponent },
  { path: 'listado-episodios', component: ListadoEpisodiosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'listado-personajes' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesRoutingModule { }
