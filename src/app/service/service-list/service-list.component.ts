import { Component, OnInit } from '@angular/core';
import {Service} from "../Service.model";


@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements  OnInit{
  services: Service[] = [
    new Service('Wild Appricot Payments', '50.00'),
  ];
  constructor() {

  }
  ngOnInit() {

  }
}
