import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  PeopleComponent } from './people/people.component'
import { PlanetsComponent } from './planets/planets.component';


// update the route array with these
const routes: Routes = [
  {path: 'People', component: PeopleComponent},
  {path: 'Planets', component: PlanetsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
