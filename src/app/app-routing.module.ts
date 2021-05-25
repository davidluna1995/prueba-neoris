import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonajesComponent } from './personajes/personajes.component';

const routes: Routes = [

  {
    path: '',
    component: PersonajesComponent,
    loadChildren: () => import('./personajes/personajes.module').then(m => m.PersonajesModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
