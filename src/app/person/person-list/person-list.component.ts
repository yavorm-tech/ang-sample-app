import { Component, OnInit } from '@angular/core';
import {PersonModel} from "../person.model";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {
  persons: PersonModel[] = [
    new PersonModel('John','Doe','12341234',false),
    new PersonModel('Jane','Doe','12341234',true),
    new PersonModel('Jane','Doe','12341234',false),
    new PersonModel('Jane','Doe','12341234',false),
    new PersonModel('Jane','Doe','12341234',false),
    new PersonModel('Jane','Doe','12341234',true),
    new PersonModel('Jane','Doe','12341234',false),
    new PersonModel('Jane','Doe','12341234',true),
  ];
  constructor() {
  }
  ngOnInit(){

  }
}
