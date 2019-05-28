import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  PeopleComponent } from './people/people.component'

// update the route array with these
const routes: Routes = [
  {path: 'People', component: PeopleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
