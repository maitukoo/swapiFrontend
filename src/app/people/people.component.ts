import { Component, OnInit } from '@angular/core';
import { PEOPLE } from '../mock-People';



@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {

  people = PEOPLE;
  
  
}
